const loader = document.getElementById("loader");
const loaderText = document.querySelector(".loader-text");
const hero = document.querySelector(".hero");

function endLoader() {
  if (!loader) return;
  loader.classList.add("hidden");
}

function simulateLoading() {
  if (!loader || !loaderBar) return;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  loaderBar.style.width = "100%";

  if (prefersReduced) {
    endLoader();
    return;
  }

  setTimeout(endLoader, 800);
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const launchDate = new Date("2026-02-28T23:00:00Z");

  function update() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff <= 0) {
      countdownEl.textContent = "Začíname!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    countdownEl.textContent = `${days}d ${hours}h ${mins}m`;
  }

  update();
  setInterval(update, 60 * 1000);
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

function tiltEffects() {
  const tiltCards = document.querySelectorAll(".tilt");
  tiltCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
      card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
      card.style.background = card.dataset.color;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      card.style.background = "var(--surface)";
    });
  });
}

function countStats() {
  const stats = document.querySelectorAll(".stat-number");
  stats.forEach((stat) => {
    const raw = stat.dataset.count;
    const numeric = raw !== undefined && raw !== "" && !isNaN(Number(raw));

    if (!numeric) {
      return;
    }

    const target = Number(raw);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      stat.textContent = current.toLocaleString();
    }, 30);
  });
}

function parallaxHero() {
  if (!hero) return;
  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.22;
    hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
  });
}

function init() {
  simulateLoading();
  startCountdown();
  revealOnScroll();
  tiltEffects();
  countStats();
  parallaxHero();

  skipLoader?.addEventListener("click", endLoader);
}

document.addEventListener("DOMContentLoaded", init);
