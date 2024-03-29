var images = [
    'images/Charmander.jpg',
    'images/Charmeleon.jpg',
    'images/Charizard.png',
    'images/CharizardY.png',
    'images/CharizardX.png'
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
