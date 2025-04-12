// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Optional: Typing effect for hero section
const typingText = document.querySelector(".typing-text");
if (typingText) {
  const texts = ["Devcation'25..", "Where We Innovate..", "Where We Inspire.."];
  let i = 0,
    j = 0,
    currentText = "",
    isDeleting = false;

  function typeEffect() {
    typingText.innerHTML = currentText + "|";

    if (!isDeleting && j < texts[i].length) {
      currentText += texts[i][j++];
    } else if (isDeleting && j > 0) {
      currentText = currentText.slice(0, --j);
    }

    if (j === texts[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }

  typeEffect();
}

// Optional: Bubble animation if generated dynamically (instead of fixed HTML)
function generateBubbles() {
  const container = document.querySelector(".bubbles");
  if (!container) return;

  for (let i = 0; i < 15; i++) {
    const span = document.createElement("span");
    span.style.left = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 20}s`;
    span.style.width = `${20 + Math.random() * 60}px`;
    span.style.height = span.style.width;
    container.appendChild(span);
  }
}

generateBubbles();

// Optional: Navbar toggle for mobile (if you add a burger menu)
const burger = document.querySelector(".burger-icon");
const nav = document.querySelector(".nav-links");
if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
