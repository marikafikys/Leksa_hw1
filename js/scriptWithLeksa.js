const images = ['img/bird.svg', 'img/cat.svg', 'img/dog.svg', 'img/hamster.svg', 'img/human.svg'];

images.forEach(el => {
	const img = document.createElement('div');
	img.className = 'mini__item';
	img.style.backgroundImage = `url(${el})`;
	img.addEventListener('click', e => 
	showPopup(`<img alt="pic" src="${el}">`)
	);
	document.body.append(img);
});

const popup = document.querySelector(".popup");
const popupContent = popup.firstElementChild;
const popupClose = popup.lastElementChild;
const bcg = document.querySelector(".darkBackground"); // ДЗ №1.3 Затемнение заднего фона при активном popup

const showPopup = function(text) {
	popup.classList.add('popup_active');
	bcg.classList.add('darkBackground_active'); // ДЗ №1.3 Затемнение заднего фона при активном popup
	popupContent.innerHTML = text;
	document.body.style.overflow = 'hidden'; // ДЗ №1.3 Cтопорение скролла при активном popup
}


// ДЗ №1.1 Закрытие окна при нажатии на поле вне окна и миниатюр

function secondClosePopup(event) {
	// console.log(event.target);
	if (event.target.parentElement === popupContent || event.target.className === 'mini__item') {
	  return;
	} else {
	popup.classList.remove('popup_active');
	bcg.classList.remove('darkBackground_active');
	document.body.style.overflow = 'auto';
 }}
 
document.addEventListener("click", secondClosePopup);


 // ДЗ №1.2.1 Закрытие окна при нажатии Esc

 function keyCloseEsc(event) {
	// console.log(event, event.code);
	if (event.code === 'Escape') {
		popup.classList.remove('popup_active');
		bcg.classList.remove('darkBackground_active');
		document.body.style.overflow = 'auto';
	}}

document.addEventListener("keydown", keyCloseEsc);


// ДЗ №1.2.2 Закрытие окна при нажатии Alt+F4 (?????)

function keyCloseCombination(event) {
	if (event.keyCode == '115' && event.altKey) {
	  event.preventDefault();
	  popup.classList.remove('popup_active');
	  bcg.classList.remove('darkBackground_active');
	  document.body.style.overflow = 'auto';
	}}

document.addEventListener('keydown', keyCloseCombination);



