import { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {

    const [day, setDay] = useState('Monday');
    const [task, setTask] = useState('');
    const [owner, setOwner] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const todo = {day, task, owner};

        setIsPending(true);
        
        fetch('http://localhost:8000/list', {
            method : 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(todo)
            
        }).then(()=>{
            console.log("New Blog added!!");
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="add">
            <h2>Add a new Task!!!</h2>
            <form onSubmit={handleSubmit} >
                <label > Day to do the task?</label>
                <select
                value = {owner}
                onChange = {(e)=> setDay(e.target.value)}
                >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                </select>
                <label > Todo task?</label>
                <textarea
                 required
                 value ={ task}
                 onChange = {(e)=> setTask(e.target.value)}
                 ></textarea>
                <label > Who is to do?</label>
                <input 
                type="text"
                required
                value ={owner}
                onChange = {(e)=> setOwner(e.target.value)}
                />
                { !isPending && <button>Add Todo Task</button>}
                { isPending && <button disabled>Adding task...</button>}

                <p>{day}</p>
                <p>{owner}</p>
                <p>{task}</p>                
            </form>
        </div>
     );
}
 
export default Add;