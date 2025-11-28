// data.js 파일
export const GAME_CONFIG = {
  initialGold: 1200,
  maxEnemies: 60,
  roundTime: 60,
  spawnInterval: 1200,
  unitSummonCost: 150,
  bgColors: {
    normal: 0x050510,
    boss: 0x2c0404,
  },
};

// =================================================================
// [UNIT DATA] 밸런스 패치 v3 (5배 배율 적용)
// Speed: 낮을수록 빠름 (Min: 400)
// =================================================================
export const UNIT_DATA = {
  // ===============================================================
  // [Tier 1] 평균 DPS: ~15
  // ===============================================================
  slayer_basic: {
    name: "일반 대원",
    tier: 1,
    color: 0x95a5a6,
    dmg: 15,
    speed: 1000, // 15 DPS
    range: 80,
    type: "slayer_basic",
  },
  crow: {
    name: "꺾쇠 까마귀",
    tier: 1,
    color: 0x2d3436,
    dmg: 10,
    speed: 650, // ~15.3 DPS
    range: 100,
    type: "crow_attack",
  },
  kakushi: {
    name: "은(Kakushi)",
    tier: 1,
    color: 0x555555,
    dmg: 6,
    speed: 400, // 15 DPS
    range: 80,
    type: "kakushi_support",
  },

  // ===============================================================
  // [Tier 2] 평균 DPS: ~75 (T1의 5배)
  // ===============================================================
  tanjiro: {
    name: "탄지로(물)",
    tier: 2,
    color: 0x2980b9,
    dmg: 60,
    speed: 800, // 75 DPS
    range: 100,
    type: "tanjiro_water",
  },
  zenitsu: {
    name: "젠이츠(기절)",
    tier: 2,
    color: 0xf1c40f,
    dmg: 75,
    speed: 1000, // 75 DPS
    range: 110,
    type: "zenitsu_thunder",
  },
  inosuke: {
    name: "이노스케",
    tier: 2,
    color: 0x7f8c8d,
    dmg: 68,
    speed: 900, // ~75.5 DPS
    range: 90,
    type: "inosuke_beast",
  },
  genya: {
    name: "겐야(총)",
    tier: 2,
    color: 0x8e44ad,
    dmg: 53,
    speed: 700, // ~75.7 DPS
    range: 220,
    type: "genya_gun",
  },
  kanao: {
    name: "츠유리 카나오",
    tier: 2,
    color: 0xe84393,
    dmg: 85,
    speed: 1100, // ~77 DPS (살짝 높음)
    range: 110,
    type: "kanao_flower",
  },
  aoi: {
    name: "칸자키 아오이",
    tier: 2,
    color: 0x2ecc71,
    dmg: 30, // 서포터라 딜 낮음
    speed: 500, // 60 DPS
    range: 100,
    type: "aoi_support",
  },

  // ===============================================================
  // [Tier 3] 평균 DPS: ~375 (T2의 5배)
  // ===============================================================
  urokodaki: {
    name: "우로코다키",
    tier: 3,
    color: 0x34495e,
    dmg: 345,
    speed: 920, // 375 DPS
    range: 120,
    type: "urokodaki_water",
  },
  jigoro: {
    name: "쿠와지마",
    tier: 3,
    color: 0xd35400,
    dmg: 375,
    speed: 1000, // 375 DPS
    range: 120,
    type: "jigoro_thunder",
  },
  haganezuka: {
    name: "하가네즈카",
    tier: 3,
    color: 0xe17055,
    dmg: 600, // 한방 딜러
    speed: 1500, // 400 DPS (공속이 느려 딜로스 감안하여 DPS 살짝 높게)
    range: 100,
    type: "haganezuka_angry",
  },
  sabito: {
    name: "사비토(영혼)",
    tier: 3,
    color: 0xa29bfe,
    dmg: 320,
    speed: 850, // ~376 DPS
    range: 140,
    type: "sabito_spirit",
  },
  nezuko_box: {
    name: "네즈코(나무상자)",
    tier: 3,
    color: 0xe74c3c,
    dmg: 280,
    speed: 750, // ~373 DPS
    range: 100,
    type: "nezuko_kick",
  },
  yushiro: {
    name: "유시로",
    tier: 3,
    color: 0xa5b1c2,
    dmg: 338,
    speed: 900, // ~375 DPS
    range: 110,
    type: "yushiro_paper",
  },
  murata: {
    name: "무라타(운)",
    tier: 3,
    color: 0xd2dae2,
    dmg: 265,
    speed: 700, // ~378 DPS
    range: 120,
    type: "murata_water",
  },

  // ===============================================================
  // [Tier 4] 주(Hashira) 평균 DPS: ~1,900 (T3의 5배)
  // * 교메이(암주)는 T3+T3 조합이므로 타 T4보다 강하게 설정
  // ===============================================================
  giyu: {
    name: "수주 기유",
    tier: 4,
    color: 0x0984e3,
    dmg: 1400,
    speed: 750, // ~1866 DPS
    range: 150,
    type: "giyu_water",
    cutscene: "giyu_cutscene",
  },
  rengoku: {
    name: "염주 렌고쿠",
    tier: 4,
    color: 0xff7675,
    dmg: 1900,
    speed: 1000, // 1900 DPS
    range: 160,
    type: "rengoku_fire",
    cutscene: "rengoku_cutscene",
  },
  tengen: {
    name: "음주 텐겐",
    tier: 4,
    color: 0xdfe6e9,
    dmg: 1500,
    speed: 800, // 1875 DPS
    range: 150,
    type: "tengen_sound",
    cutscene: "tengen_cutscene",
  },
  shinobu: {
    name: "충주 시노부",
    tier: 4,
    color: 0xa29bfe,
    dmg: 950,
    speed: 500, // 1900 DPS (매우 빠름)
    range: 150,
    type: "shinobu_poison",
    cutscene: "shinobu_cutscene",
  },
  kanae: {
    name: "화주 카나에",
    tier: 4,
    color: 0xffcccc,
    dmg: 1250,
    speed: 670, // ~1865 DPS
    range: 160,
    type: "kanae_flower",
    cutscene: "Kanae_cutscene",
  },
  muichiro: {
    name: "하주 무이치로",
    tier: 4,
    color: 0x74b9ff,
    dmg: 1750,
    speed: 920, // ~1902 DPS
    range: 170,
    type: "muichiro_mist",
    cutscene: "muichiro_cutscene",
  },
  mitsuri: {
    name: "연주 미츠리",
    tier: 4,
    color: 0xfd79a8,
    dmg: 1580,
    speed: 830, // ~1903 DPS
    range: 150,
    type: "mitsuri_love",
    cutscene: "mitsuri_cutscene",
  },
  obanai: {
    name: "사주 오바나이",
    tier: 4,
    color: 0x636e72,
    dmg: 1650,
    speed: 870, // ~1896 DPS
    range: 145,
    type: "obanai_snake",
    cutscene: "obanai_cutscene",
  },
  sanemi: {
    name: "풍주 사네미",
    tier: 4,
    color: 0x55efc4,
    dmg: 1850,
    speed: 970, // ~1907 DPS
    range: 140,
    type: "sanemi_wind",
    cutscene: "sanemi_cutscene",
  },
  // [보정] 교메이는 제작 난이도(T3+T3)가 높으므로 DPS 약 20% 상향
  gyomei: {
    name: "암주 교메이",
    tier: 4,
    color: 0x2d3436,
    dmg: 3500,
    speed: 1500, // ~2333 DPS (강력함)
    range: 170,
    type: "gyomei_stone",
    cutscene: "gyomei_cutscene",
  },
  tamayo: {
    name: "타마요",
    tier: 4,
    color: 0x9b59b6,
    dmg: 1100,
    speed: 580, // ~1896 DPS
    range: 150,
    type: "tamayo_blood",
    cutscene: "tamayo_cutscene",
  },

  // ===============================================================
  // [Tier 5] 각성 평균 DPS: ~10,000 (T4의 5배)
  // * 모든 T5는 T4+T4 조합이므로 강력하게 설정
  // ===============================================================
  tanjiro_sun: {
    name: "탄지로(히노카미)",
    tier: 5,
    color: 0xff0000,
    dmg: 6500,
    speed: 650, // 10,000 DPS
    range: 180,
    type: "tanjiro_sun",
    cutscene: "tanjiro_sun_cutscene",
  },
  zenitsu_god: {
    name: "젠이츠(신속)",
    tier: 5,
    color: 0xffeb3b,
    dmg: 8500,
    speed: 850, // 10,000 DPS
    range: 190,
    type: "zenitsu_god",
    cutscene: "zenitsu_god_cutscene",
  },
  nezuko_awake: {
    name: "네즈코(각성)",
    tier: 5,
    color: 0xd63031,
    dmg: 5800,
    speed: 580, // 10,000 DPS
    range: 180,
    type: "nezuko_blood_art",
    cutscene: "nezuko_awake_cutscene",
  },
  giyu_mark: {
    name: "기유(반점)",
    tier: 5,
    color: 0x0984e3,
    dmg: 6300,
    speed: 630, // 10,000 DPS
    range: 190,
    type: "giyu_mark_water",
    cutscene: "giyu_mark_cutscene",
  },
  muichiro_mark: {
    name: "무이치로(반점)",
    tier: 5,
    color: 0x74b9ff,
    dmg: 6000,
    speed: 600, // 10,000 DPS
    range: 210,
    type: "muichiro_mark_mist",
    cutscene: "muichiro_mark_cutscene",
  },
  tamayo_yushiro: {
    name: "타마요&유시로",
    tier: 5,
    color: 0x6c5ce7,
    dmg: 4700,
    speed: 470, // 10,000 DPS
    range: 190,
    type: "tamayo_yushiro_combo",
    cutscene: "tamayo_yushiro_cutscene",
  },
  inosuke_awake: {
    name: "이노스케(각성)",
    tier: 5,
    color: 0x7f8c8d,
    dmg: 6800,
    speed: 680, // 10,000 DPS
    range: 180,
    type: "inosuke_awake_beast",
    cutscene: "inosuke_awake_cutscene",
  },

  // [신규 5티어] - 재료가 되는 T4들의 특성을 반영해 미세 조정
  rengoku_awake: {
    name: "렌고쿠(멸살)",
    tier: 5,
    color: 0xe17055,
    dmg: 9500,
    speed: 920, // ~10,326 DPS (순간 폭딜)
    range: 170,
    type: "rengoku_9th_form",
    cutscene: "rengoku_awake_cutscene",
  },
  tengen_score: {
    name: "텐겐(악보)",
    tier: 5,
    color: 0xb2bec3,
    dmg: 7300,
    speed: 730, // 10,000 DPS
    range: 160,
    type: "tengen_musical_score",
    cutscene: "tengen_score_cutscene",
  },
  shinobu_dance: {
    name: "시노부(종의형)",
    tier: 5,
    color: 0x6c5ce7,
    dmg: 11000, // 한방 데미지 매우 높음
    speed: 1050, // ~10,476 DPS
    range: 150,
    type: "shinobu_last_dance",
    cutscene: "shinobu_dance_cutscene",
  },
  kanae_spirit: {
    name: "카나에(꽃의영)",
    tier: 5,
    color: 0xff9ff3,
    dmg: 5500,
    speed: 550, // 10,000 DPS
    range: 200,
    type: "kanae_flower_final",
    cutscene: "kanae_spirit_cutscene",
  },
  sanemi_mark: {
    name: "사네미(반점)",
    tier: 5,
    color: 0x00b894,
    dmg: 8000,
    speed: 790, // ~10,126 DPS
    range: 160,
    type: "sanemi_typhoon",
    cutscene: "sanemi_mark_cutscene",
  },
  obanai_mark: {
    name: "오바나이(반점)",
    tier: 5,
    color: 0x2d3436,
    dmg: 7700,
    speed: 760, // ~10,131 DPS
    range: 170,
    type: "obanai_serpent_god",
    cutscene: "obanai_mark_cutscene",
  },
  mitsuri_mark: {
    name: "미츠리(반점)",
    tier: 5,
    color: 0xfd79a8,
    dmg: 7100,
    speed: 710, // 10,000 DPS
    range: 200,
    type: "mitsuri_love_cat",
    cutscene: "mitsuri_mark_cutscene",
  },

  // ===============================================================
  // [Tier 6] 신화 평균 DPS: ~55,000 (T5의 5.5배)
  // * 최상위 유닛들은 확실한 보상감을 위해 배율을 조금 더 높임
  // ===============================================================
  tanjiro_final: {
    name: "탄지로(13형)",
    tier: 6,
    color: 0xff4757,
    dmg: 22000,
    speed: 400, // 55,000 DPS
    range: 210,
    type: "tanjiro_13th",
    cutscene: "tanjiro_final_cutscene",
  },
  gyomei_mark: {
    name: "교메이(반점)",
    tier: 6,
    color: 0x2d3436,
    dmg: 37000,
    speed: 670, // ~55,223 DPS
    range: 230,
    type: "gyomei_mark_stone",
    cutscene: "gyomei_mark_cutscene",
  },
  yoriichi: {
    name: "요리이치",
    tier: 6,
    color: 0xffd700,
    dmg: 28000,
    speed: 500, // 56,000 DPS
    range: 220,
    type: "yoriichi_sun",
    cutscene: "yoriichi_cutscene",
  },
  inosuke_king: {
    name: "이노스케(산의 왕)",
    tier: 6,
    color: 0x3498db,
    dmg: 24000,
    speed: 430, // ~55,813 DPS
    range: 210,
    type: "inosuke_king_beast",
    cutscene: "inosuke_king_cutscene",
  },
  zenitsu_7th: {
    name: "젠이츠(화뢰신)",
    tier: 6,
    color: 0xfff200, // 번개
    dmg: 22000,
    speed: 400, // 55,000 DPS (공속 매우 빠름)
    range: 220,
    type: "zenitsu_7th_form",
    cutscene: "zenitsu_7th_cutscene",
  },
  giyu_calm: {
    name: "기유(잔잔한 물)",
    tier: 6,
    color: 0x74b9ff, // 물색
    dmg: 44000,
    speed: 800, // 55,000 DPS (한방 묵직)
    range: 210,
    type: "giyu_dead_calm",
    cutscene: "giyu_calm_cutscene",
  },
  sanemi_wind_god: {
    name: "사네미(바람의 신)",
    tier: 6,
    color: 0x55efc4, // 바람색
    dmg: 29000,
    speed: 520, // ~55,700 DPS
    range: 200,
    type: "sanemi_wind_god",
    cutscene: "sanemi_god_cutscene",
  },

  // ========================================================
  // [HIDDEN UNITS]
  // ========================================================
  yoriichi_zero: {
    name: "요리이치 영식",
    tier: 5,
    color: 0x7f8c8d,
    dmg: 4200, // T5급 (10,500 DPS) - 히든이라 살짝 높음
    speed: 400,
    range: 110,
    type: "yoriichi_doll",
    cutscene: "yoriichi_zero_cutscene",
  },
  rengoku_smile: {
    name: "렌고쿠(마지막 미소)",
    tier: 5,
    color: 0xffa502, // 오렌지색
    dmg: 8800,
    speed: 800, // 11,000 DPS
    range: 180,
    type: "rengoku_smile_effect",
    cutscene: "rengoku_smile_cutscene",
  },
  koku: {
    name: "코쿠시보(상현1)",
    tier: 6,
    color: 0xffd700,
    dmg: 34000, // T6급 (56,666 DPS)
    speed: 600,
    range: 220,
    type: "kokushibo_moon",
    cutscene: "koku_cutscene",
  },
  tanjiro_king: {
    name: "탄지로(오니의 왕)",
    tier: 6,
    color: 0x2d3436,
    dmg: 38000, // 58,461 DPS
    speed: 650,
    range: 180,
    type: "tanjiro_demon_king",
    cutscene: "tanjiro_king_cutscene",
  },
  twin_destiny: {
    name: "쌍둥이의 운명",
    tier: 6,
    color: 0xb33939,
    dmg: 55000,
    speed: 800,
    range: 240,
    type: "twin_destiny_combo",
    cutscene: "twin_destiny_cutscene",
  },
  rengoku_legend: {
    name: "렌고쿠(마음의 불꽃)",
    tier: 6,
    color: 0xff4757,
    dmg: 48000,
    speed: 800, // 60,000 DPS
    range: 230,
    type: "rengoku_legend_fire",
    cutscene: "rengoku_legend_cutscene",
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
  // [4단계] 각성 조합 (T4 + T4 -> T5)
  // =============================================================

  // 1. 탄지로(히노카미): 수주 기유 + 염주 렌고쿠
  // 설명: 탄지로를 이끌어준 두 명의 사형이자 멘토 (물과 불의 계승)
  { a: "giyu", b: "rengoku", result: "tanjiro_sun" },

  // 2. 젠이츠(신속): 음주 텐겐 + 암주 교메이
  // 설명: 청각이 뛰어난 텐겐과 소리에 민감한 교메이 (소리의 극의)
  { a: "tengen", b: "gyomei", result: "zenitsu_god" },

  // 3. 네즈코(각성): 연주 미츠리 + 충주 시노부
  // 설명: 네즈코를 귀여워해준 두 여성 지주 (사랑과 보살핌)
  { a: "mitsuri", b: "shinobu", result: "nezuko_awake" },

  // 4. 이노스케(각성): 충주 시노부 + 수주 기유
  // 설명: 거미산에서 이노스케를 구하고 치료해준 인연 (치료와 포박)
  { a: "shinobu", b: "giyu", result: "inosuke_awake" },

  // 5. 기유(반점): 수주 기유 + 풍주 사네미
  // 설명: 합동 훈련에서 서로 목검을 부러뜨리며 대련한 라이벌
  { a: "giyu", b: "sanemi", result: "giyu_mark" },

  // 6. 무이치로(반점): 하주 무이치로 + 염주 렌고쿠
  // 설명: 기억을 잃기 전 렌고쿠 가문과 인연이 있던 사이 (열정과 안개)
  { a: "muichiro", b: "rengoku", result: "muichiro_mark" },

  // 7. 타마요&유시로: 타마요 + 충주 시노부
  // 설명: 무잔을 쓰러뜨리기 위해 협력하여 독을 개발한 두 명의 천재 (의학과 독)
  { a: "tamayo", b: "shinobu", result: "tamayo_yushiro" },

  // -----------------[ 신규 유닛 조합법 ]-----------------

  // 8. 렌고쿠(멸살): 염주 렌고쿠 + 연주 미츠리
  // 설명: 렌고쿠의 츠구코(제자)였던 미츠리. 스승과 제자의 뜨거운 유대.
  { a: "rengoku", b: "mitsuri", result: "rengoku_awake" },

  // 9. 텐겐(악보): 음주 텐겐 + 사주 오바나이
  // 설명: 서로의 능력을 인정하며, 전투 센스가 뛰어난 지주들의 전술적 결합.
  { a: "tengen", b: "obanai", result: "tengen_score" },

  // 10. 시노부(종의형): 충주 시노부 + 화주 카나에
  // 설명: 언니의 복수를 위해 완성한 마지막 기술. 자매의 힘.
  { a: "shinobu", b: "kanae", result: "shinobu_dance" },

  // 11. 카나에(꽃의영): 화주 카나에 + 풍주 사네미
  // 설명: 사네미가 마음을 열었던 유일한 인물. (러브라인/인연)
  { a: "kanae", b: "sanemi", result: "kanae_spirit" },

  // 12. 사네미(반점): 풍주 사네미 + 암주 교메이
  // 설명: 상현1 코쿠시보 전에서 등을 맞대고 싸운 최강의 콤비.
  { a: "sanemi", b: "gyomei", result: "sanemi_mark" },

  // 13. 오바나이(반점): 사주 오바나이 + 연주 미츠리
  // 설명: 서로 사랑하는 사이. 죽음 앞에서도 함께하기를 맹세함.
  { a: "obanai", b: "mitsuri", result: "obanai_mark" },

  // 14. 미츠리(반점): 연주 미츠리 + 사주 오바나이
  // * 주의: 위와 재료가 같아 충돌할 수 있음! -> 미츠리 조합법 변경 필요
  // [변경] 미츠리(반점): 연주 미츠리 + 하주 무이치로
  // 설명: 대장장이 마을에서 함께 각성하여 상현을 물리친 동지.
  { a: "mitsuri", b: "muichiro", result: "mitsuri_mark" },

  // =============================================================
  // [5단계] 신화 조합 (T5 + T5 -> T6)
  // * 규칙: 전설적인 존재들은 각성한 5티어 영웅들의 결합으로 탄생합니다.
  // =============================================================

  // 1. 탄지로(13형): 탄지로(히노카미) + 기유(반점)
  // 설명: 최종국면에서 아카자와 무잔을 상대로 끝까지 함께 싸운 사형제
  { a: "tanjiro_sun", b: "giyu_mark", result: "tanjiro_final" },

  // 2. 교메이(반점): 사네미(반점) + 무이치로(반점)
  // 설명: 상현1 코쿠시보를 상대로 처절한 사투를 벌인 최강의 멤버들 (암주+풍주+하주)
  { a: "sanemi_mark", b: "muichiro_mark", result: "gyomei_mark" },

  // 3. 요리이치: 탄지로(히노카미) + 렌고쿠(멸살)
  // 설명: 태양의 호흡 계승자(탄지로)와 그 의지를 불태워준 염주(렌고쿠)의 영혼이 만나 전설 귀환
  { a: "tanjiro_sun", b: "rengoku_awake", result: "yoriichi" },

  // 4. 이노스케(산의 왕): 이노스케(각성) + 젠이츠(신속)
  // 설명: 탄지로가 없을 때도 서로 등을 맞대고 싸우며 성장한 동기조 콤비
  { a: "inosuke_awake", b: "zenitsu_god", result: "inosuke_king" },

  // 1. 젠이츠(화뢰신) [T6]
  // 조합: 젠이츠 신속(T5) + 텐겐 악보(T5)
  // 설명: 소리의 호흡(텐겐)의 파생인 번개의 호흡. 소리주와 함께 도달한 번개의 정점.
  { a: "zenitsu_god", b: "tengen_score", result: "zenitsu_7th" },

  // 2. 기유(잔잔한 물) [T6]
  // 조합: 기유 반점(T5) + 시노부 종의형(T5)
  // 설명: 오니를 멸살하기 위해 협력하며 서로의 등을 맡긴 수주와 충주 (동료애)
  { a: "giyu_mark", b: "shinobu_dance", result: "giyu_calm" },

  // 3. 사네미(바람의 신) [T6]
  // 조합: 사네미 반점(T5) + 카나에 꽃의영(T5)
  // 설명: 죽은 카나에의 영혼이 사네미를 감싸며, 바람처럼 자유로운 기술을 완성시킴 (러브라인)
  { a: "sanemi_mark", b: "kanae_spirit", result: "sanemi_wind_god" },

  // =============================================================
  // [HIDDEN] 히든 조합법
  // * 일부 히든은 예외적으로 T4 조합을 유지하거나, 특정 T5를 요구합니다.
  // =============================================================

  // 1. 요리이치 영식: 오바나이(T4) + 무이치로(T4)
  // 설명: 검술 훈련용 인형 (뱀처럼 휘어지는 검로 + 안개 같은 움직임)
  // * 참고: 이 유닛은 5티어 급 성능을 가진 히든 유닛으로 취급
  { a: "obanai", b: "muichiro", result: "yoriichi_zero", hidden: true },

  // 2. 코쿠시보(상현1): 요리이치 영식(T5_Hidden) + 사네미(반점)(T5)
  // 설명: 자신의 기술을 흉내 낸 인형과, 자신의 후손(시나즈가와 가문)의 피를 본 코쿠시보
  // (기존 탄지로 재료에서 사네미로 변경하여 스토리 개연성 강화)
  { a: "yoriichi_zero", b: "sanemi_mark", result: "koku", hidden: true },

  // 3. 탄지로(오니의 왕): 무잔(Boss) -> (조합 불가, 보통 특수 조건)
  // 하지만 조합으로 구현한다면:
  // 재료: 기유(반점)(T5) + 네즈코(각성)(T5)
  // 설명: 탄지로가 오니가 되었을 때 그를 막으려던 기유와 그를 구하려던 네즈코
  { a: "giyu_mark", b: "nezuko_awake", result: "tanjiro_king", hidden: true },

  // 4. 쌍둥이의 운명: 요리이치(T6) + 코쿠시보(T6)
  // 설명: 빛과 어둠, 태양과 달. 형제의 슬픈 운명이 하나로 합쳐짐 (최강 유닛)
  { a: "yoriichi", b: "koku", result: "twin_destiny", hidden: true },

  // 1. 렌고쿠(마지막 미소) [T5 Hidden]
  // 조합: 렌고쿠(T4) + 네즈코상자(T3)
  // 설명: 무한열차에서 승객과 네즈코를 끝까지 지켜낸 렌고쿠의 숭고한 희생
  { a: "rengoku", b: "nezuko_box", result: "rengoku_smile", hidden: true },

  // 1. 렌고쿠(마음의 불꽃) [T6 Hidden]
  // 조합: 렌고쿠 미소(T5 Hidden) + 탄지로 히노카미(T5)
  // 설명: 렌고쿠가 남긴 불꽃같은 의지를 탄지로가 계승하여 탄생한 전설
  {
    a: "rengoku_smile",
    b: "tanjiro_sun",
    result: "rengoku_legend",
    hidden: true,
  },
];

export const ENEMY_CONFIG = {
  bossInterval: 10,
  finalRound: 90,
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
      hpMult: 100000,
      cutscene: "boss_enmu_img",
    },
    boss_daki: {
      color: 0x00b894,
      radius: 30,
      name: "상현6 다키",
      hpMult: 250000,
      cutscene: "boss_daki_img",
    },
    boss_gyokko: {
      color: 0x74b9ff,
      radius: 30,
      name: "상현5 굣코",
      hpMult: 600000,
      cutscene: "boss_gyokko_img",
    },
    boss_hantengu: {
      color: 0xff7675,
      radius: 30,
      name: "상현4 한텐구",
      hpMult: 1000000,
      cutscene: "boss_hantengu_img",
    },
    boss_akaza: {
      color: 0xe17055,
      radius: 35,
      name: "상현3 아카자",
      hpMult: 2000000,
      cutscene: "boss_akaza_img",
    },
    boss_doma: {
      color: 0x81ecec,
      radius: 35,
      name: "상현2 도우마",
      hpMult: 5000000,
      cutscene: "boss_doma_img",
    },
    boss_koku: {
      color: 0x6c5ce7,
      radius: 40,
      name: "상현1 코쿠시보",
      hpMult: 10000000,
      cutscene: "boss_koku_img",
    },
    boss_muzan: {
      color: 0x000000,
      radius: 50,
      name: "키부츠지 무잔",
      hpMult: 20000000,
      cutscene: "boss_muzan_img",
    },
  },
};
