
    var a=Math.random(a);
    a=(a*6)+1;
    a=Math.floor(a);
    
    var b=Math.random(b);
    b=(b*6)+1;
    b=Math.floor(b);
if(a===1){
    document.querySelector(".img1").setAttribute("src" , "dice1.png");
}
else if(a===2){
    document.querySelector(".img1").setAttribute("src" , "dice2.png");

}
else if(a===3){
    document.querySelector(".img1").setAttribute("src" , "dice3.png");

}
else if(a===4){
    document.querySelector(".img1").setAttribute("src" , "dice4.png");

}
else if(a===5){
    document.querySelector(".img1").setAttribute("src" , "dice5.png");

}
else{
    document.querySelector(".img1").setAttribute("src", "dice6.png");

}






if(b===1){
    document.querySelector(".img2").setAttribute("src" , "dice1.png");
}
else if(b===2){
    document.querySelector(".img2").setAttribute("src" , "dice2.png");

}
else if(b===3){
    document.querySelector(".img2").setAttribute("src" , "dice3.png");

}
else if(b===4){
    document.querySelector(".img2").setAttribute("src" , "dice4.png");

}
else if(b===5){
    document.querySelector(".img2").setAttribute("src" , "dice5.png");

}
else{
    document.querySelector(".img2").setAttribute("src", "dice6.png");

}


if (a>b){
    document.querySelector("h1").innerHTML="player 1 is winner";
}
else if (b>a){
    document.querySelector("h1").innerHTML="player 2 is winner";
}
else {
    document.querySelector("h1").innerHTML="draw";
}