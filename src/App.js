import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {TaxonomicRank} from './TaxonomicRank';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import { TR_Domain } from './TR_Domain';
import { TR_Kingdom } from './TR_Kingdom';
import { TR_Phylum } from './TR_Phylum';
import { TR_Family } from './TR_Family';

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
              TaxonomicRanks
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_domain">
              Domains
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_kingdom">
              Kingdoms
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_phylum">
              Phylum
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-dark" to="/TR_family">
              Family
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/taxonomicrank' component={TaxonomicRank} />
          <Route path='/TR_domain' component={TR_Domain}/>
          <Route path='/TR_kingdom' component={TR_Kingdom}/>
          <Route path='/TR_phylum' component={TR_Phylum}/>
          <Route path='/TR_family' component={TR_Family}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
