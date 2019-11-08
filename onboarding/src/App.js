import React, { useState, useEffect } from 'react';
import './App.css';
import FormikForm from './Components/Form/UserForm';
import { userInfo } from 'os';

function App() {

  const [users, updateUsers] = useState([])

    const addUser = (user) => {
     const newUser = updateUsers([...users,user])
    }
 

  return (
    <div className="App">
    <FormikForm
    addUser={addUser}
    users={users}
     />
     <div className="output">
       {
         users.map(user => {
           return <div className="user">
             <p className='user-name'>{user.name}</p>
             <p className='user-email'>{user.email}</p>
             <p>{user.password = '******'}</p>
           </div>
         })
       }
     </div>
    </div>
  );
}

export default App;
