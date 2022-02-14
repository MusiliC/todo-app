import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TodoList = ({ list, title, }) => {
    return ( 
        <div className="todo-list">

            <h2>{ title }</h2>
             { list.map((list)=>(
                <div className="list-preview" key={list.id}>
                    <Link to = {`/list/${list.id}`}>

                    <h2> { list.day }</h2>
                    <p> Click here to get the tasks to be done on { list.day } by {list.owner}</p>
                    
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;