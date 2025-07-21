const langToggle = document.getElementById("lang-toggle");
const btnCV = document.getElementById("btn-cv");
let isSpanish = true;

function updateLanguage() {
  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    const es = el.getAttribute("data-lang-es");
    const en = el.getAttribute("data-lang-en");
    el.textContent = isSpanish ? es : en;
  });

  btnCV.href = isSpanish
    ? "docs/FraimyMendezVasquez_CV.pdf"
    : "docs/FraimyMendezVasquez_Resume.pdf";
  langToggle.textContent = isSpanish ? "EN" : "ES";
  btnCV.textContent = isSpanish ? "Descargar CV" : "Download Resume";
}

// Cambiar idioma al hacer click
langToggle.addEventListener("click", () => {
  isSpanish = !isSpanish;
  updateLanguage();
});

// Ejecutar al cargar
updateLanguage();

