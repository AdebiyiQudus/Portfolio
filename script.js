document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thanks for reaching out, ' + name + '!');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// const menuToggle = documentriigi.getElementById('menu-toggle');

const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const isOpen = navLinks.classList.contains('active');

  hamburgerIcon.style.display = isOpen ? 'none' : 'inline-block';
  closeIcon.style.display = isOpen ? 'inline-block' : 'none';
});
