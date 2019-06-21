
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
  const numberRange_line =[
    [],[],[],[],[],[],[],[],[],[],
  ];

  // filterで指定した範囲ごとに作成した配列をそれぞれの二次元配列に入れる
  for (var a = 0; a < 10; a++){
    var numberRange = numbers.filter(function(element, index, array) {
      return (element >= a*10 && element <= a*10 + 9);
    })
    for (var b = 0; b < numberRange.length; b++){
      numberRange_line[a].push(numberRange[b]);
    }
  }

  console.log(numberRange_line);

  // // 多次元配列numberRange_lineの各配列の要素を合計した値をline.sumに追加する
  // const sum = [];
  // for (let i = 0; i < 10; i++){
  //   if (numberRange_line[i].length > 0){
  //     var result =  numberRange_line[i].reduce(function(a, b) {
  //       return a + b;
  //      }, 0);
  //     line.sum.push(result);
  //   }else{
  //     line.sum.push("");
  //   }
  // }

const table =[];

  for (let c = 0; c < 10; c++){
   if (numberRange_line[c].length > 0){
     var result =  numberRange_line[c].reduce(function(a, b) {
     return a + b;
    }, 0);

     var line ={
       number: numberRange_line[c],
       min: Math.min.apply(null,numberRange_line[c]),
       max: Math.max.apply(null,numberRange_line[c]),
       length: numberRange_line[c].length,
       sum: result,
       average: Math.floor( result/numberRange_line[c].length),
     }
     table.push(line);
   }else{
     table.push("");
   }
 }

console.log(table);

for (let d = 0; d < 10; d++){
  if (numberRange_line[d].length > 0){
    document.getElementById("generateNumber_"+d).innerHTML = table[d].number;
    document.getElementById("min_"+d).innerHTML =table[d].min;
    document.getElementById("max_"+d).innerHTML =table[d].max;
    document.getElementById("length_"+d).innerHTML =table[d].length;
    document.getElementById("ave_"+d).innerHTML =table[d].average;
    document.getElementById("sum_"+d).innerHTML =table[d].sum;
  }
}


  // for (let c = 0; c < 10; c++){
  //
  //   if (numberRange_line[c].length > 0){
  //     var result =  numberRange_line[c].reduce(function(a, b) {
  //     return a + b;
  //    }, 0);
  //     line.sum = result;
  //     line.number = numberRange_line[c];
  //     line.min = Math.min.apply(null,numberRange_line[c]);
  //     line.max = Math.max.apply(null,numberRange_line[c]);
  //     line.length = numberRange_line[c].length;
  //     line.average = Math.floor(line.sum /numberRange_line[c].length);
  //   }else{
  //     line.sum = "";
  //     line.number = "";
  //     line.min = "";
  //     line.max = "";
  //     line.length = "";
  //     line.average = "";
  //   }
  //
  //   document.getElementById("generateNumber_"+c).innerHTML = line.number;
  //   document.getElementById("min_"+c).innerHTML =line.min;
  //   document.getElementById("max_"+c).innerHTML =line.max;
  //   document.getElementById("length_"+c).innerHTML =line.length;
  //   document.getElementById("ave_"+c).innerHTML =line.average;
  //   document.getElementById("sum_"+c).innerHTML =line.sum;
  //
  //   console.log(line);
  // }


  //
  // // lineの各配列に数値を入れる
  // for(let j = 0; j < 10; j++){
  //
  //   if (numberRange_line[j].length > 0){
  //     // 生成された数
  //     line.number.push(numberRange_line[j]);
  //     // 最小値
  //     line.min.push(Math.min.apply(null,numberRange_line[j]));
  //     // 最大値
  //     line.max.push(Math.max.apply(null,numberRange_line[j]));
  //     // 個数
  //     line.length.push(numberRange_line[j].length);
  //     // 平均
  //     line.average.push((Math.floor(line.sum[j] /numberRange_line[j].length)));
  //
  //   } else {
  //     // 配列が空の時に””を表示する処理
  //     line.number.push("");
  //     line.min.push("");
  //     line.max.push("");
  //     line.length.push("");
  //     line.average.push("");
  //   }
  // }
  //
  // console.log(line);
  //
  // // セルに各数値を表示する
  // for(let j = 0; j < 10; j++){
  //   if (numberRange_line[j].length > 0){
  //     document.getElementById("generateNumber_"+j).innerHTML = line.number[j];
  //     document.getElementById("min_"+j).innerHTML =line.min[j];
  //     document.getElementById("max_"+j).innerHTML =line.max[j];
  //     document.getElementById("length_"+j).innerHTML =line.length[j];
  //     document.getElementById("ave_"+j).innerHTML =line.average[j];
  //     document.getElementById("sum_"+j).innerHTML =line.sum[j];
  //   } else {
  //     document.getElementById("generateNumber_"+j).innerHTML ="";
  //     document.getElementById("min_"+j).innerHTML ="";
  //     document.getElementById("max_"+j).innerHTML ="";
  //     document.getElementById("length_"+j).innerHTML ="";
  //     document.getElementById("ave_"+j).innerHTML ="";
  //     document.getElementById("sum_"+j).innerHTML ="";
  //   }
  // }


};
