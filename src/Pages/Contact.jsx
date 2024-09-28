import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
    return (
        <div className='Contact bg-MainColor w-full h-screen pt-[60px]'>
            <h1 className='text-center text-white text-[30px] w-[900px] mx-auto'>
                We automate English speaking, writing, listening and reading testing
                for businesses and educational institutions
            </h1>
            <div className='flex items-center justify-center'>
                <NavLink to='/' className={`text-[white] text-center mx-auto text-center w-[200px] text-[20px] mt-[20px] border-b-[2px] border-b-[white]`}>
                    Back to Home
                </NavLink>
            </div>
            <form className='bg-white py-[30px] px-[60px] w-[600px] mx-auto rounded-[8px] mt-[30px]'>
                <h2 className='text-MainColor font-bold text-center text-[30px] mb-[20px]'>
                    Contact us
                </h2>
                <input type="text" className='p-[5px] w-full rounded-[8px] text-MainColor border-[2px] mb-[20px] border-MainColor'
                    placeholder='Name' />
                <input type="number" className='p-[5px] w-full rounded-[8px] text-MainColor border-[2px] mb-[]20px border-MainColor'
                    placeholder='Phone number' />
                <button className='w-full flex items-center justify-center mt-[20px] gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact