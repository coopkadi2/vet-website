const images = [
  'img/findlay-a-004.jpg',
  'img/tpcc-001.png',
  'img/shelter-002.jpg',
  'img/riyadh-001.jpg',
  'img/lyons-001.jpg',
  'img/findlay-s-001.jpg'
];

// Fisher-Yates shuffle
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

let currentIndex = 0;

function changeBackground() {
  const body = document.querySelector('.slideshow');
  if (!body) return;
  currentIndex = (currentIndex + 1) % images.length;
  body.style.backgroundImage = `url('${images[currentIndex]}')`;
}

document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('.slideshow');
  if (!body) return;

  // Set initial image
  body.style.backgroundImage = `url('${images[0]}')`;

  // Start automatic slideshow
  setInterval(changeBackground, 8000);

  // Add click-to-advance
  body.addEventListener('click', changeBackground);
});
