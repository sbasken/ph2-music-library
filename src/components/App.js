import NavBar from "./NavBar"
import Homepage from "./Homepage"
import { Route, Switch } from "react-router-dom";
import NewForm from "./NewForm";
import About from "./About";
import { useState, useEffect } from "react"

const SongAPI ="http://localhost:3000/Songs";

function App() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

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




  return (
    <div className="app container">
      <div className="app row">
        <NavBar />
      </div>
      <Switch>
         <Route exact path="/">
            <div className="row">
              <Homepage songs={filteredSongs} onSearch={handleSearch} />
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
      </Switch>
    </div>
  );
}

export default App;

