const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const typingText = document.querySelector('.typing-text');

if (typingText) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fallbackWords = ['Biomedical Engineer', 'Robotics Enthusiast', 'Product Developer', 'MedTech Innovator'];
  const words = (typingText.dataset.words || '')
    .split('|')
    .map((word) => word.trim())
    .filter(Boolean);
  const typingWords = words.length > 0 ? words : fallbackWords;

  if (prefersReducedMotion || typingWords.length <= 1) {
    typingText.textContent = typingWords[0] || typingText.textContent;
  } else {
    let wordIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = typingWords[wordIndex];
      typingText.textContent = currentWord.slice(0, characterIndex);

      if (!isDeleting && characterIndex < currentWord.length) {
        characterIndex += 1;
        window.setTimeout(type, 72);
        return;
      }

      if (!isDeleting && characterIndex === currentWord.length) {
        isDeleting = true;
        window.setTimeout(type, 1450);
        return;
      }

      if (isDeleting && characterIndex > 0) {
        characterIndex -= 1;
        window.setTimeout(type, 38);
        return;
      }

      isDeleting = false;
      wordIndex = (wordIndex + 1) % typingWords.length;
      window.setTimeout(type, 220);
    };

    type();
  }
}

const revealElements = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
