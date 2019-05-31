
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

  // 要素の数10の二次元配列を作成する
  const lowerlimit_line =[
    [],[],[],[],[],[],[],[],[],[],
  ];
  const numberRange_line =[
    [],[],[],[],[],[],[],[],[],[],
  ];

  // filterで指定した範囲ごとに作成した配列をそれぞれの二次元配列に入れる
  for (var a = 0; a < 10; a++){
    var lowerlimit = numbers.filter(function(element, index, array) {
      return (element >= a*10);
    })
    for (var b = 0; b < lowerlimit.length; b++){
      lowerlimit_line[a].push(lowerlimit[b]);
    }
  }

  for (var c = 0; c < 10; c++){
    var numberRange = lowerlimit_line[c].filter(function(element, index, array) {
      return (element <= c*10 + 9);
    })
    for (var d = 0; d < numberRange.length; d++){
      numberRange_line[c].push(numberRange[d]);
    }
  }

  console.log(lowerlimit_line);
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
      document.getElementById("generateNumber_line_"+j).innerHTML = numberRange_line[j];
      // 最小値
      document.getElementById("min_line_"+j).innerHTML =Math.min.apply(null,numberRange_line[j]);
      // 最大値
      document.getElementById("max_line_"+j).innerHTML =Math.max.apply(null,numberRange_line[j]);
      // 個数
      document.getElementById("length_"+j).innerHTML =numberRange_line[j].length;
      // 平均
      document.getElementById("ave_"+j).innerHTML =(Math.floor(sum[j] /numberRange_line[j].length));
      // 合計
      document.getElementById("sum_"+j).innerHTML =sum[j];
    } else {
      // 配列が空の時に””を表示する処理
      document.getElementById("generateNumber_line_"+j).innerHTML ="";
      document.getElementById("min_line_"+j).innerHTML ="";
      document.getElementById("max_line_"+j).innerHTML ="";
      document.getElementById("length_"+j).innerHTML ="";
      document.getElementById("ave_"+j).innerHTML ="";
      document.getElementById("sum_"+j).innerHTML ="";
    }
  }

};
