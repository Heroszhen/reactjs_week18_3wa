import React,{} from 'react';//importer 

const Todoinput = (props) =>{
    const {inputvalue,handleInputvalue,handleKeyup} = props;
    //const handleInputvalue = props.handleInputvalue;
    
    const inputChange =(e) => {
        //console.log(e);
        handleInputvalue(e);
    }
    const keyup = (e) =>{
        let key = e.key;
        handleKeyup(key);
    }
    return (
        <React.Fragment>
            <div>
                <h5>Todoinput</h5>
                <input type="text" className="form-control"  name="input" onKeyUp={(e)=>keyup(e)}  onChange={(e)=>inputChange(e)} value={inputvalue} />
            </div>
        </React.Fragment>
    );
}

export default Todoinput;