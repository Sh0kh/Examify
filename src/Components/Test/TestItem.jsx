import React, { useState } from 'react'
import logo from '../../images/Examify_Dark.jpg'
import Bg from '../../images/Cardbg.png'
import TestModal from './TestModal'
function TestItem() {
    const [active, setActive] = useState(false);
    const ActiveModal = () => setActive(true)
    const CloseModal = () => setActive(false)
    return (
        <section className='Test pt-[100px] pb-[50px]'>
            <div className='Container'>
                <h1 className='text-MainColor font-bold text-[55px] cursor-pointer transition-all duration-700 hover:tracking-widest'>
                    Books
                </h1>
                <div className='Test__wrapper '>
                    <div onClick={ActiveModal} className='Test__card h-[400px] cursor-pointer  p-[20px] bg-MainColor rounded-[8px] transition duration-500 hover:shadow-xl'>
                        <img src={logo} className='w-[100px] cursor-pointer' alt="" />
                        <h2 className='text-[white] text-[50px] mt-[30px] h-[60px]'>
                            Cambridge 
                        </h2>
                        <span className='opacity-[0.5] text-[white] text-[30px]'>TEST 1</span>
                        <img className='TestCard1 block mt-[30px]' src={Bg} alt="foto" />
                        
                    </div>
                </div>
            </div>
            <TestModal isOpen={active} onClose={CloseModal}/>
        </section>
    )
}

export default TestItem