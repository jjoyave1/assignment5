var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equals = document.getElementById('equals');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var decimal = document.getElementById('decim');

var btn1 = querySelector("btnOne");
var btn2 = querySelector("btnTwo");
var btn3 = querySelector("btnThree");
var btn4 = querySelector("btnFour");
var btn5 = querySelector("btnFive");
var btn6 = querySelector("btnSix");
var btn7 = querySelector("btnSeven");
var btn8 = querySelector("btnEight");
var btn9 = querySelector("btnNine");

function numToScreen(event){
  var clickedNum = event.target;
  var displayedNumber = Number(clickedNum.getAttribute("data-number"));
  result.innerHTML = displayedNumber.toString();
}

btn1.addEventListener('click', numToScreen);
btn2.addEventListener('click', numToScreen);
btn3.addEventListener('click', numToScreen);
btn4.addEventListener('click', numToScreen);
btn5.addEventListener('click', numToScreen);
btn6.addEventListener('click', numToScreen);
btn7.addEventListener('click', numToScreen);
btn8.addEventListener('click', numToScreen);
btn9.addEventListener('click', numToScreen);
