'use strict';

let headerBtn = document.querySelectorAll('.modal-btn'),
  closedBtn = document.querySelector('.closed'),
  body = document.querySelector('body'),
  modalWindow = document.querySelector('.modal');

headerBtn.forEach(function (modalBtn) {
  modalBtn.addEventListener('click', function (event) {
    modalWindow.classList.add('show', 'animated', 'fadeIn');
    modalWindow.classList.remove('fadeOut');
    body.style.overflow = 'hidden';
  });
});

function closeWindowModal () {
  modalWindow.classList.remove('fadeIn');
  modalWindow.classList.add('fadeOut');
  body.style.overflow = 'auto';
  setTimeout(function () {
    modalWindow.classList.remove('show');
  }, 1000);
}

closedBtn.addEventListener('click', closeWindowModal);

window.addEventListener('click', function (e) {
  if (e.target == modalWindow) {
    modalWindow.classList.remove('fadeIn');
    modalWindow.classList.add('fadeOut');
    body.style.overflow = 'auto';
    setTimeout(function () {
      modalWindow.classList.remove('show');
    }, 1000);
  }
});