let slideIndex = 1;

const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// showing a specific slide
function showSlides(n) {
    // If the slide index is too large, start from the beginning
    if (n > slides.length) {
        slideIndex = 1;
    }
    // If the slide index is too small, start from the end
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark its corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
    showSlides((slideIndex = n));
}

// Automatically to the next slide
setInterval(function () {
    plusSlides(1);
}, 3000);

// Initialize the slider
showSlides(slideIndex);
