'use strict';

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    arrowLeft = document.querySelector('.pagination__left-btn'),
    arrowRight = document.querySelector('.pagination__right-btn'),
    paginationWrap = document.querySelector('.quest-slide-pagination'),
    pagItems = document.querySelectorAll('.pagination__item-dots');

showSlides(slideIndex);

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach(function (slide) {
    slide.style.display = 'none';
  });
  pagItems.forEach(function (item) {
    item.classList.remove('pagination__item_active');
  });

  slides[slideIndex - 1].style.display = 'flex';
  pagItems[slideIndex - 1].classList.add('pagination__item_active');
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

arrowLeft.addEventListener('click', function() {
  plusSlides(-1);
});
arrowRight.addEventListener('click', function() {
  plusSlides(1);
});

paginationWrap.addEventListener('click', function(event) {
  for (let i = 0; i < pagItems.length + 1; i++) {
    if(event.target.classList.contains('pagination__item-dots') && event.target == pagItems[i-1]) {
      currentSlide(i);
    }
  }
});
