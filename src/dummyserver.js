import {tasks} from './data'

export default class {

  name = '';
  token = '';

  login = async () => {

  }


  getUsers = async () => {

  }

  getTasks = async () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve (tasks);
      }, 500);
    });
  }

  addTask = async (title) => {

  }

  removeTask = async (id) => {

  }

  editTask = async (id, newtitle) => {

  }
}