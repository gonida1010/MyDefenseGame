// data.js 파일
export const GAME_CONFIG = {
  initialGold: 800,
  maxEnemies: 60,
  roundTime: 60,
  spawnInterval: 1200,
  unitSummonCost: 100,
  bgColors: {
    normal: 0x050510,
    boss: 0x2c0404,
  },
};

// =================================================================
// [UNIT DATA]
// 모든 유닛은 명확한 역할군과 티어를 가짐
// =================================================================
export const UNIT_DATA = {
  // ===============================================================
  // [Tier 1] 기초 자원 (Basic) - 3종류
  // ===============================================================
  slayer_basic: {
    name: "일반 대원",
    tier: 1,
    color: 0x95a5a6,
    dmg: 15,
    speed: 1000,
    range: 80,
    type: "slayer_basic",
  },
  crow: {
    name: "꺾쇠 까마귀",
    tier: 1,
    color: 0x2d3436,
    dmg: 10,
    speed: 1200,
    range: 100,
    type: "crow_attack",
  },
  kakushi: {
    name: "은(Kakushi)",
    tier: 1,
    color: 0x555555,
    dmg: 5,
    speed: 800,
    range: 80,
    type: "kakushi_support",
  },

  // ===============================================================
  // [Tier 2] 주역 5인방 & 핵심 인물 (Starter)
  // 조합식: T1 + T1
  // ===============================================================
  tanjiro: {
    name: "탄지로(물)",
    tier: 2,
    color: 0x2980b9,
    dmg: 40,
    speed: 900,
    range: 100,
    type: "tanjiro_water",
  },
  zenitsu: {
    name: "젠이츠(기절)",
    tier: 2,
    color: 0xf1c40f,
    dmg: 50,
    speed: 1300,
    range: 110,
    type: "zenitsu_thunder",
  },
  inosuke: {
    name: "이노스케",
    tier: 2,
    color: 0x7f8c8d,
    dmg: 45,
    speed: 600,
    range: 90,
    type: "inosuke_beast",
  },
  genya: {
    name: "겐야(총)",
    tier: 2,
    color: 0x8e44ad,
    dmg: 35,
    speed: 1100,
    range: 220,
    type: "genya_gun",
  },
  kanao: {
    name: "츠유리 카나오",
    tier: 2,
    color: 0xe84393,
    dmg: 55,
    speed: 850,
    range: 110,
    type: "kanao_flower",
  },
  aoi: {
    name: "칸자키 아오이",
    tier: 2,
    color: 0x2ecc71,
    dmg: 20,
    speed: 700,
    range: 100,
    type: "aoi_support",
  },

  // ===============================================================
  // [Tier 3] 스승 & 조력자 & 혈귀 (Intermediate)
  // 조합식: T2 + T1
  // ===============================================================
  urokodaki: {
    name: "우로코다키",
    tier: 3,
    color: 0x34495e,
    dmg: 120,
    speed: 1000,
    range: 120,
    type: "urokodaki_water",
  },
  jigoro: {
    name: "쿠와지마",
    tier: 3,
    color: 0xd35400,
    dmg: 130,
    speed: 1100,
    range: 120,
    type: "jigoro_thunder",
  },
  haganezuka: {
    name: "하가네즈카",
    tier: 3,
    color: 0xe17055,
    dmg: 200,
    speed: 2000,
    range: 100,
    type: "haganezuka_angry",
  },
  sabito: {
    name: "사비토(영혼)",
    tier: 3,
    color: 0xa29bfe,
    dmg: 110,
    speed: 800,
    range: 140,
    type: "sabito_spirit",
  },
  nezuko_box: {
    name: "네즈코(나무상자)",
    tier: 3,
    color: 0xe74c3c,
    dmg: 100,
    speed: 600,
    range: 100,
    type: "nezuko_kick",
  },
  yushiro: {
    name: "유시로",
    tier: 3,
    color: 0xa5b1c2,
    dmg: 115,
    speed: 700,
    range: 110,
    type: "yushiro_paper",
  },
  murata: {
    name: "무라타(운)",
    tier: 3,
    color: 0xd2dae2,
    dmg: 90,
    speed: 900,
    range: 120,
    type: "murata_water",
  },

  // ===============================================================
  // [Tier 4] 귀살대 주(柱) (Hashira)
  // 조합식: T3 + T2 (일부 예외 있음)
  // ===============================================================
  giyu: {
    name: "수주 기유",
    tier: 4,
    color: 0x0984e3,
    dmg: 450,
    speed: 800,
    range: 150,
    type: "giyu_water",
    cutscene: "giyu_cutscene",
  },
  rengoku: {
    name: "염주 렌고쿠",
    tier: 4,
    color: 0xff7675,
    dmg: 600,
    speed: 900,
    range: 160,
    type: "rengoku_fire",
    cutscene: "rengoku_cutscene",
  },
  tengen: {
    name: "음주 텐겐",
    tier: 4,
    color: 0xdfe6e9,
    dmg: 480,
    speed: 500,
    range: 150,
    type: "tengen_sound",
    cutscene: "tengen_cutscene",
  },
  shinobu: {
    name: "충주 시노부",
    tier: 4,
    color: 0xa29bfe,
    dmg: 300,
    speed: 300,
    range: 150,
    type: "shinobu_poison",
    cutscene: "shinobu_cutscene",
  },
  kanae: {
    name: "화주 카나에",
    tier: 4,
    color: 0xffcccc,
    dmg: 400,
    speed: 750,
    range: 160,
    type: "kanae_flower",
    cutscene: "kanae_cutscene",
  },
  muichiro: {
    name: "하주 무이치로",
    tier: 4,
    color: 0x74b9ff,
    dmg: 550,
    speed: 700,
    range: 170,
    type: "muichiro_mist",
    cutscene: "muichiro_cutscene",
  },
  mitsuri: {
    name: "연주 미츠리",
    tier: 4,
    color: 0xfd79a8,
    dmg: 500,
    speed: 600,
    range: 150,
    type: "mitsuri_love",
    cutscene: "mitsuri_cutscene",
  },
  obanai: {
    name: "사주 오바나이",
    tier: 4,
    color: 0x636e72,
    dmg: 520,
    speed: 650,
    range: 145,
    type: "obanai_snake",
    cutscene: "obanai_cutscene",
  },
  sanemi: {
    name: "풍주 사네미",
    tier: 4,
    color: 0x55efc4,
    dmg: 580,
    speed: 750,
    range: 140,
    type: "sanemi_wind",
    cutscene: "sanemi_cutscene",
  },
  gyomei: {
    name: "암주 교메이",
    tier: 4,
    color: 0x2d3436,
    dmg: 1000,
    speed: 1400,
    range: 170,
    type: "gyomei_stone",
    cutscene: "gyomei_cutscene",
  },
  tamayo: {
    name: "타마요",
    tier: 4,
    color: 0x9b59b6,
    dmg: 350,
    speed: 1200,
    range: 150,
    type: "tamayo_blood",
    cutscene: "tamayo_cutscene",
  },

  // ===============================================================
  // [Tier 5] 각성 (Awakened)
  // 조합식: T4 + T3 (혹은 T4 + T4)
  // ===============================================================
  tanjiro_sun: {
    name: "탄지로(히노카미)",
    tier: 5,
    color: 0xff0000,
    dmg: 2500,
    speed: 700,
    range: 180,
    type: "tanjiro_sun",
    cutscene: "tanjiro_sun_cutscene",
  },
  zenitsu_god: {
    name: "젠이츠(신속)",
    tier: 5,
    color: 0xffeb3b,
    dmg: 3200,
    speed: 1200,
    range: 190,
    type: "zenitsu_god",
    cutscene: "zenitsu_god_cutscene",
  },
  nezuko_awake: {
    name: "네즈코(각성)",
    tier: 5,
    color: 0xd63031,
    dmg: 2200,
    speed: 500,
    range: 180,
    type: "nezuko_blood_art",
    cutscene: "nezuko_awake_cutscene",
  },
  giyu_mark: {
    name: "기유(반점)",
    tier: 5,
    color: 0x0984e3,
    dmg: 2400,
    speed: 300,
    range: 190,
    type: "giyu_mark_water",
    cutscene: "giyu_mark_cutscene",
  },
  muichiro_mark: {
    name: "무이치로(반점)",
    tier: 5,
    color: 0x74b9ff,
    dmg: 2300,
    speed: 500,
    range: 210,
    type: "muichiro_mark_mist",
    cutscene: "muichiro_mark_cutscene",
  },
  tamayo_yushiro: {
    name: "타마요&유시로",
    tier: 5,
    color: 0x6c5ce7,
    dmg: 1800,
    speed: 400,
    range: 190,
    type: "tamayo_yushiro_combo",
    cutscene: "tamayo_yushiro_cutscene",
  },

  inosuke_awake: {
    name: "이노스케(각성)",
    tier: 5,
    color: 0x7f8c8d,
    dmg: 2600,
    speed: 400,
    range: 180,
    type: "inosuke_awake_beast",
    cutscene: "inosuke_awake_cutscene",
  },

  // ===============================================================
  // [Tier 6] 신화 (Legend)
  // 조합식: T5 + T5 (끝판왕)
  // ===============================================================
  tanjiro_final: {
    name: "탄지로(13형)",
    tier: 6,
    color: 0xff4757,
    dmg: 12000,
    speed: 350,
    range: 210,
    type: "tanjiro_13th",
    cutscene: "tanjiro_final_cutscene",
  },
  gyomei_mark: {
    name: "교메이(반점)",
    tier: 6,
    color: 0x2d3436,
    dmg: 20000,
    speed: 900,
    range: 230,
    type: "gyomei_mark_stone",
    cutscene: "gyomei_mark_cutscene",
  },
  yoriichi: {
    name: "요리이치",
    tier: 6,
    color: 0xffd700,
    dmg: 15000,
    speed: 400,
    range: 220,
    type: "yoriichi_sun",
    cutscene: "yoriichi_cutscene",
  },

  inosuke_king: {
    name: "이노스케(산의 왕)",
    tier: 6,
    color: 0x3498db,
    dmg: 13000,
    speed: 300,
    range: 210,
    type: "inosuke_king_beast",
    cutscene: "inosuke_king_cutscene",
  },

  // ========================================================
  // [HIDDEN UNITS]
  // ========================================================
  yoriichi_zero: {
    name: "요리이치 영식",
    tier: 5,
    color: 0x7f8c8d,
    dmg: 1500,
    speed: 150,
    range: 110,
    type: "yoriichi_doll",
    cutscene: "yoriichi_zero_cutscene",
  },
  koku: {
    name: "코쿠시보(상현1)",
    tier: 6,
    color: 0xffd700,
    dmg: 18000,
    speed: 400,
    range: 220,
    type: "kokushibo_moon",
    cutscene: "koku_cutscene",
  },
  tanjiro_king: {
    name: "탄지로(오니의 왕)",
    tier: 6,
    color: 0x2d3436,
    dmg: 20000,
    speed: 500,
    range: 180,
    type: "tanjiro_demon_king",
    cutscene: "tanjiro_king_cutscene",
  },
  twin_destiny: {
    name: "쌍둥이의 운명",
    tier: 6,
    color: 0xb33939,
    dmg: 40000,
    speed: 300,
    range: 240,
    type: "twin_destiny_combo",
    cutscene: "twin_destiny_cutscene",
  },
};

