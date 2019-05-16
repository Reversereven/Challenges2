
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
  // line_1
  var numberRange_line_1 = numbers.filter(function(element, index, array) {
    return (element <= 9);
  })

  // line_2
  var lowerlimit_line_2 = numbers.filter(function(element, index, array) {
    return (element >= 10);
  })
  var numberRange_line_2 = lowerlimit_line_2.filter(function(element, index, array) {
    return (element <= 19);
  })

  // line_3
  var lowerlimit_line_3 = numbers.filter(function(element, index, array) {
    return (element >= 20);
  })
  var numberRange_line_3 = lowerlimit_line_3.filter(function(element, index, array) {
    return (element <= 29);
  })

  // line_4
  var lowerlimit_line_4 = numbers.filter(function(element, index, array) {
    return (element >= 30);
  })
  var numberRange_line_4 = lowerlimit_line_4.filter(function(element, index, array) {
    return (element <= 39);
  })

  // line_5
  var lowerlimit_line_5 = numbers.filter(function(element, index, array) {
    return (element >= 40);
  })
  var numberRange_line_5 = lowerlimit_line_5.filter(function(element, index, array) {
    return (element <= 49);
  })

  // line_6
  var lowerlimit_line_6 = numbers.filter(function(element, index, array) {
    return (element >= 50);
  })
  var numberRange_line_6 = lowerlimit_line_6.filter(function(element, index, array) {
    return (element <= 59);
  })

  // line_7
  var lowerlimit_line_7 = numbers.filter(function(element, index, array) {
    return (element >= 60);
  })
  var numberRange_line_7 = lowerlimit_line_7.filter(function(element, index, array) {
    return (element <= 69);
  })

  // line_8
  var lowerlimit_line_8 = numbers.filter(function(element, index, array) {
    return (element >= 70);
  })
  var numberRange_line_8 = lowerlimit_line_8.filter(function(element, index, array) {
    return (element <= 79);
  })

  // line_9
  var lowerlimit_line_9 = numbers.filter(function(element, index, array) {
    return (element >= 80);
  })
  var numberRange_line_9 = lowerlimit_line_9.filter(function(element, index, array) {
    return (element <= 89);
  })

  // line_10
  var lowerlimit_line_10 = numbers.filter(function(element, index, array) {
    return (element >= 90);
  })
  var numberRange_line_10 = lowerlimit_line_10.filter(function(element, index, array) {
    return (element <= 99);
  })

  // 行ごとに作成した配列を多次元配列でまとめる
  const numberRange_line = [
    numberRange_line_1,numberRange_line_2,
    numberRange_line_3,numberRange_line_4,
    numberRange_line_5,numberRange_line_6,
    numberRange_line_7,numberRange_line_8,
    numberRange_line_9,numberRange_line_10
  ];

  console.log(numberRange_line);

  // 多次元配列numberRange_lineの各配列の要素を合計した値を配列sumに追加する
  const sum = [];
  for (let i = 0; i < 10; i++){
    if (numberRange_line[i].length > 0){
      var result =  numberRange_line[i].reduce(function(a, b) {
        return a + b;
       }, 0);
      sum.push(result);
    }else{
      sum.push("");
    }
  }

  console.log(sum);


  for(let j = 0; j < 10; j++){
    // セルに各数値を表示する
    if (numberRange_line[j].length > 0){
      // 生成された数
      document.getElementById("generateNumber_line_"+( j + 1)).innerHTML = numberRange_line[j];
      // 最小値
      document.getElementById("min_line_"+( j + 1)).innerHTML =Math.min.apply(null,numberRange_line[j]);
      // 最大値
      document.getElementById("max_line_"+( j + 1)).innerHTML =Math.max.apply(null,numberRange_line[j]);
      // 個数
      document.getElementById("length_"+( j + 1)).innerHTML =numberRange_line[j].length;
      // 平均
      document.getElementById("ave_"+( j + 1)).innerHTML =(Math.floor(sum[j] /numberRange_line[j].length));
      // 合計
      document.getElementById("sum_"+( j + 1)).innerHTML =sum[j];
    } else {
      // 配列が空の時に””を表示する処理
      document.getElementById("generateNumber_line_"+( j + 1)).innerHTML ="";
      document.getElementById("min_line_"+( j + 1)).innerHTML ="";
      document.getElementById("max_line_"+( j + 1)).innerHTML ="";
      document.getElementById("length_"+( j + 1)).innerHTML ="";
      document.getElementById("ave_"+( j + 1)).innerHTML ="";
      document.getElementById("sum_"+( j + 1)).innerHTML ="";
    }
  }

};
