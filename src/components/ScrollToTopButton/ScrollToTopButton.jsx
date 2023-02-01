import React, { useCallback } from 'react';
import './ScrollToTopButton.scss';
import { RxDoubleArrowUp } from 'react-icons/rx';

const ScrollToTopButton = () => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button className="scroll-to-top-button" onClick={handleClick}>
      <RxDoubleArrowUp/>
    </button>
  );
};

export default ScrollToTopButton;
