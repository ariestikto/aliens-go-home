import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, shoot } from '../actions/index';

const mapStateToProps = (state: IObjectState) => ({
    angle: state.angle,
    gameState: state.gameState
});

const mapDispatchToProps = (dispatch: any) => ({
    moveObjects: (mousePosition: IMousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
    shoot: (mousePosition: IMousePosition) => {
        dispatch(shoot(mousePosition))
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;