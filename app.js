// Hamburger //
const hamburger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('open');
	hamburger.classList.toggle('open');
});

// Projects
const projects = document.querySelectorAll('.project');
const seeMore = document.querySelectorAll('.more');
const modals = Array.from(document.querySelectorAll('.modal'));
const modalExits = Array.from(document.querySelectorAll('.exit'));
console.log(seeMore, projects);
function openModal() {
	let projectNum = this.parentElement.dataset.pnum;
	let modal = modals.find(modal => modal.dataset.mnum == projectNum);
	
	if(modal) {
		modal.classList.toggle('open');
		modal.parentElement.classList.toggle('open'); 
	}
}
function closeModal() {
	let modal = this.parentElement; 

	modal.classList.toggle('open');
	modal.parentElement.classList.toggle('open'); 
}

seeMore.forEach(more => more.addEventListener('click', openModal));
modalExits.forEach(exit => exit.addEventListener('click', closeModal));


