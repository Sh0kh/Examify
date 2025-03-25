import React from 'react';
import DOMPurify from 'dompurify';

function Part1({ data, onTextChange, value }) {
    return (
        <div className='Readin__wrapper overflow-hidden flex items-start gap-[20px] pt-[10px]'>
            <div className='overflow-y-scroll h-screen  w-[50%] px-[15px] pb-[150px] bg-[white] p-[15px] border-[1px] rounded-[15px]'>
                <strong className='my-[15px] text-[20px] block'>Part 1</strong>
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.questions[0]?.question)
                    }}
                />
            </div>
            <div className='ReadingLine w-full bg-MainColor h-[5px] my-[10px] hidden'></div>
            <div className='overflow-y-scroll h-screen pb-[150px]  w-[50%]'>
                <textarea
                    className='border-[2px] resize-none w-[100%] p-[10px] h-[100%] rounded-[15px]'
                    placeholder='Write...'
                    value={value}
                    onChange={(e) => onTextChange(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Part1;
