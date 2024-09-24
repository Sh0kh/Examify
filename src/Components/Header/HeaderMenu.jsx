import React from 'react'
import logo from '../../images/Examify_Dark.jpg'
import { NavLink } from 'react-router-dom'
function HeaderMenu({ isOpen, onClose }) {
    return (
        <>
            <div className={`HeaderMenuShadow ${isOpen ? 'HeaderMenuShadowActive' : ''}`}>
            </div>
            <div className={`HeaderMenu ${isOpen ? 'HeaderMenuActive' : ''}`}>
                <div className='w-full mb-[30px]'>
                    <img className='w-[150px] ' src={logo} alt="" />
                </div>
                <nav className='flex items-start flex-col gap-[20px]'>
                    <NavLink to={`/`} className="text-white font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                        Bosh sahifa
                    </NavLink>
                    <NavLink to={`/`} className="text-white font-bold text-[20px] transition-all duration-500 hover:tracking-[8px]">
                        IELTS
                    </NavLink>
                    <NavLink to={`/`} className="text-white font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                        Bog`lanish
                    </NavLink>
                    <button className='flex items-center gap-[5px] font-bold text-[20px] text-MainColor border-[3px] border-white pl-[10px] pr-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-white hover:bg-transparent hover:text-white'>
                        Kirish
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"></path></svg>
                    </button>
                </nav>
            </div>
        </>
    )
}

export default HeaderMenu