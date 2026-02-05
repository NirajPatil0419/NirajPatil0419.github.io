const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

yesBtn.onclick = () => {
  message.style.display = "block";
  noBtn.style.display = "none";
  yesBtn.innerText = "❤️ Thank You!";
};
noBtn.onclick = () => alert("Are you sure? 😢");