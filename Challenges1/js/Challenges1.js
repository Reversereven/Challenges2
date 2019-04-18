
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


  // 行ごとに指定した数値のみの新しい配列を作る
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


  // 行ごとに新しく作られた配列の中身をwhile文で合計する
  var i = 0;
  var sum1 = 0;
  while (i < under_9.length){
    sum1 += under_9[i];
    i++;
  }
  var i = 0;
  var sum2 = 0;
  while (i < under_19.length){
    sum2 += under_19[i];
    i++;
  }
  var i = 0;
  var sum3 = 0;
  while (i < under_29.length){
    sum3 += under_29[i];
    i++;
  }
  var i = 0;
  var sum4 = 0;
  while (i < under_39.length){
    sum4 += under_39[i];
    i++;
  }
  var i = 0;
  var sum5 = 0;
  while (i < under_49.length){
    sum5 += under_49[i];
    i++;
  }
  var i = 0;
  var sum6 = 0;
  while (i < under_59.length){
    sum6 += under_59[i];
    i++;
  }
  var i = 0;
  var sum7 = 0;
  while (i < under_69.length){
    sum7 += under_69[i];
    i++;
  }
  var i = 0;
  var sum8 = 0;
  while (i < under_79.length){
    sum8 += under_79[i];
    i++;
  }
  var i = 0;
  var sum9 = 0;
  while (i < under_89.length){
    sum9 += under_89[i];
    i++;
  }
  var i = 0;
  var sum10 = 0;
  while (i < under_99.length){
    sum10 += under_99[i];
    i++;
  }


  // セルに各数値を表示する
  if (under_9.length > 0){
    // 生成された数
    document.getElementById("form_0~9").innerHTML = under_9;
    // 最小値
    document.getElementById("min0~9").innerHTML =Math.min.apply(null,under_9);
    // 最大値
    document.getElementById("max0~9").innerHTML =Math.max.apply(null,under_9);
    // 個数
    document.getElementById("length_1").innerHTML =under_9.length;
    // 平均
    document.getElementById("ave_1").innerHTML =(Math.floor(sum1 /under_9.length));
    // 合計
    document.getElementById("sum_1").innerHTML =sum1;
  } else {
    // 配列が空の時に””を表示する処理
    document.getElementById("form_0~9").innerHTML ="";
    document.getElementById("min0~9").innerHTML ="";
    document.getElementById("max0~9").innerHTML ="";
    document.getElementById("length_1").innerHTML ="";
    document.getElementById("ave_1").innerHTML ="";
    document.getElementById("sum_1").innerHTML ="";
  }

  if (under_19.length > 0){
    document.getElementById("form_10~19").innerHTML = under_19;
    document.getElementById("min10~19").innerHTML =Math.min.apply(null,under_19);
    document.getElementById("max10~19").innerHTML =Math.max.apply(null,under_19);
    document.getElementById("length_2").innerHTML =under_19.length;
    document.getElementById("ave_2").innerHTML =(Math.floor(sum2 /under_19.length));
    document.getElementById("sum_2").innerHTML =sum2;
  } else {
    document.getElementById("form_10~19").innerHTML ="";
    document.getElementById("min10~19").innerHTML ="";
    document.getElementById("max10~19").innerHTML ="";
    document.getElementById("length_2").innerHTML ="";
    document.getElementById("ave_2").innerHTML ="";
    document.getElementById("sum_2").innerHTML ="";
  }

  if (under_29.length > 0){
    document.getElementById("form_20~29").innerHTML = under_29;
    document.getElementById("min20~29").innerHTML =Math.min.apply(null,under_29);
    document.getElementById("max20~29").innerHTML =Math.max.apply(null,under_29);
    document.getElementById("length_3").innerHTML =under_29.length;
    document.getElementById("ave_3").innerHTML =(Math.floor(sum3 /under_29.length));
    document.getElementById("sum_3").innerHTML =sum3;
  } else {
    document.getElementById("form_20~29").innerHTML ="";
    document.getElementById("min20~29").innerHTML ="";
    document.getElementById("max20~29").innerHTML ="";
    document.getElementById("length_3").innerHTML ="";
    document.getElementById("ave_3").innerHTML ="";
    document.getElementById("sum_3").innerHTML ="";
  }

  if (under_39.length > 0){
    document.getElementById("form_30~39").innerHTML = under_39;
    document.getElementById("min30~39").innerHTML =Math.min.apply(null,under_39);
    document.getElementById("max30~39").innerHTML =Math.max.apply(null,under_39);
    document.getElementById("length_4").innerHTML =under_39.length;
    document.getElementById("ave_4").innerHTML =(Math.floor(sum4 /under_39.length));
    document.getElementById("sum_4").innerHTML =sum4;
  } else {
    document.getElementById("form_30~39").innerHTML ="";
    document.getElementById("min30~39").innerHTML ="";
    document.getElementById("max30~39").innerHTML ="";
    document.getElementById("length_4").innerHTML ="";
    document.getElementById("ave_4").innerHTML ="";
    document.getElementById("sum_4").innerHTML ="";
  }

  if (under_49.length > 0){
    document.getElementById("form_40~49").innerHTML = under_49;
    document.getElementById("min40~49").innerHTML =Math.min.apply(null,under_49);
    document.getElementById("max40~49").innerHTML =Math.max.apply(null,under_49);
    document.getElementById("length_5").innerHTML =under_49.length;
    document.getElementById("ave_5").innerHTML =(Math.floor(sum5 /under_49.length));
    document.getElementById("sum_5").innerHTML =sum5;
  } else {
    document.getElementById("form_40~49").innerHTML ="";
    document.getElementById("min40~49").innerHTML ="";
    document.getElementById("max40~49").innerHTML ="";
    document.getElementById("length_5").innerHTML ="";
    document.getElementById("ave_5").innerHTML ="";
    document.getElementById("sum_5").innerHTML ="";
  }
  if (under_59.length > 0){
    document.getElementById("form_50~59").innerHTML = under_59;
    document.getElementById("min50~59").innerHTML =Math.min.apply(null,under_59);
    document.getElementById("max50~59").innerHTML =Math.max.apply(null,under_59);
    document.getElementById("length_6").innerHTML =under_59.length;
    document.getElementById("ave_6").innerHTML =(Math.floor(sum6 /under_59.length));
    document.getElementById("sum_6").innerHTML =sum6;
  } else {
    document.getElementById("form_50~59").innerHTML ="";
    document.getElementById("min50~59").innerHTML ="";
    document.getElementById("max50~59").innerHTML ="";
    document.getElementById("length_6").innerHTML ="";
    document.getElementById("ave_6").innerHTML ="";
    document.getElementById("sum_6").innerHTML ="";
  }
  if (under_69.length > 0){
    document.getElementById("form_60~69").innerHTML = under_69;
    document.getElementById("min60~69").innerHTML =Math.min.apply(null,under_69);
    document.getElementById("max60~69").innerHTML =Math.max.apply(null,under_69);
    document.getElementById("length_7").innerHTML =under_69.length;
    document.getElementById("ave_7").innerHTML =(Math.floor(sum7 /under_69.length));
    document.getElementById("sum_7").innerHTML =sum7;
  } else {
    document.getElementById("form_60~69").innerHTML ="";
    document.getElementById("min60~69").innerHTML ="";
    document.getElementById("max60~69").innerHTML ="";
    document.getElementById("length_7").innerHTML ="";
    document.getElementById("ave_7").innerHTML ="";
    document.getElementById("sum_7").innerHTML ="";
  }
  if (under_79.length > 0){
    document.getElementById("form_70~79").innerHTML = under_79;
    document.getElementById("min70~79").innerHTML =Math.min.apply(null,under_79);
    document.getElementById("max70~79").innerHTML =Math.max.apply(null,under_79);
    document.getElementById("length_8").innerHTML =under_79.length;
    document.getElementById("ave_8").innerHTML =(Math.floor(sum8 /under_79.length));
    document.getElementById("sum_8").innerHTML =sum8;
  } else {
    document.getElementById("form_70~79").innerHTML ="";
    document.getElementById("min70~79").innerHTML ="";
    document.getElementById("max70~79").innerHTML ="";
    document.getElementById("length_8").innerHTML ="";
    document.getElementById("ave_8").innerHTML ="";
    document.getElementById("sum_8").innerHTML ="";
  }
  if (under_89.length > 0){
    document.getElementById("form_80~89").innerHTML = under_89;
    document.getElementById("min80~89").innerHTML =Math.min.apply(null,under_89);
    document.getElementById("max80~89").innerHTML =Math.max.apply(null,under_89);
    document.getElementById("length_9").innerHTML =under_89.length;
    document.getElementById("ave_9").innerHTML =(Math.floor(sum9 /under_89.length));
    document.getElementById("sum_9").innerHTML =sum9;
  } else {
    document.getElementById("form_80~89").innerHTML ="";
    document.getElementById("min80~89").innerHTML ="";
    document.getElementById("max80~89").innerHTML ="";
    document.getElementById("length_9").innerHTML ="";
    document.getElementById("ave_9").innerHTML ="";
    document.getElementById("sum_9").innerHTML ="";
  }
  if (under_99.length > 0){
    document.getElementById("form_90~99").innerHTML = under_99;
    document.getElementById("min90~99").innerHTML =Math.min.apply(null,under_99);
    document.getElementById("max90~99").innerHTML =Math.max.apply(null,under_99);
    document.getElementById("length_10").innerHTML =under_99.length;
    document.getElementById("ave_10").innerHTML =(Math.floor(sum10 /under_99.length));
    document.getElementById("sum_10").innerHTML =sum10;
  } else {
    document.getElementById("form_90~99").innerHTML ="";
    document.getElementById("min90~99").innerHTML ="";
    document.getElementById("max90~99").innerHTML ="";
    document.getElementById("length_10").innerHTML ="";
    document.getElementById("ave_10").innerHTML ="";
    document.getElementById("sum_10").innerHTML ="";
  }


};
