// ============================================
// FLIPPING CARDS BACKGROUND GENERATOR
// ============================================
const cardImages = [
    { front: '/mnt/agents/upload/cctv-camera.jpg', back: '/mnt/agents/upload/datacenter.jpg', label: 'Security & Data' },
    { front: '/mnt/agents/upload/network-switch.jpg', back: '/mnt/agents/upload/security-system.jpg', label: 'Network & Security' },
    { front: '/mnt/agents/upload/workstation.jpg', back: '/mnt/agents/upload/cctv-camera.jpg', label: 'Workstation & CCTV' },
    { front: '/mnt/agents/upload/datacenter.jpg', back: '/mnt/agents/upload/network-switch.jpg', label: 'Data & Network' },
    { front: '/mnt/agents/upload/security-system.jpg', back: '/mnt/agents/upload/workstation.jpg', label: 'Systems & Work' },
    { front: '/mnt/agents/upload/cctv-camera.jpg', back: '/mnt/agents/upload/security-system.jpg', label: 'CCTV & Systems' },
    { front: '/mnt/agents/upload/datacenter.jpg', back: '/mnt/agents/upload/workstation.jpg', label: 'Data & Work' },
    { front: '/mnt/agents/upload/network-switch.jpg', back: '/mnt/agents/upload/cctv-camera.jpg', label: 'Network & CCTV' },
    { front: '/mnt/agents/upload/workstation.jpg', back: '/mnt/agents/upload/datacenter.jpg', label: 'Work & Data' },
    { front: '/mnt/agents/upload/security-system.jpg', back: '/mnt/agents/upload/network-switch.jpg', label: 'Security & Net' },
    { front: '/mnt/agents/upload/cctv-camera.jpg', back: '/mnt/agents/upload/workstation.jpg', label: 'CCTV & Work' },
    { front: '/mnt/agents/upload/datacenter.jpg', back: '/mnt/agents/upload/security-system.jpg', label: 'Data & Security' },
    { front: '/mnt/agents/upload/network-switch.jpg', back: '/mnt/agents/upload/workstation.jpg', label: 'Network & Work' },
    { front: '/mnt/agents/upload/security-system.jpg', back: '/mnt/agents/upload/cctv-camera.jpg', label: 'Systems & CCTV' },
    { front: '/mnt/agents/upload/workstation.jpg', back: '/mnt/agents/upload/network-switch.jpg', label: 'Work & Network' },
    { front: '/mnt/agents/upload/cctv-camera.jpg', back: '/mnt/agents/upload/datacenter.jpg', label: 'CCTV & Data' },
    { front: '/mnt/agents/upload/datacenter.jpg', back: '/mnt/agents/upload/security-system.jpg', label: 'Data & Systems' },
    { front: '/mnt/agents/upload/network-switch.jpg', back: '/mnt/agents/upload/cctv-camera.jpg', label: 'Net & CCTV' },
    { front: '/mnt/agents/upload/workstation.jpg', back: '/mnt/agents/upload/datacenter.jpg', label: 'Work & Data' },
    { front: '/mnt/agents/upload/security-system.jpg', back: '/mnt/agents/upload/network-switch.jpg', label: 'Security & Net' }
];

function createFlippingCards() {
    const container = document.getElementById('flipBg');
    if (!container) return;
    container.innerHTML = '';

    cardImages.forEach((card, index) => {
        const flipCard = document.createElement('div');
        flipCard.className = 'flip-card';

        const topPos = Math.random() * 85;
        const startX = -300;
        const endX = window.innerWidth + 300;
        const flipDuration = 8 + Math.random() * 6;
        const flipDelay = Math.random() * 8;
        const floatDuration = 4 + Math.random() * 3;
        const floatDelay = Math.random() * 4;
        const driftDuration = 25 + Math.random() * 20;
        const driftDelay = Math.random() * 20;

        flipCard.style.cssText = `
            top: ${topPos}%;
            --flip-duration: ${flipDuration}s;
            --flip-delay: ${flipDelay}s;
            --float-duration: ${floatDuration}s;
            --float-delay: ${floatDelay}s;
            --drift-duration: ${driftDuration}s;
            --drift-delay: ${driftDelay}s;
            --start-x: ${startX}px;
            --end-x: ${endX}px;
        `;

        flipCard.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${card.front}" alt="${card.label}">
                    <div class="flip-card-label">${card.label}</div>
                </div>
                <div class="flip-card-back">
                    <img src="${card.back}" alt="${card.label}">
                    <div class="flip-card-label">${card.label}</div>
                </div>
            </div>
        `;

        container.appendChild(flipCard);
    });
}

createFlippingCards();

// ============================================
// NAVIGATION
// ============================================
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }

    setTimeout(() => { observeElements(); updateOverlay(); }, 100);
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ============================================
// FADE IN ANIMATION ON SCROLL
// ============================================
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
    });
}

observeElements();

// ============================================
// FORM SUBMISSION
// ============================================
function handleFormSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly at +91 94265 10003 or gatewayinnotech@gmail.com');
    e.target.reset();
}

// ============================================
// HERO OVERLAY TOGGLE
// ============================================
function updateOverlay() {
    const overlay = document.getElementById('flipOverlay');
    if (!overlay) return;

    const activePage = document.querySelector('.page.active');

    if (activePage && (activePage.id === 'home' || activePage.querySelector('.hero, .about-hero, .contact-hero'))) {
        overlay.style.background = 'linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.85) 100%)';
    } else {
        overlay.style.background = 'linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(240,244,248,0.88) 50%, rgba(240,244,248,0.92) 100%)';
    }
}

updateOverlay();

// ============================================
// RESIZE HANDLER
// ============================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(createFlippingCards, 300);
});