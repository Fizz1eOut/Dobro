document.addEventListener('DOMContentLoaded', () => {

	const menuBtns = document.querySelectorAll('.dentistry__button');
	const dropdown = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let drop = e.target.closest('.dentistry__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== e.target) {
					el.classList.remove('dentistry__button--active');
				}
			});

			dropdown.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			e.target.classList.toggle('dentistry__button--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.dentistry__list')) {
			menuBtns.forEach(el => {
				el.classList.remove('dentistry__button--active');
			});

			dropdown.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});

	const phoneBtn = document.querySelector('.phone-call__button');
	const phoneDropdown = document.querySelector('.dropwond-phone__list');

	phoneBtn.addEventListener('click', (e) => {
		if (e.target.closest('.phone-call__button')) {
			// console.log(e.target)
			phoneBtn.classList.toggle('phone-call__button--active');
			phoneDropdown.classList.toggle('dropwond-phone__list--active');
		}
	});
});