import React from 'react'
import FetchData from '../api/FetchData';

const Home = () => {
  return (
    <div>
      <FetchData topic='general'/>
    </div>
  )
}

export default Home;
