/*const Rectangle_6 = document.getElementById("Rectangle_6");
Rectangle_6.innerHTML = "PLANTING"*/
/*Rectangle_6.innerHTML = "PLANTING"*/

const Rectangle_6 = document.querySelector(".btn_1");
const focus02 = document.querySelector(".first first_02");
const handleClick = (element) => {
	Rectangle_6.innerHTML = "PLANTING";
	focus02.focus();
};
Rectangle_6.addEventListener('click', handleClick);

const Rectangle2 = document.querySelector(".btn_2");
const handleClick2 = (element) => {
	Rectangle2.innerHTML = "LAWN";
	document.querySelector(".first first_03").focus();
};
Rectangle2.addEventListener('click', handleClick2);


const Rectangle = document.querySelector(".btn_3");
const handleClick1 = (element) => {
	Rectangle.innerHTML = "GARDENS";
	document.querySelector(".first first_01").focus();
};
Rectangle.addEventListener('click', handleClick1);




