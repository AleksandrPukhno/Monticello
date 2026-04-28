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

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Modal functions
function openPictures() {
  const pictures = document.getElementById('pictures');
  pictures.classList.add('active');
}

function closePictures() {
  const pictures = document.getElementById('pictures');
  pictures.classList.remove('active');
}

// Close modal when clicking outside of content
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

// // Координати High Line Park, New York
// const lat = 40.7461;
// const lng = -74.0048;

// // 1. Ініціалізація карти на High Line Park (збільшимо масштаб до 15)
// const map = L.map('map').setView([lat, lng], 19);

// // Використовуємо шар "Light All" — він сірий, чистий, але з назвами вулиць
// L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//     attribution: '&copy; OpenStreetMap'
// }).addTo(map);


// // 3. Створення КАСТОМНОЇ іконки
// const redPinIcon = L.icon({
//     iconUrl: './assets/icons/pin.svg', // Шлях до твоєї червоної шпильки
//     iconSize: [106, 106], // Розмір іконки [ширина, висота]
//     iconAnchor: [20, 40], // Точка іконки, яка буде "прив'язана" до координат (середина низу шпильки)
//     popupAnchor: [35, -40]  // Точка, з якої буде відкриватися балун (відносно iconAnchor)
// });

// // 4. Створення контенту для балуна (з твого скріншоту)
// const popupContent = `
//     <div style="font-family: sans-serif; line-height: 1.4; color: #333;">
//         <h3 style="margin: 0 0 5px; font-weight: bold;">High Line Park</h3>
//         <p style="margin: 0; font-size: 13px;">New York, NY 10011</p>
//         <p style="margin: 0; font-size: 13px;">+001 356 868 2454</p>
//     </div>
// `;

// // 5. Додавання маркера з кастомною іконкою та балуном
// const marker = L.marker([lat, lng], {icon: redPinIcon}).addTo(map);

// marker.bindPopup(popupContent, {
//     className: 'custom-popup',
//     maxWidth: 250,
//     minWidth: 200,
//     autoPan: false,
// }).openPopup(); // Щоб балун відкрився одразу

// panBy([x, y]);
// map.panBy([-200, -250]);


const lat = 40.7459;
const lng = -74.0048;

const map = L.map('map', {
    scrollWheelZoom: false // Порада: вимкни зум коліщатком, щоб зручніше було скролити сайт
}).setView([lat, lng], 19);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

const redPinIcon = L.icon({
    iconUrl: './assets/icons/pin.svg',
    iconSize: [106, 106],
    // ТЕПЕР ТОЧКА ПРИВ'ЯЗАНА: половина ширини (53) і повна висота (106)
    iconAnchor: [70, 106], 
    // Балун виходить з верхівки шпильки
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
