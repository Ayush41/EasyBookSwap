  // Hamburger Menu Functionality
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  }));

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Form Submission
  const form = document.querySelector('.waitlist-form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      alert(`Thank you for joining our waitlist! We'll keep you updated at ${email}`);
      form.reset();
  });

  // Scroll Reveal Animation
  window.addEventListener('scroll', reveal);

  function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var revealTop = reveals[i].getBoundingClientRect().top;
          var revealPoint = 150;

          if (revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add('active');
          } else {
              reveals[i].classList.remove('active');
          }
      }
  }