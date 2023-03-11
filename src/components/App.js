import NavBar from "./NavBar"
import Homepage from "./Homepage"
import { Route, Switch } from "react-router-dom";
import NewForm from "./NewForm";
import About from "./About";
import { useState, useEffect } from "react"
import EditSong from "./EditSong"
import 'bootstrap/dist/css/bootstrap.min.css'


const SongAPI ="http://localhost:3000/Songs";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [sort, setSort] =useState('')

  const updateSong = (updatedSong) => {
    const updatedSongs = songs.map(song => {
      if (song.id === updatedSong.id) {
        return updatedSong;
      } else {
        return song
      }
    })
    setSongs(updatedSongs)  }
  

  const deleteSong = (id) => {
    const updatedSongs = songs.filter(song => song.id !== id)
    setSongs(updatedSongs)
  }

  const addSong = (newSong) => {
    const updatedSongs = [...songs, newSong]
    setSongs(updatedSongs)
  }

  useEffect(()=> {
    fetch(SongAPI)
    .then(res => res.json())
    .then(setSongs);
  }, [])

  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs]);

  const handleSearch = (searchBy, searchTerm) => {
    const filteredSongs = songs.filter(song => {
      if(searchBy ==="title") {
        return song.title.toLowerCase().includes(searchTerm.toLowerCase());
      } else if(searchBy === 'artist') {
        return song.artist.toLowerCase().includes(searchTerm.toLowerCase());
      } else if(searchBy === 'album') {
        return song.album.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchBy === 'genre') {
        return song.genre.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    });
    setFilteredSongs(filteredSongs);
  }

const categorySelected = (e) => {
  setSort(e.target.value)
} 

const byTitleorArtist =(songA, songB) => {
  switch( sort ) {
    case 'title' :
    if (songA.title < songB.title) {
      return -1
    } else {
      return 1
    }
    case 'artist' :
      if (songA.artist < songB.artist) {
        return -1
      } else{
        return 1
      }
  }
}

const sortSongs = [...filteredSongs].sort(byTitleorArtist)


  return (
    <div className="app container">
      <div className="app">
        <NavBar />
      </div>
      <Switch>
         <Route exact path="/">
            <div className="row">
              <Homepage 
                songs={sortSongs} 
                onSearch={handleSearch} 
                ondDeleteSong={deleteSong}
                onCategorySelected={categorySelected}
              />
            </div>
         </Route>
         <Route path="/newform">
            <div className="row">
              <NewForm onAddSong={addSong}/>
            </div>
         </Route>
         <Route path="/about">
            <div className="row">
              <About />
            </div>
         </Route>
         <Route path="/:id/edit">
            <div className="row">
              <EditSong onUpdateSong={updateSong}/>
            </div>
         </Route>
      </Switch>
    </div>
  );
}

export default App;

