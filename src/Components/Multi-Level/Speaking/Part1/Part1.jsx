import React from 'react'
import SpeakingCard from '../SpeakingCard'
import CONFIG from '../../../../Service/Config2'

function Part1({ data, onResponse, onRespons2 }) {

    return (
        <div className='pb-[50px] bg-[white] rounded-[15px] mt-[20px] border-[1px] p-[15px]'>
            <h1 className='font-bold text-[30px] mt-[20px]'>
                Part 1.1
            </h1>
            {data[0]?.questions?.map((i, index) => (
                <SpeakingCard
                    time={30}
                    data={i}
                    index={index}
                    onResponse={onResponse}
                />))}
            <h1 className='font-bold text-[30px] mt-[20px]'>
                Part 1.2
            </h1>
            <div className='flex items-center mt-[20px] justify-center gap-[20px] flex-wrap'>
                <img className='w-full' src={CONFIG.API_URL + data[1]?.photo_path} alt="Foto" />
            </div>
            {data[1]?.questions?.map((i, index) => (
                <SpeakingCard
                    time={30}
                    data={i}
                    index={index}
                    onResponse={onRespons2}
                />))}
        </div>
    )
}

export default Part1