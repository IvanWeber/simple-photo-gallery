import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

export const Users = () => {
  let [users, setUsers] = React.useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then((response) => response.json())
      .then((users) => {
        {
          setUsers(users)
        }
      })
  })

  return  <div className="users-page">
            <h1>UsersPage</h1>
            <ul className="users-page__users-list users-list">
              {users.map((user, index) => {
                return (
                  <li key={index} className="users-list__item">
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </li>
                )
              })}
            </ul>
            
          </div>
}
