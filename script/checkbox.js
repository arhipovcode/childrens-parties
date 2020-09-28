'use strict';

let inputs_1 = document.querySelectorAll('.question_1 input'),
  inputs_2 = document.querySelectorAll('.checkbox-lbl-wrap input'),
  inputs_3 = document.querySelectorAll('.checkbox-qw-6 input'),
  onwardBtn = document.querySelector('.check-btn'),
  finalBtn = document.querySelector('.final-btn'),
  backBtn = document.querySelector('.back-btn'),
  questionBlocks = document.querySelectorAll('.question'),
  textCondition = document.querySelector('.checkbox-conditions'),
  questionForm = document.querySelector('.question-final'),
  rangeInfoFrom = document.querySelectorAll('span .irs-from'),
  rangeInfoToBack = document.querySelectorAll('span .irs-to'),
  rangeItemFrom = document.querySelectorAll('.from'),
  rangeItemBack = document.querySelectorAll('.to'),
  inputFrom = document.querySelector('.input-from'),
  inputTo = document.querySelector('.input-to'),
  persentInfo = document.querySelector('.test-block__desc'),
  progressLine = document.querySelector('.progress-line'),
  questionNumber = document.querySelector('.current_num'),
  numberBlock = 0;


// Проверка первого блока с чекбоксами
inputs_1.forEach((item) => {
  item.addEventListener('click', function () {
    if (item.checked === false) {
      onwardBtn.setAttribute('disabled', true);
      onwardBtn.classList.remove('hover-btn');
    }
    if (item.checked === true) {
      onwardBtn.removeAttribute('disabled');
      onwardBtn.classList.add('hover-btn');
    }
  });
});

// Проверка второго блока
rangeItemFrom[0].addEventListener('mouseout', () => {
  if (rangeInfoFrom[0].textContent > 0) {
    activeBtn();
  }
});
rangeItemBack[0].addEventListener('mouseout', () => {
  if (rangeInfoToBack[0].textContent != 100) {
    activeBtn();
  }
});

// Проверка третьего блока
inputFrom.addEventListener('input', () => {
  if (inputFrom.value !== '') {
    inputFrom.style.borderColor = '#cccccc';
  }
});
inputTo.addEventListener('input', () => {
  if (inputTo.value !== '') {
    inputTo.style.borderColor = '#cccccc';
  }
});

// Проверка четвертого блока
inputs_2.forEach((elem) => {
  elem.addEventListener('click', function () {
    if (elem.checked === false) {
      onwardBtn.setAttribute('disabled', true);
      onwardBtn.classList.remove('hover-btn');
    }
    if (elem.checked === true) {
      onwardBtn.removeAttribute('disabled');
      onwardBtn.classList.add('hover-btn');
    }
  });
});

// Проверка пятого блока
rangeItemFrom[1].addEventListener('mouseout', () => {
  if (rangeInfoFrom[1].textContent > 0) {
    activeBtn();
  }
});
rangeItemBack[1].addEventListener('mouseout', () => {
  if (rangeInfoToBack[1].textContent !== 100) {
    activeBtn();
  }
});

// Проверка шестого блока
inputs_3.forEach((elem) => {
  elem.addEventListener('click', function (event) {
    let target = event.target;

    for (let i = 0; i < inputs_3.length; i++) {
      if (target.closest('.radio-btn') == inputs_3[i]) {
        target.checked = true;
        onwardBtn.removeAttribute('disabled');
        onwardBtn.classList.add('hover-btn');
      } else {
        inputs_3[i].checked = false;
      }
    }
  });
});


