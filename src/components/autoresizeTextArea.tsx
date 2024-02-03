import React, { useRef } from 'react';

const AutoResizeTextarea = () => {
  const textareaRef = useRef(null);

//   const autoresize = () => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = 'auto';
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
//   };

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="custom-textarea" className="block text-sm font-medium text-gray-600 mb-1">
        Digite algo:
      </label>
      <div className="autoresize">
        <textarea
          id="custom-textarea"
          ref={textareaRef}
          className="border-none focus:outline-none bg-transparent w-full p-2"
          placeholder="Digite aqui..."
        //   onInput={autoresize}
        />
      </div>
    </div>
  );
};

export default AutoResizeTextarea;
