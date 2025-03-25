import CONFIG from "../../../Service/Config2";

export default function Part4({ data, onAnswerSelect, selectedAnswers }) {
    return (
        <div className="p-4 space-y-8 pb-[100px]">
            <div>
                <p className="text-lg font-semibold">
                    {data?.description}
                </p>
            </div>
            <div className="block">
                <img className="max-w-[800px] mx-auto object-cover" src={CONFIG.API_URL + data?.photo_path} alt="foto" />
            </div>
            <div className="space-y-4 max-w-[700px]">
                {data?.questions?.map((question, index) => (
                    <div key={question.id} className="flex items-center space-x-4">
                        <span className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                            {20 + index}
                        </span>
                        <span className="text-md font-medium">{question?.question}</span>
                        <select
                            value={selectedAnswers[question.id] || ""}
                            className="border w-[200px] border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => onAnswerSelect(question.id, e.target.value, null, "select")}
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            {question?.answers?.map((answer) => (
                                <option key={answer.id} value={answer.id}>
                                    {answer.answer}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
}
