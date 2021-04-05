var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var isIdle = true;
var colors;
var widthline;
var brushstyle;
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);
lines();
var removeRectangleInLine = 0;
function lines() 
{
	function drawstart(event) {
	  context.beginPath();
	  context.moveTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
	  isIdle = false;
	}
	function drawmove(event) {
	  if (isIdle) return;
	  context.lineTo(event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop);
	  context.lineWidth = widthline;
	  context.strokeStyle = colors;
	  context.stroke();
	}
	function drawend(event) {
	  if (isIdle) return;
	  drawmove(event);
	  isIdle = true;
	}
	function touchstart(event) { drawstart(event.touches[0]) }
	function touchmove(event) { drawmove(event.touches[0]); event.preventDefault(); }
	function touchend(event) { drawend(event.changedTouches[0]) }
  
	canvas.addEventListener('touchstart', touchstart, false);
	canvas.addEventListener('touchmove', touchmove, false);
	canvas.addEventListener('touchend', touchend, false);        
  
	canvas.addEventListener('mousedown', drawstart, false);
	canvas.addEventListener('mousemove', drawmove, false);
	canvas.addEventListener('mouseup', drawend, false);
};
function changeColors(palette) {
	switch(palette.id) {
		case "red":
			colors = "red";
			break;
		case "orange":
			colors = "orange";
			break;
		case "blue":
			colors = "#09C2DB";
			break;
		case "indigo":
			colors = "#0E38AD";
			break;
		case "green":
			colors = "green";
			break;
		case "black":
			colors = "black";
			break;
		case "yellow":
			colors = "yellow";
			break;
		case "purple":
			colors = "#B9509E";
			break;
		case "erase":
			colors = "white";
			widthline=25;
			break;
	}
};
function lineWidthRange() {
    widthLine = document.getElementById("myRange").value;
};
function erase() {
	context.clearRect(0, 0, canvas.width, canvas.height);
};