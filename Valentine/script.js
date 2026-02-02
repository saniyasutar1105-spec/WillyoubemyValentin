const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const tryAgain = document.getElementById("tryAgain");
const loveBox = document.getElementById("loveBox");

let noCount = 0;

/* 😜 NO button movement */
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  noCount++;

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 50 - 25;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noCount >= 9) {
    tryAgain.innerText = "🥺 Please try again… you know the answer 💖";
  }
}

/* 💖 YES celebration */
yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  tryAgain.style.display = "none";
  loveBox.classList.remove("hidden");

  setInterval(createHeart, 300);
});

/* 💕 Heart Rain Function */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["💖", "💘", "💕", "💗", "💓", "💞", "❤️"];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.getElementById("heartRain").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
