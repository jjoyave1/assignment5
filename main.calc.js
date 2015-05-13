var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equals = document.getElementById('equals');
var result = document.getElementById('result');
var clear = document.getElementById('clear');
var decimal = document.getElementById('decim');

var btn1 = document.querySelector("#btnOne");
var btn2 = document.querySelector("#btnTwo");
var btn3 = document.querySelector("#btnThree");
var btn4 = document.querySelector("#btnFour");
var btn5 = document.querySelector("#btnFive");
var btn6 = document.querySelector("#btnSix");
var btn7 = document.querySelector("#btnSeven");
var btn8 = document.querySelector("#btnEight");
var btn9 = document.querySelector("#btnNine");

btn1 = Number(btn1.getAttribute("data-number"));
btn2 = Number(btn2.getAttribute("data-number"));
btn3 = Number(btn3.getAttribute("data-number"));
btn4 = Number(btn4.getAttribute("data-number"));
btn5 = Number(btn5.getAttribute("data-number"));
btn6 = Number(btn6.getAttribute("data-number"));
btn7 = Number(btn7.getAttribute("data-number"));
btn8 = Number(btn8.getAttribute("data-number"));
btn9 = Number(btn9.getAttribute("data-number"));


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
