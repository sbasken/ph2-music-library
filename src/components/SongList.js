import React from 'react'
import SongCard from './SongCard'

function SongList({songs, ondDeleteSong }) {
  return (
    <div>
        {songs.map(song => <SongCard className="song-container" key={song.id} song={song} ondDeleteSong={ondDeleteSong}/>) }
    </div>
  )
}

export default SongList