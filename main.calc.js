var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var equals = document.getElementById('equals');
var result = document.getElementById('result');
var clear = document.getElementById('clr');
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

function setInput(event){
  var clickedNum = event.target;
  var displayedNumber = Number(clickedNum.getAttribute('data-number'));
  result.value = displayedNumber.toString();


  //ADDING DIGITS
  // function addInput(event){
  //   var addedDigit = event.target;
  //   var appendedNum = Number(clickedNum.getAttribute('data-number'));
  //   result.value = (displayedNumber.toString() + appendedNum.toString());
  // }
  // btn1.addEventListener('click', addInput);
  // btn2.addEventListener('click', addInput);
  // btn3.addEventListener('click', addInput);
  // btn4.addEventListener('click', addInput);
  // btn5.addEventListener('click', addInput);
  // btn6.addEventListener('click', addInput);
  // btn7.addEventListener('click', addInput);
  // btn8.addEventListener('click', addInput);
  // btn9.addEventListener('click', addInput);
  // decim.addEventListener('click', addInput);


  function opInput(event){
    var clickedOperator = event.target;
    var operatorInUse = clickedOperator.getAttribute('data-operation');
    result.value = (displayedNumber.toString() + operatorInUse.toString());

    function secondInput(event){
      var clickedNum2 = event.target;
      var displayedNumber2 = clickedNum2.getAttribute('data-number');
      result.value = (displayedNumber.toString() + operatorInUse.toString() + displayedNumber2.toString());

        function equality(event){
          result.value = eval((displayedNumber.toString() + operatorInUse.toString() + displayedNumber2.toString()));


          function reset(event){
          result.value = 0;
          displayedNumber = 0;
          displayedNumber2 = 0;
          operatorInUse = 0;
          }
          clear.addEventListener('click', reset);
        }
       equals.addEventListener('click', equality);

    }
    btn1.addEventListener('click', secondInput);
    btn2.addEventListener('click', secondInput);
    btn3.addEventListener('click', secondInput);
    btn4.addEventListener('click', secondInput);
    btn5.addEventListener('click', secondInput);
    btn6.addEventListener('click', secondInput);
    btn7.addEventListener('click', secondInput);
    btn8.addEventListener('click', secondInput);
    btn9.addEventListener('click', secondInput);

  }
  add.addEventListener('click', opInput);
  subtract.addEventListener('click', opInput);
  multiply.addEventListener('click', opInput);
  divide.addEventListener('click', opInput);

}

btn1.addEventListener('click', setInput);
btn2.addEventListener('click', setInput);
btn3.addEventListener('click', setInput);
btn4.addEventListener('click', setInput);
btn5.addEventListener('click', setInput);
btn6.addEventListener('click', setInput);
btn7.addEventListener('click', setInput);
btn8.addEventListener('click', setInput);
btn9.addEventListener('click', setInput);
decim.addEventListener('click', setInput);
