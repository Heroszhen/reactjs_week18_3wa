import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import React,{useState} from 'react';//importer 
import Store from './services/Store';

//components
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Logup from './components/Logup/Logup';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Forms from './components/Forms/Forms';
import Logs from './components/Logs/Logs';


function App(){
  const ss = new Store();
  const [token ,setToken] = useState(JSON.parse(ss.getStorage("user")));
  const updateToken =(a)=>{
    setToken(a);
  }

  return (
    <div className="App">
      <Router>
        <Header token={token} updateToken={updateToken} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/connexion" />
          </Route>
          <Route exact path="/connexion">         
            <Login updateToken={updateToken} />       
          </Route>
          <Route exact path="/inscription">
            <Logup />  
          </Route>  
          <Route exact path="/formulaires">
            <Forms />  
          </Route> 
          <Route exact path="/logs">
            <Logs />  
          </Route> 
          <Route exact path="/accueil" component={Home} />  
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
