import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function EditSong({ onUpdateSong }) {
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

  const { id } = useParams()

  const history = useHistory()

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData({ 
      ...formData, 
      [key]: value
    })
  }

  useEffect(() => {
    fetch(`http://localhost:3000/Songs/${id}`)
        .then(res => res.json())
        .then(setFormData)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/Songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedSong => onUpdateSong(updatedSong))
    history.push('/')
  }

  return (
    <section className="form">
        <form onSubmit={handleSubmit}>
          <h1>Edit Song</h1>

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
          <button type="submit" className="btn btn-primary btn-customized mt-4">Update Song</button>
        </form>
    </section>
  )
}

export default EditSong