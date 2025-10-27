const typedText = document.querySelector(".typing-text");
const text = "Charuthi Arul";
let index = 0;

function type() {
  if(index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}

document.addEventListener("DOMContentLoaded", type);
