import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Speaking() {
    const { ID } = useParams();
    const [part, setPart] = useState(1);
    const [data, setData] = useState([]); // Ensure data is initialized as an empty array

    const getSpeakingResult = async () => {
        try {
            const response = await axios.get(`/ielts/exam/result/get-results-outline-speaking/${ID}/${part}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response.data.answers || []); // Fallback to empty array if answers is null or undefined
        } catch (error) {
            console.log(error);
            setData([]); // Ensure data is reset to an empty array on error
        }
    };
    console.log(data);
    

    useEffect(() => {
        getSpeakingResult();
    }, [ID, part]);

    return (
        <div className='Speaking pt-[100px] pb-[100px]'>
            <div className='Container'>
                <h1 className='font-bold text-[40px] text-center'>
                    Your Speaking Result
                </h1>
                <h2 className='text-center text-[25px]'>
                    Your answer
                </h2>
                <div className='mt-[30px] flex items-center justify-between gap-[20px]'>
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            className={`w-full py-[5px] ${
                                part === num ? 'bg-MainColor text-white' : 'bg-white text-black'
                            } border-[2px] border-MainColor rounded-[8px]`}
                            onClick={() => setPart(num)}
                        >
                            Part {num}
                        </button>
                    ))}
                </div>
                <div className='mt-[20px]'>
                    {data.length > 0 ? (
                        <div className='border-[2px] border-MainColor rounded-[8px] p-[20px]'>
                            <h1 className='text-[25px] font-bold'>
                                Part {data[0].part_number} Score: {data[0].part_band_score}
                            </h1>
                            <div className='speaking__wrapper flex items-center justify-between mt-[20px]'>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Coherence</span>
                                    <span className='font-bold text-[25px] block'>{data[0].coherence_score}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Fluency</span>
                                    <span className='font-bold text-[25px] block'>{data[0].fluency_score}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Grammar</span>
                                    <span className='font-bold text-[25px] block'>{data[0].grammar_score}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Vocabulary</span>
                                    <span className='font-bold text-[25px] block'>{data[0].vocabulary_score}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Relevance</span>
                                    <span className='font-bold text-[25px] block'>{data[0].relevance_score}</span>
                                </div>
                                <div className='text-center'>
                                    <span className='text-[25px] block'>Topic Development</span>
                                    <span className='font-bold text-[25px] block'>{data[0].topic_dev_score}</span>
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <h1 className='font-bold text-[25px] mb-[20px]'>Question:</h1>
                                <p>{data[0].transcription.question}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Transcription:</h1>
                                <p>{data[0].transcription.transcription}</p>
                                <h1 className='font-bold text-[25px] my-[12px]'>Comment:</h1>
                                <p>{data[0].transcription.feedback}</p>
                            </div>
                        </div>
                    ) : (
                        <p className='text-center text-[20px] mt-[20px]'>Nothing available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Speaking;
