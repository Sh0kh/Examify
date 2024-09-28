import React, { useState } from 'react';
import logo from '../../images/Examify.png';
import { NavLink } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import { Spin as Hamburger } from 'hamburger-react';

function Header() {
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive(!active);
  const closeMenu = () => setActive(false);


  const handleScrollUp = () => {

    const currentScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: currentScroll - windowHeight,
      behavior: 'smooth', 
    });
  };
  
  return (
    <header className='Header fixed w-full bg-white z-50 py-[15px] border-b-[1px] border-b-MainColor'>
      <div className='Container'>
        <div className='header__wrapper flex items-center justify-between'>
        <NavLink onClick={handleScrollUp} to={`/`}>
        <div className=''>
            <img className='w-[150px] object-cover cursor-pointer' src={logo} alt="" />
          </div>
        </NavLink>
          <nav className='flex items-center gap-[50px]'>
            <NavLink onClick={handleScrollUp} to={`/`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest" >
              Bosh sahifa
            </NavLink>
            <NavLink onClick={handleScrollUp} to={`/test`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-[8px]" >
              TEST
            </NavLink>
            <NavLink onClick={handleScrollUp} to={`/faq`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-[10px]" >
              FAQ
            </NavLink>
            <NavLink onClick={handleScrollUp} to={`/contact`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest" >
              Bog`lanish
            </NavLink>
          </nav>
          <div className='flex items-center gap-[5px]'>
            <NavLink onClick={handleScrollUp} to='/login'>
              <button className='header__login__btn flex items-center gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>
                Kirish
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"></path></svg>
              </button>
            </NavLink>
            <button onClick={toggleMenu} className='header__burger relative z-20 hidden'>
              <Hamburger size={30} color={`${active ? 'white' : '#1B2A3D'}`} toggled={active} toggle={setActive} />
            </button>
          </div>
        </div>
      </div>
      <HeaderMenu isOpen={active} onClose={closeMenu} />
    </header>
  );
}

export default Header;
