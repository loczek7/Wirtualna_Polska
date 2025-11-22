// Search functionality
const searchInput = document.querySelector('.header__search-input');
if (searchInput) {
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const searchTerm = this.value.trim();
      if (searchTerm) {
        alert(`Szukanie: "${searchTerm}"`);
      }
    }
  });
}

// Smooth scroll for anchor links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe news articles for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.news-article');
  articles.forEach((article, index) => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    article.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(article);
  });

  // Mobile menu toggle (if needed in future)
  const categoryItems = document.querySelectorAll('.category-menu__item');
  categoryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Add active state
      categoryItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Handle action buttons
const actionButtons = document.querySelectorAll('.header__action-btn');
actionButtons.forEach(button => {
  button.addEventListener('click', function() {
    const text = this.querySelector('span').textContent;
    alert(`Funkcja "${text}" - wkrótce dostępna!`);
  });
});

// Image lazy loading fallback for older browsers
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for older browsers
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

console.log('Portal informacyjny załadowany pomyślnie!');



/* pogoda */

/* pogoda — OpenWeather: ikona + temperatura (WP-like) */
(() => {
  // 1) KONFIG
  const OPENWEATHER_KEY = '0a13b4073062f47bfb4149852ce1b6ae'; // Twój klucz
  const DEFAULT_CITY = 'Warszawa';

  const apiUrl = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_KEY}&units=metric&lang=pl`;

  const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

  // 2) ZNAJDŹ MIEJSCE I WSTAW WIDGET (po lewej od searcha)
  const headerSearch = document.querySelector('.header__search');
  if (!headerSearch) return;

  const widget = document.createElement('div');
  widget.className = 'wp-weather';
  widget.innerHTML = `
    <img class="wp-weather__icon" alt="ikona pogody" />
    <div class="wp-weather__content">
      <div class="wp-weather__city" aria-live="polite">${DEFAULT_CITY}</div>
      <div class="wp-weather__chev">▾</div>
      <div class="wp-weather__temp"><span class="wpw-temp">–</span>°</div>
    </div>
    <div class="wp-weather__form" role="dialog" aria-label="Wybierz miasto">
      <input class="wp-weather__input" type="text" placeholder="Miasto w Polsce" />
      <button class="wp-weather__submit" title="Szukaj" aria-label="Szukaj">🔍</button>
    </div>
  `;
  headerSearch.parentElement.insertBefore(widget, headerSearch);

  // 3) REFERENCJE
  const iconEl = widget.querySelector('.wp-weather__icon');
  const cityEl = widget.querySelector('.wp-weather__city');
  const tempEl = widget.querySelector('.wpw-temp');
  const form = widget.querySelector('.wp-weather__form');
  const input = widget.querySelector('.wp-weather__input');
  const submitBtn = widget.querySelector('.wp-weather__submit');
  const chev = widget.querySelector('.wp-weather__chev');

  // 4) POBIERANIE I RENDER
  async function loadCity(city) {
    try {
      tempEl.textContent = '…';
      const res = await fetch(apiUrl(city));
      if (!res.ok) throw new Error(`API: ${res.status}`);
      const data = await res.json();

      const tempC = Math.round(data.main.temp);
      const icon = data.weather && data.weather[0] ? data.weather[0].icon : '01d';
      const name = data.name || city;

      cityEl.textContent = name;
      tempEl.textContent = String(tempC);
      iconEl.src = iconUrl(icon);
      iconEl.alt = data.weather && data.weather[0] ? data.weather[0].description : 'Pogoda';

      form.classList.remove('open');
    } catch (err) {
      // delikatny fallback — nie psujemy UI
      tempEl.textContent = '–';
      iconEl.src = iconUrl('10d');
      iconEl.alt = 'Brak danych';
      console.warn('Weather error:', err);
    }
  }

  // 5) INTERAKCJE
  const toggleForm = () => form.classList.toggle('open');
  cityEl.addEventListener('click', toggleForm);
  chev.addEventListener('click', toggleForm);
  document.addEventListener('click', (e) => {
    if (!widget.contains(e.target)) form.classList.remove('open');
  });

  function submitCity() {
    const q = (input.value || '').trim();
    if (q) loadCity(q);
  }
  submitBtn.addEventListener('click', (e) => { e.preventDefault(); submitCity(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); submitCity(); } });

  // 6) START — domyślnie Warszawa
  loadCity(DEFAULT_CITY);
})();