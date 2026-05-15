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
     FECHAR MENU AO CLICAR
  ========================= */

  const menuLinks = document.querySelectorAll("nav a");

  menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      }

    });

  });

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
     REVEAL EFFECT
  ========================= */

  const revealElements = document.querySelectorAll(".reveal");

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

    revealObserver.observe(el);

  });

  /* =========================
     LOADER REMOVE
  ========================= */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {

    setTimeout(() => {

      if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

      }

    }, 1500);

  });

  /* =========================
     SMOOTH LINKS
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if (target) {

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

});
