document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('menu');
  const menuBg = document.getElementById('menu-bg');

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();

    dropdownMenu.style.display = 'block';
    menuBg.style.display = 'block';
  });

  window.addEventListener('click', (event) => {
    if (
      event.target !== menuButton &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = 'none';
      menuBg.style.display = 'none';
    }
  });
});