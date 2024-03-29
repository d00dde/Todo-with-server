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

  constructor (props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
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
    switch(response.reason) {
      case 'password':
        this.setState ({
          password: '',
          msg: messages.passError
        });
        return;
      case 'name':
        this.setState ({
          name: '',
          password: '',
          msg: messages.nameError
        });
        return;
      case 'brutForce':
        this.setState ({
          name: '',
          password: '',
          msg: messages.brutForce
        });
        return;
      case 'session':
        this.setState ({
          name: '',
          password: '',
          msg: messages.detectedActiveSession
        });
        return;
      default:
        this.setState ({
          msg: messages.unknownError
        });
    }
  }

  render () {
    const texts = this.props.texts.loginScreen;
    if(this.props.isLoading)
      return <Spinner />
    return (
      <div className='login-screen'>
        <h3 className='login-title'>{texts.title}</h3>
        <form onSubmit={this.submitHandler}>
          <input type="text"
                 ref={this.inputRef}
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
                  type='submit'>{texts.btnLogIn}
          </button>
        </form>
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

  submitHandler = (e) => {
    e.preventDefault();
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