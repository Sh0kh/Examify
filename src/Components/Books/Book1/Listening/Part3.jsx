import React from 'react'

function Part3({ updateAnswers }) {
  return (
    <div className='border-[1px] w-full p-5 mb-[50px]'>
      <h2 className='font-bold text-xl mb-4'>
        PART 3 Questions 21-30
      </h2>
      <strong className='mb-4 block mt-4'>
        Questions 21-30
      </strong>
      <span className='block mt-3 mb-3'>
        Choose the correct letter, A, B, or C.
      </span>

      {/* Question 21 */}
      <span className='block mt-3 mb-3'>
        <strong> 21.</strong> What is the primary objective of Sarah and Alex's research project?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(1, e.target.value)} type="radio" name="q21" />
          A. Investigating factors influencing the behavior of domestic pets
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(1, e.target.value)} type="radio" name="q21" />
          B. Studying the behavior of wild animals
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(1, e.target.value)} type="radio" name="q21" />
          C. Analyzing human behavior patterns
        </li>
      </ul>

      {/* Question 22 */}
      <span className='block mt-3 mb-3'>
        <strong> 22.</strong> What motivated Alex to select the topic for their research project?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(2, e.target.value)} type="radio" name="q22" />
          A. Passion for studying environmental factors
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(2, e.target.value)} type="radio" name="q22" />
          B. Interest in improving pet welfare
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(2, e.target.value)} type="radio" name="q22" />
          C. Desire to understand human-animal communication
        </li>
      </ul>

      {/* Question 23 */}
      <span className='block mt-3 mb-3'>
        <strong> 23.</strong> Which research methodology are Sarah and Alex employing?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(3, e.target.value)} type="radio" name="q23" />
          A. Purely observational studies
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(3, e.target.value)} type="radio" name="q23" />
          B. Conducting surveys and interviews with pet owners
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(3, e.target.value)} type="radio" name="q23" />
          C. Utilizing a mixed-methods approach combining observation, surveys, and interviews
        </li>
      </ul>

      {/* Question 24 */}
      <span className='block mt-3 mb-3'>
        <strong> 24.</strong> What is one important finding mentioned by Alex in their research?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(4, e.target.value)} type="radio" name="q24" />
          A. Early socialization has minimal impact on puppies and kittens
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(4, e.target.value)} type="radio" name="q24" />
          B. Pets' behavior remains consistent throughout their lives
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(4, e.target.value)} type="radio" name="q24" />
          C. Exposure to various stimuli during early periods leads to more sociable behavior
        </li>
      </ul>

      {/* Question 25 */}
      <span className='block mt-3 mb-3'>
        <strong> 25.</strong> What obstacle has Sarah encountered during their research process?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(5, e.target.value)} type="radio" name="q25" />
          A. Lack of interest from pet owners
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(5, e.target.value)} type="radio" name="q25" />
          B. Variability in behavior among individual pets
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(5, e.target.value)} type="radio" name="q25" />
          C. Difficulty in finding suitable research participants
        </li>
      </ul>

      {/* Question 26 */}
      <span className='block mt-3 mb-3'>
        <strong> 26.</strong> What is the ultimate aim of Alex's research project?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(6, e.target.value)} type="radio" name="q26" />
          A. Developing evidence-based guidelines for pet owners
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(6, e.target.value)} type="radio" name="q26" />
          B. Creating a documentary about pet behavior
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(6, e.target.value)} type="radio" name="q26" />
          C. Designing new pet accessories
        </li>
      </ul>

      {/* Question 27 */}
      <span className='block mt-3 mb-3'>
        <strong> 27.</strong> What are the subsequent steps for Sarah and Alex's research project?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="q27" />
          A. Publishing a book on pet behavior
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="q27" />
          B. Abandoning the project due to lack of funding
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="q27" />
          C. Analyzing data and presenting findings at a conference
        </li>
      </ul>

      {/* Question 28 */}
      <span className='block mt-3 mb-3'>
        <strong> 28.</strong> How are potential biases addressed in Sarah and Alex's research?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="q28" />
          A. Through controllable measures to decrease observer bias
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="q28" />
          B. By disregarding potential biases
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="q28" />
          C. By relying solely on subjective observations
        </li>
      </ul>

      {/* Question 29 */}
      <span className='block mt-3 mb-3'>
        <strong> 29.</strong> What is one possible future direction for Sarah and Alex's research?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="q29" />
          A. Exploring the impact of genetics on pet behavior
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="q29" />
          B. Focusing exclusively on canine behavior
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="q29" />
          C. Investigating the economic benefits of pet ownership
        </li>
      </ul>

      {/* Question 30 */}
      <span className='block mt-3 mb-3'>
        <strong> 30.</strong> How do Sarah and Alex plan to disseminate their research findings?
      </span>
      <ul>
        <li className='flex items-center gap-2'>
          <input value="A" onChange={(e) => updateAnswers(10, e.target.value)} type="radio" name="q30" />
          A. Through public seminars and workshops
        </li>
        <li className='flex items-center gap-2'>
          <input value="B" onChange={(e) => updateAnswers(10, e.target.value)} type="radio" name="q30" />
          B. By publishing articles in scientific journals
        </li>
        <li className='flex items-center gap-2'>
          <input value="C" onChange={(e) => updateAnswers(10, e.target.value)} type="radio" name="q30" />
          C. By creating an online platform for pet owners
        </li>
      </ul>
    </div>
  )
}

export default Part3
