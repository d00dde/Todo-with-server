import React, {Component} from 'react';
import './Content.css';
import TaskList from '../TaskList/TaskList'
import Server from "../../dummyserver";



export default class extends Component {

  constructor () {
    super ();
    this.server = new Server;
  }


  render () {
    return (
      <div className='content'>
        <TaskList  getData = {this.server.getTasks}
                   addItem = {this.server.addTask}
                   removeItem = {this.server.removeTask}
                   editItem = {this.server.editTask} />
      </div>

    )
  }
}