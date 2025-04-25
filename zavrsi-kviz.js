window.addEventListener("load", () => {
  const score = localStorage.getItem("score");
  if (score) {
    document.getElementById("bodovi").textContent = score;
  } else {
    document.getElementById("bodovi").textContent = "0";
  }
});
