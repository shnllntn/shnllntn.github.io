function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  // Animations on page load
  document.addEventListener("DOMContentLoaded", function () {
  
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
  
    if (header) {
      header.style.opacity = "1";
      header.style.transform = "translateY(0)";
    }
  
    if (main) {
      main.style.opacity = "1";
      main.style.transform = "translateY(0)";
    }
  
    if (footer) {
      footer.style.opacity = "1";
      footer.style.transform = "translateY(0)";
    }
  });
  