document.addEventListener("DOMContentLoaded", () => {
  // Toggle idioma
  const langToggleBtn = document.getElementById("lang-toggle");
  let currentLang = "es";

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-lang-es]").forEach(el => {
      el.textContent = lang === "es" ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
    });

    langToggleBtn.textContent = lang === "es" ? "EN" : "ES";

    // Aquí podrías cambiar otros textos/hrefs según idioma
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
});
