
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
  },
  {
    id: 1,
    name: 'littel',
    password: '8361035',
    isAdmin: false,
    tasks: [
      {id: 0, title: 'Drink coffee'},
      {id: 1, title: 'Feed the cat'},
      {id: 2, title: 'Drink beer'},
      {id: 3, title: 'Kill all \'polovtsev\''}
    ],
    maxId: 3,
  }
];

let maxId = 1;
const serverDelay = 500;

export default class {

  name = '';
  token = '';

  addUser = async (name, password) => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        const user = users.find((user) => user.name === name);
        if(!user) {
          if (password === '') {
            resolve({isFree: true, register: false});
            return;
          }
          users.push({
            id: ++maxId,
            name: name,
            password: password,
            isAdmin: false,
            tasks: [],
            maxId: 0,
          });
          resolve({isFree: true, register: true});
          return;
        }
        resolve({isFree: false, register: false});

      }, serverDelay);
    });
  }

  removeUser = async (name) => {

  }

  editUser = async (name, password) => {

  }

  logIn = async (name, password) => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        this.name = name;
        const user = users.find((user) => user.name === name);

        if(user) {
          if(user.password === password) {
            if(user.isAdmin) {
              resolve ({isLogIn: true, isAdmin: true, error: ''});
              return;
            }
            resolve ({isLogIn: true, isAdmin: false, error: ''});
            return;
          }
          resolve ({isLogIn: false, isAdmin: false, error: 'password'});
          return;
        }
        resolve ({isLogIn: false, isAdmin: false, error: 'name' });
        return;

      }, serverDelay);
    });
  }


  getUsers = async () => {

  }

  getTasks = async () => {
    return new Promise( (resolve) => {
      setTimeout(() => {
        const user = users.find((user) => user.name === this.name);
        const tasks = user ? user.tasks : [];
        resolve (tasks);
      }, serverDelay);
    });
  }

  addTask = async (title) => {
    return new Promise( (resolve) => {
      const user = users.find((user) => user.name === this.name);
      user.maxId++;
      user.tasks.push({id: user.maxId, title: title});
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