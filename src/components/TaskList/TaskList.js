import React from 'react';
import './TaskList.css'
import withData from '../../withData';

const TaskList = ({data}) => {
  const list = data.map(({id, title}) => {
    return (<div key={id} className='task-list-item'>{title}</div>)
  });
  return (
    <div className="task-list">
      {list}
    </div>
  )
}

export default withData(TaskList);