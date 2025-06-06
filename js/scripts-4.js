document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".archive");
  const overlay = document.getElementById("overlay");
  const menuElements = document.querySelectorAll(".menu, .menu-open, .menu-closed, #datetime-container");


  images.forEach((img) => {
    img.addEventListener("click", (event) => {
      event.stopPropagation();

      // Show overlay with cloned image
      overlay.innerHTML = "";
      const enlargedImg = img.cloneNode();
      overlay.appendChild(enlargedImg);
      overlay.style.display = "flex";

      // Disable interaction and fade menu
      menuElements.forEach(el => {
        el.classList.add("no-pointer-events", "faded");
      });
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";

    // Re-enable interaction and un-fade menu
    menuElements.forEach(el => {
      el.classList.remove("no-pointer-events", "faded");
    });
  });
});
