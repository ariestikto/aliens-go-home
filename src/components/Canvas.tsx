import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';

const Canvas = (props: { angle: number, gameState: IGameState, startGame: any, trackMouse: any, shoot: any }) => {
    const gameHeight = 1200;
    const viewBoxSize = (window.innerWidth / -2) + ' ' + (100 - gameHeight) + ' ' + window.innerWidth + ' ' + gameHeight;

    const lives = [];
    for (let i = 0; i < props.gameState.lives; i++) {
        const heartPosition = {
            x: -180 - (i * 70),
            y: 35
        };
        lives.push(<Heart key={i} position={heartPosition} />);
    }

    return (
        <svg
            id="aliens-go-home-canvas"
            onMouseMove={props.trackMouse}
            viewBox={viewBoxSize}
            onClick={props.shoot}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky />
            <Ground />
            {props.gameState.cannonBalls.map((cannonBall: IFlyingObject) => (
                <CannonBall
                    key={cannonBall.id}
                    position={cannonBall.position}
                />
            ))}
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            <CurrentScore score={props.gameState.kills} />
            {!props.gameState.started &&
                <g>
                    <StartGame onClick={() => props.startGame()} />
                    <Title />
                </g>
            }

            {props.gameState.flyingObjects.map((flyingObject: IFlyingObject) => (
                <FlyingObject
                    key={flyingObject.id}
                    position={flyingObject.position}
                />
            ))}
            {lives}
        </svg>
    );
};

Canvas.propTypes = {
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
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
};


export default Canvas;