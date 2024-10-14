import React, { useState, useEffect, useRef } from 'react';

function Part2({ updateAnswers }) {
  const [selected1, setSelected1] = useState([]); // For the first question
  const [selected2, setSelected2] = useState([]); // For the second question
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill('')); // For questions 15-19
  const previousSelectedOptionsRef = useRef([]); // Ref to track previous selectedOptions state
  const previousConcatenatedRef1 = useRef('');
  const previousConcatenatedRef2 = useRef('');

  const options1 = [
    { label: "A. Opportunities for professional advancement", value: "A" },
    { label: "B. Attractive salary packages and incentives", value: "B" },
    { label: "C. Varied scope of duties and responsibilities", value: "C" },
    { label: "D. Establishing enduring professional connections", value: "D" },
    { label: "E. Access to continuous professional growth", value: "E" },
  ];

  const options2 = [
    { label: "A. This bank is just a simple financial institution", value: "A" },
    { label: "B. Has earned the trust of their customers", value: "B" },
    { label: "C. Does not require having much responsibility", value: "C" },
    { label: "D. Forming stable relationships with clients is necessary", value: "D" },
    { label: "E. There are unlimited opportunities for growth", value: "E" },
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

  const handleSelectChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

  useEffect(() => {
    if (JSON.stringify(selectedOptions) !== JSON.stringify(previousSelectedOptionsRef.current)) {
      selectedOptions.forEach((option, index) => {
        if (option) {
          updateAnswers(index + 5, option); 
        }
      });
      previousSelectedOptionsRef.current = selectedOptions; 
    }
  }, [selectedOptions, updateAnswers]);

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

  return (
    <div className='border-[1px] w-full p-5 mb-[50px]'>
      <h2 className='font-bold text-xl mb-4'>PART 2 Questions 11-20</h2>
      <span className='font-bold mb-4 block'>Questions 11 and 12</span>
      <span className='mb-3 block'>Choose TWO letters, A-E.</span>
      <span className='block mb-4'>What are the TWO primary benefits of employment within the banking sector?</span>
      <ul>
        {renderCheckboxOptions(options1, selected1, handleCheckboxChange, 0)} {/* Update starting at index 0 for question 11 */}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 13 and 14</strong>
      <span className='block'>Choose TWO letters, A-E.</span>
      <span className='block mt-3 mb-3'>Which TWO of the following points about New Horizons Bank are mentioned by David?</span>
      <ul>
      {renderCheckboxOptions(options2, selected2, handleCheckboxChange, 2)} {/* Update starting at index 2 for question 13 */}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 15-19</strong>
      <span className='block'>What information does David provide about each of the following aspects of employment within the banking industry?</span>
      <span className='block mt-3 mb-3'>Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-19.</span>
      <ul className='list-disc pl-5'>
        <li>A. Emphasizing lifelong learning</li>
        <li>B. Necessary for developing excellent customer experience</li>
        <li>C. Essential for communication and performance</li>
        <li>D. Paramount for employee satisfaction and productivity</li>
        <li>E. Helps stay up-to-date and adaptable to changes</li>
        <li>F. Necessary to ensure the integrity of the financial system</li>
        <li>G. Essential skills and qualifications</li>
        <li>H. Benefits of a supportive workplace culture</li>
      </ul>
      <ul className='mt-5'>
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index + 15}>
            <strong>{15 + index}.</strong>
            <span>{['Regulatory compliance', 'Qualifications and skills', 'Technological progress', 'Continuous professional development', 'Balancing work and personal life'][index]}</span>
            <select
              className='border-[2px] border-black rounded-[5px]'
              value={selectedOptions[index] || ''}
              onChange={(e) => handleSelectChange(index, e.target.value)}
            >
              <option value="">Select</option>
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </li>
        ))}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 20</strong>
      <span className='block'>Choose the correct letter, A, B, or C</span>
      <span className='block mt-3 mb-3'>What is David’s final remark on working in the Banking sector?</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(10, e.target.value)} />
          <strong>A.</strong> It is mostly beneficial to work there for a long time
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(10, e.target.value)} />
          <strong>B.</strong> It is more advantageous to change jobs regularly
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(10, e.target.value)} />
          <strong>C.</strong> It is irrelevant to change jobs frequently
        </li>
      </ul>
    </div>
  );
}

export default Part2;
