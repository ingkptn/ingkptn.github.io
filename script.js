document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menuButton');
  const dropdownMenu = document.getElementById('menu');
  const menuBg = document.getElementById('menu-bg');

  function showMenu() {
    // dropdownMenu.style.display = 'block';
    menuBg.style.display = 'block';
    dropdownMenu.classList.add('open');
  }

  function hideMenu() {
    // dropdownMenu.style.display = 'none';
    dropdownMenu.classList.remove('open');
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