import React, {Component} from 'react';
import './TaskList.css'
import withData from '../../withData';
import M from 'materialize-css/dist/js/materialize';

class TaskList extends Component {

  editId = 0;

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    const list = this.props.data.map(({id, title}) => {
      return (<div key={id} className='task-list-item'>{title}
        <div>
          <button className='cyan btn waves-effect waves-light modal-trigger'
                  href="#edit-modal"
                  onClick={() => this.editHandler(id, title)}>Edit
          </button>
          <button className='red btn waves-effect waves-light remove-btn'
                  onClick={() => this.props.removeItem(id)}>Delete
          </button>
        </div>

      </div>)
    });

    return (
      <div className="task-list">
        {list}
        <div className='add-form'>
          <input type="text" id='add-input' placeholder='Add item'/>
          <button onClick={this.addItem}
                  className='add-button waves-effect waves-light btn blue darken-2'>Add
          </button>
        </div>

        <div id="edit-modal" className="modal">
          <div className="modal-content">
            <h4>Edit task</h4>
            <input type="text" id='edit-input' defaultValue = {this.editTitle} />
          </div>
          <div className="modal-footer">
            <a  className="modal-close waves-effect waves-green btn-flat" onClick={this.editItem}>Edit</a>
            <a  className="modal-close waves-effect waves-green btn-flat">Cancel</a>
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
    if(value.trim() !== '')
      this.props.addItem(value);
  }
  editItem = () => {
    const value = document.querySelector('#edit-input').value;
    if(value.trim() !== '')
      this.props.editItem(this.editId, value);
  }
}

export default withData(TaskList);