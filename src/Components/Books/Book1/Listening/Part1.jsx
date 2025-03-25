import React from 'react';

function Part1({ updateAnswers, answers }) {
    return (
        <div className='border border-gray-300 w-full p-5 mb-[50px] '>
            <h2 className='font-bold text-xl mb-4'>PART 1 Questions 1-10</h2>
            <div className='mb-4'>
                <p className='mb-2'>Complete the notes below.</p>
                <h3 className='font-semibold'>
                    Write <strong className='font-bold'>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.
                </h3>
            </div>
            <h2 className='text-center font-bold text-lg mb-4'>
                Enrollment into Foreign Languages Courses
            </h2>
            <div className='mb-4'>
                <strong className='block mb-2'>
                    Information about the student and the academia:
                </strong>
                <ul className='list-disc pl-5 space-y-2'>
                    <li>Name of Academia: Imperial Language</li>
                    <li>Number of language courses offered: 15</li>
                    <li>
                        Language of interest: <strong className='font-bold'>1.</strong> 
                        <input
                            onChange={(e) => updateAnswers(0, e.target.value)}
                            value={answers[0]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        />
                    </li>
                    <li>
                        Last Name: <strong className='font-bold'>2.</strong> 
                        <input
                            onChange={(e) => updateAnswers(1, e.target.value)}
                            value={answers[1]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        />
                    </li>
                    <li>
                        Phone number: <strong className='font-bold'>3.</strong> 
                        <input
                            onChange={(e) => updateAnswers(2, e.target.value)}
                            value={answers[2]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        />
                    </li>
                    <li>Period of learning the language: 3 weeks so far</li>
                    <li>
                        Current level: <strong className='font-bold'>4.</strong> 
                        <input
                            onChange={(e) => updateAnswers(3, e.target.value)}
                            value={answers[3]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        />
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <strong className='block mb-2'>Details about the course:</strong>
                <ul className='list-disc pl-5 space-y-2'>
                    <li>
                        Students need to attend minimum <strong className='font-bold'>5.</strong> 
                        <input
                            onChange={(e) => updateAnswers(4, e.target.value)}
                            value={answers[4]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        /> lessons per week for efficient learning
                    </li>
                    <li>Morning classes: 9:00 AM to 10:30 AM.</li>
                    <li>Evening classes: 6:00 PM to 7:30 PM.</li>
                    <li>
                        Placement tests are offered to determine the <strong className='font-bold'>6.</strong> 
                        <input
                            onChange={(e) => updateAnswers(5, e.target.value)}
                            value={answers[5]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        /> levels of students.
                    </li>
                    <li>
                        Interactive multimedia tools are included into teaching <strong className='font-bold'>7.</strong> 
                        <input
                            onChange={(e) => updateAnswers(6, e.target.value)}
                            value={answers[6]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        />, which use traditional classroom instructions.
                    </li>
                </ul>
            </div>
            <div>
                <strong className='block mb-2'>Course Feedback:</strong>
                <ul className='list-disc pl-5 space-y-2'>
                    <li>
                        Anna, one of past students, says that she developed her French <strong className='font-bold'>8.</strong> 
                        <input
                            onChange={(e) => updateAnswers(7, e.target.value)}
                            value={answers[7]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        /> thanks to Language Academia Courses.
                    </li>
                    <li>
                        Language skills can be practiced in diverse <strong className='font-bold'>9.</strong> 
                        <input
                            onChange={(e) => updateAnswers(8, e.target.value)}
                            value={answers[8]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        /> settings.
                    </li>
                    <li>
                        <strong className='font-bold'>10.</strong> 
                        <input
                            onChange={(e) => updateAnswers(9, e.target.value)}
                            value={answers[9]}  // Bind value to the state
                            type="text"
                            className="border border-gray-300 px-2 py-1 ml-1"
                        /> can be used to fill in a feedback form.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Part1;
