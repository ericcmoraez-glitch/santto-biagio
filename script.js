/* =========================
   MANIFESTO EFFECTS
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     FADE EFFECT
  ========================= */

  const titles = document.querySelectorAll(
    ".manifesto h1, .manifesto h2, .small"
  );

  titles.forEach((el, index) => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    setTimeout(() => {

      el.style.transition =
        "all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)";

      el.style.opacity = "1";

      el.style.transform = "translateY(0)";

    }, 300 * index);

  });

  /* =========================
     PARALLAX LIGHT
  ========================= */

  window.addEventListener("mousemove", (e) => {

    const light = document.querySelector(".manifesto");

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    light.style.transform =
      `translate(${x}px, ${y}px)`;

  });

});
