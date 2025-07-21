console.log("lang.js loaded");
const langToggleBtn = document.getElementById("lang-toggle");
let currentLang = "es";

function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    el.textContent = lang === "es" ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
  });

  // Cambiar texto del botón para mostrar el idioma contrario
  langToggleBtn.textContent = lang === "es" ? "EN" : "ES";
}

// Inicializar idioma al cargar
updateLanguage(currentLang);

langToggleBtn.addEventListener("click", () => {
  updateLanguage(currentLang === "es" ? "en" : "es");
});

// --- MENÚ DESPLEGABLE ---
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("open");
    if (isOpen) {
      navMenu.classList.remove("open");
      navMenu.classList.add("closed");
    } else {
      navMenu.classList.remove("closed");
      navMenu.classList.add("open");
    }
  });
});


