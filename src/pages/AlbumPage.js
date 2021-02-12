import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {BigPic} from '../components/BigPic'

export const AlbumPage = () => {
  const albumId = useParams().id
  let [photos, setPhotos] = React.useState([])
  let [album, setAlbum] = React.useState([])
  let [bigPic, setBigPic] = React.useState('')
  let [isOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    let cleanupFunction = false;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=5`)
      .then((response) => response.json())
      .then((photos) => {
        {
          if (!cleanupFunction) setPhotos(photos)
        }
      })

    fetch(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`)
      .then((response) => response.json())
      .then((album) => {
        {
          if (!cleanupFunction) setAlbum(album)
        }
      })

    return () => cleanupFunction = true
  })

  const clickPicHandler = async (photoId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photoId}`);
      const result = await response.json();
      setBigPic(result)
      setIsOpen(true)
    } catch (e) {}
  }

  useEffect(() => {
  })

  // console.log(user[0])

  return  <div className="photos-page">
            <h1>{album[0] && album[0].title}</h1>
            <ul className="photos-page__photos-list photos-list">
              {photos.map((photo, index) => {
                return (
                  <li key={index} className="photos-list__item" onClick={() => clickPicHandler(photo.id)}>
                    <a href='#'><img src={photo.thumbnailUrl} alt={photo.title}/>{photo.title}</a>
                  </li>
                )
              })}
            </ul>
              {isOpen && <div className="modal"><BigPic bigPic={bigPic}/><button onClick={() => setIsOpen(false)}>Close modal</button></div>}
          </div>
}

//onClick={(photo.id) => clickPicHandler(photo.id)}