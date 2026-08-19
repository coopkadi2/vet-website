// scripts-project-images.js
document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll(".pics img, .archive-container img.archive"));
  const overlay = document.getElementById("overlay");
  const menuElements = document.querySelectorAll(".menu, .menu-open, .menu-closed, #datetime-container");
  const menuIcon = document.querySelector(".menu-open");

  // Figure out the correct relative path to /img/ on this page by reusing
  // the menu icon's own path (works no matter how deeply nested the page is).
  const menuIconSrc = menuIcon.getAttribute("src"); // e.g. "../img/menu-open-black.png" or "../../img/menu-open-black.png"
  const imgBasePath = menuIconSrc.slice(0, menuIconSrc.indexOf("img/") + 4); // e.g. "../img/" or "../../img/"

  let currentIndex = 0;

  const closeOverlay = () => {
    overlay.style.display = "none";
    overlay.innerHTML = "";

    menuElements.forEach(el => {
      el.classList.remove("no-pointer-events", "faded");
    });
  };

  const showImage = (index) => {
    currentIndex = (index + images.length) % images.length;
    overlay.innerHTML = "";

    // Enlarged image — click on it shouldn't close the overlay
    const enlargedImg = images[currentIndex].cloneNode();
    enlargedImg.classList.add("overlay-img");
    enlargedImg.addEventListener("click", (event) => event.stopPropagation());
    overlay.appendChild(enlargedImg);

    // Close (x) button — reuses the same icon/image used to close the menu
    const closeBtn = menuIcon.cloneNode();
    closeBtn.className = "overlay-close";
    closeBtn.removeAttribute("id");
    closeBtn.removeAttribute("style");
    closeBtn.setAttribute("alt", "Close");
    closeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      closeOverlay();
    });
    overlay.appendChild(closeBtn);

    // Prev/next arrows (only if there's more than one image)
    if (images.length > 1) {
      const prevBtn = document.createElement("img");
      prevBtn.className = "overlay-arrow overlay-prev";
      prevBtn.src = imgBasePath + "slideshow-left.png";
      prevBtn.setAttribute("alt", "Previous image");
      prevBtn.setAttribute("aria-label", "Previous image");
      prevBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showImage(currentIndex - 1);
      });
      overlay.appendChild(prevBtn);

      const nextBtn = document.createElement("img");
      nextBtn.className = "overlay-arrow overlay-next";
      nextBtn.src = imgBasePath + "slideshow-right.png";
      nextBtn.setAttribute("alt", "Next image");
      nextBtn.setAttribute("aria-label", "Next image");
      nextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        showImage(currentIndex + 1);
      });
      overlay.appendChild(nextBtn);
    }

    overlay.style.display = "flex";
  };

  images.forEach((img, index) => {
    img.addEventListener("click", (event) => {
      event.stopPropagation();
      showImage(index);

      menuElements.forEach(el => {
        el.classList.add("no-pointer-events", "faded");
      });
    });
  });

  // Clicking the overlay background (not the image or buttons) closes it
  overlay.addEventListener("click", () => {
    closeOverlay();
  });

  // Optional: keyboard support while overlay is open
  document.addEventListener("keydown", (event) => {
    if (overlay.style.display !== "flex") return;
    if (event.key === "Escape") closeOverlay();
    if (event.key === "ArrowLeft") showImage(currentIndex - 1);
    if (event.key === "ArrowRight") showImage(currentIndex + 1);
  });
});