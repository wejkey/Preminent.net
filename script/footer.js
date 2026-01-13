document.addEventListener("DOMContentLoaded", () => {
  const footerTargets = document.querySelectorAll("[data-footer]");
  if (!footerTargets.length) return;

  const isHome =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

  const anchor = (hash) => (isHome ? hash : `index.html${hash}`);
  const discordLink = "https://discord.preminent.net";

  const footer = `
    <div class="footer-brand">
      <div class="logo">
        <img src="assets/images/Preminent.png" alt="Preminent Network">
        <div class="logo-text">
          <strong>Preminent Network</strong>
        </div>
      </div>
      <p>© 2026 Preminent Network Tím. Všetky práva vyhradené.</p>
    </div>
    <div class="footer-columns">
      <div class="footer-col">
        <h4>Preminent</h4>
        <a href="${anchor("#home")}">Domov</a>
        <a href="${anchor("#blog")}">Blog</a>
        <a href="team.html">Tím</a>
      </div>
      <div class="footer-col">
        <h4>Dôležité</h4>
        <a href="licenses.html">Licencie</a>
        <a href="tos.html">Podmienky používania</a>
      </div>
      <div class="footer-col">
        <h4>Poznámky</h4>
        <a href="list.html">Serverové listy</a>
      </div>
      <div class="footer-col">
        <h4>Kontakt</h4>
        <div class="contact-links">
          <a aria-label="Discord" href="${discordLink}"><i class="fa-brands fa-discord"></i></a>
          <a aria-label="Instagram" href="https://www.instagram.com/preminentnet"><i class="fa-brands fa-instagram"></i></a>
          <a aria-label="Email" href="mailto:contact@preminent.net"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </div>
  `;

  footerTargets.forEach((target) => {
    target.innerHTML = footer;
  });
});