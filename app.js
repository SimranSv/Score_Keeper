const player2 = document.getElementById("player1");
const player1 = document.getElementById("player2");
const player2score = document.querySelector("#player2score");
const player1score = document.querySelector("#player1score");
const setting = document.getElementById("set");
let SET = 0;
for (let i = 0; i < 100; i++) {
    let set = document.createElement("option");
    set.innerHTML = i;
    setting.append(set);

}
set.addEventListener('change', () => {
    SET = set.value;

})
function dusrareset() {




    document.getElementById("player1").disabled = true;
    document.getElementById("player2").disabled = true;
    // set.value = "Select";
}



let reset = document.getElementById("resetbro");
reset.addEventListener('click', () => {
    player1score.innerHTML = 0;
    player2score.innerHTML = 0;
    player2score.style.color = "black"
    player1score.style.color = "black";
    document.getElementById("player1").disabled = false;
    document.getElementById("player2").disabled = false;
})


// console.dir("setting")

player1.addEventListener('click', () => {
    player2score.innerHTML = parseInt(player2score.innerHTML) + 1;
    if (parseInt(player2score.innerHTML) >= SET) {
        player2score.style.color = "green"
        player1score.style.color = "red";
        // alert("Player2 Wins!!!");
        dusrareset();
        // alert("Player2 Wins!!!");

    }
})
player2.addEventListener('click', () => {
    player1score.innerHTML = parseInt(player1score.innerHTML) + 1;
    if (parseInt(player1score.innerHTML) >= SET) {
        player1score.style.color = "green"
        player2score.style.color = "red";

        dusrareset();
        // alert("Player1 Wins!!!");

    }
})