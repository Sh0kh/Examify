import { useNavigate } from "react-router-dom";
import { axiosAPI2 } from "../../Service/axios";
import Swal from 'sweetalert2'
import Check from '../../images/BuyCheck.png'

export default function MultiLevelBuyModal({ isOpen, onClose, id, Error }) {


    const navigate = useNavigate()

    const BuyExam = async (type) => {
        try {
            const formData = new FormData();
            formData.append('mock_exam_id', id);
            formData.append('type', type);


            const response = await axiosAPI2.post(`/user/buy-exam`, formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate(`/multi-level/exam/${response?.data?.exam?.id}`)
            Swal.fire({
                title: 'Successful!',
                icon: 'success',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        } catch (error) {
            Error()
            onClose()
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Error.',
                icon: 'error',
                position: 'top-end',
                timer: 3000,
                timerProgressBar: true,
                showCloseButton: true,
                toast: true,
                showConfirmButton: false,
            });
        }
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
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex items-center justify-between mb-[10px]'>
                    <div>
                        <img src={Check} alt="Foto" />
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
                </div>
                <h2 className="text-lg font-semibold">What will you choose to have your test checked by AI or Human
                    ?</h2>
                <div className="flex items-center justify-center gap-[12px] mt-[10px]">
                    <button onClick={(e) => BuyExam('ai')} className="bg-[#2970FF] text-[white] p-[10px] w-full rounded-[10px] px-[20px] border-[2px] border-[#2970FF] transition duration-500 hover:bg-transparent hover:text-[#2970FF]">
                        AI
                    </button>
                    <button onClick={(e) => BuyExam('human')} className="bg-[#2970FF] text-[white] p-[10px] w-full rounded-[10px] px-[20px] border-[2px] border-[#2970FF] transition duration-500 hover:bg-transparent hover:text-[#2970FF]">
                        Human
                    </button>
                </div>
            </div>
        </div >
    )
}