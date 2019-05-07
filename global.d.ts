interface IMousePosition {
    x: number,
    y: number
}

interface IGameState {
    started: bool,
    kills: number,
    lives: number,
    flyingObjects?: array,
    cannonBalls?: array
}

interface IObjectState {
    angle: number
    gameState: IGameState
}

interface ITrackMouseEvent {
    clientX: number,
    clientY: number
}

interface IObjectPosition {
    x: number,
    y: number
}

interface IRectangleOBjectPosition {
    x1: number,
    x2: number,
    y1: number,
    y2: number
}

interface IFlyingObject {
    id: number,
    position: IObjectPosition,
    createdAt?: any
}