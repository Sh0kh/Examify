import axios from '../../Service/axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';

function Result() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getResult = async () => {
    try {
      const response = await axios.get('/ielts/exam/result/top-exam-result/MONTHLY?page=0&size=10');
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

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }

  return (
    <section className='Result pb-[50px] mt-[80px]'>
      <div className='Container'>
        <h1 className='text-MainColor text-center font-bold text-[55px] cursor-pointer transition-all duration-700 hover:tracking-widest'>
          Bizning peshqadamlar
        </h1>
        <p className='text-[20px] text-MainColor text-center'>
          Oxirgi 3 oydagi eng yaxshi natijalar
        </p>
        <div className='Result__wrapper relative flex items-center flex-col gap-[10px] w-[1000px] mt-[20px] mx-auto'>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((i, index) => (
              <div key={index} className='Result__Card w-full p-[20px] border-[2px] border-MainColor rounded-[8px] flex items-center justify-between cursor-pointer transition duration-500 hover:shadow-2xl'>
                <div className='flex items-end gap-[5px]'>
                  {index < 3 ? (
                    <svg className={`text-[30px] ${index === 0 ? 'text-[#F97316]' : index === 1 ? 'text-[#6B7280]' : 'text-[#9C4221]'}`} xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 20 20'>
                      <path fill='currentColor' d='M8.737 5.31L6.609 8.046a.5.5 0 0 1-.619.14L3.865 7.123a1.5 1.5 0 1 0-1.672.845l1.692 8.04A1.25 1.25 0 0 0 5.11 17h9.782a1.25 1.25 0 0 0 1.224-.992l1.692-8.04a1.5 1.5 0 1 0-1.672-.845L14.01 8.186a.5.5 0 0 1-.619-.14l-2.128-2.737a1.5 1.5 0 1 0-2.526 0M10 14a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3'></path>
                    </svg>
                  ) : (
                    <span className='font-bold text-[15px] bg-MainColor text-[white] px-[8px] py-[3px] rounded-[50%]'>
                      {index + 1}
                    </span>
                  )}
                  <span className='text-[20px] w-[50px]'>{i?.user.name}</span>
                </div>
                <span className='px-[20px] py-[10px] border-[2px] border-MainColor rounded-[8px] bg-MainColor text-[white] duration-300 hover:bg-transparent hover:text-MainColor'>
                  {i.overall}
                </span>
                <div>  
                  <span className='text-[20px] font-bold block'>{i.createdAt.split('T')[0]}</span> 
                  <span className='block text-center'>
                    {i.createdAt.slice(11, 16)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
          <div className='Result__over'>
          </div>
        </div>
        <NavLink to={`/rating`}>
          <button onClick={handleScrollUp} className='mx-auto mt-[40px] flex items-center gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>
            Show more
            <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
              <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5'></path>
            </svg>
          </button>
        </NavLink>
      </div>
    </section>
  );
}

export default Result;
