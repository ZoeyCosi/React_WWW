import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {TaxonomicRank} from './TaxonomicRank';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import {TR_Domain} from './TR_Domain';
import {TR_Species} from './TR_Species';
import {TR_Genus} from './TR_Genus';
import { TR_Order } from './TR_Order';
import { TR_Class } from './TR_Class';

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
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_domain">
              Domain
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_species">
              Species
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_genus">
              Genus
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_Order">
              Order
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_Class">
              Class
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/taxonomicrank' component={TaxonomicRank}/>
          <Route path='/TR_domain' component={TR_Domain}/>
          <Route path='/TR_species' component={TR_Species}/>
          <Route path='/TR_genus' component={TR_Genus}/>
          <Route path='/TR_Order' component={TR_Order}/>
          <Route path='/TR_Class' component={TR_Class}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
