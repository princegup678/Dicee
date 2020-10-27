var a=Math.floor(1+6*Math.random());
var b=Math.floor(1+6*Math.random());

if(a>b)
 {
   document.getElementsByTagName("h1")[0].innerHTML="🚩Player1 Wins!";
 }
 else if (b>a) {
   document.getElementsByTagName("h1")[0].innerHTML="Player2 Wins🚩";

 }
 else {
   document.getElementsByTagName("h1")[0].innerHTML="Draw";
 }

document.getElementsByTagName("img")[0].setAttribute("src","images/dice"+a+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice"+b+".png");
console.log(a);
