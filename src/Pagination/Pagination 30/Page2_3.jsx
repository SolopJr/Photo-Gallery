import '../../App.css'
import '../../PhotoPosition.css'
import Paginator30 from './Paginator30'
import Photos from  '../../Photos.jsx'
const Page2_3 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page2</h2>
        <p className='Photo-line'>
        <Photos Id='300' />
        <Photos Id='320' />
        <Photos Id='330' />
        <Photos Id='340' />
        <Photos Id='350' />
        <Photos Id='360' />
        <Photos Id='370' />
        <Photos Id='380' />
        <Photos Id='390' />
        <Photos Id='400' />
        <Photos Id='410' />
        <Photos Id='420' />
        <Photos Id='430' />
        <Photos Id='440' />  
        <Photos Id='450' />
        <Photos Id='460' />
        <Photos Id='471' />
        <Photos Id='480' />
        <Photos Id='490' />
        <Photos Id='500' />
        <Photos Id='510' />
        <Photos Id='520' />
        <Photos Id='530' />
        <Photos Id='541' />
        <Photos Id='550' />
        <Photos Id='560' />
        <Photos Id='570' />
        <Photos Id='580' />
        <Photos Id='590' />
        </p>
        < Paginator30/>
      </header>
    </div>
    
  );
}

export default Page2_3;
