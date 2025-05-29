const counterReducer = (state=0, action) => {
    // console.log(state, action);
    switch (action.type) {
        case "UP":
            return state + action.number;
        case "DOWN":
            return state - action.number;
        case "RESET":
            return action.number;
        default:
            return state;
    }
}
export default counterReducer;