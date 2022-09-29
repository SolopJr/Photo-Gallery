import React, { useState } from "react";
import './App.css'
import './RandomPhoto.css'

const RandomPage=()=> {
  
  const [randomId, setRandomId] = useState(0);

  const IdGenerator = () => {
    const randomId = Math.floor(Math.random() * (1000));
    setRandomId(randomId);
  };

  return (
      <div className='container'>
        <h1>Random photo</h1>
        <div className='card'>
        <img src=  {`https://picsum.photos/id/${randomId}/1500/900`} alt="Random Photo" class="img"/>
        </div>
        <button onClick={IdGenerator}>Get Random Photo</button>
        </div>
  );
}
export default RandomPage;
