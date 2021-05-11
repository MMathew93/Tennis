import Window from '../objects/Window'

function Puck(p){
    this.diameter = 25;
    this.xBall = Window.windowWidth/2;
    this.yBall = Window.windowHeight/2
    this.show = function(){
        p.fill(255)
        p.ellipse(this.xBall, this.yBall, this.diameter)
    }
}

export default Puck;