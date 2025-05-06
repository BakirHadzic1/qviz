let questionNumber = 1;
let score = 0;
let timerInterval;
let currentGameId;
let currentQuestionId;
        
async function loadQuestion() {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch("https://quiz-be-zeta.vercel.app/game/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    currentGameId = data.gameId;
    showQuestion(data.question);
  } catch (error) {
    console.log(error);
  }
}

function startTimer() {
  let timeLeft = 30;
  document.getElementById("timer").textContent = timeLeft;

  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz("Vrijeme je isteklo!");
    }
  }, 1000);
}

function showQuestion(question) {
  if (!question) {
    endQuiz("Čestitamo! Završili ste kviz.");
    return;
  }

  startTimer();

  currentQuestionId = question._id;

  document.getElementById("question-text").textContent = question.title;
  document.getElementById("redniBroj").textContent = questionNumber;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span>${String.fromCharCode(65 + index)}</span> ${
      option.text
    }`;

    btn.addEventListener("click", async () => {
      clearInterval(timerInterval);
      document
        .querySelectorAll(".option-btn")
        .forEach((b) => (b.disabled = true));

      const res = await fetch("https://quiz-be-zeta.vercel.app/game/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          gameId: currentGameId,
          questionId: currentQuestionId,
          answer: option.text,
        }),
      });

      const result = await res.json();

      if (result.correct) {
        score++;
        localStorage.setItem("score", score);
        btn.style.background = "#28a745";
        document.getElementById("bodovi").textContent = score;
        setTimeout(() => {
          questionNumber++;
          showQuestion(result.nextQuestion);
        }, 1000);
      } else {
        btn.style.backgroundColor = "#dc3545";
        setTimeout(() => {
          endQuiz("Netačan odgovor!");
        }, 1000);
      }
    });

    optionsContainer.appendChild(btn);
  });
}

function endQuiz(message) {
  clearInterval(timerInterval);
  document.querySelector(".quiz-container").classList.add("hidden");

  const rank = getRank(score);
  showQuizEndModal(score, rank, message || "Kviz završen!");
}

function showQuizEndModal(score, rank, message) {
  document.getElementById("final-score").textContent = score;
  document.getElementById("final-rank").textContent = `#${rank}`;
  document.getElementById("quiz-end-message").textContent =
    message || "Kviz završen!";
  document.getElementById("quiz-end-modal").classList.remove("hidden");
}

function goToLeaderboard() {
  window.location.href = "/leaderboard.html";
}

function goToHome() {
  window.location.href = "/index.html";
}

loadQuestion();
