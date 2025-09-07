document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(sec => {
  sec.classList.add('animate__animated');
  observer.observe(sec);
});
