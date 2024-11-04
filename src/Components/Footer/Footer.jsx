import React from 'react'
import logo from '../../images/Examify_Dark.jpg'
function Footer() {
    return (
        <footer className='bg-MainColor p-[30px]'>
            <div className='Container'>
                <div className='Footer__wrapper flex items-center justify-between'>
                    <div>
                        <img className='w-[150px] cursor-pointer' src={logo} alt="" />
                    </div>
                    <div className='flex gap-[40px]'>
                        <div>
                            <h2 className='text-[white] text-[20px]'>
                                Social networks
                            </h2>
                            <div className='flex items-center justify-center gap-[10px]'>
                                <a href="https://t.me/mock_examify" target="_blank" rel="noopener noreferrer" className='text-[30px] text-[white] transition duration-500 hover:text-[#b4b3b3]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38"></path></svg>
                                </a>
                            </div>
                        </div>
                        <div className='flax items-center justify-center'>
                            <h2 className='text-[white] text-[20px]'>
                                Created from
                            </h2>
                            <div>
                                <a href="https://itliveacademy.uz/" target="_blank" rel="noopener noreferrer">
                                <svg className='mx-auto' width="90" height="34" viewBox="0 0 120 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group 4">
                                        <path id="Vector 1" d="M72.6819 33.5006L66.4822 11.1514H71.3251L76.1304 29.3549H78.9947L83.8189 11.1514H88.6807L82.4621 33.5006H72.6819Z" fill="white" />
                                        <rect id="Rectangle 3" y="0.485352" width="8.70603" height="8.29146" fill="#3B81F4" />
                                        <rect id="Rectangle 7" x="114.12" y="3.57617" width="5.8794" height="5.61558" fill="#3B81F4" />
                                        <rect id="Rectangle 5" x="12.2109" y="0.485352" width="29.5101" height="8.29146" fill="#3B81F4" />
                                        <rect id="Rectangle 4" y="12.2061" width="8.70603" height="21.2563" fill="#3B81F4" />
                                        <rect id="Rectangle 6" x="22.6129" y="8.77637" width="8.70603" height="24.6859" fill="#3B81F4" />
                                        <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M50.842 2.89746H46.0555V33.4628H50.842V33.4627H55.8164V29.3169H50.842V2.89746Z" fill="white" />
                                        <path id="Union_2" fill-rule="evenodd" clip-rule="evenodd" d="M61.2821 7.83418C62.7599 7.83418 63.958 6.63615 63.958 5.1583C63.958 3.68045 62.7599 2.48242 61.2821 2.48242C59.8042 2.48242 58.6062 3.68045 58.6062 5.1583C58.6062 6.63615 59.8042 7.83418 61.2821 7.83418ZM63.6564 11.1132H58.8699V33.4624H63.6564V11.1132Z" fill="white" />
                                        <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M100.816 11.0762C94.7594 11.0762 89.8491 15.9899 89.8491 22.0512V22.4881C89.8491 28.5494 94.7594 33.4631 100.816 33.4631C105.086 33.4631 108.786 31.0212 110.598 27.4569H106.152C104.846 28.9095 102.953 29.823 100.847 29.823C97.4463 29.823 94.6012 27.4412 93.8868 24.2535H111.643C111.736 23.6788 111.784 23.089 111.784 22.4881V22.0512C111.784 15.9899 106.874 11.0762 100.816 11.0762ZM100.847 14.8983C104.248 14.8983 107.093 17.2801 107.808 20.4678H93.8868C94.6012 17.2801 97.4463 14.8983 100.847 14.8983Z" fill="white" />
                                    </g>
                                </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer