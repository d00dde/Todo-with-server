import Server from './server';

export default class {

  constructor () {

    this.server = new Server;
  }
  name = '';
  token = '';

  getUsers = async () => {
    return await this.server.request('getUsers', {name: this.name, token: this.token});
  }

  addUser = async (name, password) => {
    if(password === '')
      return await this.server.request('checkUser', {name});
    return await this.server.request('addUser', {name, password});
  }

  removeUser = async (name) => {

  }

  editUser = async (name, password) => {

  }

  logIn = async (name, password) => {
    const {isLogIn, isAdmin, token, reason} = await this.server.request('login', {name, password});
    if(isLogIn)
      this.name = name;
      this.token = token;
    return {isLogIn, isAdmin, reason};
  }

  logOut = async () => {
    const response = await this.server.request('logOut', {name: this.name, token: this.token});
    if(response.sessionEnded){
      this.name = '';
      this.token = '';
    }
    return;
  }

  getTasks = async (name) => {
    return await this.server.request('getTasks', {name, token: this.token});
  }

  addTask = async (name, title) => {
    return await this.server.request('addTask', {name, title, token: this.token});
  }

  removeTask = async (name, id) => {
    return await this.server.request('removeTask', {name, id, token: this.token});
  }

  editTask = async (name, id, title) => {
    return await this.server.request('editTask', {name, id, title, token: this.token});
  }
}