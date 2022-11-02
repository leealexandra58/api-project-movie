import React from 'react'
import { HomeFav } from './HomeFav'
import { SearchFav } from './SearchFav'
import './FavoritePage.css'

const FavoritePage = () => {
  return (
    <div>
      <h2>Favorites</h2>
      <div className='favorites'>
        <HomeFav></HomeFav>

        <SearchFav></SearchFav>
      </div>

    </div>
  )
}

export default FavoritePage
