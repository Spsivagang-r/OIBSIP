document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainMenu = document.getElementById('mainMenu');
  if (menuToggle && mainMenu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mainMenu.style.display = expanded ? 'none' : 'flex';
      menuToggle.textContent = expanded ? '☰' : '✕';
    });
    // close menu when clicking a link (mobile)
    mainMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 880) {
        mainMenu.style.display = 'none';
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    }));
  }

  // Read more toggle
  const readMoreBtn = document.getElementById('readMoreBtn');
  if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
      const expanded = readMoreBtn.getAttribute('aria-expanded') === 'true';
      if (!expanded) {
        showMoreText();
        readMoreBtn.textContent = 'Show less';
        readMoreBtn.setAttribute('aria-expanded', 'true');
      } else {
        hideMoreText();
        readMoreBtn.textContent = 'Read more';
        readMoreBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Top button
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Typewriter effect (simple)
  const typeEl = document.querySelector('.typewriter');
  if (typeEl) {
    const text = typeEl.dataset.text || typeEl.textContent;
    typeEl.textContent = '';
    let i = 0;
    (function type() {
      if (i <= text.length) {
        typeEl.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 30);
      }
    })();
  }

  // Slight fade-in for images when they load
  document.querySelectorAll('img').forEach(img => {
    img.style.opacity = 0;
    img.addEventListener('load', () => {
      img.style.transition = 'opacity .6s ease';
      img.style.opacity = 1;
    });
    // if image is already cached and loaded:
    if (img.complete) {
      img.style.opacity = 1;
    }
  });
});

/* helper functions included below so content can be toggled without heavy DOM changes */
function showMoreText() {
  const lead = document.getElementById('leadParagraph');
  if (!lead) return;
  lead.insertAdjacentHTML('beforeend',
    `<div id="extraText" style="margin-top:.8rem;color:#dce9ff">
      <strong>Early life:</strong> Add a 1-2 sentence summary about beginnings. <br>
      <strong>Achievements:</strong> Bullet a few notable accomplishments to celebrate.
    </div>`);
}

function hideMoreText() {
  const extra = document.getElementById('extraText');
  if (extra) extra.remove();
}
