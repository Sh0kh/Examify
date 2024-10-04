import React from 'react'

function Top3({data}) {    
    return (
        <div className='Top3 pt-[150px] pb-[100px]'>
            <div className='Container'>
                <div className='Top3__wrapper flex items-center justify-between w-[1000px] gap-[30px] mx-auto'>
                    <div className='Top3__card text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[300px] py-[20px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#F97316" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[20px]'>
                            {data[2].user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] block'>
                            {data[2].createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[2].overall}
                        </h2>
                    </div>
                    <div className='Top3__card1 text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[400px] py-[60px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[#F97316]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="gold" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[25px]'>
                            {data[0]?.user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] text-[20px] block'>
                            {data[0]?.createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[0].overall}
                        </h2>
                    </div>
                    <div className='Top3__card text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[300px] py-[20px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[#F97316]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#718096" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[20px]'>
                            {data[1].user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] block'>
                            {data[1].createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[1].overall}
                        </h2>
                    </div>
                </div>
                <div className='Top3__wrapper__mb hidden'>
                    <div className='Top3__card1 text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[400px] py-[60px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[#F97316]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="gold" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[25px]'>
                            {data[0].user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] text-[20px] block'>
                            {data[0].createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[0].overall}
                        </h2>
                    </div>
                    <div className='Top3__card text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[300px] py-[20px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[#F97316]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#718096" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[20px]'>
                            {data[1].user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] block'>
                            {data[1].createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[1].overall}
                        </h2>
                    </div>
                    <div className='Top3__card text-center bg-MainColor px-[20px] cursor-pointer border-MainColor border-[2px] shadow-xl w-[300px] py-[20px] rounded-[8px]'>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <svg className='text-[50px] text-[]' xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="#F97316" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16m64-320c-26.5 0-48 21.5-48 48c0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8c0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8c26.5 0 48-21.5 48-48s-21.5-48-48-48"></path></svg>
                            <div className='px-[7px] py-[7px] rounded-[50%] bg-[white]'>
                                <svg className='text-[70px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#1B2A3D" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path></svg>
                            </div>
                        </div>
                        <h2 className='text-[white] text-center mt-[10px] text-[20px]'>
                            {data[2].user?.name}
                        </h2>
                        <div className='w-[70%] h-[2px] mx-auto my-[10px] bg-[white] rounded-[10px]'>
                        </div>
                        <span className='text-[white] block'>
                            {data[2].createdAt.split('T')[0]}
                        </span>
                        <h2 className='text-MainColor py-[5px] px-[5px] bg-white w-[65px] mt-[10px] mx-auto text-[30px] rounded-[50%]'>
                            {data[2].overall}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top3