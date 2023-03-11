import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Front =({ song }) => {
  return (
    <div>
      <h4>{song.title}</h4>
      <p>By {song.artist}</p>
      <img src={song.image} id="albumcover"/>
    </div>
  )
}

const Back =({song}) => {
  return(
    <div>
      <h3>Album: {song.album}</h3>
      <p>{song.genre}</p>
      <a href={song.youtube} target="_blank">Youtube Link</a>
    </div>
  )
}

function SongCard({ song, ondDeleteSong }) {
  const [showFront, setShowFront] = useState(true)
  const [ liked, setLiked ] = useState(song.likes)

  const handleDelete = () => {
    fetch(`http://localhost:3000/Songs/${song.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => ondDeleteSong(song.id))
  }
  

  const toggleFront= () => {
    setShowFront (showFront => !showFront)
  }

  const toggleLike = () => {
    const updatedLikes = !liked;
    setLiked(updatedLikes);
    fetch(`http://localhost:3000/Songs/${song.id}`,{
      method: 'PATCH',
      headers: {
        Accept:"application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({likes: updatedLikes})
    })
  }

  return (
    <div id="songcard">
      <div onClick={toggleFront}>
        {showFront ? <Front song={song}/> : <Back song={song} />}
      </div>
      <section>
        <button className="like-button" onClick={toggleLike}>{(liked) ? "❤️" : "♡"}</button>
        <Link 
          to={`/${song.id}/edit`} 
          className="button edit-button"
        >✎
        </Link>
        <button className="delete-button" onClick={handleDelete}>🗑️</button>
      </section>
    </div>
  )
}

export default SongCard