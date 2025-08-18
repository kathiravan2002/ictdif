import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 group right-5 bg-[#262341] p-3 cursor-pointer rounded-full shadow-lg hover:bg-white border-2 border-white hover:border-[#262341]  transition duration-300 z-50"
      aria-label="Scroll to Top"
    >
      <FaRegArrowAltCircleUp className="w-6 h-6  text-white group-hover:text-[#262341] duration-300" />
    </button>
  );
};

export default ScrollToTopButton;
