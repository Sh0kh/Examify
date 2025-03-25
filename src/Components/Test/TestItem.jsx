import React, { useState } from 'react';
import Logo from '../../images/logo.png'
import { FaArrowRight } from "react-icons/fa";

import TestModal from './TestModal';
import { FaExclamationTriangle } from 'react-icons/fa';

function TestItem() {
    const [active, setActive] = useState(false);
    const [notification, setNotification] = useState(null);
    const ActiveModal = () => setActive(true);
    const CloseModal = () => setActive(false);
    const [bookID, setBookID] = useState(null)



    const tests = [
        {
            id: 1,
            title: "Cambridge (Test 1)",
            status: "Available",
            gradient: "bg-gradient-to-r from-pink-500 to-orange-400",
            available: true,
        },
        {
            id: 2,
            title: "Cambridge (Test 1)",
            status: "Available",
            gradient: "bg-gradient-to-r from-cyan-400 to-blue-500",
            available: true,
        },
        {
            id: 3,
            title: "Cambridge (Test 1)",
            status: "Coming soon",
            gradient: "bg-gradient-to-r from-purple-400 to-indigo-400",
            available: false,
        },
        {
            id: 4,
            title: "Cambridge (Test 1)",
            status: "Coming soon",
            gradient: "bg-gradient-to-r from-green-400 to-blue-400",
            available: false,
        },
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
        <section className='Test min-h-screen px-4 py-10'>
            <div className='container'>
                <h1 className="text-3xl font-bold">IELTS</h1>
                <p className="text-gray-600 mt-2">
                    Dear user. The Examify team wishes you good luck and we want you to pass
                    the tests successfully.
                </p>
                <div className='Test__wrapper mt-6'>
                    {tests.map((test, index) => (
                        <div
                            key={index}
                            onClick={() => setBookID(test.id)}
                        >
                            <div
                                onClick={() => handleTestClick(test.available)}
                                className={`p-6 rounded-2xl h-[314px] flex flex-col justify-between text-white ${test.gradient} shadow-lg`}
                            >
                                <h2 className="text-xl font-semibold flex items-center space-x-2">
                                    <div>
                                        <img
                                            src={Logo}
                                            alt="IELTS logo"
                                            className="w-[25px] h-[34px]"
                                        />
                                    </div>
                                    <span>Examify</span>
                                </h2>
                                <div>
                                    <h3 className="text-lg mt-2">{test.title}</h3>

                                    <span
                                        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${test.status === "Available"
                                            ? "bg-white text-black"
                                            : "bg-gray-200 text-gray-600"
                                            }`}
                                    >
                                        {test.status}
                                    </span>

                                    <p className="mt-3 text-sm">
                                        Make sure before taking the exam. "You'll get a 3x trial"
                                    </p>
                                </div>

                                <button
                                    className={`mt-4 flex items-center text-sm font-medium ${test.status === "Available"
                                        ? "text-white"
                                        : "text-gray-400 cursor-not-allowed"
                                        }`}
                                    disabled={test.status !== "Available"}
                                >
                                    Start <FaArrowRight className="ml-2" />
                                </button>
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
            <TestModal isOpen={active} onClose={CloseModal} id={bookID} />
        </section>
    );
}

export default TestItem;
