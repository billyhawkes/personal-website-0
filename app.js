// Hamburger //
const hamburger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('open');
	hamburger.classList.toggle('open');
});
