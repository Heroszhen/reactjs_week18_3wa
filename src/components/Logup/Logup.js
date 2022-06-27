import React,{useState} from 'react';//importer 
import "./Logup.css";
import {
    useHistory 
} from "react-router-dom";

const Logup = (props) =>{
    const history = useHistory();
    const [oneuser,setOneuser] = useState({email:"",password:""});

    const handleLogup = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        fetch('http://localhost:3100/logup', {
            method: 'post',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(oneuser)
        }).then(res => res.json())
        .then(json =>{
            if(json["result"] === 1){
                alert("Inscription réussite");
                history.push("/");
            }
        })
    }
    return (
        <React.Fragment>
            <div id="logup">
            <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-4">
                            <form onSubmit={handleLogup}>
                                <h2 className="text-center mb-5">Inscrivez-vous</h2>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setOneuser({...oneuser,email : e.target.value})} value={oneuser.email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={(e)=>setOneuser({...oneuser,password : e.target.value})} value={oneuser.password} autoComplete="on" />
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

export default Logup;