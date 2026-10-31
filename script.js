const introVideo = document.getElementById('introVideo');
const unmuteBtn = document.getElementById('unmuteBtn');
const ctaBtn = document.getElementById('ctaBtn');
const introSection = document.getElementById('introSection');
const navbar = document.getElementById('navbar');
const projectsSection = document.getElementById('projectsSection');
const projectsScroll = document.getElementById('projectsScroll');
const seeMoreBtn = document.getElementById('seeMoreBtn');

let isMuted = true;

unmuteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    introVideo.muted = isMuted;
    
    const iconElement = unmuteBtn.querySelector('i');
    const textSpan = unmuteBtn.querySelector('span');
    
    if (isMuted) {
        iconElement.setAttribute('data-lucide', 'volume-x');
        textSpan.textContent = 'UNMUTE';
    } else {
        iconElement.setAttribute('data-lucide', 'volume-2');
        textSpan.textContent = 'MUTE';
    }
    lucide.createIcons();
});

ctaBtn.addEventListener('click', () => {
    introSection.style.transition = 'opacity 0.5s ease';
    introSection.style.opacity = '0';
    
    setTimeout(() => {
        introSection.style.display = 'none';
        const contentSection = document.querySelector('.content');
        if (contentSection) {
            window.scrollTo({ top: contentSection.offsetTop, behavior: 'smooth' });
        }
    }, 500);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (projectsSection) {
        const projectsRect = projectsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (projectsRect.top < windowHeight * 0.8) {
            projectsSection.classList.add('visible');
        }
    }
});

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(newCount) {
    cartCount = newCount;
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function addToCart() {
    updateCartCount(cartCount + 1);
}

if (seeMoreBtn && projectsScroll) {
    seeMoreBtn.addEventListener('click', () => {
        projectsScroll.scrollBy({
            left: 360,
            behavior: 'smooth'
        });
    });
}

lucide.createIcons();