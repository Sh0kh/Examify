import React from 'react'
import DOMPurify from 'dompurify';


function Part4({ data, selectedAnswers, onAnswerSelect }) {

    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px] pt-[10px]'>
            <div className='overflow-y-scroll h-screen  w-[50%] px-[15px] pb-[150px] border-[1px] rounded-[15px] bg-[white]'>
                <strong className='my-[15px] text-[20px] block'>
                    Part 4
                </strong>
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.description)
                    }}
                />
            </div>
            <div className='ReadingLine w-full bg-MainColor h-[5px] my-[10px] hidden'>

            </div>
            <div className='overflow-y-scroll h-screen pb-[150px] w-[50%] bg-[white] border-[1px] rounded-[15px] p-[15px]'>
                {data?.questions?.map((i, index) => (
                    < div key={index}>
                        <div className="flex items-center mb-[10px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                                {20 + index}
                            </div>
                            <p className="font-bold ">{i?.question}</p>
                        </div>
                        <div className="space-y-2">
                            {i?.answers?.map((answer, aIndex) => (
                                <label key={aIndex} className="block">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        className="mr-2"
                                        value={answer.id}
                                        checked={selectedAnswers[i.id] === answer.id}
                                        onChange={() => onAnswerSelect(i.id, answer.id)}
                                    />
                                    {answer?.answer}
                                </label>
                            ))}
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Part4