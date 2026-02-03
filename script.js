function yesClick() {
  document.getElementById("yesBox").style.display = "block";
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";

  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  btn.style.left = x + "px";
  btn.style.top = y + "px";
}
