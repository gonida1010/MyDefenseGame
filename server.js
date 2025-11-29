// server.js
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

let waitingPlayer = null;

io.on("connection", (socket) => {
  console.log("☑️ 유저 접속! ID:", socket.id);

  socket.on("join_game", (userData) => {
    console.log(`[매칭 요청] ${userData.nickname} (ID: ${socket.id})`);

    if (waitingPlayer) {
      const partnerSocket = waitingPlayer.socket;
      const partnerName = waitingPlayer.nickname;

      console.log(`매칭 성공! ${partnerName} vs ${userData.nickname}`);

      // 방 이름 만들기 (두 사람만 들어갈 방)
      const roomName = `room_${partnerSocket.id}_${socket.id}`;
      // 두 사람을 같은 방에 넣음
      socket.join(roomName);
      partnerSocket.join(roomName);

      socket.currentRoom = roomName;
      partnerSocket.currentRoom = roomName;

      io.to(roomName).emit("game_start", {
        players: [
          { id: partnerSocket.id, name: partnerName },
          { id: socket.id, name: userData.nickname },
        ],
        room: roomName,
      });

      // 대기열 초기화
      waitingPlayer = null;
    } else {
      // 대기자가 없다면 -> 내가 대기자가 됨
      waitingPlayer = { socket: socket, nickname: userData.nickname };
      socket.emit("waiting", { message: "다른 대원을 기다리는 중..." });
      console.log("⏳ 대기열 등록 완료");
    }
  });

  socket.on("sync_action", (data) => {
    if (data.room) {
      // 나를 제외한 방 안의 사람들에게 전송 (broadcast)
      socket.to(data.room).emit("sync_action", data);
    }
  });

  socket.on("game_state_change", (data) => {
    if (data.room) {
      // 나를 포함한 방 전체에 알림 (속도는 다 같이 바껴야 하니까)
      io.to(data.room).emit("game_state_change", data);
    }
  });

  // 2. [수정] 유접 접속 해제 (disconnect)
  socket.on("disconnect", () => {
    console.log("❌ 유저 접속 해제:", socket.id);
    // (1) 대기 중이던 사람이면 대기열 삭제
    if (waitingPlayer && waitingPlayer.socket.id === socket.id) {
      waitingPlayer = null;
    }
    if (socket.currentRoom) {
      socket.to(socket.currentRoom).emit("partner_disconnected");
    }
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`서버 가동 중: http://localhost:${PORT}`);
});
