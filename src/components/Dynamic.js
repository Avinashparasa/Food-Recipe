import React, { useState, useEffect } from 'react';


const TypingText = ({ textList, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const currentTextToType = textList[currentTextIndex];

    const typeText = (text, index) => {
      if (index <= text.length) {
        setCurrentText(text.substring(0, index));
        setTimeout(() => typeText(text, index + 1), 100); 
      } else {
        setTimeout(() => {
          setCurrentText('');
          const nextIndex =
            currentTextIndex === textList.length - 1 ? 0 : currentTextIndex + 1;
          setCurrentTextIndex(nextIndex);
        }, interval);
      }
    };

    typeText(currentTextToType, 0);
  }, [currentTextIndex, textList, interval]);

  return (
    <div className="typing-container">
        Passionate about cooking? <br/>Discover the secrets of the kitchen
      <h1>{currentText}</h1>
    </div>
  );
};

export default TypingText;





