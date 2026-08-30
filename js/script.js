// ============================================
// M. SUBAIB OPTICAL
// COMPLETE JAVASCRIPT + GSAP
// ============================================


document.addEventListener("DOMContentLoaded", () => {


    // ============================================
    // ELEMENTS
    // ============================================

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    // ============================================
    // MOBILE MENU
    // ============================================

    if (mobileMenuBtn && mobileMenu) {

        mobileMenuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            mobileMenuBtn.classList.toggle("active");

        });


        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                mobileMenuBtn.classList.remove("active");

            });

        });

    }


    // ============================================
    // CLOSE MENU ON RESIZE
    // ============================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 700) {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            if (mobileMenuBtn) {
                mobileMenuBtn.classList.remove("active");
            }

        }

    });


    // ============================================
    // SMOOTH SCROLL
    // ============================================

    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');


    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const targetElement =
                document.querySelector(targetId);


            if (targetElement) {

                event.preventDefault();


                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ============================================
    // ACTIVE NAVIGATION
    // ============================================

    const sections =
        document.querySelectorAll("section[id]");


    const navLinks =
        document.querySelectorAll(".nav-links a");


    function updateActiveNav() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 150;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {

                currentSection = sectionId;

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                currentSection &&
                href === `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    // ============================================
    // WHATSAPP
    // ============================================

    const whatsappButtons =
        document.querySelectorAll(
            ".navbar-whatsapp, .whatsapp-btn, .floating-whatsapp"
        );


    whatsappButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

           const phoneNumber =
    "923168903503";


            const message =
                encodeURIComponent(
                    "Assalam o Alaikum, I want to know more about M. Suhaib Optical."
                );


            const whatsappURL =
                `https://wa.me/${phoneNumber}?text=${message}`;


            event.preventDefault();


            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


    // ============================================
    // ESC KEY
    // ============================================

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                if (mobileMenu) {
                    mobileMenu.classList.remove("active");
                }

                if (mobileMenuBtn) {
                    mobileMenuBtn.classList.remove("active");
                }

            }

        }
    );


    // =================================================
    // GSAP ANIMATIONS
    // =================================================

    if (typeof gsap !== "undefined") {


        // ============================================
        // HERO TIMELINE
        // ============================================

        const heroTimeline =
            gsap.timeline({
                defaults: {
                    ease: "power3.out"
                }
            });


        // ============================================
        // NAVBAR
        // ============================================

        heroTimeline.from(
            ".navbar",
            {
                y: -35,
                opacity: 0,
                duration: 0.8
            }
        );


        // ============================================
        // HERO HEADING
        // ============================================

        heroTimeline.from(
            ".hero-content h1 span",
            {
                y: 45,
                opacity: 0,
                duration: 0.7
            },
            "-=0.35"
        );


        heroTimeline.from(
            ".hero-content h1 strong",
            {
                y: 45,
                opacity: 0,
                duration: 0.7
            },
            "-=0.45"
        );


        // ============================================
        // HERO TAGLINE
        // ============================================

        heroTimeline.from(
            ".hero-content h2",
            {
                y: 25,
                opacity: 0,
                duration: 0.6
            },
            "-=0.35"
        );


        // ============================================
        // DESCRIPTION
        // ============================================

        heroTimeline.from(
            ".hero-content p",
            {
                y: 20,
                opacity: 0,
                duration: 0.6
            },
            "-=0.35"
        );


        // ============================================
        // HERO BUTTONS
        // ============================================

        heroTimeline.from(
            ".hero-buttons .hero-btn",
            {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.55,
                stagger: 0.12
            },
            "-=0.25"
        );


        // ============================================
        // BOY IMAGE
        // ============================================

        heroTimeline.from(
            ".hero-boy",
            {
                x: 80,
                opacity: 0,
                scale: 0.96,
                duration: 1.1,
                ease: "power3.out"
            },
            "-=0.8"
        );


        // ============================================
        // PREMIUM BADGE
        // ============================================

        heroTimeline.from(
            ".premium-badge",
            {
                scale: 0,
                opacity: 0,
                duration: 0.7,
                ease: "back.out(1.7)"
            },
            "-=0.7"
        );


        // ============================================
        // BENEFITS
        // ============================================

        heroTimeline.from(
            ".benefit-item",
            {
                y: 25,
                opacity: 0,
                duration: 0.5,
                stagger: 0.12
            },
            "-=0.35"
        );


        // ============================================
        // PREMIUM BADGE FLOAT
        // ============================================

        if (document.querySelector(".premium-badge")) {

            gsap.to(
                ".premium-badge",
                {
                    y: -8,
                    duration: 2.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        // ============================================
        // BOY VERY LIGHT FLOAT
        // ============================================

        if (document.querySelector(".hero-boy")) {

            gsap.to(
                ".hero-boy",
                {
                    y: -4,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                }
            );

        }


        // ============================================
        // CONSOLE
        // ============================================

        console.log(
            "M. Suhaib Optical GSAP animation loaded successfully."
        );

    }
    else {

        console.warn(
            "GSAP library was not loaded."
        );

    }


    // ============================================
    // WEBSITE LOADED
    // ============================================

    console.log(
        "M. Suhaib Optical website loaded successfully."
    );

});


// =================================================
// COLLECTIONS SECTION ANIMATION
// =================================================

if (typeof ScrollTrigger !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);


    // ============================================
    // COLLECTIONS HEADING
    // ============================================

    gsap.from(".collections-section .section-heading", {

        scrollTrigger: {
            trigger: ".collections-section",
            start: "top 80%",
            once: true
        },

        y: 50,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out"

    });


    // ============================================
    // COLLECTION CARDS
    // ============================================

    gsap.from(".collections-section .collection-card", {

        scrollTrigger: {
            trigger: ".collections-grid",
            start: "top 82%",
            once: true
        },

        y: 70,

        opacity: 0,

        scale: 0.94,

        duration: 0.75,

        stagger: 0.15,

        ease: "power3.out"

    });


    // ============================================
    // COLLECTION IMAGES
    // ============================================

    gsap.from(
        ".collections-section .collection-image img",
        {

            scrollTrigger: {
                trigger: ".collections-grid",
                start: "top 82%",
                once: true
            },

            scale: 1.15,

            duration: 1.2,

            stagger: 0.15,

            ease: "power2.out"

        }
    );

}

// =================================================
// SERVICES SECTION ANIMATION
// =================================================

if (typeof ScrollTrigger !== "undefined") {

    // ============================================
    // SERVICES HEADING
    // ============================================

    gsap.from(".services-section .services-heading", {

        scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            once: true
        },

        y: 60,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out"

    });


    // ============================================
    // SERVICE CARDS
    // ============================================

    gsap.from(".services-section .service-card", {

        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 82%",
            once: true
        },

        y: 80,
        opacity: 0,
        scale: 0.92,

        duration: 0.8,

        stagger: 0.16,

        ease: "power3.out"

    });


    // ============================================
    // SERVICE ICONS
    // ============================================

    gsap.from(".services-section .service-icon", {

        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 82%",
            once: true
        },

        scale: 0,
        rotation: -25,

        duration: 0.7,

        stagger: 0.16,

        delay: 0.25,

        ease: "back.out(1.7)"

    });

}

