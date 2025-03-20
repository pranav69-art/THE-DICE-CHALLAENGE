var randomnumber1=Math.floor(Math.random()*6)+1;
var randomdiceimage = "dice" + randomnumber1+".png";
var randomimage1= "images/"+randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage1);
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2= "images/dice"+randomnumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomimage2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🥳PLAYER 1 WIN !",player1;
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="🥳PLAYER 2 WIN !" , player2 ;
}
else{
    document.querySelector("h1").innerHTML="👻draw";
}
alert("THE DICE CHALLANGE GAME !");
let player1=prompt(" PLAYER 1 ENTER YOUR NAME ");
let player2=prompt(" PLAYER 2 ENTER YOUR NAME");