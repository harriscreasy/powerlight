var number1 = document.querySelector(".color-1");
var number2 = document.querySelector(".color-2");
var number3 = document.querySelector(".color-3");
var number4 = document.querySelector(".color-4");
var number5 = document.querySelector(".color-5");
var boody = document.querySelector("body");


function color1(){
    document.body.style.backgroundColor = "#560bad";
}

number1.addEventListener("click", color1);


function color2(){
    document.body.style.backgroundColor = "#ffc6ff";
}

number2.addEventListener("click", color2);



function color3(){
    document.body.style.backgroundColor = "#76c893";
}

number3.addEventListener("click", color3);



function color4(){
    document.body.style.backgroundColor = "#e7c6ff";
}

number4.addEventListener("click", color4);



function color5(){
    document.body.style.backgroundColor = "#dc2f02";
}

number5.addEventListener("click", color5);