import React from 'react'
import Search from './Search'
import SongList from './SongList'

function Homepage({onSearch, songs, ondDeleteSong, onCategorySelected }) {

  return (
    <div> 
        <h1>Your Personal Music Library!</h1>
        <Search onSearch={onSearch} onCategorySelected={onCategorySelected}/>
        <SongList songs={songs} ondDeleteSong={ondDeleteSong}/>
    </div>
  )
}

export default Homepage