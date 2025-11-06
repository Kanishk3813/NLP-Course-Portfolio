// Fade-in animation for sections as user scrolls
const sections = document.querySelectorAll(".fade-section");

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
