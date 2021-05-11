import Window from '../objects/Window'

function Paddle(p, isLeft){
    this.width = 15;
    this.height = Window.windowHeight/6;
    this.acc = p.createVector(0, 0)
    this.spd = 10
    //check if paddle is left and set X
    if(isLeft){
        this.pos = p.createVector(this.width*2, Window.windowHeight/2 - this.height/2)
    }else{
        this.pos = p.createVector(Window.windowWidth - this.width*2, Window.windowHeight/2 - this.height/2)
    }
    //draw the paddles
    this.show = function(){
        p.noStroke();
        p.fill(255)
        p.rect(this.pos.x, this.pos.y, this.width, this.height)
    }
    //allows paddle to move up
    this.up = function(){
        if(this.acc.y < 0){
            this.spd = 0
        }else{
            this.spd = 10
        }
        this.acc.y -= this.spd
    }
    //allows paddle to move up
    this.down = function(){
        if(this.acc.y > Window.windowHeight){
            this.spd = 0
        }else{
            this.spd = 10
        }
        this.acc.y += this.spd
    }
    this.stopping = function(){
        this.acc.y = 0;
    }
    //controls movement
    this.update = function(){
        this.acc.y = p.constrain(this.acc.y, -this.spd, this.spd)
        this.pos.add(this.acc)
        //costrain paddles to the window height and keeps them from leaving the scree
        this.pos.y = p.constrain(this.pos.y, 0, Window.windowHeight - this.height)
    }
}

export default Paddle;