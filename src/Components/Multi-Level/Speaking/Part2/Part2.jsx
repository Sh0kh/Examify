import React from 'react'
import CONFIG from '../../../../Service/Config2'
import SpeakingCard from '../SpeakingCard'


function Part2({ data, onResponse }) {


    return (
        <div className='Container'>
            <div className='pb-[50px]'>
                <div className='flex items-center mt-[20px] justify-center gap-[20px] flex-wrap'>
                    <img className='w-[300px]' src={CONFIG.API_URL + data?.photo_path} alt="foto" />
                </div>
                {data?.questions?.map((i, index) => (
                    <SpeakingCard
                        time={120}
                        data={i}
                        index={index}
                        onResponse={onResponse}
                    />
                ))}
            </div>
        </div>
    )
}

export default Part2