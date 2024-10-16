import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../../Service/Config';

function Speaking() {
    const { ID } = useParams();
    const [part, setPart] = useState(1);
    const [data, setData] = useState([]); // Ensure data is initialized as an empty array

    const getSpeakingResult = async () => {
        try {
            const response = await axios.get(`/ielts/exam/result/get-results-outline-speaking/${ID}/${part}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response.data || []); // Directly use response.data without assuming nested structure
        } catch (error) {
            console.log(error);
            setData([]); // Ensure data is reset to an empty array on error
        }
    };

    useEffect(() => {
        getSpeakingResult();
    }, [ID, part]);

    // Separate render function for transcription
    const renderTranscription = (transcriptions) => {
        if (!transcriptions || transcriptions.length === 0) {
            return <p className='text-center text-[20px] mt-[20px]'>No transcription available</p>;
        }

        return transcriptions.map((item, index) => (
            <div key={index} className='mb-[20px] border-[2px] border-MainColor rounded-[8px] p-[5px]'>
                <h1 className='font-bold text-[25px] my-[12px]'>Question:</h1>
                <p>{item.question}</p>
                <h1 className='font-bold text-[25px] my-[12px]'>Transcription:</h1>
                <p>{item.transcription}</p>
                <h1 className='font-bold text-[25px] my-[12px]'>Comment:</h1>
                <p>{item.feedback}</p>
                {/* Audio Player for voiceUrl */}
                {item.voiceUrl && (
                    <div className='mt-[20px]'>
                        <h1 className='font-bold text-[25px] my-[12px]'>Listen to the Audio:</h1>
                        <audio className='audio' controls>
                            <source src={`${CONFIG.API_URL}${item.voiceUrl}`} type="audio/mpeg" />
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                )}
            </div>
        ));
    };

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
                        <div className='border-[2px] border-MainColor rounded-[8px] p-[20px]'>
                            <h1 className='text-[25px] font-bold'>
                                Part {data.part_number} Score: {data.part_band_score}
                            </h1>
                            <div className='speaking__wrapper flex items-center justify-between mt-[20px]'>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Coherence</span>
                                    <span className='font-bold text-[25px] block'>{data.coherence_score}</span>
                                </div>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Fluency</span>
                                    <span className='font-bold text-[25px] block'>{data.fluency_score}</span>
                                </div>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Grammar</span>
                                    <span className='font-bold text-[25px] block'>{data.grammar_score}</span>
                                </div>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Vocabulary</span>
                                    <span className='font-bold text-[25px] block'>{data.vocabulary_score}</span>
                                </div>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Relevance</span>
                                    <span className='font-bold text-[25px] block'>{data.relevance_score}</span>
                                </div>
                                <div className='text-center border-[2px] border-MainColor rounded-[8px] p-[2px]'>
                                    <span className='text-[25px] block'>Topic Development</span>
                                    <span className='font-bold text-[25px] block'>{data.topic_dev_score}</span>
                                </div>
                            </div>
                            <div className='mt-[20px]'>
                                <h1 className='font-bold text-[25px] mb-[20px]'>Transcriptions:</h1>
                                {renderTranscription(data.transcription)}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Speaking;
