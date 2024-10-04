import axios from '../Service/axios';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from '../Redux/MyInformation';

function Login() {
    const [values, setValues] = useState(Array(6).fill(''));
    const [isSubmitted, setIsSubmitted] = useState(false); // Состояние для отслеживания отправки
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()
    const { data, status} = useSelector((state)=>state.data)


    useEffect(() => {
        // Предположим, что data содержит информацию о пользователе после получения данных
        if (data) {
            setEdit({
                name: data.name || '',
                surname: data.surname || '',
            });
        }
    }, [data]);

    const inputRefs = useRef([]);

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
                localStorage.setItem('token', response.data.message)
                setActive(true)
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
    }, [values, isSubmitted, status, data, dispatch]);





    const [edit, setEdit] = useState({
        name:'',
        surname:'',
        userId:''
    })
    const EditMyInformation = async (e) => {
        e.preventDefault();

        try {
            const EditData = {
                name: edit.name,
                surname: edit.surname
            };
            await axios.put(`/user/update-information`, EditData,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            window.location.reload()
            showTrue()
            setActive(false)
        } catch (error) {
            console.log(error);
            showErrorToast(error?.response?.data?.message || 'Xato!')
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
            progress: undefined,
            style: {
                backgroundColor: '#1B2A3D',
                color:'white'
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
                color:'white'
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
            progress: undefined,
            style: {
                backgroundColor: '#1B2A3D',
                color:'white'
            }
        });
    };

    const skip = () =>{
        setActive(false)
        window.location.reload()
    }

    return (
        <div className="Login w-full h-screen pt-[200px] relative flex items-baseline justify-center overflow-hidden">
            <div className="Login__wrapper text-center">
                <h1 className="font-bold text-MainColor text-[45px]">
                    Kodni kiriting
                </h1>
                <p className="text-[30px] text-MainColor">
                    <a
                        className="text-MainColor border-b-[3px] border-MainColor"
                        href="https://t.me/CodevanExamify_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        codevan bot
                    </a>{' '}
                    yordamida kodingizni oling
                </p>

                <form className="flex items-center justify-center gap-[20px] mt-[60px]">
                    {values.map((value, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type="text"
                            className="py-[10px] text-center text-[25px] border-[2px] border-MainColor px-[10px] w-[50px] rounded-[16px] "
                            pattern="[0-9]*"
                            maxLength="1"
                            inputMode="numeric"
                        />
                    ))}
                </form>
            </div>
            <div className={`fixed inset-0 top-[-100px] z-50 ${active ? 'block' : 'hidden'}`}>
                
            </div>
            <div className={`LoginModal bg-MainColor p-[20px] z-50 absolute rounded-[10px] w-[35%] h-[300px] transition-opacity duration-500 transform ${active ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}>
                <h2 className='text-[white] text-center text-[30px]'>
                    Edit name
                </h2>
                <form className='flex items-center gap-[20px] flex-col' onSubmit={EditMyInformation}>
                    <label htmlFor="name" className='w-full'>
                        <h3 className='text-[white]'>
                            Name:
                        </h3>
                        <input id='name'
                        value={edit.name}
                        onChange={(e)=>setEdit({...edit, name:e.target.value})}
                        className='w-full px-[10px] py-[5px] rounded-[8px] bg-transparent outline-none border-[2px] border-[white] text-white' type="text" />
                    </label>
                    <label htmlFor="SurName" className='w-full block'>
                        <h3 className='text-[white]'>
                            Surname:
                        </h3>
                        <input 
                        value={edit.surname}
                        onChange={(e)=>setEdit({...edit, surname:e.target.value})}
                        id='SurName' className='w-full px-[10px] py-[5px] rounded-[8px] bg-transparent outline-none border-[2px] border-[white] text-white' type="text" />
                    </label>
                <div className='flex items-center justify-between w-full'>
                <button  type='submit' className='bg-[white] px-[20px] py-[5px] rounded-[8px] text-[20px] border-[2px] transition duration-500 border-[white]  hover:text-[white] hover:bg-transparent '>
                        Edit
                    </button>
                    <span onClick={skip} className='flex items-center gap-[10px] text-white cursor-pointer'>
                        Skip 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z"></path></svg>
                    </span>
                </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
