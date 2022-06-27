import './App.css';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

function App(){
  const [inputvalue,setInputvalue] = useState("Sauter sur le Soleil");
  const [modifyid,setModifyid] = useState(-1);
  const todoreducer = useSelector(state=>state.todoreducer);
  const logreducer = useSelector(state=>state.logreducer);
  const [todos,setTodos] = useState(todoreducer.tasks);
  const dispatch = useDispatch();

  useEffect(()=>{
    //setTodos(todoreducer.tasks);console.log(todos)
  },[]);

  const handleInputvalue = (e) =>{
    setInputvalue(e.target.value);
  }
  const handleKeyup = (key) =>{
    switch(key){
      case "Enter":
        if(modifyid === -1){
          let todo = {
            id:todos.length,
            title :inputvalue
          };
          setTodos([...todos,todo]);

          dispatch({
            type:"ADD",
            value:todo
          });
/*
          dispatch({
            type:"ADD_log",
            value:{message:"Ajouter une tâche",date:new Date()}
          });*/
        }else{
          let index = todos.findIndex(elm=>elm.id === modifyid)
          todos[index]["title"] = inputvalue;
          
          dispatch({
            type:"UPDATE",
            value:{id:modifyid,title:inputvalue}
          });

          setModifyid(-1);
        }
        setInputvalue("");
        break;
      default:
        break;
    }
  }
  const handleDeletion = (id)=>{
    setTodos(todos.filter(item => item.id !== id));
  }
  const handleAjustment = (id) =>{
    let todo = todos.find(elm =>elm.id === id);
    setInputvalue(todo.title);
    setModifyid(id);
  }
  return (
    <div className="App p-2">
      <div className="text-center h2">Test app</div>
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

export default App;
