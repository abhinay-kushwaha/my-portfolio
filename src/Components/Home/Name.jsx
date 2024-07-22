// Name.jsx
import React, { useState, useEffect, useCallback } from 'react';

// TypingAnimation component definition
const TypingAnimation = ({ className, text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  // Callback to reset the typing animation
  const resetTyping = useCallback(() => {
    setDisplayedText('');
    setIndex(0);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Adjust the typing speed here
      return () => clearTimeout(timer);
    } else {
      // Restart animation after a short delay
      const resetTimer = setTimeout(resetTyping, 1000); // Adjust delay before restarting animation
      return () => clearTimeout(resetTimer);
    }
  }, [index, text, resetTyping]);

  return <div className={className}>{displayedText}</div>;
};

// Name component definition
const Name = () => {
  return (
    <TypingAnimation
      className="text-5xl font-bold text-black dark:text-white"
      text="Abhinay Kushwaha"
    />
  );
};

export default Name;
