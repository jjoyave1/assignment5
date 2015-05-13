
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var answer = document.getElementById('answer');
var button = document.getElementById('calculateBtn');

function sum(){
  var firstNum = Number(num1.value);
  var secondNum = Number(num2.value);
  var total = firstNum + secondNum;
  answer.innerHTML = total.toString();
}

button.addEventListener('click', sum);
