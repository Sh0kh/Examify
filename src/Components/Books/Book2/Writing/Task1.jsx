import React from 'react';
import Foto from './img/image.png';

function Task1({ setAnswer, answer }) {
  // Function to count the words
  const wordCount = answer.trim().split(/\s+/).filter(word => word).length;

  return (
    <div className='Task1 px-[20px] flex gap-[20px]'>
      <div className='p-[20px] border-[2px] border-black w-[50%]'>
        <h2 className='font-bold text-[25px]'>
          Task 1
        </h2>
        <p>
          The diagram below shows the floor plan of a public library 20 years ago and how it looks now.
        </p>
        <p className='mt-[20px]'>
          You should spend about 20 minutes on this task. Write at least 150 words.
        </p>
        <img className='w-[600px] block mx-auto' src={Foto} alt="foto" />
      </div>
      <div className='w-[50%]'>
        <p className=''>
          Word count: {wordCount}
        </p>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className='p-[20px] border-[2px] border-black w-full h-[97%] resize-none'
          placeholder='Write your task 1 response here...'
        />
      </div>
    </div>
  );
}

export default Task1;
