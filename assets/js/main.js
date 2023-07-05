const toggleBurger = () => {
    const button = document.getElementById("burger-button")
    const burgerMenu = document.getElementById("burger-menu")
    const isActive = button.classList.contains("active")
    if (isActive) {
        burgerMenu.classList.remove("active")
        button.classList.remove("active")
    } else {
        burgerMenu.classList.add("active")
        button.classList.add("active");
    }
}

const gallery = document.getElementById("gallery");

gallery.addEventListener("click", function(e) {
    const initSlide = e.target.getAttribute("data-num") ?? 0;
    createFullscreenSwiper(this, initSlide)
});

function createFullscreenSwiper(fromSelector, initSlide) {

    removeFullscreenSwiper();

    const popup = createFullscreenSwiperPopup();

    const swiper = createSwiper(fromSelector);

    popup.appendChild(swiper);

    document.body.appendChild(popup);

    const swiperrr = new Swiper('.swiper', {
        loop: true,
        pagination: true,
        navigation: true,
        centeredSlides: true,
        initialSlide: initSlide
    });
}

function removeFullscreenSwiper() {
    const fullscreenSwiper = document.getElementById("fullscreenSwiperPopup");

    if (fullscreenSwiper){
        fullscreenSwiper.remove()
    }
}

function createFullscreenSwiperPopup(){
    const popup = document.createElement('div');
    popup.setAttribute("id", "fullscreenSwiperPopup");

    const popupMask = document.createElement('div');
    popupMask.setAttribute("id", "fullscreenSwiperPopupMask");

    popupMask.addEventListener("click", function(i) {
        removeFullscreenSwiper();
    });

    const popupCross = document.createElement('div');
    popupCross.setAttribute("id", "fullscreenSwiperPopupCross");

    popupCross.addEventListener("click", function(i) {
        removeFullscreenSwiper();
    });

    popup.appendChild(popupMask);
    return popup;
}

function createSwiper(fromSelector){
    const swiper = document.createElement('div');
    swiper.classList.add('swiper');

    const swiperWrapper = createFullscreenSwiperWrapper();

    const swiperSlides = createFullscreenSwiperSlidesFromSelector(fromSelector);

    swiperSlides.forEach(slide => {
        swiperWrapper.appendChild(slide);
    });

    swiper.appendChild(swiperWrapper);

    return swiper;
}

function createFullscreenSwiperWrapper() {
    const swiperWrapper = document.createElement('div');
    swiperWrapper.classList.add('swiper-wrapper');

    return swiperWrapper;
}

function createFullscreenSwiperSlidesFromSelector(fromSelector) {
    const slides = [];

    for (const child of fromSelector.children) {
        const swiperSlide = document.createElement('div');
        const clone = child.cloneNode(true);
        swiperSlide.appendChild(clone);
        swiperSlide.classList.add('swiper-slide');
        slides.push(swiperSlide);
    }

    return slides;
}

const types = document.querySelectorAll("[data-id]");

for (let i = 0; i < types.length; i++) {
    types[i].addEventListener("click", function() {
        showSubscriptions(types[i].getAttribute("data-id"))
    });
}

function showSubscriptions(id){
    const hideElements = document.querySelectorAll("[data-type-id], [data-id]");

    for (let i = 0; i < hideElements.length; i++) {
        hideElements[i].classList.remove("active");
    }

    const showElements = document.querySelectorAll(`[data-type-id='${id}'], [data-id='${id}']`);

    for (let i = 0; i < showElements.length; i++) {
        showElements[i].classList.add("active");
    }
}

var swiper = new Swiper(".zones-section .mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const faqButtons = document.querySelectorAll(".faq-question span");

for (let i = 0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", function() {
        toggleFaqItem(faqButtons[i]);
    });
}

function toggleFaqItem(item) {
    item.classList.toggle("active")
    item.closest(".faq-item").classList.toggle("active")
}