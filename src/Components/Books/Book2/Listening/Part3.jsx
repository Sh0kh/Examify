import { useEffect, useRef, useState } from "react";

export default function Part3({ updateAnswers }) {

    const [selected1, setSelected1] = useState([]); // For the first question
    const [selected2, setSelected2] = useState([]); // For the second question
    const previousConcatenatedRef1 = useRef('');
    const previousConcatenatedRef2 = useRef('');
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // For questions 15-19
    const previousSelectedOptionsRef = useRef([]); // Ref to track previous selectedOptions state


    const options1 = [
        { label: "A) Their actions were ineffective.", value: "A" },
        { label: "B) They are still influential today", value: "B" },
        { label: "C) They have received unfair criticism", value: "C" },
        { label: "D) They were proved right.", value: "D" },
        { label: "E) Their attitude is understandable.", value: "E" },
    ];

    const options2 = [
        { label: "A) Work will be more rewarding.", value: "A" },
        { label: "B) Unemployment will fall.", value: "B" },
        { label: "C) People will want to delay retiring", value: "C" },
        { label: "D) Working hours will be shorter.", value: "D" },
        { label: "E) People will change jobs more frequently.", value: "E" },
    ];


    const handleCheckboxChange = (e, selected, setSelected, questionIndexStart) => {
        const { value, checked } = e.target;
        if (checked) {
            if (selected.length < 2) {
                setSelected((prev) => {
                    const newSelected = [...prev, value];
                    const updateIndex = prev.length;
                    updateAnswers(questionIndexStart + updateIndex, value);
                    return newSelected;
                });
            }
        } else {
            setSelected((prev) => {
                const newSelected = prev.filter((item) => item !== value);
                const updateIndex = prev.indexOf(value);
                updateAnswers(questionIndexStart + updateIndex, '');
                return newSelected;
            });
        }
    };

    useEffect(() => {
        if (selected1.length === 2) {
            const concatenated = selected1.join('');
            if (concatenated !== previousConcatenatedRef1.current) {
                previousConcatenatedRef1.current = concatenated;
            }
        }
    }, [selected1]);

    useEffect(() => {
        if (selected2.length === 2) {
            const concatenated = selected2.join('');
            if (concatenated !== previousConcatenatedRef2.current) {
                previousConcatenatedRef2.current = concatenated
            }
        }
    }, [selected2]);



    const renderCheckboxOptions = (options, selected, handleChange, questionIndexStart) => {
        return options.map((option) => (
            <li key={option.value}>
                <input
                    type="checkbox"
                    value={option.value}
                    checked={selected.includes(option.value)}
                    onChange={(e) => handleChange(e, selected, selected === selected1 ? setSelected1 : setSelected2, questionIndexStart)}
                    disabled={selected.length >= 2 && !selected.includes(option.value)}
                />
                {option.label}
            </li>
        ));
    };

    const handleSelectChange = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value;
        setSelectedOptions(newSelectedOptions);
      };

      useEffect(() => {
        if (JSON.stringify(selectedOptions) !== JSON.stringify(previousSelectedOptionsRef.current)) {
          selectedOptions.forEach((option, index) => {
            if (option) {
              updateAnswers(index + 4, option); 
            }
          });
          previousSelectedOptionsRef.current = selectedOptions; 
        }
      }, [selectedOptions, updateAnswers]);

    return (
        <div className="border-[1px] w-full p-5 mb-[50px]">
            <h2 className='font-bold text-xl mb-4'>PART 2 Questions 21-30</h2>
            <span className='font-bold mb-4 block'>Questions 21 and 22</span>
            <div className="bg-[#E9E9E9] p-[10px] rounded-[10px] mb-[30px]">
                <span className='mb-3 block'>Choose TWO letters, A-E.</span>
                <span className='block mb-4'>Which TWO opinions about the Luddites do the students express?</span>
                <ul>
                    {renderCheckboxOptions(options1, selected1, handleCheckboxChange, 0)}
                </ul>
            </div>

            <span className='font-bold mb-4 block'>Questions 23 and 24</span>
            <div className="bg-[#E9E9E9] p-[10px] rounded-[10px] mb-[30px]">
                <span className='mb-3 block'>Choose TWO letters, A-E.</span>
                <span className='block mb-4'>Which TWO predictions about the future of work are the students doubtful about?</span>
                <ul>
                    {renderCheckboxOptions(options2, selected2, handleCheckboxChange, 2)}
                </ul>
            </div>


            <span className='font-bold mb-4 block'>Questions 25 and 30</span>

            <span className='font-normal mb-4 block'>What comment do the students make about each of the following jobs?</span>
            <span className='font-normal mb-4 block'>Choose SIX answers from the box and write the correct letter, A-G, next to Questions 25-30.</span>

            <div className="bg-[#E9E9E9] p-[10px] rounded-[10px] mb-[30px]">
                <span className='font-bold mb-4 block'>Comments</span>
                <ul>
                    <li className="list-disc list-inside">
                        A) These jobs are likely to be at risk.
                    </li>
                    <li className="list-disc list-inside">
                        B) Their role has become more interesting in recent years.
                    </li>
                    <li className="list-disc list-inside">
                        C) The number of people working in this sector has fallen dramatically.
                    </li>
                    <li className="list-disc list-inside">
                        D) This job will require more qualifications.
                    </li>
                    <li className="list-disc list-inside">
                        E) Higher disposable income has led to a huge increase in jobs.
                    </li>
                    <li className="list-disc list-inside">
                        F) There is likely to be a significant rise in demand for this service.
                    </li>
                    <li className="list-disc list-inside">
                        G) Both employment and productivity have risen.
                    </li>
                </ul>
            </div>

            <span className='font-bold mb-4 block'>Jobs</span>
            <ul className='mt-5'>
                {Array.from({ length: 6 }, (_, index) => (
                    <li key={index + 15}>
                        <strong>{25 + index}.</strong>
                        <span>{['Accountants', 'Hairdressers', 'Administrative staff', '. Agricultural workers', 'Care workers', 'Bank clerks'][index]}</span>
                        <select
                            className='border-[2px] border-black rounded-[5px]'
                            value={selectedOptions[index] || ''}
                            onChange={(e) => handleSelectChange(index, e.target.value)}
                        >
                            <option value="">Option</option>
                            {['A', 'B', 'C', 'D', 'E', 'F', 'G',].map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    </li>
                ))}
            </ul>
        </div>
    )
}