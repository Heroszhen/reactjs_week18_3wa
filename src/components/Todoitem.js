import React,{} from 'react';//importer 
import { useSelector,useDispatch } from 'react-redux';
import Store from '../services/Store';
import { deleteTask } from '../services/ApiService.js';

const Todoitem = (props) =>{
    const {handleDeletion,handleAjustment} = props;
    const todoreducer = useSelector(state=>state.todoreducer);
    const dispatch = useDispatch();
    const ss = new Store();

    const deleteOneElm = async (id,key) =>{
        let fc = await deleteTask(id,key,ss.getHeaders());
        dispatch(fc);
        handleDeletion(id);
    }
    const modifyOneElm = (id,title) =>{
        handleAjustment(id,title);
    }
    return (
        <React.Fragment>
            <div className="mt-3">
                {
                    todoreducer.tasks.length > 0 && (<h4>Liste dans todoReducer</h4>)
                }
                <ul className="list-group">
                {
                    todoreducer.tasks.map((value,key)=>{
                        return (
                            <li key={key} className="list-group-item">
                                 <button type="button" className="btn btn-success btn-sm" onClick={()=>modifyOneElm(value._id,value.title)}>Modifier</button> ---{value._id} : {value.title} ---- <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteOneElm(value._id,key)}>Supprimer</button>
                            </li>
                        )
                    })          
                }
                </ul>
            </div>
            <br/>
            {/* <div className="mt-3">
                {
                    todos.length > 0 && (<h4>Liste dans props</h4>)
                }
                <ul className="list-group">
                {
                    todos.map((value,key)=>{
                        return (
                            <li key={key} className="list-group-item">
                               {value._id} : {value.title}
                            </li>
                        )
                    })          
                }
                </ul>
            </div> */}
        </React.Fragment>
    );
}
export default Todoitem;