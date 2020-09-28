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

// Scroll-up кнопка вверх
const offset = 200;
const scrollUp = document.querySelector('.scroll-up'),
			scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
			pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// Функция высчитывает scroll от начала страницы
const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
	const height = document.documentElement.scrollHeight - window.innerHeight;
	const dashoffset = pathLength - (getTop() * pathLength / height);
	scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () => {
	updateDashoffset();

	if(getTop() > offset) {
		scrollUp.classList.add('scroll-up--active');
	} else {
		scrollUp.classList.remove('scroll-up--active');
	}
});

// слушатель для кнопки вверх
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
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