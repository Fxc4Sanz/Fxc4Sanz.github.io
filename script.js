AOS.init({ once: true, duration: 1000, easing: 'ease-in-out' });

    document.getElementById('menu-btn').addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuBtn = document.getElementById('menu-btn');
      mobileMenu.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
    });

    const images = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    images.forEach(img => observer.observe(img));