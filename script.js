// ---------- Typing Effect ----------
const typedText = document.getElementById("typed-text");
const words = ["a Biomedical Engineer", "an R&D Enthusiast", "a Problem Solver"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  if (i >= words.length) i = 0;
  currentWord = words[i];
  if (!isDeleting) {
    typedText.textContent = currentWord.slice(0, j + 1);
    j++;
    if (j === currentWord.length) { isDeleting = true; setTimeout(type, 1000); return; }
  } else {
    typedText.textContent = currentWord.slice(0, j - 1);
    j--;
    if (j === 0) { isDeleting = false; i++; }
  }
  setTimeout(type, isDeleting ? 50 : 150);
}
type();

// ---------- Scroll Fade-in ----------
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// ---------- Hamburger Menu ----------
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});
