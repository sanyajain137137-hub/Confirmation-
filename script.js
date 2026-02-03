let step = 0;

const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const options = document.getElementById("options");
const cuteImg = document.getElementById("cuteImg");

function nextQuestion() {
  step++;

  if (step === 1) {
    cuteImg.src = "dudu2.png";
    question.innerText = "What do you like the most?";
    subtext.innerText = "";
    options.innerHTML = `
      <button onclick="nextQuestion()">You 😌</button>
      <button onclick="nextQuestion()">Us ❤️</button>
    `;
  }

  else if (step === 2) {
    cuteImg.src = "dudu3.png";
    question.innerText = "Who makes you smile the most?";
    options.innerHTML = `
      <button onclick="nextQuestion()">Sanya 😊</button>
      <button onclick="nextQuestion()">Obviously Sanya 😍</button>
    `;
  }

  else if (step === 3) {
    cuteImg.src = "dudu4.png";
    question.innerText = "Will you be my Valentine? 😳❤️";
    subtext.innerText = "Think very carefully";

    options.innerHTML = `
      <button onclick="yesClicked()">YES 💖</button>
      <button id="noBtn" onmouseover="moveNo()">NO 😤</button>
    `;
  }
}

// NO button runs away 😈
function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// YES clicked 🥹💘
function yesClicked() {
  cuteImg.src = "dudu1.png";
  question.innerText = "YAYYYY 🥰❤️";
  subtext.innerText = "";

  options.innerHTML = `
    <p>
      Varad 💖<br><br>
      You are officially my Valentine 🫶<br><br>
      <strong>Forever yours,<br>Sanya ❤️</strong>
    </p>
  `;
}
