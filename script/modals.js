// Модальные окна
'use strict';

let headerBtn = document.querySelectorAll('.modal-btn'),
  closedBtn = document.querySelector('.closed'),
  body = document.querySelector('body'),
  modalWindow = document.querySelector('.modal');

headerBtn.forEach(function (modalBtn) {
  modalBtn.addEventListener('click', function () {
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
// Закрыть окно
closedBtn.addEventListener('click', closeWindowModal);

modalWindow.addEventListener('click', function (e) {
  if (e.target == modalWindow) {
    for(let i = 0; i < modDetails.length; i++) {
      if(modDetails[i].style.display == 'flex') {
        modalWindow.classList.remove('fadeIn');
        modalWindow.classList.add('fadeOut');
        setTimeout(function () {
          modalWindow.classList.remove('show');
        }, 1000);
        return;
      }
    }
    closeWindowModal ();
  }
});

// Модальное окно "подробнее"
let modDetails = document.querySelectorAll('.modal-details'),
    clsDetails = document.querySelectorAll('.details-closed'),
    detailsBtn = document.querySelectorAll('.game-btn');

// Показать окно
detailsBtn.forEach(function(item, index) {
  item.addEventListener('click', () => {
    modDetails[index].classList.add('fadeIn');
    modDetails[index].classList.remove('fadeOut');
    modDetails[index].style.display = 'flex';
    body.style.overflow = 'hidden';
  });
});
// Закрыть окно
clsDetails.forEach(function(item, index) {
  item.addEventListener('click', () => {
    modDetails[index].classList.add('fadeOut');
    modDetails[index].classList.remove('fadeIn');
    setTimeout(function () {
      modDetails[index].style.display = 'none';
    }, 1000);
    body.style.overflow = 'auto';
  });
});
// Клик мимо блока
modDetails.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    if(e.target == item) {
      modDetails[index].classList.add('fadeOut');
      modDetails[index].classList.remove('fadeIn');
      setTimeout(function () {
        modDetails[index].style.display = 'none';
      }, 1000);
      body.style.overflow = 'auto';
    }
  });
});

// Модальное "политика"
let policyBtns = document.querySelectorAll('.conditions__link'),
    policyWindow = document.querySelector('.modal-policy'),
    policyClosed = document.querySelector('.policy-closed');

// Показать окно
policyBtns.forEach(function(btn) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    policyWindow.classList.add('fadeIn');
    policyWindow.classList.remove('fadeOut');
    body.style.overflow = 'hidden';
    policyWindow.style.display = 'flex';
  });
});
// Закрыть окно
policyClosed.addEventListener('click', closedPolicyWindow);
policyWindow.addEventListener('click', (e) => {
  if(e.target == policyWindow) {
    closedPolicyWindow();
  }
});
function closedPolicyWindow() {
  policyWindow.classList.add('fadeOut');
  policyWindow.classList.remove('fadeIn');
  setTimeout(function () {
    policyWindow.style.display = 'none';
  }, 1000);
  body.style.overflow = 'auto';
}
