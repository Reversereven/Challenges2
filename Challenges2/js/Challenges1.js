
'use strict';


let attack = document.getElementById("btn");
let you_life = 5;
let enemy_life = 5;
let a = 1;
let b = 1;


attack.onclick = function(){

  // 2D6を2回振って、自分と敵の得点を出す
  let dice1 =Math.floor(Math.random()*6+1);
  let dice2 =Math.floor(Math.random()*6+1);
  let you_score =parseInt(dice1) + parseInt(dice2);

  let dice3 =Math.floor(Math.random()*6+1);
  let dice4 =Math.floor(Math.random()*6+1);
  let enemy_score =parseInt(dice3) + parseInt(dice4);

  console.log(dice1);
  console.log(dice2);
  console.log(you_score);

  console.log(dice3);
  console.log(dice4);
  console.log(enemy_score);


  const you_HP =document.getElementById("you_life");
  const enemy_HP =document.getElementById("enemy_life");

　// 自分と敵の得点を比較して低い方のライフを減らす
  if (you_score > enemy_score) {
    enemy_life -= 1;
    document.getElementById("enemy_HP_"+a).src="img/lost_HP.png";
    ++a;
  } else if (you_score < enemy_score) {
    you_life -= 1;
    document.getElementById("you_HP_"+b).src="img/lost_HP.png";
    ++b;
  } else {
    ;
  }

  console.log(you_life);
  console.log(enemy_life);


// どちらかのlifeが0になったら勝敗をalertで表示する
if (you_life <= 0) {
  alert ("あなたの負けです");
} else if (enemy_life <= 0) {
  alert ("あなたの勝ちです");
} else {
  ;
}

}
