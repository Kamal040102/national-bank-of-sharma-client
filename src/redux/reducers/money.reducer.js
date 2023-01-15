const moneyReducer = (state = 0, action) => {
    switch (action.type) {
        case "WITHDRAW":
            return state - action.payload
        case "DEPOSIT":
            return state + action.payload
        default:
            return state;
    }
}

export default moneyReducer;