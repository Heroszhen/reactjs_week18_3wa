const defaultState = {
    token:null
}
export const tokenReducer = (state = defaultState, action)=> {
    switch(action.type){
        case "update_token":
            return {
                ...state,
                token: action.value
            };
        default:
            break;
    }
    return state
}