// =================================================================
// [RECIPES] - 100% 확정 조합 시스템 (랜덤 X)
// 겹치는 조합법 없음 검수 완료
// =================================================================
export const RECIPES = [
  // =============================================================
  // [1단계] 기초 조합 (T1 + T1 -> T2)
  // * 3개의 재료(일반, 까마귀, 은)로 T2 6명을 만듭니다. (중복 없음)
  // =============================================================
  { a: "slayer_basic", b: "crow", result: "tanjiro" }, // 일반+까마귀 = 탄지로
  { a: "crow", b: "crow", result: "zenitsu" }, // 까마귀x2 = 젠이츠 (시끄러움)
  { a: "slayer_basic", b: "slayer_basic", result: "inosuke" }, // 일반x2 = 이노스케
  { a: "slayer_basic", b: "kakushi", result: "genya" }, // 일반+은 = 겐야
  { a: "crow", b: "kakushi", result: "kanao" }, // 까마귀+은 = 카나오
  { a: "kakushi", b: "kakushi", result: "aoi" }, // 은x2 = 아오이

  // =============================================================
  // [2단계] 성장 조합 (T2 + T1 -> T3)
  // * T2 핵심 인물들이 T1 재료를 만나 성장합니다.
  // =============================================================
  { a: "tanjiro", b: "slayer_basic", result: "urokodaki" }, // 탄지로+일반 = 스승 우로코다키
  { a: "tanjiro", b: "kakushi", result: "nezuko_box" }, // 탄지로+은(업기) = 네즈코상자
  { a: "zenitsu", b: "slayer_basic", result: "jigoro" }, // 젠이츠+일반 = 스승 쿠와지마
  { a: "inosuke", b: "kakushi", result: "haganezuka" }, // 이노스케(검박살)+은(수리) = 하가네즈카
  { a: "genya", b: "crow", result: "murata" }, // 겐야+까마귀 = 무라타 (생존왕)
  { a: "kanao", b: "slayer_basic", result: "sabito" }, // 카나오+일반(수련) = 사비토
  { a: "aoi", b: "genya", result: "yushiro" }, // 아오이+겐야(오니먹음) = 유시로(오니)

  // =============================================================
  // [3단계] 지주(Hashira) 조합 (T3 + T2 -> T4)
  // =============================================================
  // 수주: 우로코다키(T3) + 사비토(T3)
  // 설명: 스승과 함께 훈련했던 친구
  { a: "urokodaki", b: "sabito", result: "giyu" },

  // 염주: 네즈코상자(T3) + 탄지로(T2)  <- [변경]
  // 설명: 무한열차에서 탄지로와 네즈코를 지키며 싸움
  { a: "nezuko_box", b: "tanjiro", result: "rengoku" },

  // 음주: 무라타(T3) + 젠이츠(T2)
  // 설명: 잠입 수사를 위해 눈에 띄지 않는 대원(무라타)과 청각이 좋은 젠이츠 활용
  { a: "murata", b: "zenitsu", result: "tengen" },

  // 충주: 네즈코상자(T3) + 아오이(T2)
  // 설명: 오니(네즈코)를 연구하고 치료하는 나비저택
  { a: "nezuko_box", b: "aoi", result: "shinobu" },

  // 화주(카나에): 사비토(T3) + 카나오(T2) <- [변경]
  // 설명: 이미 고인인 사비토(영혼)와 그녀의 제자 카나오 (영혼의 연결)
  { a: "sabito", b: "kanao", result: "kanae" },

  // 하주: 사비토(T3) + 겐야(T2)
  // 설명: 천재적인 재능(사비토급)과 노력(겐야)
  { a: "sabito", b: "genya", result: "muichiro" },

  // 연주: 하가네즈카(T3) + 탄지로(T2)
  // 설명: 대장장이 마을에서 함께 싸움 (연검 제작자)
  { a: "haganezuka", b: "tanjiro", result: "mitsuri" },

  // 사주: 무라타(T3) + 이노스케(T2) <- [변경]
  // 설명: 합동 훈련에서 하급 대원(무라타)들을 묶어놓고 훈련시킴 + 뱀처럼 예측불가한 움직임(이노스케)
  { a: "murata", b: "inosuke", result: "obanai" },

  // 풍주: 쿠와지마(T3) + 겐야(T2) <- [변경]
  // 설명: 엄격한 스승(할아버지)과 형을 되찾으려는 겐야의 독한 마음
  { a: "jigoro", b: "genya", result: "sanemi" },

  // 암주: 우로코다키(T3) + 쿠와지마(T3)
  // 설명: 연륜 있는 스승들의 힘이 합쳐져 최강의 검사가 탄생
  { a: "urokodaki", b: "jigoro", result: "gyomei" },

  // 타마요: 유시로(T3) + 아오이(T2)
  // 설명: 유시로의 충심과 아오이의 의학 지식
  { a: "yushiro", b: "aoi", result: "tamayo" },

  // =============================================================
  // [4단계] 각성 조합 (T4 + T3 or T4 -> T5)
  // =============================================================
  // 탄지로(태양): 염주(T4) + 탄지로(T2)
  { a: "rengoku", b: "tanjiro", result: "tanjiro_sun" },

  // 젠이츠(신속): 음주(T4) + 쿠와지마(T3)
  { a: "tengen", b: "jigoro", result: "zenitsu_god" },

  // 네즈코(각성): 네즈코상자(T3) + 연주(T4)
  { a: "nezuko_box", b: "mitsuri", result: "nezuko_awake" },

  // 기유(반점): 수주(T4) + 탄지로(T2)
  { a: "giyu", b: "tanjiro", result: "giyu_mark" },

  // 무이치로(반점): 하주(T4) + 하가네즈카(T3)
  { a: "muichiro", b: "haganezuka", result: "muichiro_mark" },

  // 타마요&유시로: 타마요(T4) + 유시로(T3)
  { a: "tamayo", b: "yushiro", result: "tamayo_yushiro" },

  // [신규] 이노스케(각성) 조합법
  // 재료: 충주 시노부(T4) + 이노스케(T2)
  // 설명: 상현 2 도우마 전에서 시노부의 희생과 독 덕분에 이노스케가 각성하여 승리함
  { a: "shinobu", b: "inosuke", result: "inosuke_awake" },

  // =============================================================
  // [5단계] 신화 조합 (T5 + T5 -> T6)
  // =============================================================
  // 탄지로(13형): 탄지로 태양(T5) + 기유 반점(T5)
  { a: "tanjiro_sun", b: "giyu_mark", result: "tanjiro_final" },

  // 요리이치: 탄지로 태양(T5) + 네즈코 각성(T5)
  { a: "tanjiro_sun", b: "nezuko_awake", result: "yoriichi" },

  // 교메이(반점): 암주(T4) + 무이치로 반점(T5) -> [예외 T4+T5]
  { a: "gyomei", b: "muichiro_mark", result: "gyomei_mark" },

  // [신규] 이노스케(산의 왕) 조합법
  // 재료: 이노스케(각성)(T5) + 젠이츠(신속)(T5)
  // 설명: 탄지로를 제외한 동기조 두 명(바보 콤비)이 힘을 합쳐 도달한 정점
  { a: "inosuke_awake", b: "zenitsu_god", result: "inosuke_king" },

  // =============================================================
  // [HIDDEN] 히든 조합법
  // =============================================================
  // 요리이치 영식: "obanai"(T4) + 무이치로(T4)
  { a: "obanai", b: "muichiro", result: "yoriichi_zero", hidden: true },

  // 코쿠시보: 요리이치 영식(T5) + 탄지로 태양(T5)
  { a: "yoriichi_zero", b: "tanjiro_sun", result: "koku", hidden: true },

  // 오니왕 탄지로: 기유 반점(T5) + 네즈코 각성(T5)
  { a: "giyu_mark", b: "nezuko_awake", result: "tanjiro_king", hidden: true },

  // 쌍둥이의 운명: 요리이치(T6) + 코쿠시보(T6)
  { a: "yoriichi", b: "koku", result: "twin_destiny", hidden: true },
];

