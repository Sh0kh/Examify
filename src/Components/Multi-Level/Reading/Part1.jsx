import React, { useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';

function Part1({ data, onAnswerSelect, selectedAnswers }) {
    const containerRef = useRef(null);

    // Генерируем уникальные инпуты для каждого вопроса
    const processedHtml = data?.questions
        ?.map((question) => {
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
        if (!containerRef.current || !selectedAnswers || !Array.isArray(selectedAnswers)) return;

        const inputs = containerRef.current.querySelectorAll(".part2-input");

        inputs.forEach(input => {
            const questionId = input.dataset.questionId;
            const inputIndex = input.dataset.inputIndex;
            const savedAnswer = selectedAnswers.find(
                answer => answer.question_id === questionId &&
                    answer.input_index === inputIndex
            );

            if (savedAnswer) {
                input.value = savedAnswer.answer_text || "";
            }
        });
    }, [selectedAnswers]); // Убрали containerRef.current из зависимостей

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
    }, [onAnswerSelect]); // Убрали containerRef.current из зависимостей

    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px] pt-[10px] pb-[30px]'>
            <div className='overflow-y-scroll h-screen w-[50%] px-[15px] pb-[150px] bg-[white] rounded-[15px] border-[1px]'>
                <strong className='my-[15px] text-[20px] block'>Part 1</strong>
                <strong className='my-[15px] block'>{data?.description}</strong>
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
            </div>
        </div>
    );
}

export default Part1;