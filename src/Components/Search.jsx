import React, {useState} from 'react';

function Search() {
    const [searchText, setSearchText] = useState('');
    // const foundItems = [];

    return (
        <div>
            <h1>Search Bar</h1>  
            <input  
        value={searchText}
        onChange={newText => setSearchText(newText)}></input>
        </div>
      );

}

export default Search;