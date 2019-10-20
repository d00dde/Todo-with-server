import React, {Component} from 'react';
import './Content.css';
import TaskList from '../TaskList/TaskList';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';

export default class extends Component {

  render () {
    let content;
    if(this.props.isLogIn) {
      content = <TaskList  getData = {this.props.server.getTasks}
                           addItem = {this.props.server.addTask}
                           removeItem = {this.props.server.removeTask}
                           editItem = {this.props.server.editTask}
                           name={this.props.name}
                           texts={this.props.texts} />;
      }
    else if(this.props.register) {
      content = <RegisterScreen request = {this.props.server.addUser}
                                texts={this.props.texts}
                                registerSuccess ={this.props.registerSuccess}/>
    }
    else {
      content = <LoginScreen request = {this.props.server.logIn}
                             logged = {this.props.logged}
                             name={this.props.name}
                             texts={this.props.texts}/>
    }
    return (
      <div className='content'>
        {content}
      </div>

    )
  }
}