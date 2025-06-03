// js/tab-switch.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".bookmark-btn");
  const currentParams = new URLSearchParams(window.location.search);
  const emotion = currentParams.get("emotion");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const baseTarget = btn.getAttribute("data-target");
      const target = emotion
        ? `${baseTarget}?emotion=${encodeURIComponent(emotion)}`
        : baseTarget;

      location.href = target;
    });
  });
});
