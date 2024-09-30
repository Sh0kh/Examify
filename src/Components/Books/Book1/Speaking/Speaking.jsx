import React from 'react';
// import Part1 from './Part1/Part1';
import Part2 from './Part2/Part2';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../../Redux/ComponentSlice';
// import Part3 from './Part3/Part3';

function Speaking() {

const dispatch = useDispatch()

const handlNext = ()=>{
    dispatch(setComponent('Writing'))
}
    return (
        <div className='Speaking'>
            <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Speaking exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
                            Leave exam
                        </button>
                        <button
                        onClick={handlNext}
                        className='bg-green-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-green-500 hover:bg-transparent hover:text-green-500'>
                            Next exam
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {/* <Part1 /> */}
                <Part2 />
                {/* <Part3/> */}
            </div>
        </div>
    );
}

export default Speaking;