export const ENEMY_CONFIG = {
  bossInterval: 10,
  finalRound: 70,
  types: {
    lower: { color: 0x555555, radius: 15, name: "하현 졸개", hpMult: 100 },

    boss_rui: {
      color: 0xffffff,
      radius: 25,
      name: "하현5 루이",
      hpMult: 50000,
      cutscene: "boss_rui_img",
    },
    boss_enmu: {
      color: 0x8e44ad,
      radius: 25,
      name: "하현1 엔무",
      hpMult: 150000,
      cutscene: "boss_enmu_img",
    },
    boss_daki: {
      color: 0x00b894,
      radius: 30,
      name: "상현6 다키",
      hpMult: 500000,
      cutscene: "boss_daki_img",
    },
    boss_gyokko: {
      color: 0x74b9ff,
      radius: 30,
      name: "상현5 굣코",
      hpMult: 1000000,
      cutscene: "boss_gyokko_img",
    },
    boss_hantengu: {
      color: 0xff7675,
      radius: 30,
      name: "상현4 한텐구",
      hpMult: 3000000,
      cutscene: "boss_hantengu_img",
    },
    boss_akaza: {
      color: 0xe17055,
      radius: 35,
      name: "상현3 아카자",
      hpMult: 7000000,
      cutscene: "boss_akaza_img",
    },
    boss_doma: {
      color: 0x81ecec,
      radius: 35,
      name: "상현2 도우마",
      hpMult: 15000000,
      cutscene: "boss_doma_img",
    },
    boss_koku: {
      color: 0x6c5ce7,
      radius: 40,
      name: "상현1 코쿠시보",
      hpMult: 50000000,
      cutscene: "boss_koku_img",
    },
    boss_muzan: {
      color: 0x000000,
      radius: 50,
      name: "키부츠지 무잔",
      hpMult: 150000000,
      cutscene: "boss_muzan_img",
    },
  },
};
