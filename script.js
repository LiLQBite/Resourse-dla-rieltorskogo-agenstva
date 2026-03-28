
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      mobileToggle.innerHTML = mobileMenu.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
  }

  const mobileLinks = document.querySelectorAll('.nav__link-mobile');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('active');
      if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
      contactForm.reset();
    });
  }

  const callbackButtons = document.querySelectorAll('.header__callback-button');
  callbackButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Оставьте ваш номер телефона, и мы перезвоним вам в течение 15 минут!');
    });
  });

  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.advantage-item, .offer-card, .agent-card');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  document.querySelectorAll('.advantage-item, .offer-card, .agent-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
