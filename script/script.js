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
});