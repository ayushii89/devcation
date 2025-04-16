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

// Scroll-triggered reveal for schedule items
const scheduleItems = document.querySelectorAll('.schedule-item');
const inViewItems = document.querySelectorAll('.in-view');
Array.from(inViewItems).forEach(function(element) {
  element.addEventListener('click', (e)=>{
    e.currentTarget.style.opacity = 1;
    e.currentTarget.style.transform = 'translateY(0)';
  });
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.2 });

scheduleItems.forEach(item => observer.observe(item));
document.querySelectorAll('a[href="#schedule"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector("#schedule");
    section.scrollIntoView({ behavior: "smooth" });
  });
});



  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle("open");
    });
  });
const container = document.querySelector('.bubble-container');
const modal = document.getElementById('feedbackModal');
const feedbackInput = document.getElementById('feedbackText');

// Create random bubbles
function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 30 + 30;
  bubble.style.width = bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;

  bubble.onclick = () => {
    modal.classList.add('show');
    bubble.remove();
  };

  container.appendChild(bubble);

  // Remove bubble after float
  setTimeout(() => bubble.remove(), 15000);
}

// Add a new bubble every second
setInterval(createBubble, 1000);

// Handle submission
function submitFeedback() {
  const message = feedbackInput.value.trim();
  if (message) {
    alert("🎉 Thanks for the feedback!\n\n" + message);
    feedbackInput.value = '';
    modal.classList.remove('show');
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const photoGrid = document.getElementById("photoGrid");

  photoGrid.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      const imgSrc = e.target.src;
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");
      overlay.innerHTML = `
        <div class="lightbox-content">
          <img src="${imgSrc}" alt="Expanded Photo" />
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", function () {
        overlay.remove();
      });
    }
  });
});