// Событие клик на кнопку "далее"
onwardBtn.addEventListener('click', function () {
  if (questionBlocks[2].style.display == 'block') {
    if (inputFrom.value == '' || !/\d/.test(inputFrom.value)) {
      inputFrom.style.borderColor = 'red';
      inputFrom.value = '';
      inputFrom.placeholder = 'Введите число';
      setTimeout(() => {
        inputFrom.placeholder = 'От';
      }, 1000);
      return;
    }
    if (inputTo.value == '' || !/\d/.test(inputTo.value)) {
      inputTo.style.borderColor = 'red';
      inputTo.value = '';
      inputTo.placeholder = 'Введите число';
      setTimeout(() => {
        inputTo.placeholder = 'До';
      }, 1000);
      return;
    }
  }
  blockPlus(1);
});


// Событие клик на кнопку "назад"
backBtn.addEventListener('click', function () {
  onwardBtn.removeAttribute('disabled');
  onwardBtn.classList.add('hover-btn');
  blockMin(1);
});


// Функция активирует кнопку
function activeBtn() {
  if (onwardBtn.disabled === true) {
    onwardBtn.removeAttribute('disabled');
    onwardBtn.classList.add('hover-btn');
  }
}
// Функция блокирует кнопку
function blockBtn() {
  if (onwardBtn.disabled === false) {
    onwardBtn.setAttribute('disabled', true);
    onwardBtn.classList.remove('hover-btn');
  }
}

// Функция переходит на следующий блок
function blockPlus(n) {
  showQuestionsBlock(numberBlock += n);
}
// Функция возвращает на предыдущий блок
function blockMin(n) {
  showQuestionsBlock(numberBlock -= n);
}

// Вычисляем номер блока и прибавляем процент
function persentValue(numBlock) {
  if (numBlock == 0) {
    persentInfo.textContent = '0%';
    progressLine.style.width = '20%';
  }
  if (numBlock == 1) {
    persentInfo.textContent = '2%';
    progressLine.style.width = '33%';
    questionNumber.textContent = '2';
  }
  if (numBlock == 2) {
    persentInfo.textContent = '4%';
    progressLine.style.width = '49%';
    questionNumber.textContent = '3';
  }
  if (numBlock == 3) {
    persentInfo.textContent = '6%';
    progressLine.style.width = '66%';
    questionNumber.textContent = '4';
  }
  if (numBlock == 4) {
    persentInfo.textContent = '8%';
    progressLine.style.width = '83%';
    questionNumber.textContent = '5';
  }
  if (numBlock == 5) {
    persentInfo.textContent = '10%';
    progressLine.style.width = '100%';
  }
}


function showQuestionsBlock(blockIndex) {
  persentValue(blockIndex);

  if (blockIndex !== 0) {
    backBtn.style.display = 'block';
  }
  if (blockIndex === 0) {
    backBtn.style.display = 'none';
  }
  if (blockIndex === 5) {
    onwardBtn.style.display = 'block';
    finalBtn.style.display = 'none';
    textCondition.style.display = 'none';
  }
  if (blockIndex === 6) {
    onwardBtn.style.display = 'none';
    finalBtn.style.display = 'block';
    textCondition.style.display = 'block';
    questionForm.style.minHeight = 'auto';
  }
  questionBlocks.forEach((blockItem) => {
    blockItem.style.display = 'none';
  });

  questionBlocks[blockIndex].style.display = 'block';

  if (blockIndex === 1) {
    setTimeout(validationBlock_1, 200);
  }
  if (blockIndex === 3) {
    validationBlock_3(inputs_2);
  }
  if (blockIndex === 4) {
    setTimeout(validationBlock_2, 200);
  }
  if (blockIndex === 5) {
    validationBlock_3(inputs_3);
  }
}


function validationBlock_1() {
  if (rangeInfoFrom[0].textContent == 0 && rangeInfoToBack[0].textContent == 100) {
    blockBtn();
  } else {
    activeBtn();
  }
}

function validationBlock_2() {
  if (rangeInfoFrom[1].textContent == 0 && rangeInfoToBack[1].textContent == 100) {
    blockBtn();
  } else {
    activeBtn();
  }
}

function validationBlock_3(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      return;
    }
  }
  blockBtn();
}