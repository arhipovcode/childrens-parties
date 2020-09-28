// Скрипт для табов


window.addEventListener('DOMContentLoaded', function () {
	'use strict';

	let locationWrapBtn = document.querySelector('.location-block'),
		tabsWrapper = document.querySelector('.location-tabs-wrapper');


	locationWrapBtn.addEventListener('click', function (event) {
		const target = event.target;
		if (target.closest('.location-block__link')) {
			for (let i = 0; i < locationWrapBtn.children.length; i++) {
				if (locationWrapBtn.children[i] == target.closest('.location-block__link')) {
					locationWrapBtn.children[i].classList.add('location-block__link_active');
					tabsWrapper.children[i].classList.add('tabs-active', 'fadeIn', 'animated');
					continue;
				} else {
					locationWrapBtn.children[i].classList.remove('location-block__link_active');
					tabsWrapper.children[i].classList.remove('tabs-active');
				}
			}
		}
	});




// Плавная прокрутка к якорям
let anchorPoints = document.querySelectorAll('.about__link');

for (let i = 0; i < anchorPoints.length; i++) {
	anchorPoints[i].addEventListener('click', function (e) {
		e.preventDefault();

		const blockId = e.target.getAttribute('href');

		document.querySelector(blockId).scrollIntoView({
			behavior: "smooth",
			block: 'start'
		});
	});
}

// Кнопка "показать еще"
let refBtn = document.querySelector('.refresh-btn'),
		hideBtn = document.querySelector('.hide-btn'),
		refBlock = document.querySelectorAll('.game-visible');

// Скрыть блок
refBlock.forEach((visibleBlock) => {
	visibleBlock.style.display = 'none';
});
// Показать блоки
refBtn.addEventListener('click', () => {
	refBlock.forEach((visibleBlock) => {
		visibleBlock.style.display = 'block';
		visibleBlock.classList.add('fadeIn', 'animated');
	});
	refBtn.style.display = 'none';
	hideBtn.style.display = 'flex';
});
// Скрыть блоки
hideBtn.addEventListener('click', () => {
	refBlock.forEach((visibleBlock) => {
		visibleBlock.style.display = 'none';
	});
	hideBtn.style.display = 'none';
	refBtn.style.display = 'flex';
});

});