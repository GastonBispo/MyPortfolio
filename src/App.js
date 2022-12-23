import React from 'react';
import './index.css';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import MyServices from './routes/myServices/MyServices';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myServices' element={<MyServices/>}/>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
