import Window from '../objects/Window'

class Paddle {
    constructor(isLeft){
        this.y = Window.windowHeight/2;
        this.width = 16;
        this.height = Window.windowHeight/6;
        this.spd = 10
        this.up = function(){
            if(this.y < 0){
                this.spd = 0
            }else{
                this.spd = 10
            }
            this.y -= this.spd
            console.log(this.y)
        }
        this.down = function(){
            if(this.y > Window.windowHeight){
                this.spd = 0
            }else{
                this.spd = 10
            }
            this.y += this.spd
            console.log(this.y)
        }
        //this.stp = function(){this.y = 0}

        if(isLeft){
            this.x = this.width;
        }else{
            this.x = Window.windowWidth - this.width;
        }
    }
}

export default Paddle;