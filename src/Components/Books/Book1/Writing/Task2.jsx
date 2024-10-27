import React from 'react'

function Task2({setAnswer, answer}) {
    const wordCount = answer.trim().split(/\s+/).filter(word => word).length;
    return (
        <div className='Task2 px-[20px]  mt-[20px]'>
            <div className='p-[20px] border-[2px] border-black w-[100%]'>
                <h2 className='font-bold text-[25px]'>
                    Task 1
                </h2>
                <p>
                    Some people think technology development decreases crime, while others believe it actually
                    encourages crime. Discuss both views and give your own opinion.
                </p>
                <p className='mt-[20px]'>
                    You should spend about 20 minutes on this task. Write at least 150 words.
                </p>
            </div>
            <p className='mt-[20px  ]'>
                Word count: {wordCount}
            </p>
            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className='p-[20px] border-[2px] border-black w-[100%] mt-[20px] resize-none h-[600px]'
                placeholder='Write your task 1 response. here....'></textarea>
        </div>
    )
}

export default Task2