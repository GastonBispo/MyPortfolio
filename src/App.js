import React from 'react';
import './sass/index.scss';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import MyServices from './routes/myServices/MyServices';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/myServices' element={<MyServices/>}/>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    
    
  );
}

export default App;
