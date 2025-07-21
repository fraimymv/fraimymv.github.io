document.addEventListener("DOMContentLoaded", () => {
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

    document.querySelectorAll("[data-lang-es]").forEach((el) => {
      el.textContent = isSpanish
        ? el.getAttribute("data-lang-es")
        : el.getAttribute("data-lang-en");
    });
  }

  updateLanguage();

  langToggle.addEventListener("click", () => {
    isSpanish = !isSpanish;
    updateLanguage();
  });
});

