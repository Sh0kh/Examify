import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

export default function Listening() {
  const navigate = useNavigate();
  const { ID } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const getListeningResult = useCallback(async () => {
    try {
      const response = await axios.get(`/ielts/exam/result/get-results-inline/LISTENING/${ID}`, {
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
    }finally{
      setLoading(false)
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
    <div className='Listening pt-[130px]'>
      <div className='Container'>
        <h1 className='font-bold text-[40px] text-center'>
          Your listening result
        </h1>
        <h2 className='text-center text-[25px]'>
          Your answer
        </h2>
        <div className='Table mt-[30px] mb-[30px]'>
          <table className='w-full border-separate' style={{ borderSpacing: '0 10px' }}>
            <thead className='w-full'>
              <tr className='bg-[#dfdfdf92]'>
                <th className='rounded-tl-2xl w-[50px] rounded-bl-2xl'>
                  <h3 className='text-[20px]'>
                    #
                  </h3>
                </th>
                <th>
                  <h3 className='text-[20px]'>
                    Your answer
                  </h3>
                </th>
                <th>
                  <h3 className='text-[20px] py-[10px]'>
                    Correct
                  </h3>
                </th>
                <th className='rounded-tr-2xl rounded-br-2xl'>
                  <h3 className='text-[20px]'>
                    Correct Answer
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={index} className='bg-[#dfdfdf92]'>
                    <td className='rounded-tl-2xl rounded-bl-2xl py-[8px]'>
                      <h3 className='text-[20px] text-center'>
                        {index + 1}
                      </h3>
                    </td>
                    <td className='py-[8px]'>
                      <h3 className='text-[20px] text-center'>
                        {item.userAnswer || 'No Answer'}
                      </h3>
                    </td>
                    <td className='py-[8px]'>
                      <h3 className={`text-[20px] font-bold text-center ${item.isTrue ? 'text-green-500' : 'text-red-500'}`}>
                        {item.isTrue ? (<span className='text-[green]'>✓</span>) : 'X'}
                      </h3>
                    </td>
                    <td className='rounded-tr-2xl rounded-br-2xl py-[8px]'>
                      <h3 className='text-[20px] font-bold text-center'>
                        {item.trueAnswer}
                      </h3>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className='h-screen'>
                  <td colSpan="4" className='text-center py-4'>
                    <h1>No result</h1>
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
