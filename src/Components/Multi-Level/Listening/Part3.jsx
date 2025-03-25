export default function Part3({ data, onAnswerSelect, selectedAnswers }) {
    const handleSelectChange = (question_id, event) => {
        const answer_id = event.target.value;
        onAnswerSelect(question_id, answer_id);
    };

    return (
        <div className="p-4 space-y-8 pb-[100px]">
            <div>
                <p className="text-lg font-semibold">{data?.description}</p>
            </div>
            <div className="space-y-4 max-w-[700px]">
                {data?.questions?.map((i, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <span className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                            {15 + index}
                        </span>
                        <span className="text-md font-medium">Speaker... {index + 1}</span>
                        <select
                            className="border w-[200px] border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleSelectChange(i.id, e)}
                            value={selectedAnswers[i.id] || ""}
                        >
                            <option value="" disabled>
                                Select
                            </option>
                            {i?.answers?.map((answer, index) => (
                                <option key={index} value={answer?.id}>
                                    {answer?.answer || answer}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}
