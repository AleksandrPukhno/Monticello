'use strict';

// Відкриває бокове меню.
function showSidebar() {
    const sideBar = document.querySelector('.sidebar');
    sideBar.classList.add('sidebar--open');
}

// Закриває бокове меню.
function hideSidebar() {
    const hideSidebar = document.querySelector('.sidebar');
    hideSidebar.classList.remove('sidebar--open');
}

// Закриває бокове меню при кліку поза його межами.
document.addEventListener('click', function (e) {
  const sidebar = document.querySelector('.sidebar');
  const menuButton = document.querySelector('[onclick="showSidebar()"]');

  if (
    sidebar.classList.contains('sidebar--open') &&
    !sidebar.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    sidebar.classList.remove('sidebar--open');
  }
});

  const header = document.querySelector('.header');
  const slider = document.querySelector('.slider');

  // Змінює стиль header після прокрутки першого екрана.
  window.addEventListener('scroll', () => {
    if (window.scrollY > slider.offsetHeight - header.offsetHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

// Відкриває модальне вікно з деталями проєкту.
function openModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('active');
}

// Закриває модальне вікно з деталями проєкту.
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
}

// Закриває модальне вікно при кліку на затемнений фон.
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Відкриває спливаюче вікно галереї "See more".
function openPictures() {
  const pictures = document.getElementById('pictures');
  pictures.classList.add('active');
}

// Закриває спливаюче вікно галереї "See more".
function closePictures() {
  const pictures = document.getElementById('pictures');
  pictures.classList.remove('active');
}

// Закриває галерею при кліку на затемнений фон.
document.addEventListener('DOMContentLoaded', function() {
  const pictures = document.getElementById('pictures');

  if (pictures) {
    pictures.addEventListener('click', function(e) {
      if (e.target === pictures) {
        closePictures();
      }
    });
  }
});

const lat = 40.7459;
const lng = -74.0048;

// Ініціалізує карту Leaflet із вибраною локацією.
const map = L.map('map', {
    scrollWheelZoom: false 
}).setView([lat, lng], 19);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

const redPinIcon = L.icon({
    iconUrl: './assets/icons/pin.svg',
    iconSize: [106, 106],
    iconAnchor: [70, 106], 
    popupAnchor: [0, -106]  
});

const popupContent = `
    <div style="font-family: sans-serif; line-height: 1.4; color: #333;">
        <h3 style="margin: 0 0 5px; font-weight: bold;">High Line Park</h3>
        <p style="margin: 0; font-size: 13px;">New York, NY 10011</p>
        <p style="margin: 0; font-size: 13px;">+001 356 868 2454</p>
    </div>
`;

const marker = L.marker([lat, lng], {icon: redPinIcon}).addTo(map);

marker.bindPopup(popupContent, {
    className: 'custom-popup',
    maxWidth: 250,
    minWidth: 200,
}).openPopup();

// Перемикає форму contact і прокручує сторінку до її початку при відкритті.
function toggleContactForm() {
    const contact = document.querySelector('.contact');
    const isOpening = !contact.classList.contains('contact--active');

    contact.classList.toggle('contact--active');

    if (isOpening) {
      setTimeout(() => {
        const top =
          contact.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: top - 100,
          behavior: 'smooth',
        });
      }, 300);
    }
}

const galleryItems = document.querySelectorAll('.gallery__item');
const modal = document.getElementById('gallery__modal');
const modalImg = document.getElementById('modal-img');

// Відкриває вибране зображення галереї у повноекранній модалці.
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('.gallery__image');
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

// Закриває повноекранну модалку галереї по кліку.
modal.addEventListener('click', () => {
  modal.style.display = 'none';
})
