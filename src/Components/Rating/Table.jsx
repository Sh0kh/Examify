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
function Table() {
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
                    <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center gap-[5px]'>
                                    <span>1.</span>
                                    <span>
                                        Alisher Batman
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Book
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        12.09.2024
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        7.5
                                    </span>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='flex gap-[10px] flex-col'>
                                <h3>
                                    Listening: 6
                                </h3>
                                <h3>
                                    Reading: 7
                                </h3>
                                <h3>
                                    Writing: 6
                                </h3>
                                <h3>
                                    Speaking: 8
                                </h3>
                            </div>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center gap-[5px]'>
                                    <span>1.</span>
                                    <span>
                                        Alisher Batman
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        Book
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        12.09.2024
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        7.5
                                    </span>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='flex gap-[10px] flex-col'>
                                <h3>
                                    Listening: 6
                                </h3>
                                <h3>
                                    Reading: 7
                                </h3>
                                <h3>
                                    Writing: 6
                                </h3>
                                <h3>
                                    Speaking: 8
                                </h3>
                            </div>
                        </AccordionDetails>
                    </CustomAccordion>
                </div>
            </div>
        </div>
    )
}

export default Table