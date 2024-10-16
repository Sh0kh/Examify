import React, { useState } from 'react'
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../../Redux/ComponentSlice';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Reading() {
    const navigate = useNavigate()
    const { ID } = useParams()
    const [active, setActive] = useState(1);
    const [answers, setAnswers] = useState(Array(40).fill(''))

    const parts = [
        { id: 1, component: <Part1 updateAnswers={(index, data) => updateAnswers(index, data, 0)} answers={answers.slice(0, 13)} /> },
        { id: 2, component: <Part2 updateAnswers={(index, data) => updateAnswers(index, data, 13)} answers={answers.slice(13, 26)} /> },
        { id: 3, component: <Part3 updateAnswers={(index, data) => updateAnswers(index, data, 26)} answers={answers.slice(26, 40)} /> },
    ];

    const out = () => {
        navigate(-1); 
        setTimeout(() => {
            window.location.reload(); 
        }, 1000); 
    };

    const updateAnswers = (index, data, offset) => {
        const adjustedIndex = index + offset;
        const updateAnswers = [...answers];
        updateAnswers[adjustedIndex] = data;
        setAnswers(updateAnswers)
    }

    const dispatch = useDispatch()
    const handleNext = () => {
        SendUserAnswer()
    }


    const SendUserAnswer = async () => {
        try {
            const userAnswersArray = answers.map(answers => {
                return answers;
            })

            const answer = {
                examId: ID,
                sectionType: 'READING',
                userAnswer: userAnswersArray
            }
            await axios.post('/ielts/exam/attempt/create/inline', answer, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            showSuccessToast()
            dispatch(setComponent('SPEAKING'))
        } catch (error) {
            if (401 === error.response.data.status) {
                localStorage.clear(); // Очистка localStorage
                navigate('/login'); // Переход на страницу входа
            }     
            showErrorToast(error.response?.data?.message || 'Error!')
        }
    }


    const showSuccessToast = () => {
        toast.success('Muvaffaqiyatli!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#1B2A3D',
                color: 'white'
            }
        });
    };

    const showErrorToast = (message) => {
        toast.error(message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                backgroundColor: '#1B2A3D',
                color: 'white'
            }
        });
    };

    return (
        <div className='Reading'>
            <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Reading  exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button onClick={out} className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
                            Leave exam
                        </button>
                        <button
                            onClick={handleNext}
                            className='bg-green-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-green-500 hover:bg-transparent hover:text-green-500'>
                            Next exam
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-[5px]'>
                <div className='flex items-center gap-[3px] mt-[5px]'>
                    {parts.map(part => (
                        <button
                            key={part.id}
                            onClick={() => {
                                setActive(part.id);
                            }}
                            className={`border-[1px] border-[#D6D4D4] px-[10px] py-[7px] font-bold bg-[#ababab83] ${active === part.id ? 'bg-transparent' : ''}`}
                        >
                            Part {part.id}
                        </button>
                    ))}
                </div>
                <div>
                    {parts.find(part => part.id === active)?.component}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Reading