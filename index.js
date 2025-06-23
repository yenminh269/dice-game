var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".person1 img").setAttribute("src", "./img/dice" + random1 + ".svg");
document.querySelector(".person2 img").setAttribute("src", "./img/dice" + random2 + ".svg");
if(random1 < random2){
    document.querySelector("h1").innerHTML = 'Player 2 Wins! <img src="./img/clap.svg" width="80">';
}
else if(random1 == random2){
    document.querySelector("h1").textContent= "Draw!";
}
else{
    document.querySelector("h1").innerHTML = '<img src="./img/clap.svg" width="80"> Player 1 Wins!';
}