export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const START_GAME = 'START_GAME';
export const SHOOT = 'SHOOT';

export const moveObjects = (mousePosition: IMousePosition) => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const startGame = () => ({
    type: START_GAME,
});

export const shoot = (mousePosition: IMousePosition) => ({
    type: SHOOT,
    mousePosition,
});