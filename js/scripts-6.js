document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.projects');
  const icons = Array.from(container.querySelectorAll('.indi-p'));

  // Fisher-Yates shuffle
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }

  // Clear container and append icons in shuffled order
  container.innerHTML = "";
  icons.forEach(icon => container.appendChild(icon));
});
