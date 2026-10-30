const introVideo = document.getElementById('introVideo');
const unmuteBtn = document.getElementById('unmuteBtn');
const ctaBtn = document.getElementById('ctaBtn');
const introSection = document.getElementById('introSection');
const mainContent = document.getElementById('mainContent');
const navbar = document.getElementById('navbar');
const projectsSection = document.getElementById('projectsSection');
const projectsScroll = document.getElementById('projectsScroll');
const seeMoreBtn = document.querySelector('.see-more-btn');

let isMuted = true;

unmuteBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    introVideo.muted = isMuted;
    
    if (isMuted) {
        unmuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
            <span>UNMUTE</span>
        `;
    } else {
        unmuteBtn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
            <span>MUTE</span>
        `;
    }
});

ctaBtn.addEventListener('click', () => {
    introSection.style.transition = 'opacity 0.5s ease';
    introSection.style.opacity = '0';
    
    setTimeout(() => {
        introSection.style.display = 'none';
        mainContent.classList.add('active');
        window.scrollTo(0, 0);
    }, 500);
});

introVideo.addEventListener('ended', () => {
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    const projectsRect = projectsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (projectsRect.top < windowHeight * 0.8) {
        projectsSection.classList.add('visible');
    }
});

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount(newCount) {
    cartCount = newCount;
    cartCountElement.textContent = cartCount;
}

function addToCart() {
    updateCartCount(cartCount + 1);
}

seeMoreBtn.addEventListener('click', () => {
    projectsScroll.scrollBy({
        left: 400,
        behavior: 'smooth'
    });
});

const tryButtons = document.querySelectorAll('.try-btn');
tryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.project-card');
        const projectName = card.querySelector('strong').textContent;
        alert(`Opening ${projectName} project...`);
    });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectName = card.querySelector('strong').textContent;
        console.log(`Clicked on ${projectName}`);
    });
});