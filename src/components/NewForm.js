import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function NewForm({ onAddSong }) {
  const [ formData, setFormData ] = useState({
    title: "",
    artist: "",
    image: "",
    album: "",
    genre: "",
    likes: false,
    youtube: "",
  })

  const { title, artist, image, album, genre, youtube } = formData

  const history = useHistory()

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/Songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newSong => onAddSong(newSong))
      history.push('/')
  }

  return (
    <section className="form">
        <form onSubmit={(e)=>handleSubmit(e)}>
          <h1> Add New Song</h1>

            <label>Title:</label>
            <input 
              className="form col"
              type="text"
              id="title"
              placeholder="Title..."
              name="title"
              value={title}
              onChange={handleChange}
            />
            <label>Artist:</label>
            <input 
              className="form col"
              type="text"
              id="artist"
              placeholder="Artist..."
              name="artist"
              value={artist}
              onChange={handleChange}
            />
            <label>Image:</label>
            <input 
              className="form col"
              type="text"
              id="image"
              placeholder="Image..."
              name="image"
              value={image}
              onChange={handleChange}
            />
            <label>Album:</label>
            <input 
              className="form col"
              type="text"
              id="album"
              placeholder="Album..."
              name="album"
              value={album}
              onChange={handleChange}
            />
            <label>Genre:</label>
            <input 
              className="form col"
              type="text"
              id="genre"
              placeholder="Genre..."
              name="genre"
              value={genre}
              onChange={handleChange}
            />
            <label>Youtube Link:</label>
            <input 
              className="form col"
              type="text"
              id="youtube"
              placeholder="Youtube link..."
              name="youtube"
              value={youtube}
              onChange={handleChange}
            />
          <br></br>
          <button type="submit" className="btn btn-primary btn-customized mt-4">Add Song</button>
        </form>
    </section>
  )
}

export default NewForm