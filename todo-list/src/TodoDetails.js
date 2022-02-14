import { useHistory, useParams } from "react-router-dom";
import useFetch  from './useFetch';

const TodoDetails = () => {

const {id} = useParams();
const {data: list, isPending, error } = useFetch('http://localhost:8000/list/' + id );
const history = useHistory();

const handleClick=() =>{
            fetch('http://localhost:8000/list/' + list.id,{
                method: 'DELETE'
            }).then(() =>{
                history.push('/')
            })
}

    return ( 
        <div className="todo-details">
            { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div>}
        { list && (
            <article>
                <h2>{list.day}</h2>
                <p><b>{list.owner}'s list of todo..</b></p>
                <div> { list.task}</div>
                <button onClick={handleClick}>Delete</button><br/><br/>
                <form>
                <button>Add..</button>
                </form>
            </article>
        )}
            
        </div>
     );
}
 
export default TodoDetails;