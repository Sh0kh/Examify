import axios from '../../Service/axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'; // Import useDispatch
import 'react-toastify/dist/ReactToastify.css';
import { setComponent } from '../../Redux/ComponentSlice'; // Import the setComponent action

function TestModal({ isOpen, onClose }) {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch

    const CreateExam = async () => {
        try {
            const response = await axios.post(
                '/ielts/exam/create',
                null,
                {
                    params: { bookId: 1 },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            const examID = response.data.message;
            // Dispatch action to set the current component to 'LISTENING'
            dispatch(setComponent('LISTENING'));
            navigate(`/book1/${examID}`);
            showSuccessToast();

        } catch (error) {
            showErrorToast(error?.response?.data?.message || 'Error!');
            console.log(error);
            if(error.response?.status === 401){
                navigate('/login')
            }
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
        <div
            onClick={onClose}
            className={`fixed inset-0 bg-[#0000006b] z-50 flex items-center justify-center transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <div
                className={`TestModal p-[10px] bg-MainColor rounded-[8px] w-[20%] py-[30px] transform transition-all duration-500 ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10'
                    }`}
                onClick={(e) => e.stopPropagation()} // Stops closing when clicking inside the modal
            >
                <h2 className="text-center text-[white] text-[30px]">Test ?</h2>
                <div className="flex items-center justify-center gap-[30px] mt-[10px]">
                    <button onClick={CreateExam} className="bg-[white] p-[10px] rounded-[5px] px-[20px] border-[2px] transition duration-500 hover:bg-transparent hover:text-[white]">
                        Yes
                    </button>
                    <button onClick={onClose} className="bg-[white] p-[10px] rounded-[5px] px-[20px] border-[2px] transition duration-500 hover:bg-transparent hover:text-[white]">
                        No
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default TestModal;
