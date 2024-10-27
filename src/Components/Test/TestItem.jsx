import React, { useState } from 'react';
import logo from '../../images/Examify_Dark.jpg';
import Bg from '../../images/Cardbg.png';
import TestModal from './TestModal';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing an icon

function TestItem() {
    const [active, setActive] = useState(false);
    const [notification, setNotification] = useState(null);
    const ActiveModal = () => setActive(true);
    const CloseModal = () => setActive(false);

    const tests = [
        { id: 'TEST 1', available: true },
        { id: 'TEST 2', available: false },
        { id: 'TEST 3', available: false },
        { id: 'TEST 4', available: false },
    ];

    const handleTestClick = (available) => {
        if (available) {
            ActiveModal();
            setNotification(null);
        } else {
            setNotification('Coming Soon');
            setTimeout(() => setNotification(null), 2000); // Clear notification after 2 seconds
        }
    };

    return (
        <section className='Test pt-[100px] pb-[50px]'>
            <div className='Container'>
                <h1 className='text-MainColor font-bold text-[55px] cursor-pointer transition-all duration-700 hover:tracking-widest'>
                    Books
                </h1>
                <div className='Test__wrapper'>
                    {tests.map((test, index) => (
                        <div key={index} className='flex flex-col items-center'>
                            <div
                                onClick={() => handleTestClick(test.available)}
                                className='Test__card flex flex-col h-[400px] cursor-pointer p-[20px] bg-MainColor rounded-[8px] transition duration-500 hover:shadow-xl'>
                                <img src={logo} className='w-[100px] cursor-pointer' alt="" />
                                <h2 className='text-[white] text-[50px] mt-[30px] h-[60px]'>
                                    Cambridge
                                </h2>
                                <span
                                    className={`opacity-[0.5] text-[white] text-[30px] ${test.available ? 'text-green-500' : 'text-red-500'}`}>
                                    {test.id}
                                </span>
                                <img className='TestCard1 block mt-[30px]' src={Bg} alt="foto" />
                            </div>
                            <div className={`mt-[10px] text-[30px] ${test.available ? 'text-green-500' : 'text-red-500'}`}>
                                {test.available ? 'Available' : 'Coming Soon'}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Enhanced Notification Component */}
                {notification && (
                    <div className="mt-5 p-4 bg-red-500 text-white rounded-md text-center transition-opacity duration-500 ease-in-out opacity-100">
                        <div className="flex items-center justify-center">
                            <FaExclamationTriangle className="mr-2 text-2xl" /> {/* Icon */}
                            {notification}
                        </div>
                    </div>
                )}
            </div>
            <TestModal isOpen={active} onClose={CloseModal} />
        </section>
    );
}

export default TestItem;
