import React, { useState, useEffect } from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
import Part4 from './Part4';
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../../Redux/ComponentSlice';
import axios from '../../../../Service/axios';
import { useNavigate, useParams } from 'react-router-dom';
import audioFile from './listening_audio_dce7445b-535f-4522-80bd-9eefb6bf9abc.mp3';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Listening() {
    const navigate = useNavigate();
    const { ID } = useParams();
    const [active, setActive] = useState(1);
    const [answers, setAnswers] = useState(Array(40).fill('')); // Adjust size if needed
    const dispatch = useDispatch();

    // Managing audio state
    const [audio] = useState(new Audio(audioFile));
    const [isListeningActive, setIsListeningActive] = useState(false); // Manage if the component is active

    const out = () => {
        navigate(-1); 
        setTimeout(() => {
            window.location.reload(); 
        }, 1000); 
    };

    const parts = [
        { id: 1, component: <Part1 updateAnswers={(index, data) => updateAnswers(index, data, 0)} answers={answers.slice(0, 10)} /> },
        { id: 2, component: <Part2 updateAnswers={(index, data) => updateAnswers(index, data, 10)} answers={answers.slice(10, 20)} /> },
        { id: 3, component: <Part3 updateAnswers={(index, data) => updateAnswers(index, data, 20)} answers={answers.slice(20, 30)} /> },
        { id: 4, component: <Part4 updateAnswers={(index, data) => updateAnswers(index, data, 30)} answers={answers.slice(30, 40)} /> },
    ];

    const updateAnswers = (index, data, offset) => {
        const adjustedIndex = index + offset; // Смещение для текущей части
        const updatedAnswers = [...answers]; // Создаем копию массива
        updatedAnswers[adjustedIndex] = data; // Обновляем нужный элемент
        setAnswers(updatedAnswers); // Устанавливаем обновленный массив в состояние
    };

    // Play audio only when component is active
    useEffect(() => {
        if (isListeningActive) {
            const timer = setTimeout(() => {
                audio.play().catch(error => {
                    console.error('Audio play failed:', error);
                });
            }, 1000);

            return () => {
                clearTimeout(timer);
                audio.pause(); // Pause audio when the component is deactivated
            };
        }
    }, [isListeningActive, audio]);

    useEffect(() => {
        setIsListeningActive(true); // Mark component as active when loaded

        return () => {
            setIsListeningActive(false); // Mark component as inactive when unmounted or navigated away
        };
    }, []);

    const handleNext = () => {
        SendUserAnswer();
        audio.pause();
    };

    const SendUserAnswer = async () =>{
        try{
            const userAnswersArray = answers.map(answer => answer);
    
            const answer = {
                examId: ID,
                sectionType: 'LISTENING',
                userAnswer: userAnswersArray 
            };

            await axios.post('/ielts/exam/attempt/create/inline', answer, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, 
                },
            });
            showSuccessToast();
            dispatch(setComponent('READING'));
        } catch (error) {
            console.log(error);
            showErrorToast(error.response?.data?.message || 'Xato!');
            if (401 === error.response.data.status) {
                localStorage.clear(); // Clear localStorage
                navigate('/login'); // Redirect to login page
            }            
        }
    };

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
                color: 'white',
            },
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
                color: 'white',
            },
        });
    };

    return (
        <div className='Listening'>
            <div className='Book__header p-[10px] bg-[#b4b0b08c]'>
                <div className='flex items-center justify-between'>
                    <h2>Listening exam</h2>
                    <div className='flex items-center gap-[10px]'>
                        <button onClick={out} className='bg-[red] px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-[red] hover:bg-transparent hover:text-[red]'>
                            Leave exam
                        </button>
                        <button
                            onClick={handleNext}
                            className='bg-green-500 px-[20px] font-bold py-[7px] rounded-[8px] text-[white] transition duration-500 border-[2px] border-green-500 hover:bg-transparent hover:text-green-500'
                        >
                            Next exam
                        </button>
                    </div>
                </div>
            </div>
            <div className='Container'>
                <div className='flex items-center gap-[3px] mt-[30px]'>
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
    );
}

export default Listening;
