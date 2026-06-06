document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    /* ==========================================================================
       THEME MANAGEMENT (DARK / LIGHT MODE)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Detect Theme Preference
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        
        // Fallback to system preferences
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    // Apply Theme
    const setTheme = (theme) => {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

    // Initial Theme Setup
    setTheme(getPreferredTheme());

    // Toggle Theme
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });


    /* ==========================================================================
       MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
    const closeIcon = mobileMenuToggle.querySelector('.close-icon');

    const toggleMenu = () => {
        navMenu.classList.toggle('open');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    };

    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    /* ==========================================================================
       HERO TYPING EFFECT
       ========================================================================== */
    const typingTextElement = document.getElementById('typing-text');
    const words = ["프론트엔드 개발자.", "UI/UX 디자이너.", "소통하는 크리에이터."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeDelay = 150;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Delete character
            typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeDelay = 75; // Faster deletion
        } else {
            // Type character
            typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeDelay = 150; // Normal typing
        }

        // Word completed typing
        if (!isDeleting && charIndex === currentWord.length) {
            typeDelay = 1500; // Pause at end of word
            isDeleting = true;
        } 
        // Word completed deleting
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            typeDelay = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typeDelay);
    };

    // Start typing animation
    if (typingTextElement) {
        setTimeout(typeEffect, 1000);
    }


    /* ==========================================================================
       SCROLL INTERACTIONS (STICKY NAV, ACTIVE SPY, PROGRESS BAR)
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // 1. Scroll Progress Bar
        const scrolledPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = `${scrolledPercent}%`;
        }

        // 2. Sticky Navbar Styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // 3. Active Link Scroll Spy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for sticky nav
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });


    /* ==========================================================================
       SKILL BARS SCROLL ANIMATION (INTERSECTION OBSERVER)
       ========================================================================== */
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
                observer.unobserve(bar); // Stop observing after animation triggers
            }
        });
    };

    const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.1, // Trigger when 10% of the bar is visible
        rootMargin: "0px 0px -50px 0px"
    });

    skillBars.forEach(bar => skillObserver.observe(bar));


    /* ==========================================================================
       PROJECT FILTERING SYSTEM
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(button => button.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    // Show matching cards with transition
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.classList.remove('fade-out');
                        card.classList.add('fade-in');
                    }, 50);
                } else {
                    // Hide non-matching cards
                    card.classList.add('fade-out');
                    card.classList.remove('fade-in');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 350); // Matches CSS transition duration
                }
            });
        });
    });


    /* ==========================================================================
       CONTACT FORM VALIDATION & SIMULATION
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const messageContent = document.getElementById('message-content');
    const successModal = document.getElementById('success-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Validation helper functions
    const setError = (element, hasError) => {
        const parent = element.closest('.form-group');
        if (hasError) {
            parent.classList.add('has-error');
        } else {
            parent.classList.remove('has-error');
        }
    };

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // Handle Input validation on fly
    userName.addEventListener('input', () => setError(userName, userName.value.trim() === ''));
    userEmail.addEventListener('input', () => setError(userEmail, !isValidEmail(userEmail.value.trim())));
    messageContent.addEventListener('input', () => setError(messageContent, messageContent.value.trim() === ''));

    // Handle Submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameEmpty = userName.value.trim() === '';
        const isEmailInvalid = !isValidEmail(userEmail.value.trim());
        const isMessageEmpty = messageContent.value.trim() === '';

        setError(userName, isNameEmpty);
        setError(userEmail, isEmailInvalid);
        setError(messageContent, isMessageEmpty);

        if (!isNameEmpty && !isEmailInvalid && !isMessageEmpty) {
            // Simulate Form Submission Success
            const submitBtn = document.getElementById('form-submit-btn');
            const originalContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending... <i data-lucide="loader" class="animate-spin"></i>';
            lucide.createIcons();

            setTimeout(() => {
                // Open Success Modal
                successModal.classList.remove('hidden');
                
                // Reset Form
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                lucide.createIcons();
            }, 1500);
        }
    });

    // Close Modal
    modalCloseBtn.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });

    // Close Modal by clicking backdrop
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.add('hidden');
        }
    });
});
