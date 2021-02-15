import logo from './logo.svg';
import './App.css';
import EmployeeList from './Component/EmployeeList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewEmployee from './Component/ViewEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={EmployeeList} />
          <Route path="/employees" component={EmployeeList} />
          <Route path="/employee/:id" component={ViewEmployee} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
