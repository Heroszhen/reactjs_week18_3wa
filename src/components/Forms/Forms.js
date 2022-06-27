import React,{useState} from 'react';//importer 
import { useForm } from "react-hook-form";

const Forms = (props) =>{
    
    //form 1
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [validators,setValidator] = useState({email:true,password:true});

    //form 2
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    }
    const [person,setPerson] = useState({lastname:"",age:"",civility:"",isEmployed:true});

    const handleLogup = (e)=>{
        e.stopPropagation();
        //e.preventDefault();
    }

    const setField = (e,field,value)=>{
        e.stopPropagation();
        //console.log(e,field,value);
       if(field === "email")setEmail(value);
       if(field === "password")setPassword(value);
       checkField(e,field,value);
    }

    const checkField=(e,field,value)=>{
        let checked;
        if(value === "")checked = false;
        else checked = true;
        if(field === 'email')setValidator({...validators,email:checked});
        if(field === 'password')setValidator({...validators,password:checked});
    }

    return (
        <React.Fragment>
            <div id="forms" className="container undernav">
                <div className="row justify-content-center">
                    <div className="col-md-5 col-lg-4 pt-3">
                        <form onSubmit={handleLogup} autoComplete="off">
                            <h2 className="text-center mb-5">1.Formulaire : validations</h2>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email *</label>
                                <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setField(e,'email',e.target.value)} value={email} onClick={(e)=>checkField(e,'email',email)} autoComplete="off" required/>
                                {
                                    validators['email'] === false && (
                                        <div className="alert alert-danger fullwidth mt-1">L'email est obligatoire</div>
                                    )
                                }
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe *</label>
                                <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={(e)=>setField(e,'password',e.target.value)} value={password} onClick={(e)=>checkField(e,'password',password)} autoComplete="off" required />
                                {
                                    validators['password'] === false && (
                                        <div className="alert alert-danger fullwidth mt-1">Le mot de passe est obligatoire</div>
                                    )
                                }
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary" disabled={email==='' || password===''}>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row justify-content-center pt-5">
                    <h2 className="text-center pt-5">2.React Hook Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className="col-md-5 col-lg-4">
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Nom de famille *</label>
                            <input type="text" className="form-control" id="lastname" onChange={(e)=>setPerson({...person,lastname:e.target.value})} defaultValue={person['lastname']} {...register("lastname",{required: true})} autoComplete="off" />
                            {errors.lastname && <div className="alert alert-danger">Le nom est obligatoire</div>}   
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" className="form-label">Âage *</label>
                            <input type="number" className="form-control" id="age" onChange={(e)=>setPerson({...person,age:e.target.value})} defaultValue={person['age']} {...register("age",{required: true,pattern:/[0-9]{2}/,min:18})} autoComplete="off" />
                            {errors.age && (
                                <div className="alert alert-danger">
                                    {errors.age.type === 'required' && <span>L'âge est obligatoire</span>}
                                    {errors.age.type === 'min' && <span>18 au min</span>}
                                </div>
                            )}   
                        </div>
                        <div className="mb-3">
                            <label htmlFor="civility" className="form-label">Civility *</label>
                            <select className="form-select" defaultValue={person["civility"]} {...register("civility",{required: true})}>
                                <option value="" ></option>
                                <option value="monsieur">Monsieur</option>
                                <option value="madame">Madame</option>
                            </select>
                            {errors.civility && <div className="alert alert-danger">La civilité est obligatoire</div>}  
                        </div>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success" >Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Forms;