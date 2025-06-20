
  const menuToggle = document.getElementById('menu-toggle');
  const navItems = document.getElementById('navitems');

  menuToggle.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });

