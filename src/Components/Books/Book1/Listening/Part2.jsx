import React, { useState, useEffect, useRef } from 'react';

function Part2({ updateAnswers }) {
  const [selected1, setSelected1] = useState([]); // For the first question
  const [selected2, setSelected2] = useState([]); // For the second question
  const [selectedOptions, setSelectedOptions] = useState({}); // To hold selected values for select inputs
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

  const handleCheckboxChange1 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selected1.length < 2) {
        setSelected1([...selected1, value]);
      }
    } else {
      setSelected1(selected1.filter((item) => item !== value));
    }
  };

  const handleCheckboxChange2 = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (selected2.length < 2) {
        setSelected2([...selected2, value]);
      }
    } else {
      setSelected2(selected2.filter((item) => item !== value));
    }
  };

  const handleSelectChange = (questionIndex, value) => {
    // Update the selected options in state
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));

    // Call updateAnswers with the correct index (15-19)
    updateAnswers(questionIndex, value);
  };

  useEffect(() => {
    if (selected1.length === 2) {
      const concatenated = selected1.join('');
      if (concatenated !== previousConcatenatedRef1.current) {
        previousConcatenatedRef1.current = concatenated;
        updateAnswers(0, concatenated); // Update for question 11
      }
    }
  }, [selected1, updateAnswers]);

  useEffect(() => {
    if (selected2.length === 2) {
      const concatenated = selected2.join('');
      if (concatenated !== previousConcatenatedRef2.current) {
        previousConcatenatedRef2.current = concatenated;
        updateAnswers(1, concatenated); // Update for question 12
      }
    }
  }, [selected2, updateAnswers]);

  return (
    <div className='border-[1px] w-full p-5 mb-[50px]'>
      <h2 className='font-bold text-xl mb-4'>PART 2 Questions 11-20</h2>
      <span className='font-bold mb-4 block'>Questions 11 and 12</span>
      <span className='mb-3 block'>Choose TWO letters, A-E.</span>
      <span className='block mb-4'>What are the TWO primary benefits of employment within the banking sector?</span>
      <ul>
        {options1.map((option) => (
          <li key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selected1.includes(option.value)}
              onChange={handleCheckboxChange1}
              disabled={selected1.length >= 2 && !selected1.includes(option.value)}
            />
            {option.label}
          </li>
        ))}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 13 and 14</strong>
      <span className='block'>Choose TWO letters, A-E.</span>
      <span className='block mt-3 mb-3'>Which TWO of the following points about New Horizons Bank are mentioned by David?</span>
      <ul>
        {options2.map((option) => (
          <li key={option.value}>
            <input
              type="checkbox"
              value={option.value}
              checked={selected2.includes(option.value)}
              onChange={handleCheckboxChange2}
              disabled={selected2.length >= 2 && !selected2.includes(option.value)}
            />
            {option.label}
          </li>
        ))}
      </ul>
      <strong className='mb-4 block mt-4'>
        Questions 15-19
      </strong>
      <span className='block'>
        What information does David provide about each of the following aspects of employment within the banking industry?
      </span>
      <span className='block mt-3 mb-3'>
        Choose SIX answers from the box and write the correct letter, A-H, next to Questions 15-19.
      </span>
      <span className='block mt-3 mb-3'>
        Aspects of employment within the banking industry:
      </span>
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
              value={selectedOptions[index + 5] || ''}
              onChange={(e) => handleSelectChange(index + 5, e.target.value)}
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
          <strong>B.</strong> Offers a wide range of opportunities
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(10, e.target.value)} />
          <strong>C.</strong> Offers a competitive amount of money
        </li>
      </ul>
    </div>
  );
}

export default Part2;
