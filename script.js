/* =========================================
   TOPCELL
   SCRIPT.JS
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener(
        "click",
        () => {

            nav.classList.toggle("active");

        }
    );


    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("active");

                }
            );

        }
    );

}


/* =========================================
   CARROSSEL
========================================= */

const carouselTrack =
    document.getElementById(
        "carouselTrack"
    );

const prevButton =
    document.getElementById(
        "prevButton"
    );

const nextButton =
    document.getElementById(
        "nextButton"
    );

const dots =
    document.querySelectorAll(".dot");


let currentSlide = 0;

const totalSlides = 3;

let autoSlide;


/* -----------------------------------------
   MOSTRAR SLIDE
----------------------------------------- */

function showSlide(index) {

    if (!carouselTrack) {
        return;
    }


    if (index >= totalSlides) {

        currentSlide = 0;

    } else if (index < 0) {

        currentSlide = totalSlides - 1;

    } else {

        currentSlide = index;

    }


    carouselTrack.style.transform =
        `translateX(-${currentSlide * 100}%)`;


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        }
    );
}


/* -----------------------------------------
   PRÓXIMO
----------------------------------------- */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide + 1
            );

            restartAutoSlide();

        }
    );
}


/* -----------------------------------------
   ANTERIOR
----------------------------------------- */

if (prevButton) {

    prevButton.addEventListener(
        "click",
        () => {

            showSlide(
                currentSlide - 1
            );

            restartAutoSlide();

        }
    );
}


/* -----------------------------------------
   DOTS
----------------------------------------- */

dots.forEach(
    (dot) => {

        dot.addEventListener(
            "click",
            () => {

                const slide =
                    Number(
                        dot.dataset.slide
                    );

                showSlide(slide);

                restartAutoSlide();

            }
        );

    }
);


/* -----------------------------------------
   AUTO SLIDE
----------------------------------------- */

function startAutoSlide() {

    autoSlide =
        setInterval(
            () => {

                showSlide(
                    currentSlide + 1
                );

            },
            5000
        );
}


function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();
}


startAutoSlide();


/* -----------------------------------------
   PAUSAR AO PASSAR O MOUSE
----------------------------------------- */

const carousel =
    document.getElementById("carousel");


if (carousel) {

    carousel.addEventListener(
        "mouseenter",
        () => {

            clearInterval(autoSlide);

        }
    );


    carousel.addEventListener(
        "mouseleave",
        () => {

            startAutoSlide();

        }
    );
}


/* =========================================
   INTERAÇÃO DO TÉCNICO NO CELULAR
========================================= */

const technicianImage =
    document.querySelector(
        ".technician-image"
    );


if (technicianImage) {

    technicianImage.addEventListener(
        "click",
        () => {

            if (
                window.innerWidth <= 800
            ) {

                technicianImage.classList.toggle(
                    "mobile-active"
                );

            }

        }
    );

}


/* =========================================
   ANIMAÇÃO DOS CARDS
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .product-card, .differential"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    animatedElements.forEach(
        (element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(20px)";

            element.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            observer.observe(element);

        }
    );
}


/* =========================================
   ESTILO DINÂMICO PARA CARDS VISÍVEIS
========================================= */

const dynamicStyle =
    document.createElement("style");


dynamicStyle.textContent = `

    .service-card.visible,
    .product-card.visible,
    .differential.visible {

        opacity: 1 !important;

        transform:
            translateY(0) !important;
    }

    @media (max-width: 800px) {

        .technician-image.mobile-active
        .technician-overlay {

            opacity: 1;
        }

        .technician-image.mobile-active
        > img {

            transform: scale(1.07);
        }

        .technician-image.mobile-active
        .technician-overlay-content {

            transform: translateY(0);
        }
    }

`;


document.head.appendChild(
    dynamicStyle
);


/* =========================================
   LOG
========================================= */

console.log(
    "TopCell carregada com sucesso!"
);

console.log(
    "WhatsApp: +55 64 9205-6317"
);
