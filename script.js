// Hero typing effect (types once and stays)
const typedText = document.querySelector(".typing-text");
const text = "Charuthi Arul";
let index = 0;
let delay = 150;

function type() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, delay);
  }
}

// Add blinking cursor
typedText.insertAdjacentHTML("afterend", '<span class="cursor">|</span>');

document.addEventListener("DOMContentLoaded", type);

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
