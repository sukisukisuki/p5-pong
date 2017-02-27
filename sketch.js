var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

//ball 1 (darkest green)
var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

//ball 2
var ball_s, ball_u;
var ball_k;
var ball_s_step, ball_u_step;

//ball 3
var ball_e, ball_l;
var ball_a;
var ball_e_step, ball_l_step;

var level;
var score;

function setup() {
    createCanvas(600, 300);
    paddle_h = 90;
    paddle_w = 2.5 * paddle_h;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 100;
    ball_k = 100;
    ball_a = 180; 
    reset();
    score = 0;
    level=0;
  
}




function draw() {
    background(163, 247, 181);
    // move paddle
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = paddle_x + paddle_step;

    // is the ball hitting the right or left wall? 1st ball
    if (ball_x - ball_r < -10 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }
    
    //is the ball hitting the right or left wall for 2nd small ball
    if (ball_s - ball_k < 0 || ball_s + ball_k > width) {
	ball_s_step = -ball_s_step;
    }
    
  //is the ball hitting the right or left wall for 3rd ball (background color)
    if (ball_e - ball_a < 0 || ball_e + ball_a > width) {
	ball_e_step = -ball_e_step;
    }
    
    
    // hitting the top? 1st ball
    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }
    
    // hitting the top? 2nd ball
    if (ball_u - ball_k < 0) {
	ball_u_step = -ball_u_step;
    }
    
      // hitting the top? 3rd ball
    if (ball_l - ball_a < 0) {
	ball_l_step = -ball_l_step;
    }
    

    // hitting the paddle?
    if (ball_y + ball_r > paddle_y) {
	if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
	    ball_y_step = -ball_y_step;
	    ball_y = paddle_y - ball_r;
	   score = score + 5;
    }
        
	else if (ball_y + ball_r > paddle_y){
	    reset();
        score = 0;
	}
    }
      // hitting the paddle? Part 2
    if (ball_u + ball_k > paddle_y) {
	if (ball_s >= paddle_x && ball_s <= paddle_x + paddle_w) {
	    ball_u_step = -ball_u_step;
	    ball_u = paddle_y - ball_k;
       score = score + 0.25;
	}
	else if (ball_u + ball_k > paddle_y){
	    reset();
          score= 0;
	}
        }

     // hitting the paddle? Part 3
    if (ball_l + ball_a > paddle_y) {
	if (ball_e >= paddle_x && ball_e <= paddle_x + paddle_w) {
	    ball_l_step = -ball_l_step;
	    ball_l = paddle_y - ball_a;
    
	}
	else if (ball_l + ball_a > paddle_y){
	    reset();
        score = 0;
	}
        }
    // move ball by ball_x_step and ball_y_step 3rd
    ball_e = ball_e + ball_e_step;
    ball_l = ball_l + ball_l_step;
    
    // move ball by ball_x_step and ball_y_step 1st
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;
    
    
      // move ball by ball_x_step and ball_y_step 2nd
    ball_s = ball_s + ball_s_step;
    ball_u = ball_u + ball_u_step;
    
    //draw ball 1
    noStroke();
    fill(89, 135, 99);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

    //draw ball 2
    noStroke();
    fill(204, 250, 214);
    ellipse(ball_s, ball_u, ball_k * 2, ball_k * 2);
    
    //draw ball 3
    noStroke();
    fill(163, 247, 181);
    ellipse(ball_e, ball_l, ball_a * 2, ball_a * 2);
    	
    	
    // draw paddle
    noStroke();
    fill(149, 225, 165);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
    //score
    textSize(20);
    text(score, 90,100);
    //level
    textSize (50);
    text(level, 10, 60)
}

function reset() {
    
    //ball 1
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(3, -3);
    ball_y_step = random(3, -3);
    
    //ball 2
    ball_s = random(ball_k, width - ball_k);
    ball_u = random(ball_k, height / 2);
    ball_s_step = random(3, -3);
    ball_u_step = random(3, -3);
    
    //ball 3
    ball_e = random(ball_a, width - ball_a);
    ball_l = random(ball_a, height / 2);
    ball_e_step = random(3, -3);
    ball_l_step = random(3, -3);
    
    //levels
       if(level == 0){
    level = 1;
    }
    else if(level == 1){
            level = 2;
    }
    else if (level == 2) {   
        level = 0;
        reset();
    }
    else if (level == 3) {
        level = 0;
        reset();
    }  
    
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -3;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 3;
    } else if (key == ' ') {
	reset();
    }
 
}

function keyReleased() {
    paddle_step = 0;
}
