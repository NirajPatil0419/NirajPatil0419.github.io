const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesContent = document.getElementById("yesContent");
const buttons = document.querySelector(".buttons");

yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  yesContent.classList.remove("hidden");
});

function moveNoButton() {
  const area = buttons.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  const x = Math.random() * (area.width - btn.width);
  const y = Math.random() * (area.height - btn.height);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton); // mobile support 😈