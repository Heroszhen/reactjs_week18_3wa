import React,{} from 'react';//importer 
import { useSelector } from 'react-redux';
import {
    Link 
} from "react-router-dom";

const Logs = (props) =>{
    const logreducer = useSelector(state=>state.logreducer);
    const getDateTime=(date)=>{
        let intl=new Intl.DateTimeFormat("fr",  
        {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second:"2-digit",
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
        });
        return intl.format(date);
    }

    return (
        <React.Fragment>
            <div id="Logs" className="undernav">
                <h2 className="text-center mt-2">Les Logs</h2>
                <h5 className="text-center">
                    <Link to='/accueil'>Aller vers l'accueil</Link>
                </h5>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <ul className="list-group">
                            {
                                logreducer.logs.map((value,key)=>{
                                    return (
                                        <li key={key} className="list-group-item">
                                            {value["message"]}
                                            ({getDateTime(value["date"])})
                                        </li>
                                    )
                                })          
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Logs;