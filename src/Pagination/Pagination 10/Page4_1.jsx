import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'
const Page4_1 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>\
        <h2>Page4</h2>
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
        </p>
        < Paginator10/>
      </header>
    </div>
    
  );
}

export default Page4_1;
