const slider = document.querySelector(".bouquet-slider");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

if (slider && prevBtn && nextBtn) {
    const getScrollAmount = () => {
        const card = slider.querySelector(".mini-product-card");
        const gap = 16;
        return card ? card.offsetWidth + gap : 280;
    };

    const updateButtons = () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        prevBtn.disabled = slider.scrollLeft <= 5;
        nextBtn.disabled = slider.scrollLeft >= maxScroll - 5;
    };

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth",
        });
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth",
        });
    });

    slider.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();
}

const burgerBtn = document.querySelector(".burger-btn");
const navLinks = document.querySelector(".nav-links");

if (burgerBtn && navLinks) {

    burgerBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {

        navbar.style.transition = "transform 0.7s ease";
        navbar.style.transform = "translateY(-100%)";

    } else {

        navbar.style.transition = "transform 0.4s ease";
        navbar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
});

const modal = document.getElementById("demoModal");
const orderBtns = document.querySelectorAll(".demo-order-btn");
const closeModal = document.querySelector(".close-modal");

orderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("show");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});