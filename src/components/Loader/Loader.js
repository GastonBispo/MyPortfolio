import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='loader__container'>
        <h2 className='loader-h2'>Loading</h2>
        <div class='loader-ring'>
            <div class='loader-ring-light'></div>
            <div class='loader-ring-track'></div>
        </div>
    </div>
  )
}

export default Loader