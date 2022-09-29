import './App.css'
import './PhotoList.json'
import './PhotoPosition.css'
import './PhotoScale.css'
import './Menu.css'
import './lightbox.css'
import './pagination.css'
import './Photos.jsx'

import Photos from './Photos.jsx'
const TopPage = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <p className='Photo-line'>
        <Photos Id='10' />
        <Photos Id='20' />
        <Photos Id='30' />
        <Photos Id='40' />
        <Photos Id='50' />
        <Photos Id='60' />
        <Photos Id='70' />
        <Photos Id='80' />
        <Photos Id='90' />
        <Photos Id='100' />
        <Photos Id='110' />
        <Photos Id='120' />
        <Photos Id='130' />
        <Photos Id='140' />  
        <Photos Id='151' />
        <Photos Id='170' />
        <Photos Id='180' />
        <Photos Id='190' />
        <Photos Id='200' />
        <Photos Id='210' />
        </p>
      </header>
    </div>
    
  );
}

export default TopPage;
