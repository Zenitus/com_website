let currentLang = "en";
// Check for saved language on page load
// At the top of your main.js
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  applyLanguage(savedLang);
});

function toggleLanguage() {
  const newLang = currentLang === "en" ? "jp" : "en";
  applyLanguage(newLang);
}

function applyLanguage(lang) {
  const enElements = document.querySelectorAll(".lang-en");
  const jpElements = document.querySelectorAll(".lang-jp");
  const toggleBtn = document.getElementById("lang-toggle");

  if (lang === "jp") {
    enElements.forEach((el) => el.classList.add("d-none"));
    jpElements.forEach((el) => el.classList.remove("d-none"));
    if (toggleBtn) toggleBtn.innerText = "English";
    currentLang = "jp";
  } else {
    jpElements.forEach((el) => el.classList.add("d-none"));
    enElements.forEach((el) => el.classList.remove("d-none"));
    if (toggleBtn) toggleBtn.innerText = "日本語";
    currentLang = "en";
  }
  // Save the choice
  localStorage.setItem("preferredLang", lang);
}

// --- IMPROVED SCROLLSPY FOR MOBILE & DESKTOP ---
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const options = {
  // rootMargin: 'top right bottom left'
  // -10% from top ensures the section is "active" even if partially under the navbar
  rootMargin: "-15% 0px -70% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");

      // Clear all active classes
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the specific link
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
const menuToggle = document.getElementById("mainNavbar");

navLinks.forEach((l) => {
  l.addEventListener("click", (e) => {
    // Handle Mobile Collapse
    const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
    if (bsCollapse) {
      bsCollapse.hide();
    }
    // Inside your click listener:
    navLinks.forEach((link) => link.classList.remove("active"));
    l.classList.add("active");

    // Smooth Scroll adjustment
    const href = l.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// --- DYNAMIC FOOTER YEAR ---
document.getElementById("year").textContent = new Date().getFullYear();
// main.js Line 87 fix:
document.addEventListener("DOMContentLoaded", function () {
  // Only run if the Swiper library is actually loaded
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".single-testimonial-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.error("Swiper library not found. Please check your CDN link.");
  }
});

// Wrap your code starting at line 110:
window.onload = function () {
  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".single-testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    console.warn("Swiper not loaded yet - retrying in 500ms");
    // Optional: wait a bit and try one more time
  }
};

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 200px from the top, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("btn-back-to-top");

  window.addEventListener("scroll", function () {
    // Show button after scrolling down 300px
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("active");
    } else {
      backToTopBtn.classList.remove("active");
    }
  });

  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // 1. Add the class that starts the 0.5s CSS transition
  preloader.classList.add("preloader-hidden");

  // 2. Fully remove it from the layout after the animation ends
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // matches the 0.5s transition in CSS
});
