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
