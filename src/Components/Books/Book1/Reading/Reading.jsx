import React, {useState} from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../../Redux/ComponentSlice';

function Reading() {
    const [active, setActive] = useState(1);
    const parts = [
        { id: 1, component: <Part1/>},
        { id: 2, component: <Part2/> },
        { id: 3, component: <Part3/> },
    ];

    const dispatch = useDispatch()
    const handleNext = ()=>{
        dispatch(setComponent('Speaking'))
    }
  return (
    <div className='Reading'>
           <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Reading  exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
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
            <div className='px-[5px]'>
            <div className='flex items-center gap-[3px] mt-[5px]'>
                    {parts.map(part => (
                        <button
                            key={part.id}
                            onClick={() => {
                                setActive(part.id);
                            }}
                            className={`border-[1px] border-[#D6D4D4] px-[10px] py-[7px] font-bold bg-[#ababab83] ${active === part.id ? 'bg-transparent' : ''}`}
                        >
                            Part {part.id}
                        </button>
                    ))}
                </div>
                <div>
                    {parts.find(part => part.id === active)?.component}
                </div>
            </div>
    </div>
  )
}

export default Reading