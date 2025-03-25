export default function Part5({ data, onAnswerSelect, selectedAnswers }) {
    return (
        <div className="p-4  space-y-8 pb-[100px]">
            <div>
                <p className="text-lg font-semibold">
                    {data?.description}
                </p>
            </div>
            {data?.questions?.map((i, index) => (
                < div key={index}>
                    <div className="flex items-center mb-[10px]">
                        <div className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                            {25 + index}
                        </div>
                        <p className="font-bold ">{i?.question}</p>
                    </div>
                    <div className="space-y-2">
                        {i?.answers?.map((answer, aIndex) => (
                            <label key={aIndex} className="block">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    className="mr-2"
                                    value={answer.id}
                                    checked={selectedAnswers[i.id] === answer.id}
                                    onChange={() => onAnswerSelect(i.id, answer.id)}
                                />
                                {answer?.answer}
                            </label>
                        ))}
                    </div>
                </div>
            ))
            }
        </div >
    );
}
