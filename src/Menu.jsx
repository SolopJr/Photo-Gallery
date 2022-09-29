import React from 'react';
import './Menu.css';
import './App.css';
import './TopPage.jsx'
import './RandomPage.jsx'

const Menu = () => {
    return(
    <div className="App">
        <header className="App-header">
          <link rel="stylesheet" href="./Menu.css"  media="all"/>
          <nav className="menu">
          <ul>
          <li><a href="/Gallery/10/Page1">Gallery</a></li>
          <li><a href="/TopPage">Top-20 Galerry</a></li>
          <li><a href="/RandomPage">Random Photo</a></li>
          </ul>
          </nav>
    </header>
        </div>
)
};

export default Menu;