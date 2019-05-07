export default (state: IObjectState, initialGameState: IGameState) => {
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: true,
        }
    }
};