// TYPING EFFECT
const typedText = document.querySelector(".typing-text");
const text = "Charuthi Arul";
let index = 0;
let deleting = false;
let delay = 150;

function type() {
  if (!deleting) {
    typedText.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      deleting = true;
      delay = 1000;
    } else delay = 150;
  } else {
    typedText.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      deleting = false;
      delay = 500;
    } else delay = 75;
  }
  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", type);

// SMOOTH SCROLL
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  });
});
