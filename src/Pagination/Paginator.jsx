import React from 'react';
import './pagination.css';
import './App.css'

const Paginator=() => {
    return(
    <div className="App">
    <header className="App-header">
    <body>
    <link rel="stylesheet" href="./pagination.css"  media="all"/>
      <div className="pagination">

        <a href="/Galery/Page1">1</a>
        <a href="/Galery/Page2">2</a>
        <a href="/Galery/Page3">3</a>
        <a href="/Galery/Page4">4</a>
        <a href="/Galery/Page5">5</a>
        <a href="/Galery/Page6">6</a>
      </div>
      </body>
      </header>
      </div>)
};

export default Paginator;