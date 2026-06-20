if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onload = () => {
    window.scrollTo(0, 0);
};


const disclaimerPopup = document.getElementById("disclaimerPopup");
const agreeBtn = document.getElementById("agreeBtn");

if (
    sessionStorage.getItem("disclaimerAccepted") &&
    performance.navigation.type !== 1
) {
    disclaimerPopup.style.display = "none";
}

agreeBtn.addEventListener("click", () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    disclaimerPopup.style.display = "none";
});




const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});




// Hero Slider

document.addEventListener("DOMContentLoaded", () => {

    const heroSwiper = new Swiper(".heroSwiper", {
        loop: true,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

        effect: "fade",
        speed: 500
    });

});

// Consultation Popup

const popup = document.getElementById("consultationPopup");

const consultationButtons = document.querySelectorAll(
    ".consultation-btn, .get-consultation-btn"
);

const closeBtn = document.querySelector(".close-btn");

consultationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});

document
    .getElementById("consultationForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you! Your consultation request has been submitted successfully."
        );

        this.reset();
        popup.classList.remove("active");
    });


    // FAQ Accordion

document.addEventListener("DOMContentLoaded", () => {

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const answer = question.nextElementSibling;
            const icon = question.querySelector("span");

            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "−";
            }

        });

    });

});




 
// ==============================
// TEAM CAROUSEL
// ==============================

const teamSwiper = new Swiper(".teamSwiper", {

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".team-next",
        prevEl: ".team-prev"
    },

    spaceBetween: 25,

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        576: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 25
        }

    }

});
