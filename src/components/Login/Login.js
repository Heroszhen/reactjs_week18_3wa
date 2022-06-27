import React,{useState} from 'react';//importer 
import "./Login.css";
import {
    useHistory 
} from "react-router-dom";
import Store from '../../services/Store';

const Login = (props) =>{
    const {updateToken} = props
    const history = useHistory();
    const [oneuser,setOneuser] = useState({email:"",password:""});
    
    const store = new Store();
    //console.log(props)
    const handleLogin = async(e)=>{
        e.stopPropagation();
        e.preventDefault();
        let response = await fetch('http://localhost:3100/login', {
            method: 'post',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(oneuser)
        });
        response = await response.json();
        let result = response["result"];
        if(result === false)alert("Erreurs");
        else{
                //let store = new Store();
                //store.setStorage("user",JSON.stringify(result));
            store.setStorage("user",JSON.stringify(result));
            alert("Connecté");
            updateToken(result);
            history.push("/accueil");
        }
    }
    return (
        <React.Fragment>
            <div id="login" className="undernav">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-4">
                            <form onSubmit={handleLogin}>
                                <h2 className="text-center mb-5">Connectez-vous</h2>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setOneuser({...oneuser,email : e.target.value})} value={oneuser.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={(e)=>setOneuser({...oneuser,password : e.target.value})} value={oneuser.password} autoComplete="on"/>
                                </div>
                                <div className="text-center mt-4">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Login;