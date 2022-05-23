import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {TaxonomicRank} from './TaxonomicRank';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { TR_Domain } from './TR_Domain';

function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid">
      <h3 className="PageTitle">
        Title
        </h3>
        <nav className="navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/taxonomicrank">
              TaxonomicRank
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/domain">
              Domain
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/taxonomicrank' component={TaxonomicRank}/>
          <Route path='/domain' component={TR_Domain}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
