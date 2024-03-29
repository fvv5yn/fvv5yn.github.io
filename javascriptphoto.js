var images = [
    'images/Charmander.jpg',
    'images/Charmeleon.jpg',
    'images/Charizard.png',
    'images/CharizardY.png',
    'images/CharizardX.png'
];

var currentIndex = 0; 

var carouselImage = document.getElementById("cimage");
carouselImage.src = images[currentIndex];

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    carouselImage.src = images[currentIndex];
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    carouselImage.src = images[currentIndex];
}

document.getElementById("next").addEventListener("click", showNextImage);
document.getElementById("prev").addEventListener("click", showPrevImage);
