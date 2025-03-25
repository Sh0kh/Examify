import logo from '../images/logo.png';
import MultiLevelBuyModal from '../Components/Multi-Level/MultiLevelBuyModal';
import { useEffect, useState } from 'react';
import { axiosAPI2 } from '../Service/axios';
import { FaArrowRight } from "react-icons/fa";
import ReactLoading from 'react-loading';
import PaymentErrorModal from '../Components/Multi-Level/PaymentErrorModal';

export default function MultiLevel() {
    const [error, setError] = useState(false);
    const [start, setStart] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ExamID, setExamID] = useState(null);

    const getAllMultiLevelExam = async () => {
        try {
            const response = await axiosAPI2.get('/user/exams', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response?.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllMultiLevelExam();
    }, []);

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <ReactLoading type='spinningBubbles' color='#000' height={100} width={100} />
            </div>
        );
    }

    return (
        <section className='Test min-h-screen px-4 py-10'>
            <div className='container'>
                <h1 className='text-3xl font-bold'>Multi Level</h1>
                <p className="text-gray-600 mt-2">
                    Dear user. The Examify team wishes you good luck and we want you to pass
                    the tests successfully.
                </p>
                <div className='Test__wrapper mt-6'>
                    {data && data.length > 0 ? (
                        data.map((i, index) => (
                            <div onClick={() => setExamID(i?.id)} key={index} className='flex flex-col items-center'>
                                <div
                                    onClick={() => setStart(true)}
                                    className='p-6 rounded-2xl h-[314px] flex flex-col justify-between text-white bg-gradient-to-r from-blue-500 to-green-400 shadow-lg cursor-pointer transition duration-500 hover:shadow-xl'>
                                    <h2 className='text-xl font-semibold flex items-center space-x-2'>
                                        <img src={logo} alt='Examify logo' className='w-[25px] h-[34px]' />
                                        <span>Examify</span>
                                    </h2>
                                    <div>
                                        <h3 className='text-lg mt-2'>{i?.name}</h3>
                                        <span
                                            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium bg-white text-black
                                              `}
                                        >
                                            Available
                                        </span>
                                        <p className='mt-3 text-sm'>Prepare yourself for the best experience!</p>
                                    </div>
                                    <button className='mt-4 flex items-center text-sm font-medium text-white'>
                                        Start <FaArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='h-screen flex items-center justify-center'>
                            <h1 className='text-MainColor text-[30px]'>Data empty</h1>
                        </div>
                    )}
                </div>
            </div>
            <MultiLevelBuyModal id={ExamID} isOpen={start} onClose={() => setStart(false)} Error={()=>setError(true)}/>
            <PaymentErrorModal  isOpen={error} onClose={()=>setError(false)}/>

        </section>
    );
}
