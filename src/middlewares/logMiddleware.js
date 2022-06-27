const logMiddleware = (store) => (next) => (action) => {
    //let logreducer = store.getState().logreducer;
    switch(action.type){
        case "ADD":
            store.dispatch({
                type:"ADD_log",
                value:{
                    message:"Ajouter une tâche",
                    date:new Date()
                } 
            });
            next(action);
            break;

        case "DELETE":
            store.dispatch({
                type:"ADD_log",
                value:{
                    message:"Supprimer une tâche",
                    date:new Date()
                } 
            });
            next(action);
            break;

        default:
            next(action);
    }
}
   
export default logMiddleware;