import React, {Component} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import english from '../../languages/english';
import russian from '../../languages/russian';


import Content from '../Content/Content';
import ErrorIndicator from './../ErrorIndicator/ErrorIndicator'
import Server from "../../server/dummyserver";

export default class extends Component {

  state = {
    screen: 'login',
    isLogIn: false,
    isAdmin: false,
    name: '',
    texts: english,
    error: false,
  }

  constructor (props) {
    super (props);
    this.server = new Server();
  }

  render () {
    const texts = this.state.texts.app;
    if(this.state.error)
      return <ErrorIndicator message = {texts.LogOutErrormessage} />
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
          <Content screen = {this.state.screen}
                   registerSuccess={this.registerSuccess}
                   logged = {this.logged}
                   showUserTasks = {this.showUserTasks}
                   backToUsersList = {this.backToUsersList}
                   isAdmin = {this.state.isAdmin}
                   name={this.state.name}
                   server = {this.server}
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

  logOut = () => {
    if(this.state.isLogIn) {
      this.server.logOut()
        .then(() => {
          this.setState({
            screen: 'login',
            isLogIn: false,
            isAdmin: false,
            name: ''
          });
        }).catch(() => {
        this.setState({
          error: true
        });
      });
    } else {
      this.setState ({
        screen: 'register',
      });
    }
  }

  logged = (isLogIn, isAdmin, name) => {
    this.setState({
      screen: isAdmin ? 'usersList': 'taskList',
      isLogIn,
      isAdmin,
      name
    })
  }

  registerSuccess = () => {
    this.setState ({
      screen: 'login'
    });
    this.createPopup(this.state.texts.app.successfulRegister);
  }

  showUserTasks = (name) => {
    this.setState ({
      name,
      screen: 'taskList'
    })
  }

  backToUsersList = () => {
    if(this.state.isAdmin)
      this.setState ({
        name: '',
        screen: 'usersList'
      })
    else
      this.setState ({
        error: true,
      })
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

