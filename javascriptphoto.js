var images = [
    'Charmander.jpg',
    'Charmeleon.jpg',
    'Charizard.png',
    'CharizardY.png',
    'CharizardX.png'
];

var currentIndex = 0; 

var carouselImage = document.getElementById("cimage");
carouselImage.style.opacity = 1; // 
changeImage();

function changeImage() {
    carouselImage.style.opacity = 0; 
    setTimeout(() => {
        carouselImage.src = images[currentIndex];
        carouselImage.style.opacity = 1; // Start fade-in
    }, 500); 
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    changeImage(); 
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage();
}

document.getElementById("next").addEventListener("click", showNextImage);
document.getElementById("prev").addEventListener("click", showPrevImage);
