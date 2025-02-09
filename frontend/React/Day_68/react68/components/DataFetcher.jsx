import React, { useState } from 'react'
import { useEffect } from 'react';

const DataFetcher = () => {
   const [loading,setLoading]=useState(true);
   const [data,setData]=useState([]);

   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(data=>{
        setData(data);
        setLoading(false);
    });
   },[]);
  
  return (
    <div>
      {loading?(
        <h1>Loading...</h1>
      ):
      (
        <ul>
          {/* {data.map(posts=>{
            <li key={posts.id}>{posts.title}</li>
          })} */}
          <p>AA gaya data</p>
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
