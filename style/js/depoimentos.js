(function () {
  const track  = document.getElementById('carrossel-track');
  const dotsEl = document.getElementById('carrosselDots');
  const cards  = track.querySelectorAll('#carrossel-card');

  function perPage() { return window.innerWidth <= 720 ? 1 : 4; }
  let current = 0;

  function totalPages() { return Math.ceil(cards.length / perPage()); }

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < totalPages(); i++) {
      const btn = document.createElement('button');
      btn.className = 'dot' + (i === current ? ' active' : '');
      btn.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(btn);
    }
  }

  function goTo(page) {
    current = Math.max(0, Math.min(page, totalPages() - 1));
    const cardWidth = cards[0].offsetWidth;
    const offset = current * perPage() * (cardWidth + 16);
    track.style.transform = `translateX(-${offset}px)`;
    dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
  });

  window.addEventListener('resize', () => { buildDots(); goTo(0); });
  buildDots();
  goTo(0);
})();