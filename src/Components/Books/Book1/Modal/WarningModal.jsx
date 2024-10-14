import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { playAudio } from '../../../../Redux/audioSlice';

function WarningModal() {
    const dispatch = useDispatch();
    const [expired, setExpired] = useState(false);



    const Start = () => {
        setExpired(true);
        dispatch(playAudio());
    };

    return (
        <div className={`fixed bg-[#000000b0] inset-0 flex items-center justify-center ${expired ? 'hidden' : ''}`}>
            <div>
                <div className='warningModal bg-[white] p-[10px] w-[500px] rounded-[8px]'>
                    <p className='text-[black]'>
                        Please be aware that if you exit full screen mode or switch to another tab during the exam, you will be automatically terminated from the exam. Stay focused and make sure to keep your full attention on the exam to avoid any disruptions. Good luck! 📚🚫🚷
                    </p>
                    <button onClick={Start} className='w-full px-[20px] py-[10px] bg-green-500 rounded-[8px] text-white mt-[10px]'>
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WarningModal;
