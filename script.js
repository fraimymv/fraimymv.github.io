const langToggle = document.getElementById("lang-toggle");
const btnCV = document.getElementById("btn-cv");
let isSpanish = true;

function updateLanguage() {
  if (isSpanish) {
    btnCV.href = "docs/FraimyMendezVasquez_CV.pdf";
    btnCV.textContent = "Descargar CV";
    langToggle.textContent = "EN";
  } else {
    btnCV.href = "docs/FraimyMendezVasquez_Resume.pdf";
    btnCV.textContent = "Download Resume";
    langToggle.textContent = "ES";
  }

  // Cambiar textos en toda la página según atributo data-lang-es / data-lang-en
  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    el.textContent = isSpanish ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
  });
}

// Inicializar idioma al cargar la página
updateLanguage();

langToggle.addEventListener("click", () => {
  isSpanish = !isSpanish;
  updateLanguage();
});
