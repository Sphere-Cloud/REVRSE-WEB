import React, { useState} from 'react';

interface QuestionProps {
  title: string;
  content: string;
}

function Question({ title, content }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className='w-full py-6 border-solid border-t border-gray-600'>
      <div className='w-full flex flex-row justify-between'>
        <h2>{title}</h2>
        <button
          className={`text-sky-600 font-bold text-2xl transition-all duration-300 transform hover:scale-105 ${isAnimating ? 'animate-bounce rotate-360' : ''}`}
          onClick={toggle}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div>
          {content}
        </div>
      )}
    </div>
  );
}

export default Question;
