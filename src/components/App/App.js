import React, {Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';


import Content from '../Content/Content';
import Server from "../../dummyserver";

export default class extends Component {

  state = {
    logged: false,
    admin: false
  }
  constructor () {
    super ();
    this.server = new Server;
  }


  logIn = (name) => {

  }

  logOut = () => {

  }

  render () {
    return (
      <div className="app">
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">Amazing TODO-List</a>
            <button onClick={this.login}
                    className='login-btn waves-effect waves-light btn right'>
              {this.state.logged ? 'Log Out': 'Register'}
            </button>
          </div>
        </nav>
        <div className='main-container'>
          <div className='left-panel'>Amazing Left Panel</div>
          <Content logged = {this.state.logged}
                   admin = {this.state.admin}
                   server = {this.server}/>
          <div className='right-panel'>Amazing Right Panel</div>
        </div>

        <footer className="page-footer blue darken-2">
          <div className="container">Amazing Footer</div>
          <div className="footer-copyright">
            <div className="container">
              © 2019 Copyright Text
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

