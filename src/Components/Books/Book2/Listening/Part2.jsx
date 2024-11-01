import React, { useState, useEffect, useRef } from 'react';

function Part2({ updateAnswers }) {
  const [selected1, setSelected1] = useState([]); // For the first question
  const [selected2, setSelected2] = useState([]); // For the second question
  const previousConcatenatedRef1 = useRef('');
  const previousConcatenatedRef2 = useRef('');

  const options1 = [
    { label: "A) Don't pick more than one variety of mushroom at a time.", value: "A" },
    { label: "B) Don't pick mushrooms near busy roads.", value: "B" },
    { label: "C) Don't eat mushrooms given to you.", value: "C" },
    { label: "D) Don't eat mushrooms while picking them.", value: "D" },
    { label: "E) Don't pick old mushrooms.", value: "E" },
  ];

  const options2 = [
    { label: "A) Mushrooms should always be peeled before eating.", value: "A" },
    { label: "B) Mushrooms eaten by animals may be unsafe.", value: "B" },
    { label: "C) Cooking destroys toxins in mushrooms.", value: "C" },
    { label: "D) Brightly coloured mushrooms can be edible.", value: "D" },
    { label: "E) All poisonous mushrooms have a bad smell.", value: "E" },
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

  return (
    <div className='border-[1px] w-full p-5 mb-[50px]'>
      <h2 className='font-bold text-xl mb-4'>PART 2 Questions 11-20</h2>
      <span className='font-bold mb-4 block'>Questions 11 and 12</span>
      <span className='mb-3 block'>Choose TWO letters, A-E.</span>
      <span className='block mb-4'>Which TWO warnings does Dan give about picking mushrooms?</span>
      <ul>
        {renderCheckboxOptions(options1, selected1, handleCheckboxChange, 0)} {/* Update starting at index 0 for question 11 */}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 13 and 14</strong>
      <span className='block'>Choose TWO letters, A-E.</span>
      <span className='block mt-3 mb-3'>Which TWO ideas about wild mushrooms does Dan say are correct?</span>
      <ul>
      {renderCheckboxOptions(options2, selected2, handleCheckboxChange, 2)} {/* Update starting at index 2 for question 13 */}
      </ul>

      <strong className='mb-4 block mt-4'>Questions 15-20</strong>

      <span className='block'>Choose the correct letter, A, B, or C</span>
      <span className='block mt-3 mb-3'>15. What advice does Dan give about picking mushrooms in parks?</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(4, e.target.value)} />
          <strong>A.</strong> Choose wooded areas.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(4, e.target.value)} />
          <strong>B.</strong> Don't disturb wildlife.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(4, e.target.value)} />
          <strong>C.</strong> Get there early.
        </li>
      </ul>

      <span className='block mt-3 mb-3'>16. Dan says it is a good idea for beginners to</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(5, e.target.value)} />
          <strong>A.</strong> use a mushroom app.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(5, e.target.value)} />
          <strong>B.</strong> join a group.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(5, e.target.value)} />
          <strong>C.</strong> take a reference book.
        </li>
      </ul>

      <span className='block mt-3 mb-3'>17. What does Dan say is important for conservation?</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(6, e.target.value)} />
          <strong>A.</strong> selecting only fully grown mushrooms
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(6, e.target.value)} />
          <strong>B.</strong> picking a limited amount of mushrooms
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(6, e.target.value)} />
          <strong>C.</strong> avoiding areas where rare mushroom species grow
        </li>
      </ul>

      <span className='block mt-3 mb-3'>18. According to Dan, some varieties of wild mushrooms are in decline because there is</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(7, e.target.value)} />
          <strong>A.</strong> a huge demand for them from restaurants.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(7, e.target.value)} />
          <strong>B.</strong> a lack of rain in this part of the country.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(7, e.target.value)} />
          <strong>C.</strong> a rise in building developments locally.
        </li>
      </ul>

      <span className='block mt-3 mb-3'>19. Dan says that when storing mushrooms, people should</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(8, e.target.value)} />
          <strong>A.</strong> keep them in the fridge for no more than two days.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(8, e.target.value)} />
          <strong>B.</strong> keep them in a brown bag in a dark room.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(8, e.target.value)} />
          <strong>C.</strong> leave them for a period after washing them.
        </li>
      </ul>

      <span className='block mt-3 mb-3'>20. What does Dan say about trying new varieties of mushrooms?</span>
      <ul>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="A" onChange={(e) => updateAnswers(9, e.target.value)} />
          <strong>A.</strong> Experiment with different recipes.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="B" onChange={(e) => updateAnswers(9, e.target.value)} />
          <strong>B.</strong> Expect some to have a strong taste.
        </li>
        <li className='flex items-center gap-2'>
          <input type="radio" name="finalRemark" value="C" onChange={(e) => updateAnswers(9, e.target.value)} />
          <strong>C.</strong> Cook them for a long time.
        </li>
      </ul>
    </div>
  );
}

export default Part2;
