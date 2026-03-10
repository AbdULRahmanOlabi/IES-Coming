document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.querySelector("#preloader");
  const splashScreen = document.getElementById("splash-screen");
  const launchBtn = document.getElementById("launch-btn");
  const body = document.body;

  window.addEventListener("load", () => {
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  });

  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      const launchSound = document.getElementById("launch-sound");

      if (launchSound) {
        launchSound.play();
      }

      // =========================================
      // (Confetti) 
      // =========================================
      var duration = 2000;
      var end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ["#b9a77a", "#054239", "#ffffff"],
          zIndex: 9999,
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ["#b9a77a", "#054239", "#ffffff"],
          zIndex: 9999,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
      // =========================================

      splashScreen.classList.add("open");

      body.classList.remove("splash-active");
      body.classList.add("site-loaded");

      setTimeout(() => {
        splashScreen.style.display = "none";

        if (typeof AOS !== "undefined") {
          AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
          });
        }
      }, 2500);
    });
  }
});
