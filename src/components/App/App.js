import React, {Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import english from '../../languages/english';
import russian from '../../languages/russian';


import Content from '../Content/Content';
import Server from "../../dummyserver";

export default class extends Component {

  state = {
    register: false,
    isLogIn: false,
    isAdmin: false,
    name: '',
    texts: english
  }

  constructor () {
    super ();
    this.server = new Server;
  }

  render () {
    const texts = this.state.texts.app;
    return (
      <div className="app">
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#" className="brand-logo center">{texts.title}</a>
            <div className="right">
              <div className="switch left">
                <label>
                  EN
                  <input type="checkbox" onChange={(e) => this.changeLanguage(e.target.checked)}/>
                  <span className="lever"></span>
                  RU
                </label>
              </div>
              <button onClick={this.logOut}
                      className='login-btn waves-effect waves-light btn right'>
                {this.state.isLogIn ? texts.btnLogOut : texts.btnRegister}
              </button>
            </div>
          </div>
        </nav>
        <div className='main-container'>
          <div className='left-panel'>{texts.leftPanel}</div>
          <Content isLogIn = {this.state.isLogIn}
                   isAdmin = {this.state.isAdmin}
                   register={this.state.register}
                   registerSuccess={this.registerSuccess}
                   name={this.state.name}
                   server = {this.server}
                   logged = {this.logged}
                   texts={this.state.texts}/>
          <div className='right-panel'>{texts.rightPanel}</div>
        </div>

        <footer className="page-footer blue darken-2">
          <div className="container">{texts.footer}</div>
          <div className="footer-copyright">
            <div className="container">
              {texts.copyright}
            </div>
          </div>
        </footer>
      </div>
    );
  }

  logged = (isLogIn, isAdmin, name) => {
    this.setState({
      isLogIn,
      isAdmin,
      name
    })
  }

  logOut = () => {
    let register = false;
    if (!this.state.isLogIn)
      register = true;
    this.setState({
      register: register,
      isLogIn: false,
      isAdmin: false,
      name: ''
    })
  }
  registerSuccess = () => {
    this.setState ({
      register: false,
    });
    this.createPopup(this.state.texts.app.successfulRegister);
  }

  changeLanguage = (checked) => {
    if(checked) {
      this.setState({
        texts: russian
      });
    } else {
      this.setState({
        texts: english
      });
    }
  }
  createPopup = (title) => {
   const popup = document.createElement('div');
   popup.innerText = title;
   popup.classList.add('popup-show');
   document.body.appendChild(popup);
   setTimeout(()=> {
     const popup = document.querySelector('.popup-show');
     popup.parentNode.removeChild(popup);
   }, 3000)
  }

}

