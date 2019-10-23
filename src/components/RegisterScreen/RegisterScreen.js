import React, {Component} from 'react';
import './RegisterScreen.css';
import {withResponse} from '../HOC';
import Spinner from '../Spinner/Spinner';

 class RegisterScreen extends Component {

  state= {
    name: '',
    password: '',
    confirmPassword: '',
    msg: '',

  }

   componentDidUpdate(prevProps) {
     if(prevProps.response === this.props.response)
       return;
     const response = this.props.response;
     const messages = this.props.texts.registerScreen.messages;
     if(response.isFree && response.register){
       this.props.registerSuccess();
       return;
     }
     if(response.isFree && !response.register){
       this.setState ({
         msg: messages.nameIsFree
       });
       return;
     }
     if(!response.isFree) {
       this.setState ({
         msg: messages.nameNotAFree
       });
       return;
     }
     this.setState ({
       msg: messages.unknownError
     })
   }


  render () {
    const texts = this.props.texts.registerScreen;
    const msg = this.props.isLoading ? <Spinner /> : this.state.msg;
    return (
      <div>
        <div className='register-screen'>
          <h3 className='register-title'>{texts.title}</h3>
          <div className='name-field'>
            <input type="text"
                   placeholder={texts.namePlaceholder}
                   id='name'
                   onChange={this.nameHandler}
                   value={this.state.name}/>
            <button className='btn-check waves-effect waves-light btn blue darken-2'
                    onClick={this.checkName}>{texts.btnCheck}</button>
          </div>
          <input type="password"
                 placeholder={texts.passwordPlaceholder}
                 id='password'
                 onChange={this.passHandler}
                 value={this.state.password}/>
          <input type="password"
                 placeholder={texts.confirmPlaceholder}
                 id='confirm-password'
                 onChange={this.confirmPassHandler}
                 value={this.state.confirmPassword}/>
          <button className='submit-btn waves-effect waves-light btn blue darken-2'
                  onClick={this.registerHandler}>{texts.btnRegister}
          </button>
          <div className='message'>{msg}</div>
        </div>
      </div>
    )
  }

  checkName = () => {
    const name = document.querySelector('#name').value;
    if(name === ''){
      this.setState({
        msg: this.props.texts.registerScreen.messages.nameEmpty
      });
      return;
    }
    this.props.request(name, '');
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

   confirmPassHandler = (e) => {
    if(e.target.value.trim() === this.state.password)
      this.setState ({
        confirmPassword: e.target.value.trim(),
        msg: ''
       });
    else
      this.setState ({
        confirmPassword: e.target.value.trim(),
        msg: this.props.texts.registerScreen.messages.noEqualPasswords
      });
   }


  registerHandler = () => {
    const messages = this.props.texts.registerScreen.messages;
    if(this.state.name === ''){
      this.setState({
        msg: messages.nameEmpty
      });
      return;
    }
    if(this.state.password === ''){
      this.setState({
        msg: messages.passEmpty
      });
      return;
    }
    if(this.state.password !== this.state.confirmPassword){
      this.setState({
        msg: messages.noEqualPasswords
      });
      return;
    }
    this.props.request(this.state.name, this.state.password);
  }

}

export default withResponse(RegisterScreen);