function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add("visible");
    }
  });
}

const options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(onEntry, options);

document.querySelectorAll(".section, .hero").forEach((el) => {
  observer.observe(el);
});
