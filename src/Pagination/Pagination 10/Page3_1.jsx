import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'
const Page3_1 = () => {
  return (
    <div className="App">
      <header className="App-header">

        
        <h1>Top-20 Photos!</h1>
        <h2>Page3</h2>
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
        </p>
        < Paginator10/>
      </header>
    </div>
    
  );
}

export default Page3_1;
