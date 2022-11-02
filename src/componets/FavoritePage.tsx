import React from 'react'
import { HomeFav } from './HomeFav'
import { SearchFav } from './SearchFav'
import './FavoritePage.css'
import MovieList from './MovieList'

const FavoritePage = () => {
  return (
    <div>
      <HomeFav></HomeFav>

      <SearchFav></SearchFav>
    </div>
  )
}

export default FavoritePage
