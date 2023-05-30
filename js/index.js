/* Slider */
const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-page');
const buttonPrevious = document.querySelector('.slider-prev');
const buttonNext = document.querySelector('.slider-next');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider-page-current').classList.remove('slider-page-current');
  document.querySelector('.slider-pagination-button-current').classList.remove('slider-pagination-button-current');
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slider-page-current');
    tab.classList.add('slider-pagination-button-current');
  });
});

buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider-page-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('slider-page-current');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

/* Tab buttons */
const tabButtons = document.querySelectorAll('.tab-buttons');
const tabsDescriptionItem = document.querySelectorAll('.tabs-description-item');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.tab-buttons-current').classList.remove('tab-buttons-current');
    button.classList.add('tab-buttons-current');
    document.querySelector('.tabs-description-item-active').classList.remove('tabs-description-item-active');
    tabsDescriptionItem[index].classList.add('tabs-description-item-active');
  });
});

/* Modal window */

const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.delivery-info-link');
const closeBtn = document.querySelector('.modal-close-button');

btn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.style.display = "none";
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
