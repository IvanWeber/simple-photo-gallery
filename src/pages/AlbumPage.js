import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const AlbumPage = () => {
  const albumId = useParams().id
  let [photos, setPhotos] = React.useState([])
  let [album, setAlbum] = React.useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photos) => {
        {
          setPhotos(photos)
        }
      })
  })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`)
      .then((response) => response.json())
      .then((album) => {
        {
          setAlbum(album)
        }
      })
  })

  // console.log(user[0])

  return  <div className="photos-page">
            <h1>{album[0] && album[0].title}</h1>
            <ul className="photos-page__photos-list photos-list">
              {photos.map((photo, index) => {
                return (
                  <li key={index} className="photos-list__item">
                    <a href='#'><img src={photo.thumbnailUrl} alt={photo.title}/>{photo.title}</a>
                  </li>
                )
              })}
            </ul>
            
          </div>
}
