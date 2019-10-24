import Server from './server';

export default class {

  constructor () {

    this.server = new Server();
  }
  name = '';
  token = '';

  getUsers = async () => {
    return await this.server.request('getUsers', {name: this.name, token: this.token});
  }

  addUser = async (name, password) => {
    if(password === '')
      return await this.server.request('checkUser', {userName : name});
    return await this.server.request('addUser', {name, password});
  }

  removeUser = async (userName) => {
    return await this.server.request('removeUser', {name: this.name, token: this.token, userName});
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

  getTasks = async (userName) => {
    return await this.server.request('getTasks', {name: this.name, token: this.token, userName});
  }

  addTask = async (userName, title) => {
    return await this.server.request('addTask', {name: this.name, title, token: this.token, userName});
  }

  removeTask = async (userName, id) => {
    return await this.server.request('removeTask', {name: this.name, id, token: this.token, userName});
  }

  editTask = async (userName, id, title) => {
    return await this.server.request('editTask', {name: this.name, id, title, token: this.token, userName});
  }
}