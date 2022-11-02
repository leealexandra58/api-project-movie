import React from 'react'
import { HomeFav } from './HomeFav'
import { SearchFav } from './SearchFav'
import './FavoritePage.css'

const FavoritePage = () => {
  return (
    <div>
      <h2>Home Page Favorites</h2>
      <HomeFav></HomeFav>

      <h2>Searched Favorites</h2>
      <SearchFav></SearchFav>
    </div>
  )
}

export default FavoritePage
