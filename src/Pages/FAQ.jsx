import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '15px',
    color: 'white',
    marginBottom:'20px',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));
function FAQ() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='FAQ pt-[150px] pb-[100px]'>
            <div className='Container'>
                <h1 className='text-MainColor mb-[20px] text-center font-bold text-[55px] cursor-pointer transition-all duration-700 hover:tracking-[20px]'>
                    FAQ
                </h1>
                <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
                <CustomAccordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Accordion 1
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum enim illo deserunt quidem quae perspiciatis. Tenetur laboriosam et, numquam doloremque exercitationem repellat facilis doloribus voluptates a obcaecati dolor. Est?
                    </AccordionDetails>
                </CustomAccordion>
            </div>
        </div>
    )
}

export default FAQ