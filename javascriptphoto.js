var images = [
    'https://mysiteurl/image1.jpg',
    'https://mysiteurl/image2.jpg',
    'https://mysiteurl/image3.jpg' // Corrected the third URL to be unique
];

var currentIndex = 0; // Start with the first image

// Initialize the carousel with the first image
var carouselImage = document.getElementById("cimage");
carouselImage.src = images[currentIndex];

// Function to show the next image
function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cycle back to the first image after the last
    carouselImage.src = images[currentIndex];
}

// Function to show the previous image
function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle back to the last image after the first
    carouselImage.src = images[currentIndex];
}

// Add event listeners to the buttons
document.getElementById("next").addEventListener("click", showNextImage);
document.getElementById("prev").addEventListener("click", showPrevImage);
