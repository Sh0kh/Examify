// import axios from 'axios';
import { useState } from 'react';
import MyResultIELTS from '../Components/Result/MyResultIELTS';
import MyResultCEFR from '../Components/Result/MyResultCEFR';

function MyResult() {
  const [show, setShow] = useState(true)


  return (
    <div className='MyResult pt-[30px] pb-[100px] w-full'>
      <div className='container'>
        <h1 className="text-3xl font-bold pb-[10px]">My result</h1>
        <div className='flex items-center gap-[10px] mb-[20px]'>
          <button
            onClick={() => setShow(true)}
            className={` rounded-[5px] border-[2px] border-Color px-[10px] py-[5px] ${show === true ? 'bg-Color text-white' : 'bg-transparent text-Color '}`}>
            IEILTS
          </button>
          <button
            onClick={() => setShow(false)}
            className={` rounded-[5px] border-[2px] border-Color  px-[10px] py-[5px] ${show === false ? 'bg-Color text-white' : 'bg-transparent text-Color'}`}>
            CEFR
          </button>
        </div>
        {show === true ? (<MyResultIELTS />) : (<MyResultCEFR />)}
      </div>
    </div>
  );
}

export default MyResult;