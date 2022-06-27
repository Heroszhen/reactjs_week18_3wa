exports.addTask=(todo,headers)=>{
        const task = async (dispatch)=>{
            let response = await fetch('http://localhost:3100/addtask', {
                method: 'post',
                headers: headers,
                body: JSON.stringify(todo)
            })
            let task = await response.json();
            let action = {
                type:"ADD",
                value:task
            };
            dispatch(action);
        } 
        return task;
    }

exports.deleteTask = (id,key,headers) =>{
    return async (dispatch)=>{
        await fetch('http://localhost:3100/deletetask', {
            method: 'post',
            headers: headers,
            body: JSON.stringify({id:id})
        })
        //response = await response.json();
        dispatch({
            type:"DELETE",
            value:key
        });
    } 
}

exports.updateTask = (id,title,headers)=>{
    return async (dispatch)=>{
        await fetch('http://localhost:3100/modifytask', {
            method: 'post',
            headers: headers,
            body: JSON.stringify({_id:id,title:title})
        });
        //let task = response.json();
        dispatch({
            type:"UPDATE",
            value:{id:id,title:title}
        });
    }
}
