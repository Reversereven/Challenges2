
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


  // 行ごとに新しく作られた配列の中身をwhile文で合計する
  var i = 0;
  var sum1 = 0;
  while (i < numberRange_line_1.length){
    sum1 += numberRange_line_1[i];
    i++;
  }
  var i = 0;
  var sum2 = 0;
  while (i < numberRange_line_2.length){
    sum2 += numberRange_line_2[i];
    i++;
  }
  var i = 0;
  var sum3 = 0;
  while (i < numberRange_line_3.length){
    sum3 += numberRange_line_3[i];
    i++;
  }
  var i = 0;
  var sum4 = 0;
  while (i < numberRange_line_4.length){
    sum4 += numberRange_line_4[i];
    i++;
  }
  var i = 0;
  var sum5 = 0;
  while (i < numberRange_line_5.length){
    sum5 += numberRange_line_5[i];
    i++;
  }
  var i = 0;
  var sum6 = 0;
  while (i < numberRange_line_6.length){
    sum6 += numberRange_line_6[i];
    i++;
  }
  var i = 0;
  var sum7 = 0;
  while (i < numberRange_line_7.length){
    sum7 += numberRange_line_7[i];
    i++;
  }
  var i = 0;
  var sum8 = 0;
  while (i < numberRange_line_8.length){
    sum8 += numberRange_line_8[i];
    i++;
  }
  var i = 0;
  var sum9 = 0;
  while (i < numberRange_line_9.length){
    sum9 += numberRange_line_9[i];
    i++;
  }
  var i = 0;
  var sum10 = 0;
  while (i < numberRange_line_10.length){
    sum10 += numberRange_line_10[i];
    i++;
  }

  int [][] generateNumber = new int[10][];

  var j = 0;
  while (j < 10){
    generateNumber[j] = new int[] {"generateNumber_line_"+ j};
    j++;
  }

  if (("numberRange_line_1").length > 0){
    document.getElementById("generateNumber_line_1").innerHTML ="numberRange_line_1";
  } else {
    document.getElementById("generateNumber_line_1").innerHTML ="";
  }




  // var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // var r = 1;
  //
  // while (r < 10){
  //   // セルに各数値を表示する
  //   if (("numberRange_line_"+ r).length > 0){
  //     // 生成された数
  //     document.getElementById("generateNumber_line_"+ r).innerHTML ="numberRange_line_"+ r;
  //     // 最小値
  //     document.getElementById("min_line_"+ r).innerHTML =Math.min.apply(null,"numberRange_line_"+ r);
  //     // 最大値
  //     document.getElementById("max_line_"+ r).innerHTML =Math.max.apply(null,"numberRange_line_"+ r);
  //     // 個数
  //     document.getElementById("length_"+ r).innerHTML ="numberRange_line_"+ r.length;
  //     // 平均
  //     document.getElementById("ave_"+ r).innerHTML =(Math.floor(sum1 /"numberRange_line_"+ r.length));
  //     // 合計
  //     document.getElementById("sum_"+ r).innerHTML ="sum" + r;
  //   } else {
  //     // 配列が空の時に””を表示する処理
  //     document.getElementById("generateNumber_line_" + r).innerHTML ="";
  //     document.getElementById("min_line_" + r).innerHTML ="";
  //     document.getElementById("max_line_" + r).innerHTML ="";
  //     document.getElementById("length_" + r).innerHTML ="";
  //     document.getElementById("ave_" + r).innerHTML ="";
  //     document.getElementById("sum_" + r).innerHTML ="";
  //
  //     r++;
  //   }
  // }

  //
  // // セルに各数値を表示する
  // if (numberRange_line_1.length > 0){
  //   // 生成された数
  //   document.getElementById("generateNumber_line_1").innerHTML = numberRange_line_1;
  //   // 最小値
  //   document.getElementById("min_line_1").innerHTML =Math.min.apply(null,numberRange_line_1);
  //   // 最大値
  //   document.getElementById("max_line_1").innerHTML =Math.max.apply(null,numberRange_line_1);
  //   // 個数
  //   document.getElementById("length_1").innerHTML =numberRange_line_1.length;
  //   // 平均
  //   document.getElementById("ave_1").innerHTML =(Math.floor(sum1 /numberRange_line_1.length));
  //   // 合計
  //   document.getElementById("sum_1").innerHTML =sum1;
  // } else {
  //   // 配列が空の時に””を表示する処理
  //   document.getElementById("generateNumber_line_1").innerHTML ="";
  //   document.getElementById("min_line_1").innerHTML ="";
  //   document.getElementById("max_line_1").innerHTML ="";
  //   document.getElementById("length_1").innerHTML ="";
  //   document.getElementById("ave_1").innerHTML ="";
  //   document.getElementById("sum_1").innerHTML ="";
  // }
  //
  // if (numberRange_line_2.length > 0){
  //   document.getElementById("generateNumber_line_2").innerHTML = numberRange_line_2;
  //   document.getElementById("min_line_2").innerHTML =Math.min.apply(null,numberRange_line_2);
  //   document.getElementById("max_line_2").innerHTML =Math.max.apply(null,numberRange_line_2);
  //   document.getElementById("length_2").innerHTML =numberRange_line_2.length;
  //   document.getElementById("ave_2").innerHTML =(Math.floor(sum2 /numberRange_line_2.length));
  //   document.getElementById("sum_2").innerHTML =sum2;
  // } else {
  //   document.getElementById("generateNumber_line_2").innerHTML ="";
  //   document.getElementById("min_line_2").innerHTML ="";
  //   document.getElementById("max_line_2").innerHTML ="";
  //   document.getElementById("length_2").innerHTML ="";
  //   document.getElementById("ave_2").innerHTML ="";
  //   document.getElementById("sum_2").innerHTML ="";
  // }
  //
  // if (numberRange_line_3.length > 0){
  //   document.getElementById("generateNumber_line_3").innerHTML = numberRange_line_3;
  //   document.getElementById("min_line_3").innerHTML =Math.min.apply(null,numberRange_line_3);
  //   document.getElementById("max_line_3").innerHTML =Math.max.apply(null,numberRange_line_3);
  //   document.getElementById("length_3").innerHTML =numberRange_line_3.length;
  //   document.getElementById("ave_3").innerHTML =(Math.floor(sum3 /numberRange_line_3.length));
  //   document.getElementById("sum_3").innerHTML =sum3;
  // } else {
  //   document.getElementById("generateNumber_line_3").innerHTML ="";
  //   document.getElementById("min_line_3").innerHTML ="";
  //   document.getElementById("max_line_3").innerHTML ="";
  //   document.getElementById("length_3").innerHTML ="";
  //   document.getElementById("ave_3").innerHTML ="";
  //   document.getElementById("sum_3").innerHTML ="";
  // }
  //
  // if (numberRange_line_4.length > 0){
  //   document.getElementById("generateNumber_line_4").innerHTML = numberRange_line_4;
  //   document.getElementById("min_line_4").innerHTML =Math.min.apply(null,numberRange_line_4);
  //   document.getElementById("max_line_4").innerHTML =Math.max.apply(null,numberRange_line_4);
  //   document.getElementById("length_4").innerHTML =numberRange_line_4.length;
  //   document.getElementById("ave_4").innerHTML =(Math.floor(sum4 /numberRange_line_4.length));
  //   document.getElementById("sum_4").innerHTML =sum4;
  // } else {
  //   document.getElementById("generateNumber_line_4").innerHTML ="";
  //   document.getElementById("min_line_4").innerHTML ="";
  //   document.getElementById("max_line_4").innerHTML ="";
  //   document.getElementById("length_4").innerHTML ="";
  //   document.getElementById("ave_4").innerHTML ="";
  //   document.getElementById("sum_4").innerHTML ="";
  // }
  //
  // if (numberRange_line_5.length > 0){
  //   document.getElementById("generateNumber_line_5").innerHTML = numberRange_line_5;
  //   document.getElementById("min_line_5").innerHTML =Math.min.apply(null,numberRange_line_5);
  //   document.getElementById("max_line_5").innerHTML =Math.max.apply(null,numberRange_line_5);
  //   document.getElementById("length_5").innerHTML =numberRange_line_5.length;
  //   document.getElementById("ave_5").innerHTML =(Math.floor(sum5 /numberRange_line_5.length));
  //   document.getElementById("sum_5").innerHTML =sum5;
  // } else {
  //   document.getElementById("generateNumber_line_5").innerHTML ="";
  //   document.getElementById("min_line_5").innerHTML ="";
  //   document.getElementById("max_line_5").innerHTML ="";
  //   document.getElementById("length_5").innerHTML ="";
  //   document.getElementById("ave_5").innerHTML ="";
  //   document.getElementById("sum_5").innerHTML ="";
  // }
  // if (numberRange_line_6.length > 0){
  //   document.getElementById("generateNumber_line_6").innerHTML = numberRange_line_6;
  //   document.getElementById("min_line_6").innerHTML =Math.min.apply(null,numberRange_line_6);
  //   document.getElementById("max_line_6").innerHTML =Math.max.apply(null,numberRange_line_6);
  //   document.getElementById("length_6").innerHTML =numberRange_line_6.length;
  //   document.getElementById("ave_6").innerHTML =(Math.floor(sum6 /numberRange_line_6.length));
  //   document.getElementById("sum_6").innerHTML =sum6;
  // } else {
  //   document.getElementById("generateNumber_line_6").innerHTML ="";
  //   document.getElementById("min_line_6").innerHTML ="";
  //   document.getElementById("max_line_6").innerHTML ="";
  //   document.getElementById("length_6").innerHTML ="";
  //   document.getElementById("ave_6").innerHTML ="";
  //   document.getElementById("sum_6").innerHTML ="";
  // }
  // if (numberRange_line_7.length > 0){
  //   document.getElementById("generateNumber_line_7").innerHTML = numberRange_line_7;
  //   document.getElementById("min_line_7").innerHTML =Math.min.apply(null,numberRange_line_7);
  //   document.getElementById("max_line_7").innerHTML =Math.max.apply(null,numberRange_line_7);
  //   document.getElementById("length_7").innerHTML =numberRange_line_7.length;
  //   document.getElementById("ave_7").innerHTML =(Math.floor(sum7 /numberRange_line_7.length));
  //   document.getElementById("sum_7").innerHTML =sum7;
  // } else {
  //   document.getElementById("generateNumber_line_7").innerHTML ="";
  //   document.getElementById("min_line_7").innerHTML ="";
  //   document.getElementById("max_line_7").innerHTML ="";
  //   document.getElementById("length_7").innerHTML ="";
  //   document.getElementById("ave_7").innerHTML ="";
  //   document.getElementById("sum_7").innerHTML ="";
  // }
  // if (numberRange_line_8.length > 0){
  //   document.getElementById("generateNumber_line_8").innerHTML = numberRange_line_8;
  //   document.getElementById("min_line_8").innerHTML =Math.min.apply(null,numberRange_line_8);
  //   document.getElementById("max_line_8").innerHTML =Math.max.apply(null,numberRange_line_8);
  //   document.getElementById("length_8").innerHTML =numberRange_line_8.length;
  //   document.getElementById("ave_8").innerHTML =(Math.floor(sum8 /numberRange_line_8.length));
  //   document.getElementById("sum_8").innerHTML =sum8;
  // } else {
  //   document.getElementById("generateNumber_line_8").innerHTML ="";
  //   document.getElementById("min_line_8").innerHTML ="";
  //   document.getElementById("max_line_8").innerHTML ="";
  //   document.getElementById("length_8").innerHTML ="";
  //   document.getElementById("ave_8").innerHTML ="";
  //   document.getElementById("sum_8").innerHTML ="";
  // }
  // if (numberRange_line_9.length > 0){
  //   document.getElementById("generateNumber_line_9").innerHTML = numberRange_line_9;
  //   document.getElementById("min_line_9").innerHTML =Math.min.apply(null,numberRange_line_9);
  //   document.getElementById("max_line_9").innerHTML =Math.max.apply(null,numberRange_line_9);
  //   document.getElementById("length_9").innerHTML =numberRange_line_9.length;
  //   document.getElementById("ave_9").innerHTML =(Math.floor(sum9 /numberRange_line_9.length));
  //   document.getElementById("sum_9").innerHTML =sum9;
  // } else {
  //   document.getElementById("generateNumber_line_9").innerHTML ="";
  //   document.getElementById("min_line_9").innerHTML ="";
  //   document.getElementById("max_line_9").innerHTML ="";
  //   document.getElementById("length_9").innerHTML ="";
  //   document.getElementById("ave_9").innerHTML ="";
  //   document.getElementById("sum_9").innerHTML ="";
  // }
  // if (numberRange_line_10.length > 0){
  //   document.getElementById("generateNumber_line_10").innerHTML = numberRange_line_10;
  //   document.getElementById("min_line_10").innerHTML =Math.min.apply(null,numberRange_line_10);
  //   document.getElementById("max_line_10").innerHTML =Math.max.apply(null,numberRange_line_10);
  //   document.getElementById("length_10").innerHTML =numberRange_line_10.length;
  //   document.getElementById("ave_10").innerHTML =(Math.floor(sum10 /numberRange_line_10.length));
  //   document.getElementById("sum_10").innerHTML =sum10;
  // } else {
  //   document.getElementById("generateNumber_line_10").innerHTML ="";
  //   document.getElementById("min_line_10").innerHTML ="";
  //   document.getElementById("max_line_10").innerHTML ="";
  //   document.getElementById("length_10").innerHTML ="";
  //   document.getElementById("ave_10").innerHTML ="";
  //   document.getElementById("sum_10").innerHTML ="";
  // }
  //

};
