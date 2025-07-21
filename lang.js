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

