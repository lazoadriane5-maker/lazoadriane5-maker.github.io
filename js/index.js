document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("section.glass").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

const text = "Hey, I’m Adriane Lazo 👋";
const header = document.querySelector(".hero-text h2");
header.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    header.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();
