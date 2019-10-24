import React, {Component} from 'react';
import './TaskList.css'
import {withData} from '../HOC';
import M from 'materialize-css/dist/js/materialize';

class TaskList extends Component {

  editId = 0;

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const texts = this.props.texts.taskList;
    const list = this.props.data.length === 0 ? <div className='no-tasks-hint'>{texts.noTasksHint}</div>
      :this.props.data.map(({id, title}) => {
      return (<div key={id} className='task-list-item'>{title}
        <div>
          <button className='cyan btn waves-effect waves-light modal-trigger'
                  href="#edit-modal"
                  onClick={() => this.editHandler(id, title)}>{texts.btnEdit}
          </button>
          <button className='red btn waves-effect waves-light remove-btn'
                  onClick={() => this.props.removeItem(this.props.name, id)}>{texts.btnDelete}
          </button>
        </div>

      </div>)
    });

    return (
      <div className="task-list">
        {this.props.isAdmin &&  <button className='cyan btn waves-effect waves-light modal-trigger'
                                        style={{ margin: '15px'}}
                                       href="#edit-modal"
                                       onClick={this.props.backToUsersList}>{texts.btnBack}
                                </button>}
        <div className='tasks-header'>{texts.tasksHeaderBefore}{this.props.name}{texts.tasksHeaderAfter}</div>
        {list}
        <div className='add-form'>
          <input type="text" id='add-input' placeholder={texts.addPlaceholder}/>
          <button onClick={this.addItem}
                  className='add-button waves-effect waves-light btn blue darken-2'>{texts.btnAdd}
          </button>
        </div>

        <div id="edit-modal" className="modal">
          <div className="modal-content">
            <h4>Edit task</h4>
            <input type="text" id='edit-input' />
          </div>
          <div className="modal-footer">
            <a  className="modal-close waves-effect waves-green btn-flat" onClick={this.editItem}>{texts.btnEdit}</a>
            <a  className="modal-close waves-effect waves-green btn-flat">{texts.btnCancel}</a>
          </div>
        </div>
      </div>

    )
  }

  editHandler = (id, title) => {
    this.editId = id;
    document.querySelector('#edit-input').value = title;
  }

  addItem = () => {
    const value = document.querySelector('#add-input').value;
    console.log(value);
    if(value.trim() !== '')
      this.props.addItem(this.props.name, value);
  }

  editItem = () => {
    const value = document.querySelector('#edit-input').value;
    if(value.trim() !== '')
      this.props.editItem(this.props.name, this.editId, value);
  }
}

export default withData(TaskList);