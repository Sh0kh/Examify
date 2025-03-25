import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";

export default function Part2({ data, onAnswerSelect, selectedAnswers }) {
    const containerRef = useRef(null);

    // Генерируем уникальные инпуты для каждого вопроса
    const processedHtml = data?.questions
        ?.map((question) => {
            let inputCounter = 0;
            return question.question.replace(/\{inputext\}/g, () => {
                inputCounter++;
                return `<input type="text"
                    class="border-b-[black] border-b-[2px] outline-none px-2 py-1 rounded part6-input"
                    data-question-id="${question.id}"
                    data-input-index="${inputCounter}" 
                />`;
            });
        })
        .join("");

    // Инициализируем инпуты сохраненными значениями
    useEffect(() => {
        if (!containerRef.current || !selectedAnswers || !Array.isArray(selectedAnswers)) return;

        const inputs = containerRef.current.querySelectorAll(".part6-input");

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

        const inputs = containerRef.current.querySelectorAll(".part6-input");

        const updateAnswers = () => {
            const updatedAnswers = Array.from(inputs).map(input => ({
                question_id: input.dataset.questionId,
                input_index: input.dataset.inputIndex,
                answer_id: null,
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
        <div className="p-4 mx-auto space-y-8 pb-[100px]">
            <div>
                <p className="text-lg font-semibold">{data?.description}</p>
            </div>
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
    );
}