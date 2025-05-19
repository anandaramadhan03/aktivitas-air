const questions = [
  {
    question: "Apa yang harus kita lakukan sebelum berenang?",
    image: "img/pemanasan.png",
    audio: "audio/pemanasan.mp3",
    options: ["Langsung melompat ke kolam", "Pemanasan terlebih dahulu", "Makan nasi", "Tidur siang"],
    answer: 1
  },
  {
    question: "Apa yang harus dipakai saat berenang agar aman?",
    image: "img/pelampung.png",
    audio: "audio/pelampung.mp3",
    options: ["Sepatu roda", "Baju hangat", "Pelampung", "Helm"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("question-image").src = q.image;
  document.getElementById("question-audio").src = q.audio;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index);
    options.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  if (selected === questions[currentQuestion].answer) {
    score++;
    feedback.textContent = "✅ Benar!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Salah!";
    feedback.style.color = "red";
  }

  setTimeout(() => {
    feedback.textContent = "";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }, 1500);
}

function showScore() {
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("next-button").style.display = "none";
  const scoreText = `Nilai kamu: ${score} dari ${questions.length}`;
  document.getElementById("score").textContent = scoreText;
  document.getElementById("score").style.display = "block";
}

document.getElementById("next-button").addEventListener("click", loadQuestion);
loadQuestion();
