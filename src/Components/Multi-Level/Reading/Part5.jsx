import React, { useEffect, useMemo, useRef } from 'react';
import DOMPurify from 'dompurify';

function Part5({ data, selectedAnswers, onAnswerSelect, writingAnswer }) {
    const containerRef = useRef(null);

    // Генерируем уникальные инпуты для каждого вопроса

    const filteredQuestions = useMemo(() => { return data?.questions?.filter(question => question.type !== "writing") || []; }, [data?.questions]);

    const processedHtml = data?.questions
        ?.filter(question => question.type === 'writing') // Фильтруем только 'writing'
        .map((question) => {
            let inputCounter = 0;
            return question.question.replace(/\{inputext\}/g, () => {
                inputCounter++;
                return `<input type="text"
                class="border-b-[black] border-b-[2px] outline-none px-2 py-1 rounded part2-input"
                data-question-id="${question.id}"
                data-input-index="${inputCounter}"
            />`;
            });
        })
        .join("");


    // Инициализируем инпуты сохраненными значениями
    useEffect(() => {
        if (!containerRef.current || !writingAnswer || !Array.isArray(writingAnswer)) return;

        const inputs = containerRef.current.querySelectorAll(".part2-input");

        inputs.forEach(input => {
            const questionId = input.dataset.questionId;
            const inputIndex = input.dataset.inputIndex;
            const savedAnswer = writingAnswer.find(
                answer => answer.question_id === questionId &&
                    answer.input_index === inputIndex
            );

            if (savedAnswer) {
                input.value = savedAnswer.answer_text || "";
            }
        });
    }, [writingAnswer]);

    // Обновляем ответы при изменении инпутов
    useEffect(() => {
        if (!containerRef.current) return;

        const inputs = containerRef.current.querySelectorAll(".part2-input");

        const updateAnswers = () => {
            const updatedAnswers = Array.from(inputs).map(input => ({
                question_id: input.dataset.questionId,
                input_index: input.dataset.inputIndex,
                answer_id: input.dataset.answerId,
                question_type: "writing",
                answer_text: input.value
            }));

            onAnswerSelect(null, null, updatedAnswers);
        };

        inputs.forEach(input => input.addEventListener("input", updateAnswers));

        return () => {
            inputs.forEach(input => input.removeEventListener("input", updateAnswers));
        };
    }, [onAnswerSelect]);

    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px] pt-[10px] pb-[30px]'>
            <div className='overflow-y-scroll h-screen w-[50%] px-[15px] pb-[150px] bg-[white] rounded-[15px] border-[1px]'>
                <strong className='my-[15px] text-[20px] block'>Part 5</strong>
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data?.description)
                    }}
                />
            </div>
            <div className='ReadingLine w-full bg-[black] h-[5px] my-[10px] hidden'></div>
            <div className='overflow-y-scroll h-screen pb-[150px] w-[50%] bg-[white] p-[15px] rounded-[15px] border-[1px]'>
                {processedHtml && (
                    <div
                        ref={containerRef}
                        className="space-y-6"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(processedHtml)
                        }}
                    />
                )}
                {filteredQuestions.map((i, index) => (
                    <div key={index} className='mt-[10px]'>
                        <div className="flex items-center mb-[10px]">
                            <div className="w-8 h-8 flex items-center justify-center bg-[#2970FF] text-white font-bold rounded-full mr-4">
                                {33 + index}
                            </div>
                            <p className="font-bold">{i?.question}</p>
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
                ))}
            </div>
        </div>
    );
}

export default Part5;