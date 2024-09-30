import React from 'react'
import Task1 from './Task1'
import Task2 from './Task2'

function Writing() {
    return (
        <div className='Writing'>
            <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Writing exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
                            Finish exam
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-[20px] pb-[50px]'>
                <Task1/>
                <Task2/>
            </div>
        </div>
    )
}

export default Writing