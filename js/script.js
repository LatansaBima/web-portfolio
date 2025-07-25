// Button interaktif untuk scroll ke atas
const scrollBtn = document.getElementById("scrollTopBtn");
// Button Scroll Logic
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});
// Button Scroll Behavior
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark Mode Toggle
const darkBtn = document.getElementById("darkMode");
// Dark Mode Logic
darkBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
// Load preferensi dark mode saat muat halaman
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Typing Writer Effect
const text = "Halo, Saya Latansa Bima Amanta";
const target = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // kecepatan mengetik (ms)
  } else {
    // Setelah selesai typing, hilangkan cursor
    setTimeout(() => {
      target.classList.remove("typing-cursor");
    }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Delay sebelum mulai typing
  setTimeout(typeText, 1000);
});

// Script Titik Otomatis di Timeline Karir
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#timeline-items");
  const items = container.querySelectorAll("div.flex");
  const line = document.querySelector("#timeline .relative");

  items.forEach((item, index) => {
    const dot = document.createElement("div");
    dot.className = `
        absolute left-1/2 transform -translate-x-1/2
        w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-20
        `;

    const ping = document.createElement("div");
    ping.className = `
        absolute inset-0 rounded-full bg-blue-400 opacity-75
        animate-ping-slow
        `;

    // Dapatkan posisi card
    const topOffset = item.offsetTop + item.offsetHeight / 2;
    dot.style.top = `${topOffset}px`;

    line.appendChild(dot);
    dot.appendChild(ping);
  });
});

// TABS UI
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content-item");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // Reset button style
    tabButtons.forEach((btn) => {
      btn.classList.remove("bg-gray-300", "dark:bg-gray-700");
      btn.classList.add("bg-gray-200", "dark:bg-gray-600");
    });

    // Active style
    button.classList.remove("bg-gray-200", "dark:bg-gray-600");
    button.classList.add("bg-gray-300", "dark:bg-gray-700");

    // Show correct content
    tabContents.forEach((content) => {
      content.classList.add("hidden");
    });
    document.getElementById(target).classList.remove("hidden");
  });
});

// Modal Image
function openModal(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalDesc = document.getElementById("modalDesc");

  modalImg.src = img.src;
  modalDesc.textContent =
    img.getAttribute("data-desc") || "Tidak ada deskripsi.";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

// ESC to close modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// Parallax Effect untuk Header
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const header = document.querySelector("header");
  const parallaxElements = document.querySelectorAll(".parallax-element");

  // Parallax effect untuk header
  if (header) {
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
  }

  // Parallax effect untuk elemen lainnya
  parallaxElements.forEach((element, index) => {
    const speed = 0.2 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Smooth reveal on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in");
    }
  });
}, observerOptions);

// Observe semua elemen dengan class 'reveal'
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");
  revealElements.forEach((el) => observer.observe(el));
});
