import '../../App.css'
import '../../PhotoPosition.css'
import Paginator20 from './Paginator20'
import Photos from  '../../Photos.jsx'
const Page3_2 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page3</h2>
        <p className='Photo-line'>
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
        < Paginator20/>
      </header>
    </div>
    
  );
}

export default Page3_2;
