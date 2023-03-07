import React from 'react'
import SongCard from './SongCard'

function SongList({songs, ondDeleteSong, onEditSong }) {
  return (
    <div>
        {songs.map(song => <SongCard key={song.id} song={song} ondDeleteSong={ondDeleteSong}/>) }
    </div>
  )
}

export default SongList