
'use strict';


document.getElementById("button").onclick = function() {

  //入力した数だけランダム生成できるかのテスト
  var display =document.getElementById("test");

  //0~99の数字をランダムに生成する
  var rand =Math.floor(Math.random()*100);

  //フォームの値を取得する
  var input_number =document.getElementById("input_number").value;

  //取得した文字列を数値へ変換する
  var execution_number =parseInt(input_number, 10);

  var numbers = [];

  var n = 0;

  while (n < execution_number){
    numbers.push(rand);
    n++;
  }

  console.log(numbers);

  // display.write(numbers);

};
