// Carossel de best sellers
const carousel = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.product').length;
const itemsPerView = 4;

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, totalItems - itemsPerView);
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * (100 / itemsPerView);
  carousel.style.transform = `translateX(${translateX}%)`;
}


// Função para atualizar o ano atual no HTML
  const currentYear = new Date().getFullYear(); // Obtem o ano atual
  console.log('currentYear', currentYear);
  const yearElement = document.getElementById('current-year'); // Seleciona o elemento HTML

  yearElement.textContent = currentYear; // Atualiza o conteúdo do elemento HTML