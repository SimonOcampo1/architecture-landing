// Init Lenis smoothly
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// --- SCROLL-AWARE HEADER ---
const header = document.querySelector('.js-header');
const SCROLL_THRESHOLD = 60; // px before solidifying

lenis.on('scroll', ({ scroll }) => {
    if (scroll > SCROLL_THRESHOLD) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
});

// Scroll to top
const scrollTopBtn = document.querySelector('.js-scroll-top');
scrollTopBtn.addEventListener('click', () => {
    lenis.scrollTo(0);
});



// --- ANIMATIONS ---

// 1. Initial Hero Entry Timeline
const tlHero = gsap.timeline();

// Let the image zoom out and desaturate
tlHero.to('.js-hero-image', {
    scale: 1,
    filter: 'grayscale(100%) contrast(1.2)',
    duration: 2,
    ease: 'expo.out'
}, 0);

tlHero.to('.js-hero-text', {
    y: 0,
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    ease: 'expo.out'
}, 0.5);

tlHero.to('.js-hero-btn', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'expo.out'
}, 1.2);

// 2. Parallax setup for Los Retiros
const parallaxBlocks = document.querySelectorAll('.js-parallax-block');
parallaxBlocks.forEach(block => {
    const img = block.querySelector('.js-parallax-img');
    const title = block.querySelector('.js-title-parallax');
    
    // Image scroll parallax
    gsap.fromTo(img, 
        { yPercent: -10 },
        {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
                trigger: block,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        }
    );

    // Title parallax to separate from image
    if (title) {
        gsap.to(title, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: block,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    }
});

// 3. Detail Section Hero Dimming on Scroll
const detailHero = document.querySelector('.js-detail-hero-section');
const detailDimmer = document.querySelector('.js-hero-dimmer');
const detailImg = document.querySelector('.js-img-zoom');

if(detailHero && detailDimmer) {
    gsap.to(detailDimmer, {
        opacity: 0.7,
        ease: "none",
        scrollTrigger: {
            trigger: detailHero,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
    gsap.to(detailImg, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: detailHero,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
}

// 4. Staggered text fade ins
const staggers = document.querySelectorAll('.js-fade-in-stagger');
staggers.forEach(container => {
    const children = container.children;
    gsap.fromTo(children, 
        { opacity: 0, y: 30 },
        {
            opacity: 1, y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Form Submission visual simulation
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input');
    let hasError = false;
    
    inputs.forEach(input => {
        if(!input.value) hasError = true;
    });

    const spinner = document.querySelector('.js-loading-spinner');
    
    if (hasError) {
        // Brutalist Shake Error
        contactForm.classList.add('error-shake');
        setTimeout(() => contactForm.classList.remove('error-shake'), 200);
    } else {
        // Simulate Loading
        spinner.classList.add('animate-spin', 'rounded-full');
        setTimeout(() => {
            spinner.classList.remove('animate-spin', 'rounded-full');
            spinner.style.backgroundColor = '#17cf32'; // Success green
            alert("Diálogo iniciado.");
            contactForm.reset();
            setTimeout(() => { spinner.style.backgroundColor = '#EBEBE6'; }, 2000);
        }, 1500);
    }
});

// Keep active state on navigation
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// Use scrollTrigger for generic nav highlight
sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
            if (self.isActive) {
                navLinks.forEach(link => link.classList.remove('active'));
                const id = section.getAttribute('id');
                const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if(matchingLink) matchingLink.classList.add('active');
            }
        }
    });
});

// Smooth scrolling for Anchor links and Back to top
document.getElementById('volverArribaBtn').addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'), {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
    });
});
