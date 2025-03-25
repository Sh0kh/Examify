import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import { axiosAPI2 } from "../../Service/axios";
import { NavLink } from "react-router-dom";
import ReactLoading from 'react-loading';



export default function MyResultCEFR() {
    const { data } = useSelector((state) => state.data);
    const [ExamData, setExamData] = useState([])
    const [loading, setLoading] = useState(true)

    const getMyResult = async () => {
        try {

            const response = await axiosAPI2.post(`/user/my-exams`, { user_id: data?.id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json"
                }
            })
            setExamData(response?.data)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }


    useEffect(() => {
        getMyResult()
    }, [])

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen'>
                <ReactLoading type="spinningBubbles" color="#000" height={100} width={100} />
            </div>
        );
    }

    return (
        <div className="MyResult__wrapper  flex items-center flex-col gap-[10px] mx-auto">
            {ExamData.length === 0 ? (
                <div className='text-center text-[20px] font-bold h-screen'>No results found.</div>
            ) : (
                ExamData?.map((i) => (
                    <div key={i.id} className='p-[10px] border-[2px] border-[#101624] w-full rounded-[8px] MyResult__card flex items-center justify-between'>
                        <div>
                            <h2 className='font-bold text-[22px]'>Full exam</h2>
                            <div className='flex items-center gap-[5px]'>
                                <span className='font-bold text-[20px]'>Exam name:</span>
                                <span className='text-[16px]'>
                                    {i?.examName}
                                </span>
                            </div>
                            <div className='flex items-center gap-[5px]'>
                                <span className='font-bold text-[20px]'>Date:</span>
                                <span className='text-[16px]'>
                                    {i.start_time.split('T')[0]}
                                </span>
                            </div>
                            <div className='flex items-center gap-[5px]'>
                                <span className='font-bold text-[20px]'>Status:</span>
                                <span className={`block text-[16px] ${i.status === 'checked' ? 'text-[#ff2121]' : 'text-[green]'}`} >
                                    {i.status}, {i.remainSection}
                                </span>
                            </div>
                            <div className='flex items-center gap-[5px]'>
                                <span className='font-bold text-[20px]'>Type:</span>
                                <span className='text-[16px]'>
                                    {i.type}
                                </span>
                            </div>
                        </div>
                        <div className='myResult__grid flex items-center gap-[10px] mt-[15px]'>
                            <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                <h2 className='text-[white] font-bold text-[22px]'>Result</h2>
                                <span className='text-[white] block text-center text-[20px]'>{i.result || 0}</span>
                            </div>
                            <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                <h2 className='text-[white] font-bold text-[22px]'>Overall</h2>
                                <span className='text-[white] block text-center text-[20px]'>{i.score || 0}</span>
                            </div>
                            <NavLink to={`/reading/${i.examId}`}>
                                <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                    <h2 className='text-[white] font-bold text-[22px]'>Reading</h2>
                                    <span className='text-[white] block text-center text-[20px]'>{i?.section_scores[1]?.score || 0}</span>
                                </div>
                            </NavLink>
                            <NavLink to={`/speaking/${i.examId}`}>
                                <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                    <h2 className='text-[white] font-bold text-[22px]'>Speaking</h2>
                                    <span className='text-[white] block text-center text-[20px]'>{i?.section_scores[2]?.score || 0}</span>
                                </div>
                            </NavLink>
                            <NavLink to={`/writing/${i.examId}`}>
                                <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                    <h2 className='text-[white] font-bold text-[22px]'>Writing</h2>
                                    <span className='text-[white] block text-center text-[20px]'>{i?.section_scores[3]?.score || 0}</span>
                                </div>
                            </NavLink>
                            <NavLink to={`/cefr/listening/${i.id}/${i?.section_scores[0]?.id}`}>
                                <div className='rounded-[8px] bg-[#101624] p-[10px] px-[5px] w-[120px] text-center cursor-pointer'>
                                    <h2 className='text-[white] font-bold text-[22px]'>Listening</h2>
                                    <span className='text-[white] block text-center text-[20px]'>{i?.section_scores[0]?.score || 0}</span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}