import React from 'react';
import './Presentation.css';
import AboutSubtitle from '../../Generics/AboutSubtitle/AboutSubtitle';
import AboutHeader from '../../Generics/AboutHeader/AboutHeader';
import AboutParagraph from '../../Generics/AboutParagraph/AboutParagraph';

const Presentation = () => {
  return (
    <div className='presentation__container'>
      <AboutHeader/>
      <AboutSubtitle/>
      <AboutParagraph/>
    </div>
      
        

    
  )
}

export default Presentation