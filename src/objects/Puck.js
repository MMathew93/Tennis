import Window from '../objects/Window'

class Puck {
    constructor(){
        this.diameter = 50;
        this.xBall = Window.windowWidth/2;
        this.yBall = Window.windowHeight/2
    }
}

export default Puck;