
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var answer = document.getElementById('answer');
var button = document.getElementById('calculateBtn');

var sum = function(x, y){
  var total = x + y;
  answer.innerHTML = total.toString();
}

button.onclick = function(){
  var input1 = Number(num1.value);
  var input2 = Number(num2.value);
  sum(input1, input2);
}
