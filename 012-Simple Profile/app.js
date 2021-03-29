const circle1 = document.getElementById("c1");
const circle2 = document.getElementById("c2");

function rotateCircle() {
	circle1.style = "transform: rotate(360deg);";
	circle2.style = "transform: rotate(-360deg);";
}

function initialCircle() {
	circle1.style = "transform: rotate(0deg);";
	circle2.style = "transform: rotate(0deg);";
}
