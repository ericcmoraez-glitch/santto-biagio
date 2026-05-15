document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BOTÃO VER COLEÇÃO
  ========================= */

  const botao = document.getElementById("btn-colecao");
  const secaoColecao = document.getElementById("colecao");

  if (botao && secaoColecao) {
    botao.addEventListener("click", () => {
      secaoColecao.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  /* =========================
     MENU MOBILE
  ========================= */

  const menu = document.querySelector("nav ul");
  const toggle = document.getElementById("menu-toggle");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */

  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* =========================
     CURSOR PERSONALIZADO
  ========================= */

  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    if (!cursor) return;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  /* =========================
     TYPING EFFECT (HERO)
  ========================= */

  const text = "Coleção denim com estética minimalista.";
  const typingEl = document.getElementById("typing-text");

  let i = 0;

  function typeEffect() {
    if (!typingEl) return;

    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 60);
    }
  }

  typeEffect();

  /* =========================
     SCROLL ANIMATION (FADE)
  ========================= */

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll(
    ".card, .about-content, .content, .editorial, .collection"
  ).forEach((el) => observer.observe(el));

});

const revealElements = document.querySelectorAll(
  ".content, .catalog-item, .about-content, .catalog-grid h2, .subtitulo"
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});