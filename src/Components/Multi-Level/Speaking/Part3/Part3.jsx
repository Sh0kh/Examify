import React from 'react'
import Speaking1 from './Speaking1'


function Part3({ data, onResponse }) {



    return (
        <div className='Container'>
            <div className='pb-[50px]'>
                <Speaking1 onResponse={onResponse} data={data} />
            </div>
        </div>
    )
}

export default Part3