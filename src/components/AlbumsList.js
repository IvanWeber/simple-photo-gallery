import React, { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'

export const AlbumsList = ({userId}) => {
  let [albums, setAlbums] = React.useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((albums) => {
        {
          setAlbums(albums)
        }
      })
  })

  return  <ul className="user-page__albums-list albums-list">
            {albums.map((album, index) => {
              return (
                <li key={index} className="albums-list__item">
                  <Link to={`/albums/${album.id}`}>{album.title}</Link>
                </li>
              )
            })}
          </ul>
            
}
