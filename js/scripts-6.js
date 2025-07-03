document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.projects');
  const icons = Array.from(container.querySelectorAll('.indi-p'));

  // Separate 000 series and 800 series projects
  const series000 = [];
  const series800 = [];
  
  icons.forEach(icon => {
    const caption = icon.querySelector('.caption');
    if (caption) {
      const projectNumber = caption.textContent.trim().split('\n')[0];
      if (projectNumber.includes('815')) {
        series800.push(icon);
      } else {
        series000.push(icon);
      }
    }
  });

  // Reverse both series
  series000.reverse();
  series800.reverse();

  // Combine: 000 series first, then 800 series
  const orderedIcons = [...series000, ...series800];

  // Clear container and append icons in new order
  container.innerHTML = "";
  orderedIcons.forEach(icon => container.appendChild(icon));
});