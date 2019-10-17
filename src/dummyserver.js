let tasks = [
  {id: 0, title: 'Drink coffee'},
  {id: 1, title: 'Create TODO-list'},
  {id: 2, title: 'Drink more coffee'},
  {id: 3, title: 'Refactor TODO-list'}
];

let maxId = 3;
let serverDelay = 500;

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
      }, serverDelay);
    });
  }

  addTask = async (title) => {
    return new Promise( (resolve) => {
      maxId++;
      tasks.push({id: maxId, title: title})
      setTimeout(() => {
        resolve ();
      }, serverDelay);
    });
  }

  removeTask = async (id) => {
    return new Promise( (resolve) => {
      tasks = tasks.filter((task) => {
        return task.id !== id;
      })
      setTimeout(() => {
        resolve ();
      }, serverDelay);
    });
  }

  editTask = async (id, newtitle) => {

  }
}