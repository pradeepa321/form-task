import React, {useState} from 'react'
import './Form.css'

const Form = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDesp, setTaskDesp] = useState('');
    const [checked,setChecked] = useState('');
    const [formSubmit , setFormSubmit] = useState(false);
    const [isValue, setIsValue] = useState([]);

    const checking =(e) => {
        console.log("checking", e.target.checked);
        
        setChecked(e.target.checked ? "checked" : "Not checked");

    }
    const handleInputChange =(e) => {
        console.log("e",e.target.value, e.target.name);
        if(e.target.name === "name"){
            setTaskName(e.target.value)
        }
        else{
            setTaskDesp(e.target.value);
        }  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmit(true);
        setIsValue([...isValue,{name:taskName,desp:taskDesp,check:checked}]);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="name" value={taskName} onChange={handleInputChange}/>
            {taskName === "" && formSubmit && <div>taskName is required</div>}
            <input name="desp" value={taskDesp} onChange={handleInputChange}/>
             {taskDesp === "" && formSubmit &&<div>taskDesp is required</div>}<br></br>
             <input type="checkbox" value={checked} onChange={checking} id="check"/>
             <label name="check">It's completed</label>
            <input  type={"submit"} />
           
        </form>
        <div>
           {isValue.map((value,index)=>{
                return<div key={index}>
                    <h1>{value.name}</h1>
                    <h2>{value.desp}</h2>
                    <h4>{value.check}</h4>

                    </div>
           })}
        </div>
    </div>
  )
}

export default Form