document.addEventListener("DOMContentLoaded", () => {
  const navTargets = document.querySelectorAll("[data-navbar]");
  if (!navTargets.length) return;

  const isHome =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  const anchor = (hash) => {
    if (hash.startsWith("index.html") || hash.includes(".html")) {
      return hash;
    }
    return isHome ? hash : `index.html${hash}`;
  };
  const discordLink = "https://discord.preminent.net";

  const navbar = `
    <div class="logo">
      <img src="assets/images/Preminent.png" alt="Preminent Network">
      <div class="logo-text">
        <strong>Preminent Network</strong>
      </div>
    </div>
    <nav class="nav">
      <a href="${anchor("index.html")}">Domov</a>
      <a href="${anchor("#blog")}">Blogy</a>
      <a href="team.html">Tím</a>
      <a href="${discordLink}">Discord</a>
    </nav>
    <div class="top-actions">
      <button class="cta" type="button">Aktualizácia: Január 23, 2026</button>
    </div>
  `;

  navTargets.forEach((target) => {
    target.innerHTML = navbar;
  });
});