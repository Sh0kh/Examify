import axios from '../Service/axios';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from '../Redux/MyInformation';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState(Array(6).fill(''));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [active, setActive] = useState(false);
    const [edit, setEdit] = useState({
        name: '',
        surname: '',
        userId: ''
    });
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.data);
    const inputRefs = useRef([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    useEffect(() => {
        if (data) {
            setEdit({
                name: data.name || '',
                surname: data.surname || '',
                userId: data.userId || ''
            });
        }
    }, [data]);

    const handleChange = (e, index) => {
        const inputValue = e.target.value;

        if (inputValue.length <= 1 && /^[0-9]*$/.test(inputValue)) {
            const newValues = [...values];
            newValues[index] = inputValue;
            setValues(newValues);

            if (inputValue && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else if (inputValue === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e, index) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').split('').slice(0, 6);
        const newValues = [...values];

        for (let i = 0; i < pasteData.length; i++) {
            if (index + i < newValues.length) {
                newValues[index + i] = pasteData[i].match(/^[0-9]$/) ? pasteData[i] : '';
            }
        }

        setValues(newValues);
        inputRefs.current[Math.min(index + pasteData.length, 5)].focus();
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && values[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        const auth = async () => {
            try {
                const code = values.join('');
                const response = await axios.post(`/auth/login/${code}`);
                showSuccessToast();
                localStorage.setItem('token', response.data.message);
                setActive(true);
                dispatch(fetchData());
            } catch (error) {
                showErrorToast(error.response?.data?.message || 'Xato!');
            }
        };

        if (values.every(value => value !== '') && !isSubmitted) {
            setIsSubmitted(true);
            auth();
        } else if (values.some(value => value === '')) {
            setIsSubmitted(false);
        }
    }, [values, isSubmitted, dispatch]);

    const EditMyInformation = async (e) => {
        e.preventDefault();
        try {
            const EditData = {
                name: edit.name,
                surname: edit.surname
            };
            await axios.put(`/user/update-information`, EditData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            showTrue();
            setActive(false);
            navigate('/');
        } catch (error) {
            showErrorToast(error?.response?.data?.message || 'Xato!');
        }
    };

    const showSuccessToast = () => {
        toast.success('To`g`ri!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
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
            style: {
                backgroundColor: '#1B2A3D',
                color: 'white'
            }
        });
    };

    const showTrue = () => {
        toast.success('Muvaffaqiyatli o`zgartirildi', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                backgroundColor: '#1B2A3D',
                color: 'white'
            }
        });
    };

    const skip = () => {
        setActive(false);
        navigate('/');
    };

    return (
        <div className="Login w-full h-screen flex items-center justify-center bg-white relative">
            <div className="Login__wrapper text-center bg-white rounded-lg shadow-lg p-10">
                <h1 className="font-bold text-3xl text-gray-800 mb-4">Kodni kiriting</h1>
                <p className="text-lg text-gray-600 mb-6">
                    <a className="text-blue-500 border-b-2 border-blue-500" href="https://t.me/codevanbot" target="_blank" rel="noopener noreferrer">
                        codevan bot
                    </a> yordamida kodingizni oling
                </p>

                <form className="flex items-center justify-center gap-2 mb-6">
                    {values.map((value, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onPaste={(e) => handlePaste(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type="text"
                            className="py-2 text-center text-2xl border border-gray-300 rounded-lg w-12 transition duration-300 focus:outline-none focus:border-blue-500"
                            pattern="[0-9]*"
                            maxLength="1"
                            inputMode="numeric"
                        />
                    ))}
                </form>

                {/* Modal for Editing Information */}
                {active && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                        <div className="LoginModal bg-white p-6 rounded-lg w-80 h-auto transition-opacity duration-500 transform z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h2 className='text-black text-center text-2xl mb-4'>Edit Name</h2>
                            <form className='flex flex-col gap-4' onSubmit={EditMyInformation}>
                                <label htmlFor="name" className='flex flex-col'>
                                    <span className='text-black'>Name:</span>
                                    <input
                                        id='name'
                                        value={edit.name}
                                        onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                                        className='w-full px-3 py-2 rounded-lg bg-transparent border-2 border-gray-300 text-black focus:outline-none'
                                        type="text"
                                        required
                                    />
                                </label>
                                <label htmlFor="SurName" className='flex flex-col'>
                                    <span className='text-black'>Surname:</span>
                                    <input
                                        id='SurName'
                                        value={edit.surname}
                                        onChange={(e) => setEdit({ ...edit, surname: e.target.value })}
                                        className='w-full px-3 py-2 rounded-lg bg-transparent border-2 border-gray-300 text-black focus:outline-none'
                                        type="text"
                                        required
                                    />
                                </label>
                                <div className='flex items-center justify-between mt-4'>
                                    <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-300 shadow-md hover:bg-blue-600'>
                                        Edit
                                    </button>
                                    <span onClick={skip} className='text-blue-500 cursor-pointer hover:underline'>
                        Skip
                    </span>
                                </div>
                            </form>
                        </div>
                    </>
                )}

            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
