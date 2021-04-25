import Window from '../objects/Window'

class Paddle {
    constructor(isLeft){
        this.y = Window.windowHeight/2;
        this.width = 16;
        this.height = Window.windowHeight/6;
        this.yChange = 0;

        if(isLeft){
            this.x = this.width;
        }else{
            this.x = Window.windowWidth - this.width;
        }
    }
}

export default Paddle;