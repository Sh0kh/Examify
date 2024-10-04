import React from 'react'

function MyResult() {
  return (
    <div className='MyResult h-screen pt-[100px] w-full'>
        <div className='Container'>
          <h1 className='text-[30px] font-bold text-center mb-[20px]'>
            My result
          </h1>
          <div className='MyResult__wrapper w-full flex items-center flex-col gap-[10px]'>
              <div className='p-[10px] border-[2px] border-MainColor w-full rounded-[8px] MyResult__card'>
                  <h2 className='font-bold text-[22px]'>
                    Full exam
                  </h2>
                  <span className='text-[20px]'>
                    User:USer
                  </span>
                  <div className='myResult__grid  flex items-center gap-[15px] mt-[15px]'>
                    <div  className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                        <h2 className='text-[white] font-bold text-[22px]'>
                          Ball 
                        </h2>
                        <span className='text-[white] block text-center text-[20px]'>
                          8
                        </span>
                    </div>
                    <div  className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                        <h2 className='text-[white] font-bold text-[22px]'>
                          Reading
                        </h2>
                        <span className='text-[white] block text-center text-[20px]'>
                          8
                        </span>
                    </div>
                    <div  className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                        <h2 className='text-[white] font-bold text-[22px]'>
                          Speaking 
                        </h2>
                        <span className='text-[white] block text-center text-[20px]'>
                          8
                        </span>
                    </div>
                    <div  className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                        <h2 className='text-[white] font-bold text-[22px]'>
                          Writing 
                        </h2>
                        <span className='text-[white] block text-center text-[20px]'>
                          8
                        </span>
                    </div>
                    <div className='rounded-[8px] bg-MainColor p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                        <h2 className='text-[white] font-bold text-[22px]'>
                          Lestening
                        </h2>
                        <span className='text-[white] block text-center text-[20px]'>
                          8
                        </span>
                    </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default MyResult