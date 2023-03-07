import React, {useState} from 'react'

function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] =useState('title');
    

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(searchBy, e.target.value);
    }

    const handleSearchByChange = (e) => {
        setSearchBy(e.target.value);
        onSearch(e.target.value, searchTerm);
    }
    


  return (
    <div id="searchelements">
        <div id='Searchterm'>
        <select value={searchBy} onChange={handleSearchByChange}>
            <option value='title'>Title</option>
            <option value='artist'>artist</option>
            <option value='album'>album</option>
            <option value='genre'>genre</option>
        </select>
        </div>
        <div id="search">
        <input value={searchTerm} placeholder="search music here"onChange={handleSearchTermChange}></input>
        </div>
    </div>
  )
}

export default Search