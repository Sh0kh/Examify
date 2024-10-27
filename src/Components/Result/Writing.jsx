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

    if (!data || data.length === 0) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <h1 className='text-[25px] font-bold'>No result</h1>
            </div>
        );
    }

    return (
        <div className='Writing flex-1 pt-32 pb-20 bg-gray-50'>
            <div className='Container mx-auto max-w-2xl px-4'>
                <h1 className='font-bold text-4xl text-center text-black'>Your Writing Result</h1>
                <h2 className='text-center text-2xl text-black'>Your Answers</h2>
                <div className=''>
                    <div className='flex items-center justify-between gap-4 mt-8 mb-8'>
                        <button
                            className={`w-full py-3 text-lg font-semibold rounded-lg transition duration-300 ${active === 1 ? 'bg-white text-black border border-black' : 'bg-white text-black border border-black'} hover:bg-black hover:text-white`}
                            onClick={() => setActive(1)}
                        >
                            Task 1
                        </button>
                        <button
                            className={`w-full py-3 text-lg font-semibold rounded-lg transition duration-300 ${active === 2 ? 'bg-white text-black border border-black' : 'bg-white text-black border border-black'} hover:bg-black hover:text-white`}
                            onClick={() => setActive(2)}
                        >
                            Task 2
                        </button>
                    </div>

                    {data[active - 1] && (
                        <div className='border-2 border-black rounded-lg p-5 mb-20 bg-white shadow-md'>
                            <h1 className='text-2xl font-bold'>Writing Score: {data[active - 1].taskBandScore}</h1>
                            <div className='writing__wrapper flex items-center justify-between mt-5'>
                                <ScoreDetail title="Coherence Cohesion" score={data[active - 1].coherenceScore} />
                                <ScoreDetail title="Grammar" score={data[active - 1].grammarScore} />
                                <ScoreDetail title="Lexical Resource" score={data[active - 1].lexicalResourceScore} />
                                <ScoreDetail title="Task Achievement" score={data[active - 1].taskAchievementScore} />
                            </div>
                            <div className='mt-5'>
                                <QuestionAndAnswer
                                    question={data[active - 1].question}
                                    userAnswer={data[active - 1].userAnswer}
                                    feedback={data[active - 1].feedback}
                                    questionImage={active === 1 ? foto : null} // Change image based on task
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const ScoreDetail = ({ title, score }) => (
    <div className='text-center p-4 border border-gray-300 rounded-lg bg-gray-100'>
        <span className='text-lg block'>{title}</span>
        <span className='font-bold text-2xl block'>{score}</span>
    </div>
);

const QuestionAndAnswer = ({ question, userAnswer, feedback, questionImage }) => (
    <>
        <h1 className='font-bold text-xl mb-4'>Question:</h1>
        {questionImage && <img className='w-96 mb-4' src={questionImage} alt="Question Illustration" />}
        <p>{question}</p>
        <h1 className='font-bold text-xl my-3'>Answer:</h1>
        <p>{userAnswer}</p>
        <h1 className='font-bold text-xl my-3'>Comment:</h1>
        <p>{feedback}</p>
    </>
);

export default Writing;
