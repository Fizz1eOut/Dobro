document.addEventListener('DOMContentLoaded', () => {

	const menuBtns = document.querySelectorAll('.dentistry__button');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.dentistry__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('dentistry__button--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('dentistry__button--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.dentistry__list')) {
			menuBtns.forEach(el => {
				el.classList.remove('dentistry__button--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});