// Premium Interactivity for Herjoo Online Solutions - CHOCOLATY LUXURY

document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect - Refined for Luxury
    const navbar = document.getElementById('navbar');
    const navbarContainer = navbar.querySelector('div');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbarContainer.classList.add('shadow-2xl', 'bg-choc-dark/95', 'border-bronze/30');
            navbarContainer.classList.remove('bg-choc-rich/80', 'border-bronze/15');
            navbar.classList.remove('top-6');
            navbar.classList.add('top-0', 'left-0', 'right-0');
            navbarContainer.classList.remove('rounded-[2rem]', 'max-w-7xl', 'mx-auto');
            navbarContainer.classList.add('rounded-none', 'w-full', 'px-12', 'py-4');
            navbarContainer.classList.remove('py-5');
        } else {
            navbarContainer.classList.remove('shadow-2xl', 'bg-choc-dark/95', 'border-bronze/30');
            navbarContainer.classList.add('bg-choc-rich/80', 'border-bronze/15');
            navbar.classList.add('top-6');
            navbar.classList.remove('top-0', 'left-0', 'right-0');
            navbarContainer.classList.add('rounded-[2rem]', 'max-w-7xl', 'mx-auto');
            navbarContainer.classList.remove('rounded-none', 'w-full', 'px-12', 'py-4');
            navbarContainer.classList.add('py-5');
        }
    });

    // Mobile Menu Logic
    const menuToggle = document.querySelector('[aria-label="Toggle menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');

            // Toggle icon
            const svg = menuToggle.querySelector('svg');
            if (mobileMenu.classList.contains('flex')) {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            } else {
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />';
            }
        });

        // Mobile Services Dropdown Toggle
        const servicesToggle = document.getElementById('mobile-services-toggle');
        const servicesDropdown = document.getElementById('mobile-services-dropdown');
        const servicesArrow = document.getElementById('mobile-services-arrow');

        if (servicesToggle && servicesDropdown && servicesArrow) {
            servicesToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                servicesDropdown.classList.toggle('hidden');
                servicesDropdown.classList.toggle('flex');
                servicesArrow.classList.toggle('rotate-180');
            });
        }

        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuToggle.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />';

                // Reset services dropdown state when closing menu
                if (servicesDropdown && servicesArrow) {
                    servicesDropdown.classList.add('hidden');
                    servicesDropdown.classList.remove('flex');
                    servicesArrow.classList.remove('rotate-180');
                }
            });
        });
    }

    // Weighted Reveal on Scroll
    const revealElements = document.querySelectorAll('section > div');
    revealElements.forEach(el => el.classList.add('reveal-on-scroll'));

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));

    // Luxury Form Simulation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = form.querySelector('button');
            const originalText = button.textContent;

            button.disabled = true;
            button.textContent = 'Processing Ambition...';
            button.style.opacity = '0.7';

            setTimeout(() => {
                button.textContent = 'Integration Requested.';
                button.classList.add('!bg-white', '!text-choc-dark');
                button.style.opacity = '1';
                form.reset();

                setTimeout(() => {
                    button.disabled = false;
                    button.textContent = originalText;
                    button.classList.remove('!bg-white', '!text-choc-dark');
                }, 4000);
            }, 2000);
        });
    }

    // Precise Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 120;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
