import React from "react";
import './App.css'
import './lightbox.css'
import './PhotoPosition.css'
import './PhotoScale.css'

const Photos=(props)=> {
    return (
      <p>     
       <a href={`#img${props.Id}`} className='Photo-scale'>
        <img src={`https://picsum.photos/id/${props.Id}/1500/900`} alt={`Photo  number ${props.Id}`} width="500px" height="300px" />
        </a>
        <a href="#" className='lightbox' id={`img${props.Id}`}>
        <span style={{backgroundImage : 'url(\'https://picsum.photos/id/'+`${props.Id}`+'/1500/900\')'}}></span>
        </a>
        </p>  
  );
}

export default Photos;