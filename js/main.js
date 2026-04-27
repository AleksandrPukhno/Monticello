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

// Modal functions
function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Close modal when clicking outside of content
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});
