import './Home.css';
import Todoinput from '../Todoinput';
import Todolist from '../Todolist';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Store from "../../services/Store";
import { addTask,updateTask } from '../../services/ApiService.js';

function Home(props){
  const [inputvalue,setInputvalue] = useState("");
  const [modifyid,setModifyid] = useState(-1);
  const todoreducer = useSelector(state=>state.todoreducer);
  const logreducer = useSelector(state=>state.logreducer);
  const [todos,setTodos] = useState(todoreducer.tasks);
  const dispatch = useDispatch();
  const store = new Store();
  const userid = JSON.parse(store.getStorage("user"))["id"];

  const getMyList = () =>{
    fetch('http://localhost:3100/gettasks', {
      method: 'post',
      headers: store.getHeaders(),
      body: JSON.stringify({user:userid})
    }).then(res => res.json())
    .then(json =>{
      dispatch({
        type:"ADD_TASKS",
        value:json
      });
    })
  }

  useEffect(() => {
    getMyList();
  },[]);

  

  const handleInputvalue = (e) =>{
    setInputvalue(e.target.value);
  }
  const handleKeyup = async (key) =>{
    switch(key){
      case "Enter":
        if(modifyid === -1){
          let todo = {
            id:todos.length,
            title :inputvalue,
            userid:userid
          };

          let fc = await addTask(todo,store.getHeaders());
          dispatch(fc);
          //setTodos(todoreducer.newTasks);console.log(todoreducer,todoreducer.tasks)

        }else{
          //let index = todos.findIndex(elm=>elm._id === modifyid)
          let fc = await updateTask(modifyid,inputvalue,store.getHeaders());
          //todos[index]["title"] = inputvalue;
          dispatch(fc);
          setModifyid(-1);
        }
        setInputvalue("");
        break;
      default:
        break;
    }
  }
  const handleDeletion = (id)=>{
    setTodos(todos.filter(item => item["_id"] !== id));
  }
  const handleAjustment = (_id,title) =>{
    // let todo = todos.find(elm =>elm._id === _id);
    setInputvalue(title);
    setModifyid(_id);
  }
  return (
    <div className="App undernav pe-2 ps-2">
      <div className="text-center h2 mt-2">Accueil</div>
      <div className="text-success fs-3">
      {(() => {
        if (modifyid !== -1){
          return (
            <div>Modification : {modifyid}</div>
          )
        }   
        return "";
      })()}
      </div>
      <div className="text-primary h5">
      {(() => {
        let logs = logreducer.logs;
        if (logs.length !== 0){
          return (
            <div>LAST LOG : {logs[logs.length-1]["message"]}({new Intl.DateTimeFormat('fr-FR').format(logs[logs.length-1]["date"])})</div>
          )
        }   
        return "";
      })()}
      </div>
      <Todoinput  handleInputvalue={handleInputvalue} inputvalue={inputvalue} handleKeyup={handleKeyup}  />
      <Todolist todos={todos} handleDeletion={handleDeletion} handleAjustment={handleAjustment} />
    </div>
  );
}

export default Home;
