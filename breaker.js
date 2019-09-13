var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//first line
function line1()
   { ctx.fillStyle = "#9DC8C8";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,0,50,20);
     ctx.strokeRect(x+0.5,0.5,50,20);
   }
var i=0;
var x= 0;
 do {
 line1() ;
 x+=50;
 i =i+1;}
while (i<7) ;

//second line

function line2()
   { ctx.fillStyle = "#58C9B9";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,20,50,20);
     ctx.strokeRect(x+0.5,20.5,50,20);
   }
var i=0;
var x= 25;
 do {
 line2() ;
 x+=50;
 i =i+1;}
while (i<6) ;

//thried line
function line3()
   { ctx.fillStyle = "#519D9E";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,40,50,20);
     ctx.strokeRect(x+0.5,40.5,50,20);
   }
var i=0;
var x= 50;
 do {
 line3() ;
 x+=50;
 i =i+1;}
while (i<5) ;

//forth line
function line4()
   { ctx.fillStyle = "#D1B6E1";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,60,50,20);
     ctx.strokeRect(x+0.5,60.5,50,20);
   }
var i=0;
var x= 75;
 do {
 line4() ;
 x+=50;
 i =i+1;}
while (i<4) ;

//fifth line
function line5()
   { ctx.fillStyle = "#519D9E";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,80,50,20);
     ctx.strokeRect(x+0.5,80.5,50,20);
   }
var i=0;
var x= 100;
 do {
 line5() ;
 x+=50;
 i =i+1;}
while (i<3) ;

//sixth line
function line6()
   { ctx.fillStyle = "#58C9B9";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(x,100,50,20);
     ctx.strokeRect(x+0.5,100.5,50,20);
   }
var i=0;
var x= 125;
 do {
 line6() ;
 x+=50;
 i =i+1;}
while (i<2) ;

//seventh li ne 
ctx.fillStyle = "#9DC8C8";
     ctx.strokeStyle= "white";
     ctx.lineWidth = 2 ;
     ctx.fillRect(150,120,50,20);
     ctx.strokeRect(150.5,120.5,50,20)

//ball
ctx.beginPath();
ctx.arc(240, 160, 10, 0, Math.PI*2);
ctx.fillStyle = "#8EC0E4";
ctx.fill();
ctx.closePath();