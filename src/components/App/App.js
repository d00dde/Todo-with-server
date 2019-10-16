import React, {Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Content from '../Content/Content';

export default class extends Component {

  state = {
    logged: false,
    admin: false
  }

  logIn = (name) => {
    /*this.server.name = name;
    fetch*/
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
              {this.state.logged ? 'Log Out': 'Log In'}
            </button>
          </div>
        </nav>
        <div className='main-container'>
          <div className='left-panel'>Amazing Left Panel</div>
          <Content logged={this.state.logged}
                   admin={this.state.admin}/>
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

