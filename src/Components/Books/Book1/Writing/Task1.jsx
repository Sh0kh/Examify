import React from 'react'
import Foto from './img/photo_2024-09-30_17-06-56.jpg'
function Task1({setAnswer, answer}) {
  return (
    <div className='Task1 px-[20px] flex gap-[20px]'>
        <div className='p-[20px] border-[2px] border-black w-[50%]'>
            <h2 className='font-bold text-[25px]'> 
                Task 1
            </h2>
            <p>
            The maps below show an industrial area in the town of Norbiton, and planned future development of the site. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
            </p>
            <p className='mt-[20px]'>
            You should spend about 20 minutes on this task. Write at least 150 words.
            </p>
            <img className='w-[600px] block mx-auto' src={Foto} alt="foto" />
        </div>
        <textarea 
        value={answer}
        onChange={(e)=> setAnswer(e.target.value)}
        className='p-[20px] border-[2px] border-black w-[50%] resize-none' placeholder='Write your task 1 response. here....'></textarea>
    </div>
  )
}

export default Task1