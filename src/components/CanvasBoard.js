/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Sketch from "react-p5"
import Window from '../objects/Window'
import Puck from '../objects/Puck'
import Paddle from '../objects/Paddle'

const puck = new Puck();
const leftPaddle = new Paddle(true);
const rightPaddle = new Paddle(false);
let cpuMode = false;

export default () => {
    const setup = (p5, canvasParentRef) => {
        //use parent to render the canvas in this ref
        //(without that p5 will render the canvas outside of the component)
        p5.createCanvas(Window.windowWidth, Window.windowHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
        //constrain paddles to window height
        let leftPaddleConstrain = p5.constrain(leftPaddle.y, 0, Window.windowHeight - leftPaddle.height)
        let rightPaddleConstrain = p5.constrain(rightPaddle.y, 0, Window.windowHeight - rightPaddle.height)
        //let puckConstrain = p5.constrain()

        //Draw the background
        p5.background(0);

        //Draw the puck
        p5.fill(255)
        p5.ellipse(puck.xBall, puck.yBall, puck.diameter, puck.diameter)

        //Draw the left paddle
        p5.fill(255)
        p5.noStroke();
        p5.rect(leftPaddle.x, leftPaddleConstrain, leftPaddle.width, leftPaddle.height)

        //Draw the right paddle
        p5.fill(255)
        p5.noStroke();
        p5.rect(rightPaddle.x, rightPaddleConstrain, rightPaddle.width, rightPaddle.height)

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

    /*function keyReleased(e){
        if((e.keyCode === 87 || e.keyCode === 38)||(e.keyCode === 83 || e.keyCode === 40)){
            leftPaddle.stp()
        }
    }*/

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
}