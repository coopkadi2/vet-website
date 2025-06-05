document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".archive");
  const overlay = document.getElementById("overlay");

  images.forEach((img) => {
    img.addEventListener("click", (event) => {
      event.stopPropagation();

      // Clear overlay content and show
      overlay.innerHTML = "";
      const enlargedImg = img.cloneNode();
      overlay.appendChild(enlargedImg);
      overlay.style.display = "flex"; // Flex for centering
    });
  });

  // Click anywhere on overlay to close
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";
  });
});
