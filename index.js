document.querySelector('button').addEventListener('click', function() {      
var randomnumber1=Math.floor((Math.random()*6))+1;
var randomnumber2=Math.floor((Math.random()*6))+1;
// document.getElementsByClassName(".img1").setAttribute("src","images/img2.png");
document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+randomnumber1+".png");
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2)
{
    document.getElementsByTagName("h1")[0].innerHTML="🚩Player One Wins";
}
else if(randomnumber1<randomnumber2)
{
    document.getElementsByTagName("h1")[0].innerHTML="Player Two Wins🚩";
}
else
{
    document.getElementsByTagName("h1")[0].innerHTML="🚩It is a Tie🚩";
}
});
