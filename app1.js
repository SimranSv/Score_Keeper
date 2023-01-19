const p1 = {
    score: document.querySelector("#player1score"),
    btn: document.getElementById("player1"),



}
const p2 = {
    score: document.querySelector("#player2score"),
    btn: document.getElementById("player2"),
}
const setting = document.getElementById("set");
let SET = 0;
for (let i = 0; i < 100; i++) {
    let set = document.createElement("option");
    set.innerHTML = i;
    setting.append(set);

}
set.addEventListener('change', () => {
    SET = set.value;
    // console.log(SET);
    set.disabled = true;

})
function dusrareset(player,opponent) {
    player.btn.disabled = true;
    opponent.btn.disabled = true;

}
function fun(player, opponent) {
    player.score.innerHTML = 0;
    opponent.score.innerHTML = 0;
    player.score.style.color = "black"
    opponent.score.style.color = "black";
    player.disabled = false;
    opponent.disabled = false;
    set.disabled=false;

}


let reset = document.getElementById("resetbro");
reset.addEventListener('click',function(){fun(p1,p2)})

function calc(player,opponent){
    player.score.innerHTML=parseInt(player.score.innerHTML)+1;
    console.log(player.score)
    if(parseInt(player.score.innerHTML)>=SET){
        player.score.style.color="green";
        opponent.score.style.color="red";
        dusrareset(player,opponent);
    }


}


p1.btn.addEventListener('click',function(){ calc(p1,p2)})
p2.btn.addEventListener('click',function(){calc(p2,p1)})
