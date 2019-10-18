import React from 'react';

export default () => {
  return (
    <div className='login-screen'>
      <h3>Enter your name and password</h3>
      <input type="text" placeholder='Name'/>
      <input type="password" placeholder='Password'/>
      <button>Submit</button>
    </div>
  )

}