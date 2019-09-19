var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var bricks = [] ; 
for(c=0;c<7;c++ ){ 
    bricks[c]=[] ; 
    for(r = 0;r<5; r++){ 
        bricks[c][r]= {x:0 ,y:0,z:1 } ; 
    } 
}
//draw brick in size of 20*50
function  drawbrick( ){ 
   
    for(c = 0;c<7;c++ ){ 
        for (r=0 ;r<5;r++){ 
           if ( bricks [c][r].z ==  1 ){
        var brickX = (c*50 );
        var brickY =(r*20); 
        bricks[c][r].x= brickX ; 
        bricks[c][r].y= brickY ; 
       ctx.fillStyle = "#eb9f9f";
       ctx.strokeStyle= "white";
       ctx.lineWidth = 2 ;
       ctx.fillRect(brickX,brickY,50,20);
       ctx.strokeRect(brickX+0.5,brickY+0.5,50,20);}
          
        } 
    } 
}



//code of the ball
//the move path , size and color of the ball
var x=175;
var y=400;
var changx=2;
var changy=-4;
function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#f199bc";
    ctx.fill();
    ctx.closePath();
}

//code of paddle
var paddleX = 140;

function paddle() {
    ctx.fillStyle="#D7FFF1";
    ctx.fillRect(paddleX, 470, 70, 10);
   
}
var left;
var right;
 
// read the kaypad action the set the moving path of the ball
addEventListener("keydown", function(event){
if(event.keyCode == 39) {
        right=1;
    }
    else if(event.keyCode == 37) {
        left = 1;
    }
});
addEventListener("keyup", function(event){
if(event.keyCode == 39) {
        right=0;
    }
    else if(event.keyCode == 37) {
        left = 0;
    }
}) ;
//code of mouse
//check the range of the mouse
function mouseMoving(event) {
    var mouseX = event.clientX-canvas.offsetLeft;
    if(mouseX> 0 && mouseX <350) {
        paddleX = mouseX - 35;
    }
}
 //code of score
var score=0 ;
console.log(score);


//code of touch
function  touch(){ 
    for (c = 0 ;c <7;c++ ){ 
        for (r=0;r<5;r++){ 
            var t = bricks[c][r]; 
            if ( t. z==  1 ){ 
                if(x>t.x && x<t.x+50 && y>t.y &&y<t.y+20) { 
                   changy = -changy;; 
                    t.z=  0 ; 
                    score++;
               
                } 
            } 
        } 
    } 
}



//code of move

function move(){
    ctx.clearRect(0, 0, 350, 480);
    drawbrick()
    drawBall();
    paddle(); 
    touch();
    //if the ball touch the wall, then change the direction of the ball
    if(x + changx > 340 || x + changx < 10) {
        changx = -changx;
    }
    if(y + changy < 10) {
        changy = -changy;
    }
    else if (y+changy>470){
        if(x>paddleX && x<paddleX+ 70 ){
            changy =- changy;
        }
        else{
            alert("game over! please try again.you score is:"+ score);
            document.location.reload();
        }
}
   else if (score== 35){
       alert(" congratulation!you win this game")
   }
    
    x += changx;
    y += changy;
    
    
    if(right==1 && paddleX < 280) {
        paddleX += 5;
    }
    else if(left ===1 && paddleX > 0) {
        paddleX -= 5;
    }
    
}
setInterval(move, 10);

