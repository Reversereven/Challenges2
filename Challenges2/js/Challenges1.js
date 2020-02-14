
'use strict';


let attack = document.getElementById("btn");
let life = 5;
let enemy_life = 5;


attack.onclick = function(){

  // 2D6を2回振って、自分と敵の得点を出す
  let dice1 =Math.floor(Math.random()*6+1);
  let dice2 =Math.floor(Math.random()*6+1);
  let score =parseInt(dice1) + parseInt(dice2);

  let dice3 =Math.floor(Math.random()*6+1);
  let dice4 =Math.floor(Math.random()*6+1);
  let enemy_score =parseInt(dice3) + parseInt(dice4);

  console.log(dice1);
  console.log(dice2);
  console.log(score);

  console.log(dice3);
  console.log(dice4);
  console.log(enemy_score);


  const HP =document.getElementById("life");
  const enemy_HP =document.getElementById("enemy_life");

  let a = 1;
  let b = 1;

　// 自分と敵の得点を比較して低い方のライフを減らす
  if (score > enemy_score) {
    enemy_life -= 1;
    enemy_HP.removeChild("enemy_HP_"+a);
    ++a;
  } else if (score < enemy_score) {
    life -= 1;
  } else {
    ;
  }

  console.log(life);
  console.log(enemy_life);

if (life <= 0) {
  alert ("あなたの負けです");
} else if (enemy_life <= 0) {
  alert ("あなたの勝ちです");
} else {
  ;
}

}
