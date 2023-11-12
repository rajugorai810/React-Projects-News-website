import React from 'react';
import FetchData from '../api/FetchData';

const Search = (props) => {
  return (
    <div>
        <FetchData topic={props}/>
      
    </div>
  )
}

export default Search;
