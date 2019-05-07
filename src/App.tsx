///<reference path="../global.d.ts"/>

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component<{ moveObjects: any, angle: number, gameState: IGameState, startGame: any, shoot: any }> {
    static propTypes = {};
    canvasMousePosition = {};

    constructor(props: any) {
        super(props);
        this.shoot = this.shoot.bind(this);
    }

    resizeEvent() {
        const cnv = document.getElementById('aliens-go-home-canvas') as any;
        cnv.style.width = `${window.innerWidth}px`;
        cnv.style.height = `${window.innerHeight}px`;
    }

    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 10);



        window.onresize = () => {
            this.resizeEvent()
        };

        this.resizeEvent(); // trigger resize
    }

    trackMouse(event: ITrackMouseEvent) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    shoot() {
        this.props.shoot(this.canvasMousePosition);
    }

    render() {
        let cannonAngle = this.props.angle || 0;

        return (
            <Canvas
                angle={cannonAngle}
                gameState={this.props.gameState}
                startGame={this.props.startGame}
                trackMouse={(event: ITrackMouseEvent) => (this.trackMouse(event))}
                shoot={this.shoot}
            />
        );
    }
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    moveObjects: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
};

export default App;