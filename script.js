/* =========================================================
   TOPCELL
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MENU MOBILE
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("active");

    });


    /* Fecha o menu ao clicar em algum link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

        });

    });

}


/* =========================================================
   ANIMAÇÕES AO APARECER NA TELA
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".novidade-card, .service-card, .product-card, .differential, .repair-item"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});


/* =========================================================
   BOTÃO WHATSAPP
   ========================================================= */

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
);


whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log("Abrindo WhatsApp da TopCell...");

    });

});


/* =========================================================
   HEADER AO ROLAR
   ========================================================= */

const header = document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   FECHAR MENU AO CLICAR FORA
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!nav || !menuButton) return;

    const clickedInsideMenu =
        nav.contains(event.target);

    const clickedButton =
        menuButton.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedButton
    ) {

        nav.classList.remove("active");

    }

});


/* =========================================================
   ANO AUTOMÁTICO NO CONSOLE
   ========================================================= */

const currentYear = new Date().getFullYear();

console.log(
    `TopCell - Site carregado em ${currentYear}`
);
