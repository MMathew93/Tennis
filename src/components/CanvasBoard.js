/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Sketch from "react-p5"
import Window from '../objects/Window'
import Puck from '../objects/Puck'
import Paddle from '../objects/Paddle'

const puck = new Puck();
const leftPaddle = new Paddle(true);
const rightPaddle = new Paddle(false);

export default () => {
    const setup = (p5, canvasParentRef) => {
        //use parent to render the canvas in this ref
        //(without that p5 will render the canvas outside of the component)
        p5.createCanvas(Window.windowWidth, Window.windowHeight).parent(canvasParentRef);
    };

    const draw = (p5) => {
        p5.background(0);
        p5.fill(255)
        p5.ellipse(puck.xBall, puck.yBall, puck.diameter, puck.diameter)
        p5.fill(255)
        p5.noStroke();
        p5.rect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height)
        p5.fill(255)
        p5.noStroke();
        p5.rect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height)
    };

    return <Sketch setup={setup} draw={draw} />;
}