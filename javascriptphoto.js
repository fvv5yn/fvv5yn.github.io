var images = [
img src="Charmander.jpg",
 img src="Charmeleon.jpg"',
  img src="Charizard.png"
 img src="CharizardY.png"
img src="CharizardX.png"
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
