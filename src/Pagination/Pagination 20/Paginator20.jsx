import React from 'react';
import '../../pagination.css';
import '../../App.css'

const Paginator=() => {
    return(
    <div className="App">
    <header className="App-header">
    <body>
    <link rel="stylesheet" href="./pagination.css"  media="all"/>
      <div className="pagination">
        <a href="/Gallery/20/Page1">1</a>
        <a href="/Gallery/20/Page2">2</a>
        <a href="/Gallery/20/Page3">3</a>
      </div>
      </body>
      </header>
      </div>)
};

export default Paginator;