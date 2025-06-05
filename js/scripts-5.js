document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.archive-container');
  const images = Array.from(container.querySelectorAll('img.archive'));

  // Fisher-Yates shuffle
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]];
  }

  // Clear container and append images in shuffled order
  container.innerHTML = "";
  images.forEach(img => container.appendChild(img));
});
