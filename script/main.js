const hero = document.querySelector(".hero");

function setupPlayNowButton() {
  const playNowBtn = document.getElementById("play-now");
  if (!playNowBtn) return;

  playNowBtn.addEventListener("click", async () => {
    const ip = playNowBtn.dataset.ip;
    
    try {
      await navigator.clipboard.writeText(ip);
      
      const originalText = playNowBtn.querySelector(".btn-text").textContent;
      playNowBtn.querySelector(".btn-text").textContent = "Skopírované!";
      playNowBtn.classList.add("copied");
      
      setTimeout(() => {
        playNowBtn.querySelector(".btn-text").textContent = originalText;
        playNowBtn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
}

function setupCalendarCountdowns() {
  const countdownElements = document.querySelectorAll(".calendar-countdown");
  
  function updateCountdown(element) {
    const dateString = element.dataset.date;
    const targetDate = new Date(dateString);
    
    function update() {
      const now = new Date();
      const diff = targetDate - now;
      
      if (diff <= 0) {
        element.textContent = "Už sa to deje!";
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      
      element.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
    
    update();
    setInterval(update, 1000);
  }
  
  countdownElements.forEach(el => updateCountdown(el));
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function parallaxHero() {
  if (!hero) return;
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.22;
    hero.style.transform = `translateY(${offset * 0.5}px)`;
  });
}

function init() {
  setupPlayNowButton();
  setupCalendarCountdowns();
  revealOnScroll();
  parallaxHero();
}

document.addEventListener("DOMContentLoaded", init);