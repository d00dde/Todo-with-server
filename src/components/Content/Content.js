import React from 'react';
import './Content.css';
import TaskList from '../TaskList/TaskList';
import LoginScreen from '../LoginScreen/LoginScreen';
import RegisterScreen from '../RegisterScreen/RegisterScreen';
import UsersList from '../UsersList/UsersList';

export default (props) => {
    let content;
    switch(props.screen) {
      case 'login' :
        content = <LoginScreen request = {props.server.logIn}
                               logged = {props.logged}
                               name = {props.name}
                               texts = {props.texts}/>
        break;
      case 'register' :
        content = <RegisterScreen request = {props.server.addUser}
                                  texts = {props.texts}
                                  registerSuccess = {props.registerSuccess}/>
        break;
      case 'taskList' :
        content = <TaskList  getData = {props.server.getTasks}
                             addItem = {props.server.addTask}
                             removeItem = {props.server.removeTask}
                             editItem = {props.server.editTask}
                             backToUsersList = {props.backToUsersList}
                             isAdmin = {props.isAdmin}
                             name = {props.name}
                             texts = {props.texts} />
        break;
      case 'usersList' :
        content = <UsersList texts = {props.texts}
                             getData = {props.server.getUsers}
                             removeItem = {props.server.removeUser}
                             showUserTasks = {props.showUserTasks}/>
        break;
      default:
        content = <LoginScreen request = {props.server.logIn}
                               logged = {props.logged}
                               name = {props.name}
                               texts = {props.texts}/>
    }
    return (
      <div className='content'>
        {content}
      </div>

    )
}