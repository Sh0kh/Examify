import { axiosAPI1 } from '../../Service/axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PersonFoto from '../../images/FotoPerson.jpg'

gsap.registerPlugin(ScrollTrigger);

function Result() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIELTS, setIsIELTS] = useState(true);


    const getResult = async () => {
        try {
            const response = await axiosAPI1.get('/ielts/exam/result/top-exam-result/MONTHLY?page=0&size=5');
            setData(response.data.results || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getResult();
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };



    return (
        <section className='Result pb-[50px] mt-[80px]'>
            <div className='Container'>
                <h2 className="text-3xl text-center font-bold text-gray-900">Our Leaderboard</h2>
                <p className="text-gray-600 text-center mt-2">Best results of the last 3 months</p>
                <div className='flex items-center justify-center mt-[24px]'>
                    <div className="flex items-center space-x-3 text-lg font-medium ">
                        <span className={isIELTS ? "text-black font-bold" : "text-gray-500"}>
                            IELTS
                        </span>
                        <div
                            className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${isIELTS ? "bg-blue-500" : "bg-gray-300"
                                }`}
                            onClick={() => setIsIELTS(!isIELTS)}
                        >
                            <div
                                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${isIELTS ? "translate-x-6" : "translate-x-0"
                                    }`}
                            ></div>
                        </div>
                        <span className={!isIELTS ? "text-black font-bold" : "text-gray-500"}>
                            CEFR
                        </span>
                    </div>
                </div>
                <div className='Result__wrapper relative flex items-center flex-col gap-[10px] w-[1000px] mt-[20px] mx-auto'>
                    {loading ? (
                        <div className='flex items-center justify-center h-screen'>
                            <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
                        </div>
                    ) : (
                        <>
                            {data.length > 0 ? (
                                data.map((i, index) => (
                                    <div
                                        key={i.examId} // Use a unique key to avoid duplicates
                                        className='Result__Card bg-[#0A0D120D] w-full px-[24px] py-[16px] rounded-[8px] flex items-center justify-between cursor-pointer transition duration-500 hover:bg-[#0a0d1216]'
                                    >
                                        <div className='flex items-center gap-[5px]'>
                                            <div>
                                                <img className='w-[50px] rounded-[50%] h-50px' src={PersonFoto} alt="foto" />
                                            </div>
                                            <span className='text-[18px] w-[50px]'>{i?.user?.name || "Unknown"}</span>
                                        </div>
                                        <span className='font-semibold text-[#181D27]'>
                                            Score: {i.overall}
                                        </span>
                                        <div className='flex items-center gap-[5px] font-semibold'>
                                            <span >{i.createdAt.split('T')[0]}</span>
                                            <span >
                                                {i.createdAt.slice(11, 16)}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No results found.</p>
                            )}
                        </>
                    )}
                    <div className='Result__over'></div>
                </div>
                <NavLink to={`/rating`}>
                    <button
                        onClick={handleScrollUp}
                        className="mt-10 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mx-auto block"
                    >
                        View all results
                    </button>
                </NavLink>
            </div>
        </section>
    );
}

export default Result;
