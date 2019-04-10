
'use strict';


document.getElementById("button").onclick = function() {

  //フォームの値を取得する
  var input_number =document.getElementById("input_number").value;

  //取得した文字列を数値へ変換する
  var execution_number =parseInt(input_number, 10);

  // 空の配列を作る
  var numbers = [];

  var n = 0;


  while (n < execution_number){
    //0~99の数字をランダムに生成する
    var rand =Math.floor(Math.random()*100);
    // 配列に生成した乱数を新しい要素として追加する
    numbers.push(rand);
    n++;
  }


  // 生成した乱数が配列に新しい要素として追加されているかの確認
  console.log(numbers);

  var get_number_1 = numbers.filter(function(element, index, array) {
    return (element <= 9);
  })
  var get_number_2 = numbers.filter(function(element, index, array) {
    return (element >= 10,<= 19);
  })
  var get_number_3 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_4 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_5 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_6 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_7 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_8 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_9 = numbers.filter(function(element, index, array) {
    return (element <= );
  })
  var get_number_10 = numbers.filter(function(element, index, array) {
    return (element <= );
  })


  document.getElementById("form_0~9").innerHTML = get_number_1;
  document.getElementById("form_10~19").innerHTML = get_number_2;

};
