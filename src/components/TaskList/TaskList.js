import React, {Component} from 'react';
import './TaskList.css'
import withData from '../../withData';

class TaskList extends Component {

  render() {
    const list = this.props.data.map(({id, title}) => {
      return (<div key={id} className='task-list-item'>{title}
        <button className='red remove-btn' onClick={() => this.props.removeItem(id)}>X</button>
      </div>)
    });

    return (
      <div className="task-list">
        {list}
        <input type="text" className='add-input'/>
        <button onClick={this.addButtonClick}>Add</button>
      </div>

    )
  }

  addButtonClick = () => {
    const input = document.querySelector('.add-input');
    this.props.addItem(input.value);
  }
}

export default withData(TaskList);