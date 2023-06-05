const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const sliderContent = document.querySelector('.slider-content');

prevButton.addEventListener('click', slideToPrevious);
nextButton.addEventListener('click', slideToNext);

function slideToPrevious() {
  sliderContent.scrollBy({
    left: -sliderContent.offsetWidth,
    behavior: 'smooth'
  });
}

function slideToNext() {
  sliderContent.scrollBy({
    left: sliderContent.offsetWidth,
    behavior: 'smooth'
  });
}
