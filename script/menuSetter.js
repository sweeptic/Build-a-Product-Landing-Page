(function () {
  const navHeaderMenu = document.getElementById('nav-header-menu');
  const navHeader = document.getElementById('nav-header');
  const navCenter = document.getElementById('navCenter');

  window.onscroll = function () {
    'use strict';
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navHeaderMenu.classList.add('menu-tighten');
      navHeader.classList.add('nav-resized');
      navCenter.classList.add('navCenter');
    } else {
      navHeaderMenu.classList.remove('menu-tighten');
      navHeader.classList.remove('nav-resized');
      navCenter.classList.remove('navCenter');
    }
  };
})();
