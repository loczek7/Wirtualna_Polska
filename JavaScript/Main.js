// ...existing code...
(() => {
    const qs = (sel, ctx = document) => ctx.querySelector(sel);
    const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    function setFooterYear() {
        const p = qs('footer .footer-content p');
        if (p) p.textContent = `© ${new Date().getFullYear()} Wirtualna Polska`;
    }

    function createNewsItem({title, summary, img}) {
        const article = document.createElement('article');
        article.className = 'news-item';

        const imgEl = document.createElement('img');
        imgEl.alt = title;
        imgEl.dataset.src = img || '../Images/Logo.webp';
        imgEl.className = 'lazy';
        article.appendChild(imgEl);

        const h3 = document.createElement('h3');
        h3.textContent = title;
        article.appendChild(h3);

        const p = document.createElement('p');
        p.textContent = summary;
        article.appendChild(p);

        return article;
    }

    function renderNews(items = []) {
        const grid = qs('.news-grid');
        if (!grid) return;
        grid.innerHTML = '';
        items.forEach(it => grid.appendChild(createNewsItem(it)));
        lazyLoadImages();
    }

    function sampleNews(count = 6) {
        const out = [];
        for (let i = 1; i <= count; i++) {
            out.push({
                title: `Nagłówek ${i}`,
                summary: `Krótki opis wiadomości numer ${i}.`,
                img: '../Images/Logo.webp'
            });
        }
        return out;
    }

    function lazyLoadImages() {
        const images = qsa('img.lazy');
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach(en => {
                    if (en.isIntersecting) {
                        const img = en.target;
                        if (img.dataset.src) img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        obs.unobserve(img);
                    }
                });
            }, {rootMargin: '50px 0px', threshold: 0.01});
            images.forEach(img => io.observe(img));
        } else {
            images.forEach(img => {
                if (img.dataset.src) img.src = img.dataset.src;
                img.classList.remove('lazy');
            });
        }
    }

    function initNavToggle() {
        const nav = qs('.main-nav');
        const toggle = qs('.nav-toggle');
        if (!nav || !toggle) return;
        toggle.addEventListener('click', () => nav.classList.toggle('open'));
    }

    function init() {
        setFooterYear();
        renderNews(sampleNews(6));
        initNavToggle();
        window.addEventListener('resize', () => lazyLoadImages());
    }

    document.addEventListener('DOMContentLoaded', init);
})();
// ...existing code...