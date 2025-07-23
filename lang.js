document.addEventListener("DOMContentLoaded", () => {
  // Toggle idioma
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = "es";

  function actualizarFechaActualizacion(idioma = "es") {
    const fecha = new Date("2025-07-22"); // Cambia esta fecha si quieres
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString(idioma === "en" ? "en-US" : "es-ES", opciones);

    const texto = idioma === "en"
      ? `Last updated: ${fechaFormateada}`
      : `Última actualización: ${fechaFormateada}`;

    document.getElementById("ultima-actualizacion").textContent = texto;
  }

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang-es]").forEach(el => {
      el.textContent = lang === "es" ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
    });

    langToggleBtn.textContent = lang === "es" ? "EN" : "ES";

    // Actualizar texto de fecha
    actualizarFechaActualizacion(lang);
  }

  langToggleBtn.addEventListener("click", () => {
    updateLanguage(currentLang === "es" ? "en" : "es");
  });

  updateLanguage(currentLang);

  // Toggle menú hamburguesa
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navMenu.classList.toggle("closed", !isOpen);

    // Actualiza aria-expanded para accesibilidad
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Cambiar color de títulos en experiencia al abrir/cerrar detalles
  document.querySelectorAll('#experience details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      const summarySpan = detail.querySelector('summary span');
      if (detail.open) {
        summarySpan.classList.add('open');
      } else {
        summarySpan.classList.remove('open');
      }
    });
  });

  // Inicializar títulos que ya están abiertos al cargar
  document.querySelectorAll('#experience details[open]').forEach(detail => {
    const summarySpan = detail.querySelector('summary span');
    summarySpan.classList.add('open');
  });
});


