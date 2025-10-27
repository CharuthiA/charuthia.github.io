// HERO TYPING EFFECT WITH BLINKING CURSOR
const typedText = document.querySelector(".typing-text");
const text = "Charuthi Arul";
let index = 0;
let deleting = false;
let delay = 150;

function type() {
  if(!deleting) {
    typedText.textContent += text.charAt(index);
    index++;
    if(index === text.length) {
      deleting = true;
      delay = 1000; // pause at end
    } else {
      delay = 150;
    }
  } else {
    typedText.textContent = text.substring(0, index - 1);
    index--;
    if(index === 0) {
      deleting = false;
      delay = 500; // pause before typing again
    } else {
      delay = 75;
    }
  }
  setTimeout(type, delay);
}

// Add blinking cursor
typedText.insertAdjacentHTML("afterend", '<span class="cursor">|</span>');

document.addEventListener("DOMContentLoaded", type);

// SMOOTH SCROLL FOR NAV LINKS
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 60,
      behavior: "smooth"
    });
  });
});

// FADE-IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
