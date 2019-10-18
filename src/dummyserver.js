
const users = [
  { id: 0,
    name: 'admin',
    password: 'admin',
    isAdmin: true,
    tasks: [
      {id: 0, title: 'Drink coffee'},
      {id: 1, title: 'Create TODO-list'},
      {id: 2, title: 'Drink more coffee'},
      {id: 3, title: 'Refactor TODO-list'}
    ],
    maxId: 3,
  }
];

let maxId = 0;
let serverDelay = 500;

export default class {

  name = 'admin';
  token = '';

  addUser = async (name, password) => {

  }

  removeUser = async (name) => {

  }

  editUser = async (name, password) => {

  }

  login = async (name, password) => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        this.name = name;
        const user = users.find((user) => user.name === name);
        if(user) {
          if(user.password === password) {
            if(user.admin) {
              resolve ({logged: true, admin: true, msg: ''});
              return;
            }
            resolve ({logged: true, admin: false, msg: ''});
            return;
          }
          resolve ({logged: false, admin: false, msg: 'Password incorrect'});
          return;
        }
        resolve ({logged: false, admin: false, msg: 'Name incorrect'});
        return;

      }, serverDelay);
    });
  }


  getUsers = async () => {

  }

  getTasks = async () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        resolve (users.find((user) => user.name === this.name).tasks);
      }, serverDelay);
    });
  }

  addTask = async (title) => {
    return new Promise( (resolve) => {
      const user = users.find((user) => user.name === this.name);
      user.maxId++;
      user.tasks.push({id: user.maxId, title: title})
      setTimeout(() => {
        resolve ();
      }, serverDelay);
    });
  }

  removeTask = async (id) => {
    return new Promise( (resolve) => {
      const user = users.find((user) => user.name === this.name);
      user.tasks = user.tasks.filter((task) => {
        return task.id !== id;
      })
      setTimeout(() => {
        resolve ();
      }, serverDelay);
    });
  }

  editTask = async (id, newTitle) => {
    return new Promise( (resolve) => {
      const user = users.find((user) => user.name === this.name);
      user.tasks.find((task) => task.id === id).title = newTitle;
      setTimeout(() => {
        resolve ();
      }, serverDelay);
    });
  }
}