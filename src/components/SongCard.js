import React,{useState} from 'react'
const Front =({ song }) => {
  return (
    <div>
      <h2>Song: {song.title}</h2>
      <h3>Artist: {song.artist}</h3>
      <img src={song.image} id="albumcover"/>
    </div>
  )
}

const Back =({song}) => {
  return(
    <div>
  <h2>Album:{song.album}</h2>
  <h3>{song.genre}</h3>
  <a href={song.youtube}>youtube Link</a>
  </div>
  )
}

function SongCard({song}) {
  const [showFront, setShowFront] = useState(true)
  const [ liked, setLiked ] = useState(song.likes)
  

  const toggleFront= () => {
    setShowFront (showFront => !showFront)
  }

  const toggleLike = () => {
    const updatedLikes = !liked;
    console.log(updatedLikes)
    setLiked (updatedLikes);
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
    <div>
      <div onClick={toggleFront} id="songcard">
        {showFront ? <Front song={song}/> : <Back song={song} />}
      </div>
      <button class="like-button" onClick={toggleLike}>{(liked) ? "❤️" : "♡"}</button>
      </div>
  )
}

export default SongCard