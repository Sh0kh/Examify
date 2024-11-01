import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '15px',
    color: 'white',
    marginBottom: '20px',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));
function Table({ data }) {
    
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='RatingTable pb-[80px]'>
            <div className='Container'>
                <div>
                    <div className='w-full bg-MainColor p-[20px] rounded-[8px] flex items-center mb-[20px] justify-between'>
                        <div className='flex items-center gap-[30px]'>
                            <span className='text-white'>
                                №
                            </span>
                            <span className='text-white'>
                                Name
                            </span>
                        </div>
                        <div>
                            <span className='text-white'>
                                Book
                            </span>
                        </div>
                        <div>
                            <span className='text-white'>
                                Date
                            </span>
                        </div>
                        <div>
                            <span className='text-white'>
                                Score
                            </span>
                        </div>
                    </div>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((i, index) => (
                            <CustomAccordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <div className='flex items-center justify-between w-full'>
                                        <div className='flex items-center gap-[5px]'>
                                            <span>{index + 1}.</span>
                                            <span>
                                                {i.user?.name}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {i?.bookName}
                                            </span>
                                        </div>
                                        <div>
                                            <span className='block'>
                                                {i.createdAt.split('T')[0]}
                                            </span>
                                            <span className='block text-center text-[11px]'>
                                                {i?.createdAt.slice(11, 16)}
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                {i?.overall}
                                            </span>
                                        </div>
                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='flex gap-[10px] flex-col'>
                                        <h3>
                                            Listening: {i?.listening === 'N/A' ? 'Part not started'  : i?.listening  }
                                        </h3>
                                        <h3>
                                            Reading: {i?.reading === 'N/A' ? 'Part not started' : i?.reading}
                                        </h3>
                                        <h3>
                                            Writing: {i?.writing === 'N/A' ? 'Part not started' : i?.writing}
                                        </h3>
                                        <h3>
                                            Speaking:{i?.speaking === 'N/A' ?  'Part not started' : i?.speaking} 
                                        </h3>
                                    </div>
                                </AccordionDetails>
                            </CustomAccordion>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Table