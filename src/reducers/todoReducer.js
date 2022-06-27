const defaultState = {
    tasks:[]
}
export const todoReducer = (state = defaultState, action)=> {
    switch(action.type){
        case "ADD":
            const newList = [...state.tasks,action.value];
            return {
                ...state,
                tasks: newList
            };
        case "DELETE":
            //let index = state.tasks.findIndex(elm=>elm.id === action.value);
            //const newList = [...state.tasks,action.value];
            return {
                ...state,
                tasks: state.tasks.filter((elm,index)=>index !== action.value)
            };
        case "UPDATE":
            return {
                ...state,
                tasks: state.tasks.filter(elm=>{
                    if(elm._id === action.value.id)elm.title = action.value.title;
                    return elm;
                })
            };
        case "ADD_TASKS":
            state.tasks = [];
            action.value.forEach((elm)=>{
                state.tasks.push(elm)
            })
            return {
                ...state,
                newTasks: state.tasks
            };
        default:
            break;
    }
    return state
}