import React from 'react';
import './UsersList.css';
import {withData} from '../HOC';
import crown from './crown.png';

const UsersList = (props) => {
  const texts = props.texts.usersList;
  const list = (props.data.length) === 0 ? <div className='no-users-hint'>{texts.noUsersHint}</div>
    :props.data.map(({name, isAdmin}) => {
      return (
        <div key={name} className='users-list-item'>
          <div className='name-wrapper'>
            <span>{name}</span>
            {isAdmin ? <img src={crown} className='crown-img'/> : null}
          </div>
          <button className='red btn waves-effect waves-light remove-btn'
                  onClick={() => props.removeItem(name)}>{texts.btnDelete}
          </button>
        </div>);
    });

  return (
    <div className="users-list">
      <div className='users-header'>{texts.usersHeader}</div>
      {list}
    </div>

  )
}

export default withData(UsersList);