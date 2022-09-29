import '../../App.css'
import '../../PhotoPosition.css'
import Paginator20 from './Paginator20'
import Photos from  '../../Photos.jsx'
const Page2_2 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page2</h2>
        <p className='Photo-line'>
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
        < Paginator20/>
      </header>
    </div>
    
  );
}

export default Page2_2;
