import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


// Individual styled accordions
const StyledAccordion1 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));

const StyledAccordion2 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));

const StyledAccordion3 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));

const StyledAccordion4 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));

const StyledAccordion5 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
    borderRadius: '8px',
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        backgroundColor: '#1B2A3D',
    },
}));

const StyledAccordion6 = styled(Accordion)(({ theme }) => ({
    backgroundColor: '#1B2A3D',
    padding: '10px',
    color: 'white',
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


    useEffect(() => {
        gsap.fromTo(
          '.FAQ__title',
          { opacity: 0 },
          {
            opacity: 1,
            ease: 'power3.out',
            duration: 0.5,
            delay: 0.2,
            scrollTrigger: {
              trigger: '.FAQ__title',
              start: 'top 90%',
            },
          }
        );
        gsap.fromTo(
          '.HFAQ__wrapper',
          { opacity: 0 },
          {
            opacity: 1,
            ease: 'power3.out',
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: '.HFAQ__wrapper',
              start: 'top 95%',
            },
          }
        );
      }, []);

    return (
        <section className='HFAQ pb-[100px] mt-[80px]'>
            <div className='Container'>
                <h1 className='FAQ__title text-MainColor text-center font-bold text-[55px] cursor-pointer transition-all duration-700 hover:tracking-[20px]'>
                    FAQ
                </h1>
                <div className='HFAQ__wrapper flex justify-between gap-[30px] mt-[20px]'>
                    <div className='flex gap-[10px] flex-col'>
                        <StyledAccordion1 expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
                                How closely does your mock exam resemble the actual IELTS test?
                            </AccordionSummary>
                            <AccordionDetails>
                                Our mock exam is designed to mimic the actual IELTS test as closely as possible. From the format and structure to the types of questions, we strive to provide an authentic experience. This means you’ll encounter a variety of tasks that reflect what you’ll face on test day, helping you become familiar with the exam's nuances!
                            </AccordionDetails>
                        </StyledAccordion1>

                        <StyledAccordion2 expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
                                Can I take the mock exam multiple times?
                            </AccordionSummary>
                            <AccordionDetails>
                                Absolutely! You can take the mock exam as many times as you’d like. Each attempt allows you to practice and refine your skills, and you'll have the opportunity to track your progress over time. It's a fantastic way to build confidence and see how you improve with each attempt!
                            </AccordionDetails>
                        </StyledAccordion2>

                        <StyledAccordion3 expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
                                
                                Is there a time limit for each section of the mock exam, similar to the real IELTS test?
                            </AccordionSummary>
                            <AccordionDetails>
                               
                                Yes, indeed! Each section of our mock exam is timed to mirror the actual IELTS test conditions. This helps you practice managing your time effectively and ensures you’re fully prepared for the pacing of the real exam. Get ready to challenge yourself and build your test-taking stamina!
                            </AccordionDetails>
                        </StyledAccordion3>
                    </div>

                    <div className='flex items-center gap-[10px] flex-col'>
                        <StyledAccordion4 expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary aria-controls="panel4-content" id="panel4-header">
                                Are there separate mock exams for Academic and General Training modules?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, we offer distinct mock exams for both the Academic and General Training modules. This ensures that you can focus on the specific skills and question types relevant to your chosen path. Whether you’re aiming for university admission or migrating for work, we’ve got you covered!
                            </AccordionDetails>
                        </StyledAccordion4>

                        <StyledAccordion5 expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary aria-controls="panel5-content" id="panel5-header">
                            How long does it take to receive my results after completing the mock exam?
                            </AccordionSummary>
                            <AccordionDetails>
                            You'll receive your results shortly after completing the mock exam—typically within a few minutes! This prompt feedback allows you to review your performance and make necessary adjustments to your study plan, ensuring you're always on the path to success.

                            </AccordionDetails>
                        </StyledAccordion5>

                        <StyledAccordion6 expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                            <AccordionSummary aria-controls="panel6-content" id="panel6-header">
                                Do you provide detailed feedback on my performance, especially for the Writing and Speaking sections?
                            </AccordionSummary>
                            <AccordionDetails>
                                Absolutely! We believe in the power of constructive feedback. After your mock exam, you’ll receive a detailed analysis of your performance, especially in the Writing and Speaking sections. Our insights will help you understand your strengths and areas for improvement, giving you the tools to enhance your skills effectively.
                            </AccordionDetails>
                        </StyledAccordion6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
