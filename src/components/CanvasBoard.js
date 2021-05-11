/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Sketch from "react-p5"
import Window from '../objects/Window'
import Puck from '../objects/Puck'
import Paddle from '../objects/Paddle'

let puck
let leftPaddle
let rightPaddle
let cpuMode = false;

export default () => {
    const setup = (p5, canvasParentRef) => {
        //use parent to render the canvas in this ref
        //(without that p5 will render the canvas outside of the component)
        p5.createCanvas(Window.windowWidth, Window.windowHeight).parent(canvasParentRef);
        puck = new Puck(p5);
        leftPaddle = new Paddle(p5, true);
        rightPaddle = new Paddle(p5, false);
    };

    const draw = (p5) => {
        //Draw pieces
        p5.background(0);
        puck.show()
        leftPaddle.update()
        rightPaddle.update()
        leftPaddle.show()
        rightPaddle.show()
    };

    function keyPressed(e){
        //w key
        if(e.keyCode === 87){
            leftPaddle.up();
        //s key
        }else if(e.keyCode === 83){
            leftPaddle.down();
        }

        //2player local mode
        //uses arrow keys
        if(cpuMode){
            if(e.keyCode === 38){
                rightPaddle.up();
            }else if(e.keyCode === 40){
                rightPaddle.down();
            }
        }
    }

    function keyReleased(e){
        if(e.keyCode === 87 || e.keyCode === 83){
            leftPaddle.stopping()
        }else if(e.keyCode === 38 || e.keyCode === 40){
            rightPaddle.stopping()
        }
    }

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} keyReleased={keyReleased} />;
}