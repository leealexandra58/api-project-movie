import React from 'react'
import { HomeFav } from './HomeFav'
import { SearchFav } from './SearchFav'
import './FavoritePage.css'

const FavoritePage = () => {
  return (
    <div>
      <HomeFav></HomeFav>

      <SearchFav></SearchFav>
    </div>
  )
}

export default FavoritePage
