import React from 'react'

function Task2() {
  return (
    <div className='Task2 px-[20px]  mt-[20px]'>
         <div className='p-[20px] border-[2px] border-black w-[100%]'>
            <h2 className='font-bold text-[25px]'> 
                Task 1
            </h2>
            <p>
            The maps below show an industrial area in the town of Norbiton, and planned future development of the site. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.
            </p>
            <p className='mt-[20px]'>
            You should spend about 20 minutes on this task. Write at least 150 words.
            </p>
        </div>
        <textarea className='p-[20px] border-[2px] border-black w-[100%] mt-[20px] resize-none h-[600px]' placeholder='Write your task 1 response. here....'></textarea>
    </div>
  )
}

export default Task2