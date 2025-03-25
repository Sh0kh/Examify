import { axiosAPI1 } from '../../Service/axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux'; // Import useDispatch
import 'react-toastify/dist/ReactToastify.css';
import { setComponent } from '../../Redux/ComponentSlice'; // Import the setComponent action

function TestModal({ isOpen, onClose, id }) {
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize dispatch

    const CreateExam = async () => {
        try {
            const response = await axiosAPI1.post(
                '/ielts/exam/create',
                null,
                {
                    params: { bookId: id },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            const examID = response.data.message;
            dispatch(setComponent('LISTENING'));
            navigate(`/book${id}/${examID}`);
            showSuccessToast();

        } catch (error) {
            showErrorToast(error?.response?.data?.message || 'Error!');
            console.log(error);
            if (error.response?.status === 401) {
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
                className={`TestModal p-4 sm:p-6 bg-white rounded-[8px] w-[10   0%] sm:w-[50%] lg:w-[28%] transform transition-all duration-500 
    ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10'}`}

                onClick={(e) => e.stopPropagation()} // Stops closing when clicking inside the modal
            >
                <div className='flex items-center justify-between mb-[10px]'>
                    <h1 className='text-lg font-semibold'>
                        Ready to submit tests?
                    </h1>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
                </div>
                <p className='text-[15px] mb-4'>
                    Please be aware that if you exit full screen mode or switch to another
                    tab during the exam, you will be automatically terminated from the
                    exam.
                </p>
                <div className='flex items-center justify-end gap-[10px]'>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={CreateExam}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Start
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default TestModal;
