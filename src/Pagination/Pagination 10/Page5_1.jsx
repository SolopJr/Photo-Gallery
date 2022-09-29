import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'
const Page5_1 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page5</h2>
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
        </p>
        < Paginator10/>
      </header>
    </div>
    
  );
}

export default Page5_1;
