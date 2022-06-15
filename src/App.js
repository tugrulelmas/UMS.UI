import './App.css';
import { useEffect, useState } from 'react';
import { getUsers } from './services/userService';

function App() {
  const [users, setUsers] = useState();
  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    })
  }, []);

  return (
    <div className="App">
      {users && <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          )}
        </tbody>
      </table>}
    </div>
  );
}

export default App;
