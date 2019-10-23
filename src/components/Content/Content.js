import React from 'react';
import './Content.css';
import TaskList from '../TaskList/TaskList';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import UsersList from '../UsersList/UsersList';

export default (props) => {
    let content;
    if(props.isLogIn && !props.isAdmin) {
      content = <TaskList  getData = {props.server.getTasks}
                           addItem = {props.server.addTask}
                           removeItem = {props.server.removeTask}
                           editItem = {props.server.editTask}
                           name={props.name}
                           texts={props.texts} />;
      }
    else if(props.register) {
      content = <RegisterScreen request = {props.server.addUser}
                                texts={props.texts}
                                registerSuccess ={props.registerSuccess}/>
    }
    else if(props.isLogIn && props.isAdmin) {
      content = <UsersList texts={props.texts}
                           getData = {props.server.getUsers}/>
    }
    else {
      content = <LoginScreen request = {props.server.logIn}
                             logged = {props.logged}
                             name={props.name}
                             texts={props.texts}/>
    }
    return (
      <div className='content'>
        {content}
      </div>

    )
}