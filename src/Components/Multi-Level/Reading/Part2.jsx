import React from 'react';
import CONFIG from '../../../Service/Config2';
import DOMPurify from 'dompurify';

function Part2({ data, selectedAnswers, onAnswerSelect }) {

    const handleSelectChange = (question_id, event) => {
        const answer_id = event.target.value; // Получаем ID ответа
        onAnswerSelect(question_id, answer_id);
    };

    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px]  pt-[10px]'>
            <div className='overflow-y-scroll h-screen w-[50%] px-[15px] pb-[150px] border-[1px] bg-[white] rounded-[15px]'>
                <strong className='my-[15px] text-[20px] block'>Part 2</strong>
                <img className="w-[400px]" src={CONFIG.API_URL + data?.photo_path} alt="foto" />
            </div>
            <div className='ReadingLine w-full bg-MainColor h-[5px] my-[10px] hidden'></div>
            <div className='overflow-y-scroll h-screen pb-[150px] w-[50%] border-[1px] bg-[white] p-[15px] rounded-[15px]'>
                <div className="p-4 space-y-8 pb-[100px] max-w-3xl mx-auto">
                    <div>
                        <p className="text-lg font-semibold"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(data?.right_text)
                            }}>
                        </p>
                    </div>
                    <div className="space-y-4">
                        {data?.questions?.map((i, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                                    {6 + index}
                                </div>                                <select
                                    onChange={(e) => handleSelectChange(i.id, e)}
                                    value={selectedAnswers[i.id] || ""}
                                    className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">

                                    <option value="" disabled>
                                        {i?.question}
                                    </option>
                                    {i?.answers?.map((option, Izn) => (
                                        <option key={Izn} value={option.id}>
                                            {option?.answer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Part2;
