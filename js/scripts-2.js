const images = [
  'img/findlay-a-004.jpg',
  'img/tpcc-001.png',
  'img/shelter-002.jpg',
  'img/riyadh-001.jpg',
  'img/lyons-001.jpg',
  'img/findlay-s-001.jpg'
];

let currentIndex = 0;

function changeBackground() {
  const body = document.querySelector('.slideshow');
  if (!body) return; // safety check
  currentIndex = (currentIndex + 1) % images.length;
  body.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// Start with the first image
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('.slideshow');
  if (body) body.style.backgroundImage = `url('${images[0]}')`;
  setInterval(changeBackground, 6000); // change every 5 seconds
});