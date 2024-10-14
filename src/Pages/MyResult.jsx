import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import ReactLoading from 'react-loading';

function MyResult() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [countdowns, setCountdowns] = useState({}); // State for countdowns

  const getMyResult = useCallback(async () => {
    if (!hasMore) return;

    try {
      console.log("Fetching results...");
      const response = await axios.get('/user/get-my-results', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        params: {
          page,
          size: 10,
        },
      });

      if (Array.isArray(response.data.results) && response.data.results.length > 0) {
        // Set data and initialize countdowns
        setData((prevData) => [...prevData, ...response.data.results]);
        const newCountdowns = {};
        response.data.results.forEach((item) => {
          if (item.remainTimeForEndExam) {
            newCountdowns[item.id] = item.remainTimeForEndExam; // Use a unique identifier for countdowns
          }
        });
        setCountdowns((prevCountdowns) => ({
          ...prevCountdowns,
          ...newCountdowns,
        }));
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [hasMore, page]); // Include hasMore and page as dependencies

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    getMyResult();
  }, [getMyResult]); // Add getMyResult to dependency array

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns((prevCountdowns) => {
        const updatedCountdowns = { ...prevCountdowns };
        for (const key in updatedCountdowns) {
          if (updatedCountdowns[key] > 0) {
            updatedCountdowns[key] -= 1; // Decrease countdown
          }
        }
        return updatedCountdowns;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []); // Run once on mount

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours > 0 ? `${hours}:` : ''}${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  if (loading && page === 1) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
      </div>
    );
  }

  return (
    <div className='MyResult pt-[100px] pb-[100px] w-full'>
      <div className='Container'>
        <h1 className='text-[30px] font-bold text-center mb-[20px]'>
          My result
        </h1>
        <div className='MyResult__wrapper w-[1000px] flex items-center flex-col gap-[10px] mx-auto'>
          {data.length === 0 ? (
            <div className='text-center text-[20px] font-bold h-screen'>
              No results found.
            </div>
          ) : (
            data.map((i) => (
              <div key={i.id} className='p-[10px] border-[2px] border-MainColor w-full rounded-[8px] MyResult__card flex items-center justify-between'>
                <div>
                  <h2 className='font-bold text-[22px]'>
                    Full exam
                  </h2>
                  <span className='text-[20px]'>
                    <span className='font-bold'>Book name:</span> {i.bookName}
                  </span>
                  <span className='block text-[20px]'>
                    <span className='font-bold'>Date:</span> {i.createdAt.split('T')[0]}
                  </span>
                  <span className='block text-[20px]'>
                    <span className='font-bold'>Status:</span> {i.status}
                  </span>
                  {i.status === "PENDING" && (
                    <>
                      <span className='block text-[20px]'>
                        <span className='font-bold'>Time:</span> {formatTime(countdowns[i.id] || 0)}
                      </span>
                    </>
                  )}
                </div>
                <div className='myResult__grid flex items-center gap-[30px] mt-[15px]'>
                  {i.status !== 'PENDING' ? (<div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                    <h2 className='text-[white] font-bold text-[22px]'>Overall</h2>
                    <span className='text-[white] block text-center text-[20px]'>{i.overall}</span>
                  </div>):(
                    <div className='rounded-[8px] bg-MainColor py-[20px] px-[5px] flex items-center justify-center w-[120px] text-center cursor-pointer'>
                  <svg className='text-[white]' xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M5.669 4.76a1.47 1.47 0 0 1 2.04-1.177c1.062.454 3.442 1.533 6.462 3.276c3.021 1.744 5.146 3.267 6.069 3.958c.788.591.79 1.763.001 2.356c-.914.687-3.013 2.19-6.07 3.956c-3.06 1.766-5.412 2.832-6.464 3.28c-.906.387-1.92-.2-2.038-1.177c-.138-1.142-.396-3.735-.396-7.237c0-3.5.257-6.092.396-7.235"></path></g></svg>
                  </div>
                )}
                  
                  <div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                    <h2 className='text-[white] font-bold text-[22px]'>Reading</h2>
                    <span className='text-[white] block text-center text-[20px]'>{i.reading}</span>
                  </div>
                  <div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                    <h2 className='text-[white] font-bold text-[22px]'>Speaking</h2>
                    <span className='text-[white] block text-center text-[20px]'>{i.speaking}</span>
                  </div>
                  <div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                    <h2 className='text-[white] font-bold text-[22px]'>Writing</h2>
                    <span className='text-[white] block text-center text-[20px]'>{i.writing}</span>
                  </div>
                  <div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                    <h2 className='text-[white] font-bold text-[22px]'>Listening</h2>
                    <span className='text-[white] block text-center text-[20px]'>{i.listening}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MyResult;