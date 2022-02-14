import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Todo List App</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">New To-do</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;