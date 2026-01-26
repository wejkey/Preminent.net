document.addEventListener('DOMContentLoaded', () => {
  const teamRoot = document.getElementById('team-content');
  const data = window.TEAM_DATA || { Tím: [] };

  function createCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card';

    const avatar = document.createElement('img');
    avatar.src = member.avatar;
    avatar.alt = `${member.name} avatar`;
    avatar.className = 'avatar';

    const meta = document.createElement('div');
    meta.className = 'team-meta';

    const name = document.createElement('div');
    name.className = 'team-name';
    name.textContent = member.name;

    const joined = document.createElement('div');
    joined.className = 'team-joined';
    joined.textContent = `Člen od: ${member.joined}`;

    const role = document.createElement('div');
    role.className = 'team-role';
    role.textContent = member.role;

    meta.append(name, joined, role);

    const bio = document.createElement('p');
    bio.textContent = member.bio;

    const links = document.createElement('div');
    links.className = 'team-links';
    const socials = [
      { icon: 'fa-solid fa-globe', key: 'website', type: 'link' },
      { icon: 'fa-brands fa-github', key: 'github', type: 'link' },
      { icon: 'fa-brands fa-discord', key: 'discord', type: 'copy' },
      { icon: 'fa-solid fa-envelope', key: 'email', type: 'copy' },
    ];

    socials.forEach((item) => {
      const value = member[item.key];
      if (!value) return;

      if (item.type === 'link') {
        const a = document.createElement('a');
        a.href = value.startsWith('http') ? value : `https://${value}`;
        a.target = '_blank';
        a.rel = 'noopener';
        const i = document.createElement('i');
        i.className = item.icon;
        a.appendChild(i);
        links.appendChild(a);
      } else if (item.type === 'email') {
        const a = document.createElement('a');
        a.href = `mailto:${value}`;
        const i = document.createElement('i');
        i.className = item.icon;
        a.appendChild(i);
        links.appendChild(a);
      } else if (item.type === 'copy') {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'icon-copy';
        btn.setAttribute('aria-label', `Copy ${item.key}`);
        const i = document.createElement('i');
        i.className = item.icon;
        btn.appendChild(i);
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(value);

            const live = document.createElement('span');
            live.className = 'sr-only';
            live.setAttribute('role', 'status');
            live.textContent = `${item.key} copied`;
            btn.appendChild(live);
            setTimeout(() => btn.removeChild(live), 1200);
          } catch (e) {

          }
        });
        links.appendChild(btn);
      }
    });

    card.append(avatar, meta, bio, links);
    return card;
  }

  function renderSection(title, members) {
    const section = document.createElement('div');
    section.className = 'team-section';
    const heading = document.createElement('h3');
    heading.textContent = title;
    section.appendChild(heading);

    const grid = document.createElement('div');
    grid.className = 'team-grid';
    members.forEach((member) => grid.appendChild(createCard(member)));
    section.appendChild(grid);
    return section;
  }

  if (teamRoot) {
    teamRoot.appendChild(renderSection('Tím', data.developers));
  }
});