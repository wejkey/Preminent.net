document.addEventListener("DOMContentLoaded", () => {
  const navTargets = document.querySelectorAll("[data-navbar]");
  if (!navTargets.length) return;

  const isHome =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  const anchor = (hash) => (isHome ? hash : `index.html${hash}`);
  const discordLink = "https://discord.preminent.net";

  const navbar = `
    <div class="logo">
      <img src="assets/images/Preminent.png" alt="Preminent Network mark">
      <div class="logo-text">
        <strong>Preminent Network</strong>
      </div>
    </div>
    <nav class="nav">
      <a href="${anchor("#home")}">Home</a>
      <a href="${anchor("#overview")}">About</a>
      <a href="${anchor("#timeline")}">Timeline</a>
      <a href="${anchor("#community")}">Community</a>
      <a href="team.html">Team</a>
      <a href="${discordLink}">Discord</a>
    </nav>
    <div class="top-actions">
      <button class="cta" type="button">Launch: Aug 1, 2026</button>
    </div>
  `;

  navTargets.forEach((target) => {
    target.innerHTML = navbar;
  });
});