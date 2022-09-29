import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './Menu.jsx'
import TopPage from './TopPage.jsx';
import RandomPage from './RandomPage.jsx';
import  Page1_1 from './Pagination/Pagination 10/Page1_1';
import  Page2_1 from './Pagination/Pagination 10/Page2_1'
import  Page3_1 from './Pagination/Pagination 10/Page3_1'
import  Page4_1 from './Pagination/Pagination 10/Page4_1'
import  Page5_1 from './Pagination/Pagination 10/Page5_1'
import  Page6_1 from './Pagination/Pagination 10/Page6_1'
import  Page1_2 from './Pagination/Pagination 20/Page1_2'
import  Page2_2 from './Pagination/Pagination 20/Page2_2'
import  Page3_2 from './Pagination/Pagination 20/Page3_2'
import  Page1_3 from './Pagination/Pagination 30/Page1_3'
import  Page2_3 from './Pagination/Pagination 30/Page2_3'

const App=(props)=> {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menu/>
          <Routes>
          <Route path = '/Gallery/10/Page1' element={<Page1_1/>} />
          <Route path = '/Gallery/10/Page2' element={<Page2_1/>} />  
          <Route path = '/Gallery/10/Page3' element={<Page3_1/>} />  
          <Route path = '/Gallery/10/Page4' element={<Page4_1/>} />  
          <Route path = '/Gallery/10/Page5' element={<Page5_1/>} />  
          <Route path = '/Gallery/10/Page6' element={<Page6_1/>} />  
          <Route path = '/Gallery/20/Page1' element={<Page1_2/>} />  
          <Route path = '/Gallery/20/Page2' element={<Page2_2/>} />  
          <Route path = '/Gallery/20/Page3' element={<Page3_2/>} />  
          <Route path = '/Gallery/30/Page1' element={<Page1_3/>} />  
          <Route path = '/Gallery/30/Page2' element={<Page2_3/>} />   
          <Route path = '/TopPage' element={<TopPage/>} />  
          <Route path = '/RandomPage' element={<RandomPage/>}/> 
           
          </Routes>
        </header>
      </div>
      
    </BrowserRouter>
  );
}

export default App;