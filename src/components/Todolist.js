import React,{} from 'react';//importer 
import Todoitem from './Todoitem';


const Todolist = (props) =>{
    
    return (
        <React.Fragment>
            <div>
                <ul className="mb-1">
                    <Todoitem todos={props.todos} handleDeletion={props.handleDeletion} handleAjustment={props.handleAjustment} />
                </ul>
            </div>
        </React.Fragment>
    );
}
export default Todolist;