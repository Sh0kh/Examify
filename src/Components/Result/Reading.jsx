import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

export default function Reading() {
    const navigate = useNavigate();
    const { ID } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getReadingResult = useCallback(async () => {
        try {
            const response = await axios.get(`/ielts/exam/result/get-results-inline/READING/${ID}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response.data.answers); // Access the 'answers' array directly
        } catch (error) {
            console.log(error);
            if (401 === error.response?.status) {
                localStorage.clear();
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    }, [ID, navigate]);

    useEffect(() => {
        getReadingResult();
    }, [getReadingResult]);

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className='Reading pt-[130px] bg-white min-h-screen'>
            <div className='Container mx-auto px-4'>
                <h1 className='font-bold text-[40px] text-center text-black mb-4'>
                    Your Reading Result
                </h1>
                <h2 className='text-center text-[25px] text-black mb-6'>
                    Your Answers
                </h2>
                <div className='Table overflow-x-auto'>
                    <table className='w-full border border-black'>
                        <thead className='bg-gray-100'>
                        <tr>
                            <th className='py-3 px-4 border border-black'>
                                <h3 className='text-[20px] text-black'>#</h3>
                            </th>
                            <th className='py-3 px-4 border border-black'>
                                <h3 className='text-[20px] text-black'>Your Answer</h3>
                            </th>
                            <th className='py-3 px-4 border border-black'>
                                <h3 className='text-[20px] text-black'>Correct</h3>
                            </th>
                            <th className='py-3 px-4 border border-black'>
                                <h3 className='text-[20px] text-black'>Correct Answer</h3>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <tr key={index} className='bg-white hover:bg-gray-50'>
                                    <td className='py-3 px-4 border border-black text-center'>
                                        <h3 className='text-[20px] text-black'>{index + 1}</h3>
                                    </td>
                                    <td className='py-3 px-4 border border-black text-center'>
                                        <h3 className='text-[20px] text-black'>{item.userAnswer || 'No Answer'}</h3>
                                    </td>
                                    <td className='py-3 px-4 border border-black text-center'>
                                        <h3 className={`text-[20px] font-bold ${item.isTrue ? 'text-black' : 'text-black'}`}>
                                            {item.isTrue ? '✓' : 'X'}
                                        </h3>
                                    </td>
                                    <td className='py-3 px-4 border border-black text-center'>
                                        <h3 className='text-[20px] font-bold text-black'>{item.trueAnswer}</h3>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className='text-center py-4'>
                                    <h1 className='text-gray-600 text-[20px]'>No result</h1>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
