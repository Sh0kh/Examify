import React, { useState } from 'react';
import Part1 from './Part1/Part1';
import Part2 from './Part2/Part2';
import Part3 from './Part3/Part3';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../../Redux/ComponentSlice';
import { useNavigate } from 'react-router-dom';

function Speaking() {
    const navigate = useNavigate()
    const [active, setActive] = useState(1); // State to track the active part
    const dispatch = useDispatch();

    const out = () => {
        navigate(-1); 
        setTimeout(() => {
            window.location.reload(); 
        }, 1000); 
    };

    const handleNext = () => {
        dispatch(setComponent('WRITING'));
    };

    return (
        <div className='Speaking'>
            <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Speaking exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button onClick={out} className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
                            Leave exam
                        </button>
                        <button
                            onClick={handleNext}
                            className='bg-green-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-green-500 hover:bg-transparent hover:text-green-500'>
                            Next exam
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {/* Part navigation buttons */}
                <div className='mx-auto w-[1300px]  flex items-center gap-[3px] mt-[5px]'>
                    {[1, 2, 3].map(part => (
                        <button
                            key={part}
                            onClick={() => setActive(part)} // Update active part on click
                            className={`border-[1px] border-[#D6D4D4] px-[10px] py-[7px] font-bold bg-[#ababab83] ${active === part ? 'bg-transparent' : ''}`}>
                            Part {part}
                        </button>
                    ))}
                </div>
                {/* Render the active part component */}
                <div>
                    {active === 1 && <Part1 />}
                    {active === 2 && <Part2 />}
                    {active === 3 && <Part3 />}
                </div>
            </div>
        </div>
    );
}

export default Speaking;
