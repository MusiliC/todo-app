import Home from './home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Add from './add';
import TodoDetails from './TodoDetails';


function App() {
  return (
    <Router>
       <div className="App">
          <Navbar/>
      <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/add">
              <Add/>
            </Route>
            <Route path="/list/:id">
              <TodoDetails />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
