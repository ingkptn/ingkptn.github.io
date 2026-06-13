document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('menu');
  const menuBg = document.getElementById('menu-bg');

  function showMenu() {
    dropdownMenu.style.display = 'block';
    menuBg.style.display = 'block';
  }

  function hideMenu() {
    dropdownMenu.style.display = 'none';
    menuBg.style.display = 'none';
  }

  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    showMenu();
  });

  menuBg.addEventListener('click', hideMenu);

  window.addEventListener('click', (event) => {
    if (
      !menuButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      hideMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1500) {
      hideMenu();
    }
  });
});