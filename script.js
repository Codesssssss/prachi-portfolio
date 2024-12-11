// Smooth Scroll Navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust scroll position to avoid overlap with fixed sidebar
        behavior: 'smooth',
      });
    });
  });
  
  // Profile Fade-In Animation on Load
  window.addEventListener('load', () => {
    const profileHeader = document.querySelector('.profile-header');
    setTimeout(() => {
      profileHeader.style.opacity = 1;
      profileHeader.style.transform = 'translateY(0)';
    }, 100); // Delay animation to ensure everything loads properly
  });
  
