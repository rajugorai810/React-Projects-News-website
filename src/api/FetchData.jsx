import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../Components/card';

const FetchData = (props) => {
    const [data, setData] = useState(null);

    


    const getPost = async()=>{
        let response = await fetch(`https://newsapi.org/v2/everything?q=${props.topic}&pageSize=21&language=en&apiKey=3286b8d54eb44dea9c02ed4316a16c05`);
        let result = await response.json();
        return result;


    } 
    useEffect(()=>{
        getPost().then((posts) => setData(posts.articles));
      })


  return (
    <div>
        <div>
        <div style={{height: "70px"}}> </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {data ? data.map((e)=> <Card title={e.title} image = {e.urlToImage} description= {e.content} url = {e.url}/>) : <p>Data Loading</p>}
      </div>
      
    </div>
      
    </div>
  )
}

export default FetchData;
