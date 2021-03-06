import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

export const UsersPage = () => {
  let [users, setUsers] = React.useState([])

  useEffect(() => {
    let cleanupFunction = false;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        {
          if (!cleanupFunction) setUsers(users)
        }
      })
    return () => cleanupFunction = true
  })

  return  <div className="users-page">
            <h1>Пользователи галереи</h1>
            <ul className="users-page__users-list users-list">
              {users.map((user, index) => {
                return (
                  <li key={index} className="users-list__item">
                    <Link to={`/user/${user.id}`} className="users-page__name-link">{user.name}</Link>
                    <div className="separator"></div>
                  </li>
                )
              })}
            </ul>
            
          </div>
}
