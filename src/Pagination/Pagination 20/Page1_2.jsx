import '../../App.css'
import '../../PhotoPosition.css'
import Paginator20 from './Paginator20'
import Photos from  '../../Photos.jsx'
const Page1_2 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>
          Gallery
        </h1>
        <h2>Page1</h2>
        <h2>Choose num of pictures in the screen</h2>
        <p className="App-link">
        <ul>
          <li><a href="/Gallery/10/Page1">10</a></li>
          <li><a href="/Gallery/20/Page1">20</a></li>
          <li><a href="/Gallery/30/Page1">30</a></li>
        </ul>
        </p>
        <p className='Photo-line'>
        
        <Photos Id='0' />
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
        <Photos Id='160' />
        <Photos Id='170' />
        <Photos Id='180' />
        <Photos Id='190' />
        </p>
        < Paginator20/>
      </header>
    </div>
    
  );
}

export default Page1_2;