
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

  // 0~9
  var under_9 = numbers.filter(function(element, index, array) {
    return (element <= 9);
  })

  // 10~19
  var over_10 = numbers.filter(function(element, index, array) {
    return (element >= 10);
  })
  var under_19 = over_10.filter(function(element, index, array) {
    return (element <= 19);
  })

  // 20~29
  var over_20 = numbers.filter(function(element, index, array) {
    return (element >= 20);
  })
  var under_29 = over_20.filter(function(element, index, array) {
    return (element <= 29);
  })

  // 30~39
  var over_30 = numbers.filter(function(element, index, array) {
    return (element >= 30);
  })
  var under_39 = over_30.filter(function(element, index, array) {
    return (element <= 39);
  })

  // 40~49
  var over_40 = numbers.filter(function(element, index, array) {
    return (element >= 40);
  })
  var under_49 = over_40.filter(function(element, index, array) {
    return (element <= 49);
  })

  // 50~59
  var over_50 = numbers.filter(function(element, index, array) {
    return (element >= 50);
  })
  var under_59 = over_50.filter(function(element, index, array) {
    return (element <= 59);
  })

  // 60~69
  var over_60 = numbers.filter(function(element, index, array) {
    return (element >= 60);
  })
  var under_69 = over_60.filter(function(element, index, array) {
    return (element <= 69);
  })

  // 70~79
  var over_70 = numbers.filter(function(element, index, array) {
    return (element >= 70);
  })
  var under_79 = over_70.filter(function(element, index, array) {
    return (element <= 79);
  })

  // 80~89
  var over_80 = numbers.filter(function(element, index, array) {
    return (element >= 80);
  })
  var under_89 = over_80.filter(function(element, index, array) {
    return (element <= 89);
  })

  // 90~99
  var over_90 = numbers.filter(function(element, index, array) {
    return (element >= 90);
  })
  var under_99 = over_90.filter(function(element, index, array) {
    return (element <= 99);
  })

  // 「生成された数」欄に表示する
  document.getElementById("form_0~9").innerHTML = under_9;
  document.getElementById("form_10~19").innerHTML = under_19;
  document.getElementById("form_20~29").innerHTML = under_29;
  document.getElementById("form_30~39").innerHTML = under_39;
  document.getElementById("form_40~49").innerHTML = under_49;
  document.getElementById("form_50~59").innerHTML = under_59;
  document.getElementById("form_60~69").innerHTML = under_69;
  document.getElementById("form_70~79").innerHTML = under_79;
  document.getElementById("form_80~89").innerHTML = under_89;
  document.getElementById("form_90~99").innerHTML = under_99;



    // var min1 = under_9.filter(function(element, index, array) {
    //   return (element = min)
    // })

  document.getElementById("min0~9").innerHTML =Math.min.apply(null,under_9);
  document.getElementById("max0~9").innerHTML =Math.max.apply(null,under_9);
  document.getElementById("length_1").innerHTML =under_9.length;



};
