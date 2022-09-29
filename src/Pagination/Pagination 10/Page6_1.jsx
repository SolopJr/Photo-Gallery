import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'
const Page6_1= () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page6</h2>
        <p className='Photo-line'>
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
        < Paginator10/>
      </header>
    </div>
    
  );
}

export default Page6_1;
