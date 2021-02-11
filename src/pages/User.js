import React from 'react'
import {useParams} from 'react-router-dom'
import {AlbumsList} from '../components/AlbumsList'

export const User = () => {
  const userId = useParams().id

  return  <AlbumsList userId={userId} />
}
