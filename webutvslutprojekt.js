const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', function() {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('open', isOpen);
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', function(e) {
  if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
});

const searchBtn   = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const searchMsg   = document.getElementById('searchMsg');

function handleSearch() {
  const query = searchInput.value.trim();

  if (!query) {
    searchMsg.textContent = 'Skriv ett sökord för att hitta events.';
    searchMsg.style.color = '#e87447';
  } else {
    searchMsg.textContent = `Söker efter "${query}"… Tar dig till events-sidan!`;
    searchMsg.style.color = 'var(--accent)';
    setTimeout(() => window.location.href = 'events.html', 1200);
  }
}

searchBtn.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    handleSearch();
  }
});
