
'use strict';


document.getElementById("button").onclick = function() {

  //入力した数だけランダム生成できるかのテスト
  var display =document.getElementById("test");

  //0~99の数字をランダムに生成する
  var rand =Math.floor(Math.random()*100);

  //フォームの値を取得する
  var input_number =document.getElementById("input_number").value;


  display.innerHTML =parseInt(input_number, 10)*(rand);

}
