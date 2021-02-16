import logo from './logo.svg';
import './App.css';
import EmployeeList from './Component/EmployeeList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewEmployee from './Component/ViewEmployee';
import CreateEmployee from './Component/CreateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={EmployeeList} />
          <Route path="/employees" component={EmployeeList} />
          <Route path="/employee/:id" component={ViewEmployee} />
          <Route path="/create-employee" component={CreateEmployee} />
          <Route path="/edit-employee/:id" component={CreateEmployee} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
