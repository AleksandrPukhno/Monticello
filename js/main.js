'use strict';


function showSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.style.display = 'flex';
}

function hideSidebar() {
    const hideSidebar = document.querySelector('.sidebar');
    hideSidebar.style.display = 'none';
}

  const header = document.querySelector('.header');
  const slider = document.querySelector('.slider');

  window.addEventListener('scroll', () => {
    if (window.scrollY > slider.offsetHeight - header.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
