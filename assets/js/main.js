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
