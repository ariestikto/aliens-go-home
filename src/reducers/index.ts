import { MOVE_OBJECTS, SHOOT, START_GAME } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';

const initialGameState = {
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    cannonBalls: [],
};

const initialState: IObjectState = {
    angle: 45,
    gameState: initialGameState,
};

function reducer(state = initialState, action: { type: string, mousePosition: IMousePosition }) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case START_GAME:
            return startGame(state, initialGameState);
        case SHOOT:
            return shoot(state, action);
        default:
            return state;
    }
}

export default reducer;
