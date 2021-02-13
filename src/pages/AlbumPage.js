import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {BigPic} from '../components/BigPic'
import {Link} from 'react-router-dom'

export const AlbumPage = () => {
  const albumId = useParams().id
  let [photos, setPhotos] = React.useState([])
  let [album, setAlbum] = React.useState([])
  let [photo, setPhoto] = React.useState('')
  let [isOpen, setIsOpen] = React.useState(false)
  let [limit, setLimit] = React.useState(5)
  let [isShowMoreHidden, setIsShowMoreHidden] = React.useState(false)
  let [photosLength, setPhotosLength] = React.useState(0)

  useEffect(() => {
    let cleanupFunction = false;

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((photos) => {
        {
          if (!cleanupFunction) setPhotosLength(photos.length)
        }
      })

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_limit=${limit}`)
      .then((response) => response.json())
      .then((photos) => {
        {
          if (!cleanupFunction) setPhotos(photos)
          if (!cleanupFunction && limit >= photosLength) {
            setIsShowMoreHidden(true)
          } 
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
      setPhoto(result)
      setIsOpen(true)
    } catch (e) {}
  }

  const clickLeftHandler = async (photos, photo) => {
    try {
      if (photo[0].id === 1) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photos.length}`);
        const result = await response.json();
        setPhoto(result)
      } else {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photo[0].id - 1}`);
        const result = await response.json();
        setPhoto(result)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const clickRightHandler = async (photos, photo) => {
    try {
      if (photo[0].id === photos.length) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photos[0].id}`);
        const result = await response.json();
        setPhoto(result)
      } else {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${photo[0].id + 1}`);
        const result = await response.json();
        setPhoto(result)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const clickShowMoreHandler = async () => {
      setLimit(limit + 5)
  }

  useEffect(() => {
  })

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
              {isOpen && <div className="modal"><BigPic photo={photo}/><button onClick={() => setIsOpen(false)}>Close modal</button><button onClick={() => clickLeftHandler(photos, photo)}>Left</button><button onClick={() => clickRightHandler(photos, photo)}>Right</button></div>}
              <button onClick={() => clickShowMoreHandler(photos, photo)} className={isShowMoreHidden ? 'hidden' : ''}>Загрузить ещё</button>
              <Link to={`/user/${album[0] && album[0].userId}`}>Вернуться на страницу списка альбомов пользователя</Link>
          </div>
}

//onClick={(photo.id) => clickPicHandler(photo.id)}