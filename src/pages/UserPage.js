import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {AlbumsList} from '../components/AlbumsList'

export const UserPage = () => {
  const userId = useParams().id
  let [user, setUser] = React.useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((response) => response.json())
      .then((user) => {
        {
          setUser(user)
        }
      })
  })

  // console.log(user[0])

  return  <div className="user-page">
            <h1>{user[0] && user[0].name}</h1>
            <AlbumsList userId={userId} />
          </div>
}