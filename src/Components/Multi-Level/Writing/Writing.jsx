import React, { useEffect, useState } from 'react';
import Part1 from './Part1.jsx';
import Part2 from './Part2';


import { useDispatch } from 'react-redux';
import { setComponent } from '../../../Redux/ComponentSlice';
import { useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { axiosAPI2 } from '../../../Service/axios.js';
import { setNextSection } from '../../../Redux/NextSection.js';
// import { setNextSection } from '../../../Redux/NextSection.js';


function Writing() {
    const { ID } = useParams()
    const navigate = useNavigate();
    const [active, setActive] = useState(1);
    const dispatch = useDispatch();
    const [timeLeft, setTimeLeft] = useState(null);
    const [part1Text, setPart1Text] = useState('');
    const [part2Text, setPart2Text] = useState('');
    const [loading, setLoading] = useState(false)




    const NextSection = useSelector((state) => state.exam.NextSection);
    useEffect(() => {
        if (NextSection?.next_section?.duration) {
            setTimeLeft(NextSection.next_section.duration * 60);
        }
    }, [NextSection]);

    useEffect(() => {
        if (timeLeft !== null) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [timeLeft]);
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };




    console.log(NextSection?.next_section)


    const out = () => {
        navigate(-1);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
    const parts = [
        {
            id: 1,
            component: <Part1
                data={NextSection?.next_section?.parts[0]}
                onTextChange={setPart1Text}
                value={part1Text}
            />
        },
        {
            id: 2, component: <Part2
                data={NextSection?.next_section?.parts[1]}
                onTextChange={setPart2Text}
                value={part2Text}
            />
        },
    ];
    const checkPart = async () => {
        setLoading(true)
        try {
            const payload = {
                section_id: NextSection?.next_section?.id,
                exam_id: ID,
                parts: [
                    {
                        id: NextSection?.next_section?.parts[0]?.id,
                        part_type: "writing",
                        answers: [
                            {
                                question_id: NextSection?.next_section?.parts[0]?.questions[0]?.id,
                                answer_text: part1Text,
                                question_type: "essay"
                            }
                        ]
                    },
                    {
                        id: NextSection?.next_section?.parts[1]?.id,
                        part_type: "writing",
                        answers: [
                            {
                                question_id: NextSection?.next_section?.parts[0]?.questions[0]?.id,
                                answer_text: part2Text,
                                question_type: "essay"
                            }
                        ]
                    },
                ],
            };

            const response = await axiosAPI2.post(`/user/check`, payload, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });

            dispatch(setNextSection(response.data));
            dispatch(setComponent('SPEAKING'));
        } catch (error) {
            console.error("Ошибка при отправке ответов", error);
        } finally {
            setLoading(false)
        }
    };



    return (
        <div className='Reading  min-h-screen'>
            <div className='Book__header p-[10px] py-[20px] bg-[white] border-b-[1px] border-[#E9EAEB]'>
                <div className='Container'>
                <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className='text-[black] text-[28px] font-bold'>Writing exam</h2>
                        <h2>{formatTime(timeLeft)}</h2>
                        <div className="flex items-center gap-3 flex-wrap">
                            <button onClick={out} className='bg-[white] text-[16px] shadow-sm px-[50px] font-[600] py-[7px] rounded-[8px] text-[#414651] transition duration-500 border-[1px] border-[#D5D7DA] hover:opacity-[0.5]'>
                                Leave exam
                            </button>
                            <button
                                onClick={checkPart}
                                disabled={loading}
                                className={`bg-[#2970FF] px-[50px] font-bold py-[7px] shadow-sm rounded-[8px] text-white transition duration-500 border-[2px] border-[#2970FF]
        ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent hover:text-[#2970FF]"}
    `}
                            >
                                {loading ? "Loading..." : "Next Exam"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-[10px]'>
            <div className="flex items-center mt-6 flex-wrap gap-2">
                    {parts.map(part => (
                        <button
                            key={part.id}
                            onClick={() => setActive(part.id)}
                            className={`border-[1px] border-[#F5F5F5] px-[24px] py-[12px] font-bold  ${active === part.id ? 'bg-[#2970FF] text-[white]' : 'bg-[white]'}`}
                        >
                            <span className='Part__words'>Part</span>{' '}
                            {part.id}
                        </button>
                    ))}
                </div>
                <div>
                    {parts.find(part => part.id === active)?.component}
                </div>
            </div>
        </div>
    );
}

export default Writing;
