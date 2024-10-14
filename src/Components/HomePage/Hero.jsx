import React from 'react'
import foto from '../../images/heroImg1.png'
function Hero() {
  return (
    <section className='Hero pt-[180px]'>
      <div className='Container'>
        <div className='Hero__wrapper flex items-center justify-between'>
          <div>
            <h1 className='text-[70px] w-[700px] font-bold leading-[90px]'>
             <span className='bg-MainColor text-white px-[10px] rounded-[5px] cursor-pointer transition-all duration-500 hover:tracking-[10px]'>
             Examify/</span> yordamida ingliz tili darajangizni bilib oling
            </h1>
            <button className='mt-[20px] flex items-center gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>
              Start
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"></path></svg>
            </button>
          </div>
          <div className=''>
              <img className='w-[380px]' src={foto} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero