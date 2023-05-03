const carousel = document.querySelector('.carousel');
const carouselItem = document.querySelector('.carousel-item');
const carouselItemList = document.querySelectorAll('.carousel-item');
const btnList = document.querySelectorAll('.button-download button');
const html = document.querySelector('html');
const body = document.querySelector('body');
carousel.style.scrollBehavior = 'smooth';
let scrollbarWidth = 17;
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    scrollbarWidth = 0;
} else {
    scrollbarWidth = window.innerWidth - body.clientWidth;
}

let timerId = 0;
let start_pagex = 0;
let prevScrollLeft = 0;
let rangeX = 0;
let imgWidth = carouselItem.clientWidth;
let checkMouseover = false;

function startDrag(e) {
    carousel.style.scrollBehavior = 'unset';
    rangeX = (e.pageX ?? e.touches[0].pageX) - start_pagex;
    carousel.scrollLeft = prevScrollLeft - rangeX;
}

function stopDrag(e) {
    clearInterval(timerId);
    carousel.removeEventListener('mousemove', startDrag);
    carousel.removeEventListener('mouseleave', autoSlide);
    carousel.style.scrollBehavior = 'smooth';
    rangeX = 0;
    slideAutomatic();
}

function autoSlide(e) {
    stopDrag(e);
    for (var i = carouselItemList.length; i >= 0; i--) {
        if (carousel.scrollLeft > i * imgWidth)
            return (carousel.scrollLeft = i * imgWidth);
    }
}

carouselItemList.forEach((elem) => {
    elem.addEventListener('click', function (e) {
        stopDrag(e);
        let rect = elem.getClientRects()[0];
        if (carousel.scrollLeft >= prevScrollLeft) {
            let restElem = elem.clientWidth + rect.left;
            if (restElem >= elem.clientWidth * 0.8)
                return (carousel.scrollLeft += rect.left);
            return (carousel.scrollLeft += restElem);
        } else {
            let restElem = elem.clientWidth - rect.left;
            if (restElem >= elem.clientWidth * 0.8)
                carousel.scrollLeft += rect.left;
            else carousel.scrollLeft -= restElem;
        }
    });

    elem.addEventListener('touchend', function (e) {
        stopDrag(e);
        let rect = elem.getClientRects()[0];
        if (carousel.scrollLeft >= prevScrollLeft) {
            let restElem = elem.clientWidth + rect.left;
            if (restElem >= elem.clientWidth * 0.8)
                return (carousel.scrollLeft += rect.left);
            return (carousel.scrollLeft += restElem);
        } else {
            let restElem = elem.clientWidth - rect.left;
            if (restElem >= elem.clientWidth * 0.8)
                carousel.scrollLeft += rect.left;
            else carousel.scrollLeft -= restElem;
        }
    });
});

function slideAutomatic() {
    timerId = setInterval(() => {
        carousel.scrollLeft += carousel.clientWidth + scrollbarWidth;
        if (
            carousel.scrollLeft >
            carousel.scrollWidth - carousel.clientWidth - 1
        )
            carousel.scrollLeft = 0;
    }, 5000);
}

carousel.addEventListener('mousedown', function (e) {
    start_pagex = e.pageX;

    prevScrollLeft = carousel.scrollLeft;
    carousel.addEventListener('mousemove', startDrag);
    carousel.addEventListener('mouseup', stopDrag);
    carousel.addEventListener('mouseleave', autoSlide);
});

carousel.addEventListener('touchstart', function (e) {
    start_pagex = e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
    carousel.addEventListener('touchmove', startDrag);
    carousel.addEventListener('touchend', stopDrag);
});

function toggleAnimation(element) {
    var rect = element.getClientRects()[0];
    if (rect.left >= -imgWidth / 2 && rect.left <= imgWidth / 2) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

carousel.addEventListener('scroll', function (e) {
    carouselItemList.forEach((elem) => {
        toggleAnimation(elem);
    });
});

window.addEventListener('resize', function () {
    imgWidth = carousel.clientHeight;
    this.clearInterval(timerId);
    slideAutomatic();
});

slideAutomatic();
toggleAnimation(carouselItemList[0]);
