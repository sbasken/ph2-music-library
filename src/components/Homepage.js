import React from 'react'
import Search from './Search'
import SongList from './SongList'

function Homepage({onSearch, songs}) {

  return (
    <div> 
        <h1>Your Personal Music Library!</h1>
        <Search onSearch={onSearch}/>
        <SongList songs={songs}/>
    </div>
  )
}

export default Homepage