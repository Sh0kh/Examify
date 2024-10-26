import React, { useState, useEffect } from 'react';
import foto from '../../images/photo_2024-09-30_17-06-56.jpg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

function Writing() {
    const { ID } = useParams();
    const [active, setActive] = useState(1);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getWriting = async () => {
            try {
                const response = await axios.get(`/ielts/exam/result/get-results-outline-writing/${ID}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setData(response.data.answers);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getWriting();
    }, [ID]);

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    // Если данных нет, вывести сообщение "Ничего нет"
    if (!data || data.length === 0) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <h1 className='text-[25px] font-bold'>No result</h1>
            </div>
        );
    }

    return (
        <div className='Listening pt-[130px]'>
            <div className='Container'>
                <h1 className='font-bold text-[40px] text-center'>
                    Your writing result
                </h1>
                <h2 className='text-center text-[25px]'>
                    Your answer
                </h2>
                <div className=''>
                    <div className='flex items-center justify-between gap-[10px] mt-[20px] mb-[20px]'>
                        <button
                            className={`w-full py-[5px] ${
                                active === 1 ? 'bg-MainColor text-white' : 'bg-white'
                            } border-[2px] border-MainColor rounded-[8px]`}
                            onClick={() => setActive(1)}
                        >
                            Task 1
                        </button>
                        <button
                            className={`w-full py-[5px] ${
                                active === 2 ? 'bg-MainColor text-white' : 'bg-white'
                            } border-[2px] border-MainColor rounded-[8px]`}
                            onClick={() => setActive(2)}
                        >
                            Task 2
                        </button>
                    </div>

                    {active === 1 && data[0] && (
                        <div className='border-[2px] border-MainColor rounded-[8px] p-[20px] mb-[100px]'>
                            <h1 className='text-[25px] font-bold'>Writing score: {data[0].taskBandScore}</h1>
                            <div className='writing__wrapper flex items-center justify-between mt-[20px]'>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Coherence cohesion</span>
                                    <span className='font-bold text-[25px] block'>{data[0].coherenceScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Grammar</span>
                                    <span className='font-bold text-[25px] block'>{data[0].grammarScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Lexical resource</span>
                                    <span className='font-bold text-[25px] block'>{data[0].lexicalResourceScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Task achievement</span>
                                    <span className='font-bold text-[25px] block'>{data[0].taskAchievementScore}</span>
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <h1 className='font-bold text-[25px] mb-[20px]'>Question:</h1>
                                <img className='w-[500px]' src={foto} alt="" />
                                <p>{data[0].question}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Answer:</h1>
                                <p>{data[0].userAnswer}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Comment:</h1>
                                <p>{data[0].feedback}</p>
                            </div>
                        </div>
                    )}

                    {active === 2 && data[1] && (
                        <div className='border-[2px] border-MainColor rounded-[8px] p-[20px] mb-[100px]'>
                            <h1 className='text-[25px] font-bold'>Writing score: {data[1].taskBandScore}</h1>
                            <div className='writing__wrapper flex items-center justify-between mt-[20px]'>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Coherence cohesion</span>
                                    <span className='font-bold text-[25px] block'>{data[1].coherenceScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Grammar</span>
                                    <span className='font-bold text-[25px] block'>{data[1].grammarScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Lexical resource</span>
                                    <span className='font-bold text-[25px] block'>{data[1].lexicalResourceScore}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Task achievement</span>
                                    <span className='font-bold text-[25px] block'>{data[1].taskAchievementScore}</span>
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <h1 className='font-bold text-[25px] mb-[20px]'>Question:</h1>
                                <p>{data[1].question}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Answer:</h1>
                                <p>{data[1].userAnswer}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Comment:</h1>
                                <p>{data[1].feedback}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Writing;
