import './App.css';
import {Home} from './Home';
import {TaxonomicRank} from './TaxonomicRank';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import { TR_Domain } from './TR_Domain';
import { TR_Kingdom } from './TR_Kingdom';
import { TR_Phylum } from './TR_Phylum';
import { TR_Class } from './TR_Class';
import { TR_Order } from './TR_Order';
import { TR_Family } from './TR_Family';
import { TR_Genus } from './TR_Genus';
import { TR_Species } from './TR_Species';
import {Login} from './Login';
import Register from './Register.js';




function App() {
  return (
    <BrowserRouter>
    <Redirect from='/' to='/Login' />
    <nav className="navbar-expand" id='nav'>
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/taxonomicrank" id="taxonomicrank">
              TaxonomicRank
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/domain" id="domain">
              Domain
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_kingdom" id="kingdom">
              Kingdoms
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_phylum" id="phylum">
              Phylum
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_Class" id="class">
              Class
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_Order" id="order">
              Order
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_family" id="family">
              Family
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_genus" id="genus">
              Genus
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_species" id="species">
              Species
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/Login" id="login">
              Sign In
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/Register" id="register">
              Register
              </NavLink>
            </li>
       
            
          </ul>
        </nav>
    <div className="App container-fluid">
      <h3 className="PageTitle" id='pagetitle'>
        Wild Wild Web
        </h3>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/taxonomicrank' component={TaxonomicRank}/>
          <Route path='/domain' component={TR_Domain}/>
          <Route path='/TR_kingdom' component={TR_Kingdom}/>
          <Route path='/TR_phylum' component={TR_Phylum}/>
          <Route path='/TR_Class' component={TR_Class}/>
          <Route path='/TR_Order' component={TR_Order}/>
          <Route path='/TR_family' component={TR_Family}/>
          <Route path='/TR_genus' component={TR_Genus}/>
          <Route path='/TR_species' component={TR_Species}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Register' component={Register} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App