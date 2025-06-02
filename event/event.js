const questions = [
  {
    question: "아침에 눈을 떴을 때 가장 먼저 드는 생각은?",
    options: [
      { text: "오늘은 뭔가 좋은 일이 있을 것 같아!", emotions: ["행복체", "편안체"] },
      { text: "평범하고 차분하게 시작하네", emotions: ["고요체", "침착체"] },
      { text: "너무 일어나기 싫고 무기력하다", emotions: ["공허체", "우울체"] },
      { text: "또 반복되는 하루, 피곤하다", emotions: ["분노체", "짜증체"] }
    ]
  },
  {
    question: "혼자 있는 시간에 보통 나는?",
    options: [
        { text: "새로운 아이디어가 떠오르고 창의력이 솟는다", emotions: ["영감체", "집중체"] },
      { text: "평온하게 시간을 보내며 안정감을 느낀다", emotions: ["고요체","편안체"] },
      { text: "불안하고 걱정이 많다", emotions: ["불안체", "예민체"] },
      { text: "마음이 낮게 가라앉고 외롭다", emotions: ["우울체", "갈등체"] }
    ]
  },
  {
    question: "가장 좋아하는 공간은?",
    options: [
      { text: "자연 속이나 조용한 카페", emotions: ["편안체", "행복체"] },
      { text: "활기차고 사람 많은 곳", emotions: ["설렘체", "영감체"] },
      { text: "정리잘 된 나만의 공간", emotions: ["우울체", "피로체"] },
      { text: "아무도 없는 어두운 방", emotions: ["공포체", "증오체"] }
    ]
  },
  {
    question: "누군가 나를 비난했을 때 나는?",
    options: [
      { text: "짜증 나지만 참는다.", emotions: ["침착체", "짜증체"] },
      { text: "화가 폭발할 것 같고 멈추기 어렵다", emotions: ["분노체", "증오체"] },
      { text: "별로 신경쓰지 않는다", emotions: ["공허체", "갈등체"] },
      { text: "내가 뭘 잘못 했나 싶고 위축된다", emotions: ["불안체", "공포체"] }
    ]
  },
  {
    question: "지금 이 순간 당신의 감정은?",
    options: [
      { text: "살짝 들떠 있고 즐겁다", emotions: ["설렘체", "행복체", "편안체", "여감체"] },
      { text: "평온하고 차분하다", emotions: ["고요체", "예민체", "침착체", "집중체"] },
      { text: "불안하고 걱정이 많다", emotions: ["불안체", "공허체", "우울체", "공포체"] },
      { text: "의욕이 없고 지친 상태이다", emotions: ["증오체", "분노체", "짜증체", "갈등체"] }
    ]
  }
];


let currentIndex = 0;
const emotionScores = {};
const fill = document.getElementById("progress-fill");
const icon = document.getElementById("progress-icon");
const qWrapper = document.getElementById("question-wrapper");

function updateProgressBar(index) {
  const percent = ((index + 1) / questions.length) * 100;
  fill.style.width = `${percent}%`;
  icon.style.left = `calc(${percent}% - 31.5px)`;
  console.log(`[DEBUG] Progress: ${percent}%, Width set to: ${fill.style.width}, Icon left: ${icon.style.left}`);
}

function renderQuestion() {
  const q = questions[currentIndex];
  qWrapper.querySelector(".question-number").innerText = `Q${currentIndex + 1}`;
  qWrapper.querySelector(".question-text").innerText = q.question;

  const optionsContainer = qWrapper.querySelector(".options");
  optionsContainer.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt.text;
    btn.addEventListener("click", () => handleAnswer(opt.emotions));
    optionsContainer.appendChild(btn);
  });

  updateProgressBar(currentIndex);
}

const emotionColors = {
  행복체: "#FFE979",
  설렘체: "#FFADC4",
  편안체: "#94FFF4",
  영감체: "#E8DAFF",

  고요체: "#85D4FF",
  예민체: "#75FFCA",
  침착체: "#0096E7",
  집중체: "#85D4FF",

  공허체: "#502695",
  공포체: "#BB00FF",
  우울체: "#1B82D5",
  불안체: "#9A8EFA",

  증오체: "#F2FF05",
  분노체: "#FAB98E",
  짜증체: "#FF80D4",  
  갈등체: "#FF40C9"
  
};

let selectedColors = [];
let selectedColorsGLSL = [];


function handleAnswer(emotions) {
  emotions.forEach(emotion => {
    if (!emotionScores[emotion]) emotionScores[emotion] = 0;
    emotionScores[emotion]++;
  });


  currentIndex++;

  if (currentIndex >= questions.length) {
    const resultEmotion = Object.entries(emotionScores).sort((a, b) => b[1] - a[1])[0][0];
    window.location.href = `event_loading.html?emotion=${encodeURIComponent(resultEmotion)}`;
  } else {
    renderQuestion();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
});








