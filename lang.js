document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  const btnCV = document.getElementById("btn-cv");
  let isSpanish = true;

  function updateLanguage() {
    if (isSpanish) {
      btnCV.href = "docs/FraimyMendezVasquez_CV.pdf";
    } else {
      btnCV.href = "docs/FraimyMendezVasquez_Resume.pdf";
    }
    btnCV.textContent = isSpanish
      ? btnCV.getAttribute("data-lang-es")
      : btnCV.getAttribute("data-lang-en");

    document.querySelectorAll("[data-lang-es]").forEach((el) => {
      el.textContent = isSpanish
        ? el.getAttribute("data-lang-es")
        : el.getAttribute("data-lang-en");
    });

    langToggle.textContent = isSpanish ? "EN" : "ES";
  }

  updateLanguage();

  langToggle.addEventListener("click", () => {
    isSpanish = !isSpanish;
    updateLanguage();
  });
});

