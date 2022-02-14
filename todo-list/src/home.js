import TodoList from './TodoList';
import useFetch from './useFetch';

const Home = () => {

 const {data: list, isPending, error } = useFetch('http://localhost:8000/list');

    return ( 
        <div className="home">
        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div>}
         {list && <TodoList list = {list}  title = "Day by Day Schedule!!"  />}  
        </div>
     );
}
 
export default Home;