import React, {useState} from 'react';
import names from "./Userlist";

function Search() {
    const [searchText, setSearchText] = useState('');
    const foundNames = names.filter(person => person.includes(searchText));

    return (
        <div>
            <h1>Search Bar</h1>  
            <input  
                type="text"
                value={searchText}
                placeholder="Search..." 
                onChange={e => setSearchText(e.target.value)}></input>
                


            
            <p>Names: {foundNames}</p>

        </div>
      );

}

export default Search;