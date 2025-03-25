
export default function Part1({ data, onAnswerSelect, selectedAnswers }) {
    return (
        <div className="p-4 mx-auto space-y-8 pb-[100px]">
            <div>
                <p className="text-lg font-semibold">
                    {data?.description}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {data?.questions?.map((question, qIndex) => (
                    <div key={qIndex} className="flex items-start ">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                            {qIndex + 1}
                        </div>
                        <div className="space-y-2">
                            {question?.answers?.map((answer, aIndex) => (
                                <label key={aIndex} className="block">
                                    <input
                                        type="radio"
                                        name={`question-${qIndex}`}
                                        className="mr-2"
                                        value={answer.id}
                                        checked={selectedAnswers[question.id] === answer.id}
                                        onChange={() => onAnswerSelect(question.id, answer.id)}
                                    />
                                    {answer?.answer}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
