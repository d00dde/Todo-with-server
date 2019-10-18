import React, {Component} from 'react';
import './Content.css';
import TaskList from '../TaskList/TaskList';
import LoginScreen from '../LoginScreen/LoginScreen'

export default class extends Component {

  render () {
    let content;
    if(this.props.logged) {
      content = <TaskList  getData = {this.props.server.getTasks}
                           addItem = {this.props.server.addTask}
                           removeItem = {this.props.server.removeTask}
                           editItem = {this.props.server.editTask} />;
      }
    else {
      content = <LoginScreen />
    }
    return (
      <div className='content'>
        {content}
      </div>

    )
  }
}