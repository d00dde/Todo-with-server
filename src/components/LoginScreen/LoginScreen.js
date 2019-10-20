import React, {Component} from 'react';
import './LoginScreen.css';
import {withResponse} from '../HOC';
import Spinner from '../Spinner/Spinner';

class LogScreen extends Component {

  state = {
    name: '',
    password: '',
    msg: ''
  }

  componentDidUpdate(prevProps) {
    if(prevProps.response === this.props.response)
      return;
    const response = this.props.response;
    const messages = this.props.texts.loginScreen.messages;
    if(response.isLogIn){
      this.props.logged(response.isLogIn, response.isAdmin, this.state.name);
      return;
    }
    if(response.error === 'password'){
      this.setState ({
        password: '',
        msg: messages.passError
      });
      return;
    }
    if(response.error === 'name') {
      this.setState ({
        name: '',
        password: '',
        msg: messages.nameError
      });
      return;
    }
    this.setState ({
      msg: messages.unknownError
    })
  }

  render () {
    const texts = this.props.texts.loginScreen;
    if(this.props.isLoading)
      return <Spinner />
    return (
      <div className='login-screen'>
        <h3 className='login-title'>{texts.title}</h3>
        <input type="text"
               placeholder={texts.namePlaceholder}
               id='name'
               value={this.state.name}
               onChange={this.nameHandler}/>
        <input type="password"
               placeholder={texts.passwordPlaceholder}
               id='password'
               value={this.state.password}
               onChange={this.passHandler}/>
        <button className='submit-btn waves-effect waves-light btn blue darken-2'
                onClick={this.submitHandler}>{texts.btnLogIn}
        </button>
        <div className='message'>{this.state.msg}</div>
      </div>
    )
  }

  nameHandler = (e) => {
    this.setState ({
      name: e.target.value.trim()
    });
  }

  passHandler = (e) => {
    this.setState ({
      password: e.target.value.trim()
    });
  }

  submitHandler = () => {
    const messages = this.props.texts.loginScreen.messages;
    if(this.state.name === '') {
      this.setState ({
        msg: messages.nameEmpty
      });
      return;
    }
    if(this.state.password === '') {
      this.setState ({
        msg: messages.passEmpty
      });
      return;
    }
    this.props.request(this.state.name, this.state.password);
  }
}

 export default withResponse(LogScreen);