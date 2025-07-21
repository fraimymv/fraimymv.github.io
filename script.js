const langToggle = document.getElementById("lang-toggle");
const btnCV = document.getElementById("btn-cv");
let isSpanish = true;

function updateLanguage() {
  // Cambiar texto y link del botón CV
  if (isSpanish) {
    btnCV.href = "docs/FraimyMendezVasquez_CV.pdf";
  } else {
    btnCV.href = "docs/FraimyMendezVasquez_Resume.pdf";
  }
  btnCV.textContent = isSpanish
    ? btnCV.getAttribute("data-lang-es")
    : btnCV.getAttribute("data-lang-en");

  // Cambiar textos con data-lang-es / data-lang-en
  document.querySelectorAll("[data-lang-es]").forEach((el) => {
    el.textContent = isSpanish ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
  });

  // Cambiar botón idioma (mostrar idioma al que cambia)
  langToggle.textContent = isSpanish ? "EN" : "ES";
}

// Al cargar la página
updateLanguage();

// Al hacer click en botón idioma
langToggle.addEventListener("click", () => {
  isSpanish = !isSpanish;
  updateLanguage();
});

