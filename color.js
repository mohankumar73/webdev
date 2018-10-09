var numSquares = 6;
var colors =[];
var pickedColor;
// var colors = generateRandomColors(numSquares);
// var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easybtn = document.querySelector("#easybtn");
// var hardbtn = document.querySelector("#hardbtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	
	modeButton();

	setupSquares();
}


function modeButton(){

	//mode buttos event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
    }
}


function setupSquares(){

	for (var i = 0; i < squares.length; i++) {
	// //adds initial colors to each squares
		// squares[i].style.background = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;

			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "correct!";
				resetButton.textContent = "Play again?";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			}
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
	reset();
}




function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}

// easybtn.addEventListener("click", function(){
	
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
	
// });


resetButton.addEventListener("click",  function(){


	reset();


	// colors = generateRandomColors(numSquares);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// messageDisplay.textContent = "";
	// this.textContent = "New colors";
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
});



// colorDisplay.textContent = pickedColor; 



function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color ;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}