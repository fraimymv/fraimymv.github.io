document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = localStorage.getItem("lang") || "es";

  function actualizarFechaActualizacion(idioma = "es") {
    const fecha = new Date(document.lastModified); // Fecha real de modificación
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString(
      idioma === "en" ? "en-US" : "es-ES",
      opciones
    );

    const texto = idioma === "en"
      ? `Last updated: ${fechaFormateada}`
      : `Última actualización: ${fechaFormateada}`;

    document.getElementById("ultima-actualizacion").textContent = texto;
  }

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang-es]").forEach(el => {
      el.textContent = lang === "es"
        ? el.getAttribute("data-lang-es")
        : el.getAttribute("data-lang-en");
    });

    langToggleBtn.textContent = lang === "es" ? "EN" : "ES";
    actualizarFechaActualizacion(lang);
  }

  langToggleBtn.addEventListener("click", () => {
    updateLanguage(currentLang === "es" ? "en" : "es");
  });

  updateLanguage(currentLang);

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navMenu.classList.toggle("closed", !isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navMenu.classList.add("closed");
      menuToggle.setAttribute("aria-expanded", false);
    });
  });

  document.querySelectorAll("#experience details").forEach(detail => {
    detail.addEventListener("toggle", () => {
      const summarySpan = detail.querySelector("summary span");
      if (detail.open) {
        summarySpan.classList.add("open");
      } else {
        summarySpan.classList.remove("open");
      }
    });
  });

  document.querySelectorAll("#experience details[open]").forEach(detail => {
    const summarySpan = detail.querySelector("summary span");
    summarySpan.classList.add("open");
  });
});



