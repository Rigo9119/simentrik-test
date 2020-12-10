import React from 'react';
import './SearchBar.css';

const SearchBar = ({ input: word, onChange: setWord }) => {

    return (
        <form className='searchBar' data-testid='searchbar'>
            <input 
                className='searchBar__field' 
                id='search-input' 
                type='text'
                value={word}
                onChange={(event) => {setWord(event.target.value)}}
                placeholder="Buscar ..."/>
        </form>
    );
}

export default SearchBar;
