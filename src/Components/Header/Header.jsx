import React, { useState } from 'react';
import logo from '../../images/Examify.png';
import { NavLink, useLocation } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import { Spin as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/MyInformation';

function Header() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive(!active);
  const closeMenu = () => setActive(false);
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);
  const token = localStorage.getItem('token');
  const [modal, setModal] = useState(false);

  const ActiveModal = () => {
    setModal(!modal);
  };

  if (status === 'idle') {
    dispatch(fetchData());
  }

  const handleScrollUp = () => {
    const currentScroll = window.pageYOffset;
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: currentScroll - windowHeight,
      behavior: 'smooth',
    });
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      setModal(false);
    }
  };

  const exit = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
      <div>
        <header className='Header fixed w-full bg-white z-50 py-[15px] border-b-[1px] border-b-MainColor'>
          {location.pathname === '/test' && (
              <div className='top-0 w-[full] p-[5px] bg-[red] recom hidden'>
                <h1 className='text-center text-[white]'>
                  For complete convenience, it is recommended to use a PC
                </h1>
              </div>
          )}
          <div className='Container'>
            <div className='header__wrapper flex items-center justify-between'>
              <NavLink onClick={handleScrollUp} to={`/`}>
                <div>
                  <img className='w-[150px] object-cover cursor-pointer' src={logo} alt="" />
                </div>
              </NavLink>
              <nav className='flex items-center gap-[50px]'>
                <NavLink onClick={handleScrollUp} to={`/`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                  Home
                </NavLink>
                <NavLink onClick={handleScrollUp} to={`/test`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-[8px]">
                  Take exam
                </NavLink>
                {token && (
                    <NavLink onClick={handleScrollUp} to={`/myResult`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-[10px]">
                      My Result
                    </NavLink>
                )}
                <NavLink onClick={handleScrollUp} to={`/contact`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                  Contact
                </NavLink>
                <NavLink onClick={handleScrollUp} to={`/bonus`} className="font-bold text-[20px] transition-all duration-500 hover:tracking-widest">
                  Bonus
                </NavLink>
              </nav>
              <div className='flex items-center gap-[5px] relative'>
                {token ? (
                    <button className='header__login__btn' onClick={ActiveModal}>
                      <svg className='text-[30px] text-MainColor' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18"></path>
                      </svg>
                    </button>
                ) : (
                    <NavLink onClick={handleScrollUp} to='/login'>
                      <button className='header__login__btn flex items-center gap-[5px] font-bold text-[20px] text-[white] border-[3px] border-MainColor px-[25px] py-[5px] transition-colors duration-[0.6s] rounded-[8px] bg-MainColor hover:bg-transparent hover:text-MainColor'>
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9m6-9l-4-4m4 4l-4 4m4-4H5"></path>
                        </svg>
                      </button>
                    </NavLink>
                )}
                <button onClick={toggleMenu} className='header__burger relative z-20 hidden'>
                  <Hamburger size={30} color={`${active ? 'white' : '#1B2A3D'}`} toggled={active} toggle={setActive} />
                </button>
                {modal && (
                    <div
                        className='fixed inset-0 z-50 modal-overlay'
                        onClick={handleOutsideClick}
                    >
                      <div className='fixed right-[16%] border-[1px] border-MainColor top-[80px] bg-white rounded-[8px] p-[10px] shadow-2xl'>
                        <div>
                          <h3 className='font-bold'>{data?.name}</h3>
                          <h3>{data?.phoneNumber}</h3>
                          <h3 className='font-bold'>
                            Exam limit: {data?.todayExamCount}
                          </h3>
                        </div>
                        <div className='w-full h-[1px] my-[7px] bg-MainColor'></div>
                        <button onClick={exit} className='flex items-center gap-[10px] font-bold border-MainColor text-MainColor rounded-[8px] border-[2px] px-[20px] py-[3px] transition duration-500 hover:bg-MainColor hover:text-[white]'>
                          Logout
                          <svg className='text-[20px] ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 4.001H5v14a2 2 0 0 0 2 2h8m1-5l3-3m0 0l-3-3m3 3H9"></path></svg>
                        </button>
                      </div>
                    </div>
                )}
              </div>
            </div>
          </div>
          <HeaderMenu isOpen={active} onClose={closeMenu} />
        </header>
      </div>
  );
}

export default Header;
