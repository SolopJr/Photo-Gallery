import React, { useState } from "react";
import './App.css'
import './RandomPhoto.css'
import './lightbox.css'

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
        
        <a href={`#img${randomId}`}>
        <img src=  {`https://picsum.photos/id/${randomId}/1500/900`} alt="Random Photo" class="img"/>
        </a>

        <a href="#" className='lightbox' id={`img${randomId}`}>
        <span style={{backgroundImage : 'url(\'https://picsum.photos/id/'+`${randomId}`+'/1500/900\')'}}></span>
        </a>

        </div>
        <button onClick={IdGenerator} className='btn'>Get Random Photo</button>
        </div>
  );
}
export default RandomPage;
