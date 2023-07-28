let slideIndex = 0;
const slides = document.getElementsByClassName('slideshow-img');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[slideIndex].classList.add('active');
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Automatic slideshow every 4 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);

// Show the first slide
showSlide(slideIndex);
