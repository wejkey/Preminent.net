const blogEntries = [
  {
    title: "Zmena plánu",
    tag: "Informácie",
    date: "Január 18, 2026",
    description: "Zverejnenie BETA verzie",
    image: "assets/images/PreminentThumbnail.png",
    link: "blogs.html?post=20250118"
  },
  {
    title: "Začiatok",
    tag: "Informácie",
    date: "Január 1, 2026",
    description: "Základné potrebné info.",
    image: "assets/images/PreminentThumbnail.png",
    link: "blogs.html?post=20250101"
  }
];

function renderBlogs() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  grid.innerHTML = "";

  blogEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "blog-card reveal";

    const image = document.createElement("div");
    image.className = "blog-image";
    image.setAttribute("aria-hidden", "true");
    image.style.backgroundImage = `linear-gradient(135deg, rgba(15,23,42,0.35), rgba(15,23,42,0.2)), url('${entry.image}')`;

    const body = document.createElement("div");
    body.className = "blog-body";

    const tag = document.createElement("span");
    tag.className = "blog-tag";
    tag.textContent = entry.tag;

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const desc = document.createElement("p");
    desc.textContent = entry.description;

    const meta = document.createElement("div");
    meta.className = "blog-meta";

    const date = document.createElement("span");
    date.textContent = entry.date;

    const link = document.createElement("a");
    link.href = entry.link || "#";
    link.textContent = "Čítaj viac →";

    meta.append(date, link);
    body.append(tag, title, desc, meta);
    card.append(image, body);
    grid.append(card);
  });
}

renderBlogs();
document.addEventListener("DOMContentLoaded", renderBlogs);