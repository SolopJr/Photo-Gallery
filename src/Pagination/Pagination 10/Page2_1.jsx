import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'
const Page2_1 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page2</h2>
        <p className='Photo-line'>
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
        < Paginator10/>
      </header>
    </div>
    
  );
}

export default Page2_1;
