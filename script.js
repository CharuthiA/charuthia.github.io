document.querySelectorAll('.nav-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const links = btn.parentElement.querySelector('.nav-links');
    links.classList.toggle('open');
  });
});
