import React, { useState } from 'react'
import logo from '../../images/Examify.png'
import { NavLink } from 'react-router-dom'
import HeaderMenu from './HeaderMenu'
import { Spin as Hamburger } from 'hamburger-react'
function Header() {
    const [active, setActive] = useState(false)
    const ActiveMenu = () => setActive(!active)
    const CloseMenu = () => setActive(false)
    return (
        <header className='Header py-[15px] border-b-[1px] border-b-MainColor'>
            <div className='Container'>
                <div className='header__wrapper flex items-center justify-between'>
                    <div className=''>
                        <img className='w-[150px] object-cover cursor-pointer' src={logo} alt="" />
                    </div>
                    <nav className='flex items-center gap-[50px]'>
                        <NavLink to={`/`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                            Bosh sahifa
                        </NavLink>
                        <NavLink to={`/`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-[8px]">
                            IELTS
                        </NavLink>
                        <NavLink to={`/`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                            Bog`lanish
                        </NavLink>
                    </nav>
                    <div className='flex items-center gap-[5px]'>
                        <button className='header__login__btn flex items-center gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>  
                            Kirish
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"></path></svg>
                        </button>
                        <button onClick={ActiveMenu} className='header__burger relative z-20 hidden'>
                        <Hamburger size={30} color={`${active ? 'white' : '#1B2A3D'}`}/>
                        </button>
                    </div>
                </div>
            </div>
            <HeaderMenu isOpen={active} onClose={CloseMenu}/>
        </header>
    )
}

export default Header