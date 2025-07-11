function spawnTrail(x, y) {
  const dot = document.createElement("div");
  dot.classList.add("trail");
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 600);
}

document.addEventListener("mousemove", (e) => {
  spawnTrail(e.pageX, e.pageY);
});

document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  if (touch) {
    spawnTrail(touch.pageX, touch.pageY);
  }
});
