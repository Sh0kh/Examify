import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { axiosAPI1 } from '../../Service/axios';

export default function Listening() {
  const navigate = useNavigate();
  const { ID } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getListeningResult = useCallback(async () => {
    try {
      const response = await axiosAPI1.get(`/ielts/exam/result/get-results-inline/LISTENING/${ID}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setData(response.data.answers);
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
    getListeningResult();
  }, [getListeningResult]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className='Listening pt-[130px] pb-[50px] bg-white min-h-screen'>
      <div className='Container mx-auto px-4'>
        <h1 className='font-bold text-[40px]  text-black mb-4'>
          Your Listening Result
        </h1>
        <h2 className=' text-[25px] text-black mb-6'>
          Your Answers
        </h2>
        <div className='Table overflow-x-auto'>
          <table className='w-full border rounded-[20px] border-gray-300'>
            <thead className='bg-gray-50 rounded-t-[20px]'>
              <tr>
                <th className='py-3 px-4 border-b border-gray-300'>
                  <h3 className='text-[16px] text-gray-700'>#</h3>
                </th>
                <th className='py-3 px-4 border-b border-gray-300'>
                  <h3 className='text-[16px] text-gray-700'>Your Answer</h3>
                </th>
                <th className='py-3 px-4 border-b border-gray-300'>
                  <h3 className='text-[16px] text-gray-700'>Correct</h3>
                </th>
                <th className='py-3 px-4 border-b border-gray-300'>
                  <h3 className='text-[16px] text-gray-700'>Correct Answer</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='py-3 px-4 border-b border-gray-300 text-center'>
                      <h3 className='text-[16px] text-gray-700'>{index + 1}</h3>
                    </td>
                    <td className='py-3 px-4 border-b border-gray-300 text-center'>
                      <h3 className='text-[16px] text-gray-700'>{item.userAnswer || 'No Answer'}</h3>
                    </td>
                    <td className='py-3 px-4 border-b border-gray-300 text-center'>
                      <h3 className={`text-[16px] font-bold ${item.isTrue ? 'text-green-600' : 'text-red-600'}`}>
                        {item.isTrue ? '✓' : 'X'}
                      </h3>
                    </td>
                    <td className='py-3 px-4 border-b border-gray-300 text-center'>
                      <h3 className='text-[16px] font-bold text-gray-700'>{item.trueAnswer}</h3>
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
