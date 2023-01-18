import React from 'react';
import './GoBackButton.scss';
import { Link } from 'react-router-dom';

const GoBackButton = () => {
  return (
    <div className='go-back-button'>
        <Link className='go-back-button__button' to="/">Go back</Link>
    </div>
  )
}

export default GoBackButton