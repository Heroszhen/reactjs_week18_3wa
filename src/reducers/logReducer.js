const defaultState = {
    logs:[]
}
export const logReducer = (state = defaultState, action)=> {
    switch(action.type){
        case "ADD_log":
            return {
                ...state,
                newLogs: state.logs.push(action.value)
            };
        default:
            break;
    }
    return state
}