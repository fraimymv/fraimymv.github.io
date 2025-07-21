const langToggle = document.getElementById("lang-toggle");
const spanishElements = document.querySelectorAll(".lang[data-lang='es']");
const englishElements = document.querySelectorAll(".lang[data-lang='en']");

let isSpanish = true;

function updateLanguage() {
  spanishElements.forEach((el) => {
    el.classList.toggle("active", isSpanish);
  });
  englishElements.forEach((el) => {
    el.classList.toggle("active", !isSpanish);
  });
  langToggle.textContent = isSpanish ? "EN" : "ES";
  langToggle.setAttribute(
    "aria-label",
    isSpanish ? "Cambiar a inglés" : "Cambiar a español"
  );
}

langToggle.addEventListener("click", () => {
  isSpanish = !isSpanish;
  updateLanguage();
});

// Inicializa en español
updateLanguage();
