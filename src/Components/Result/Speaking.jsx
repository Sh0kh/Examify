import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CONFIG from '../../Service/Config';

function Speaking() {
    const { ID } = useParams();
    const [part, setPart] = useState(1);
    const [data, setData] = useState([]);

    const getSpeakingResult = useCallback(async () => {
        try {
            const response = await axios.get(`/ielts/exam/result/get-results-outline-speaking/${ID}/${part}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response.data || []);
        } catch (error) {
            console.log(error);
            setData([]);
        }
    }, [ID, part]);

    useEffect(() => {
        getSpeakingResult();
    }, [getSpeakingResult]);

    const roundToIeltsScore = (score) => {
        return (Math.round(score * 2) / 2).toFixed(1);
    };

    const renderTranscription = (transcriptions) => {
        if (!transcriptions || transcriptions.length === 0) {
            return <p className='text-center text-lg mt-5 text-gray-500'>No transcription available</p>;
        }

        return transcriptions.map((item, index) => (
            <div key={index} className='mb-5 border-2 border-black rounded-lg p-5 bg-white shadow-md'>
                <h1 className='font-bold text-xl my-3 text-black'>Question:</h1>
                <p className='text-black'>{item.question}</p>
                <h1 className='font-bold text-xl my-3 text-black'>Transcription:</h1>
                <p className='text-black'>{item.transcription}</p>
                <h1 className='font-bold text-xl my-3 text-black'>Comment:</h1>
                <p className='text-black'>{item.feedback}</p>
                {item.voiceUrl && (
                    <div className='mt-5'>
                        <h1 className='font-bold text-xl my-3 text-black'>Listen to the Audio:</h1>
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
        <div className='flex flex-col h-screen container'>
            <div className='Speaking flex-1 pt-20 pb-20 '>
                <div className='Container mx-auto max-w-2xl px-4'>
                    <h1 className='font-bold text-4xl  text-black'>Your Speaking Result</h1>
                    <div className='w-full h-[2px] bg-[#F5F5F5] my-[30px]'>
                    </div>
                    <h2 className=' text-2xl text-black'>Your answer</h2>
                    <div className='mt-8 flex items-center '>
                        {[1, 2, 3].map((num) => (
                            <button
                                key={num}
                                className={`px-4 py-2 text-lg font-semibold rounded-[5px] transition duration-300 ${part === num ? 'bg-blue-500 text-white' : 'bg-white text-black border border-gray-300'} hover:bg-blue-500 hover:text-white`}
                                onClick={() => setPart(num)}
                            >
                                Part {num}
                            </button>
                        ))}
                    </div>
                    <div className='mt-5'>
                        <div className='border-2  rounded-lg p-5 bg-white'>
                            <h1 className='text-2xl font-bold text-black'>
                                Part {data.part_number} Score: {data.part_band_score ? roundToIeltsScore(data.part_band_score) : 'Score unavailable'}
                            </h1>
                            <div className='grid grid-cols-3 gap-4 mt-5'>
                                {['coherence', 'fluency', 'grammar', 'vocabulary', 'relevance', 'topic_dev'].map((key) => (
                                    <div key={key} className='text-center rounded-lg p-3 bg-gray-100'>
                                        <span className='text-lg block font-medium text-[#1B1F26B8]'>{key.charAt(0).toUpperCase() + key.slice(1)}</span>

                                        <span className='font-bold text-2xl block text-black'>
                                            {data[`${key}_score`] && !isNaN(data[`${key}_score`])
                                                ? roundToIeltsScore(data[`${key}_score`])
                                                : 'N/A'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-5'>
                                <h1 className='font-bold text-xl mb-4 text-black'>Transcriptions:</h1>
                                {renderTranscription(data.transcription)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speaking;