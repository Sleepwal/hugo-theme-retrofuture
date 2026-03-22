document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('show');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    const tocLinks = document.querySelectorAll('.toc-nav a');
    const headings = document.querySelectorAll('.article-content h2, .article-content h3, .article-content h4');
    
    if (tocLinks.length > 0 && headings.length > 0) {
        const tocObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const tocLink = document.querySelector(`.toc-nav a[href="#${id}"]`);
                
                if (tocLink) {
                    if (entry.isIntersecting) {
                        tocLinks.forEach(link => link.classList.remove('active'));
                        tocLink.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-20% 0px -80% 0px' });
        
        headings.forEach(heading => tocObserver.observe(heading));
    }
    
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
    
    console.log('%c◈ RetroFuture Theme Loaded ◈', 
        'color: #00fff7; font-family: monospace; font-size: 14px; text-shadow: 0 0 10px #00fff7;');
});
