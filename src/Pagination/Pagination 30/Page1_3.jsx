import '../../App.css'
import '../../PhotoPosition.css'
import Paginator30 from './Paginator30'
import Photos from  '../../Photos.jsx'
const Page1_3 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>
          Galery
        </h1>
        <h2>Page1</h2>
        <h2>Choose num of pictures in the screen</h2>
        <ul>
          <li><a href="/Gallery/10/Page1">10</a></li>
          <li><a href="/Gallery/20/Page1">20</a></li>
          <li><a href="/Gallery/30/Page1">30</a></li>
        </ul>
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
        <Photos Id='200' />
        <Photos Id='210' />
        <Photos Id='220' />
        <Photos Id='230' />
        <Photos Id='240' />
        <Photos Id='250' />
        <Photos Id='260' />
        <Photos Id='270' />
        <Photos Id='280' /> 
        <Photos Id='290' />
        </p>
        < Paginator30/>
      </header>
    </div>
    
  );
}

export default Page1_3;