import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLinesFilled } from "react-icons/tb";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 145) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <TbArrowBigUpLinesFilled/>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
