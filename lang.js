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

  // Cambiar href del botón de CV según idioma
  const cvBtn = document.getElementById("btn-cv");
  if (cvBtn) {
    cvBtn.setAttribute(
      "href",
      lang === "es"
        ? "docs/FraimyMendezVasquez_CV.pdf"
        : "docs/FraimyMendezVasquez_Resume.pdf"
    );
  }
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", () => {
  updateLanguage(currentLang);

  langToggleBtn.addEventListener("click", () => {
    updateLanguage(currentLang === "es" ? "en" : "es");
  });

  // Menú hamburguesa
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



