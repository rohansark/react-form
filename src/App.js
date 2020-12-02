import logo from './logo.svg';
import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUsers from "./components/create-users.component";
import UsersList from "./components/users-list.component";

class App extends Component {
  render(){
  return (
    <Router>
    <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#" target="_blank">
              <img src={logo} width="30" height="30" alt="NodejsApp" />
            </Link>
            <Link to="/" className="navbar-brand">NODE Js Application</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Users List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Users</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
      <Route path="/" exact component={UsersList}/>
      <Route path="/create" component={CreateUsers}/>
    </div>
    </Router>
  );
  }
}

export default App;
