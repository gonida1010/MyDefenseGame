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

  // 유저가 나갔을 때 처리
  socket.on("disconnect", () => {
    console.log("❌ 유저 접속 해제:", socket.id);
    // 만약 대기 중이던 사람이 나갔다면 대기열 비우기
    if (waitingPlayer && waitingPlayer.socket.id === socket.id) {
      waitingPlayer = null;
      console.log("대기열 초기화됨");
    }
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`서버 가동 중: http://localhost:${PORT}`);
});
