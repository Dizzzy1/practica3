// Este script controla el slider de imágenes para que cambie cada cierto tiempo
let currentIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none");
    currentIndex++;
    if (currentIndex > slides.length) {
        currentIndex = 1;
    }
    slides[currentIndex - 1].style.display = "block";
}

setInterval(showSlides, 5000);
