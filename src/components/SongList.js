import React from 'react'
import SongCard from './SongCard'

function SongList({songs}) {
  return (
    <div>
        {songs.map(song => <SongCard key={song.id} song={song} />) }
    </div>
  )
}

export default SongList