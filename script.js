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
     NAVBAR SCROLL
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
     TYPING EFFECT
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
     REVEAL / BALENCIAGA STYLE
  ========================= */

  const revealElements = document.querySelectorAll(
    ".content, .catalog-item, .about-content, .editorial, .collection, .subtitulo"
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

  /* =========================
     TRANSIÇÃO ENTRE PÁGINAS
  ========================= */

  document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", (e) => {

      const href = link.getAttribute("href");

      // ignora âncoras internas
      if (!href || href.startsWith("#")) return;

      e.preventDefault();

      document.body.style.transition = "opacity 0.4s ease";

      document.body.style.opacity = "0";

      setTimeout(() => {

        window.location.href = href;

      }, 400);

    });

  });

});
