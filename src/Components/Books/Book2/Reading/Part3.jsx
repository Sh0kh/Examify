export default function Part3({ updateAnswers, answers }) {
    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px] border-t-[2px] pt-[10px]'>
            <div className='overflow-y-scroll h-screen   w-[50%] px-[15px] pb-[150px] flex flex-col gap-[30px]'>
                <p>
                    The case for mixed-ability classes
                    Picture this scene. It’s an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare’sRomeo and Juliet with a class of 15-year-olds. He’s given some of the students copies of No Fear Shakespeare, a kid-friendly translation of the original. For three students, even these literacy demands are beyond them. Another girl simply can’t focus and he gives her pens and paper to draw with. The teacher can ask theNo Fear group to identify the key characters and maybe provide a tentative plot summary. He can ask most of the class about character development, and five of them might be able to support their statements with textual evidence. Now two curious students are wondering whether Shakespeare advocates living a life of moderation or one of passionate engagement.

                </p>
                <p>
                    As a teacher myself, I’d think my lesson would be going rather well if the discussion went as described above. But wouldn’t this kind of class work better if there weren’t such a huge gap between the top and the bottom? If we put all the kids who needed literacy support into one class, and all the students who want to discuss the virtue of moderation into another?
                </p>
                <p>
                    The practice of ’streaming’, or ’tracking’, involves separating students into classes depending on their diagnosed levels of attainment. At a macro level, it requires the establishment of academically selective schools for the brightest students, and comprehensive schools for the rest. Within schools, it means selecting students into a ’stream’ of general ability, or ’sets’ of subject-specific ability. The practice is intuitively appealing to almost every stakeholder.
                </p>
                <p>
                    I have heard the mixed-ability model attacked by way of analogy: a group hike. The fittest in the group take the lead and set a brisk pace, only to have to stop and wait every 20 minutes. This is frustrating, and their enthusiasm wanes. Meanwhile, the slowest ones are not only embarrassed but physically struggling to keep up. What’s worse, they never get a long enough break. They honestly just want to quit. Hiking, they feel, is not for them.
                </p>
                <p>
                    Mixed-ability classes bore students, frustrate parents and bum out teachers. The brightest ones will never summit Mount Qomolangma, and the stragglers won’t enjoy the lovely stroll in the park they are perhaps more suited to. Individuals suffer at the demands of the collective, mediocrity prevails. So: is learning like hiking?
                </p>
                <p>
                    Despite all this, there is limited empirical evidence to suggest that streaming results in better outcomes for students. Professor John Hattie, director of the Melbourne Education Research Institute, notes that ’ tracking has minimal effects on learning outcomes’. What is more, streaming appears to significantly - and negatively - affect those students assigned to the lowest sets. These students tend to have much higher representation of low socioeconomic class. Less significant is the small benefit for those lucky clever students in the higher sets. The overall result is that the smart stay smart and the dumb get dumber, further entrenching the social divide.
                </p>
                <p>
                    In the latest update of Hattie’s influential meta-analysis of factors influencing student achievement, one of the most significant factors is the teachers’ estimate of achievement. Streaming students by diagnosed achievement automatically limits what the teacher feels the student is capable of. Meanwhile, in a mixed environment, teachers’ estimates need to be more diverse and flexible.
                </p>
                <p>
                    While streaming might seem to help teachers effectively target a student’s ZPD, it can underestimate the importance of peer-to-peer learning. A crucial aspect of constructivist theory is the role of the MKO -’ more-knowledgeable other’ - in knowledge construction. While teachers are traditionally the MKOs in classrooms, the value of knowledgeable student peers must not go unrecognised either.
                </p>
                <p>
                    I find it amazing to watch students get over an idea to their peers in ways that I would never think of. They operate with different language tools and different social tools from teachers and, having just learnt it themselves, they possess similar cognitive structures to their struggling classmates. There is also something exciting about passing on skills and knowledge that you yourself have just mastered - a certain pride and zeal, a certain freshness to the interaction between ’teacher’ and ’learner’ that is often lost by the expert for whom the steps are obvious and the joy of discovery forgotten.
                </p>
                <p>
                    Having a variety of different abilities in a collaborative learning environment provides valuable resources for helping students meet their learning needs, not to mention improving their communication and social skills. And today, more than ever, we need the many to flourish - not suffer at the expense of a few bright stars. Once a year, I go on a hike with my class, a mixed bunch of students. It is challenging. The fittest students realise they need to encourage the reluctant. There are lookouts who report back, and extra items to carry for others. We make it - together.
                </p>
            </div>
            <div className='ReadingLine w-full bg-MainColor h-[5px] my-[10px] hidden'>

            </div>
            <div className='overflow-y-scroll h-screen w-[50%] pb-[150px]'>
                <strong className='my-[20px] block text-[22px]'>
                    Questions 27-30
                </strong>
                <p className='my-[15px]'>
                    Choose the correct Jetter, A, B, C or D.
                </p>
                <p className='my-[15px]'>
                    Write the correct letter in boxes 27-30 on your answer sheet.
                </p>
                <div className="bg-[#E9E9E9] p-[10px] rounded-[10px]">
                    <p className='my-[15px]'>
                        <strong> 27. </strong> The writer describes the Romeo and Juliet lesson in order to demonstrate
                    </p>
                    <ul>
                        <li className='flex items-center gap-[5px]'>
                            <input value="A" onChange={(e) => updateAnswers(0, e.target.value)} checked={answers[0] === 'A'} type="radio" name="3" id="3" />
                            A) how few students are interested in literature.
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value='B' onChange={(e) => updateAnswers(0, e.target.value)} checked={answers[0] === 'B'} type="radio" name="3" id="3" />
                            B) how a teacher handles a range of learning needs.
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="C" onChange={(e) => updateAnswers(0, e.target.value)} checked={answers[0] === 'C'} type="radio" name="3" id="3" />
                            C) how unsuitable Shakespeare is for most teenagers.
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="D" onChange={(e) => updateAnswers(0, e.target.value)} checked={answers[0] === 'D'} type="radio" name="3" id="3" />
                            D) how weaker students can disrupt their classmates' learning.
                        </li>
                    </ul>

                    <p className='my-[15px]'>
                        <strong>28.</strong> What does the writer say about streaming in the third paragraph?
                    </p>
                    <ul>
                        <li className='flex items-center gap-[5px]'>
                            <input value="A" onChange={(e) => updateAnswers(1, e.target.value)} checked={answers[1] === 'A'} type="radio" name="4" id="3" />
                            A) It has a very broad appeal.
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value='B' onChange={(e) => updateAnswers(1, e.target.value)} checked={answers[1] === 'B'} type="radio" name="4" id="3" />
                            B) It favours cleverer students.
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="C" onChange={(e) => updateAnswers(1, e.target.value)} checked={answers[1] === 'C'} type="radio" name="4" id="3" />
                            C) It is relatively simple to implement
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="D" onChange={(e) => updateAnswers(1, e.target.value)} checked={answers[1] === 'D'} type="radio" name="4" id="3" />
                            D) It works better in some schools than others.
                        </li>
                    </ul>

                    <p className='my-[15px]'>
                        <strong>29.</strong>  What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?
                    </p>
                    <ul>
                        <li className='flex items-center gap-[5px]'>
                            <input value="A" onChange={(e) => updateAnswers(2, e.target.value)} checked={answers[2] === 'A'} type="radio" name="5" id="3" />
                            A) students following unsuitable paths
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value='B' onChange={(e) => updateAnswers(2, e.target.value)} checked={answers[2] === 'B'} type="radio" name="5" id="3" />
                            B) students attempting interesting tasks
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="C" onChange={(e) => updateAnswers(2, e.target.value)} checked={answers[2] === 'C'} type="radio" name="5" id="3" />
                            C) students not achieving their full potential
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="D" onChange={(e) => updateAnswers(2, e.target.value)} checked={answers[2] === 'D'} type="radio" name="5" id="3" />
                            D) students not being aware of their limitations
                        </li>
                    </ul>


                    <p className='my-[15px]'>
                        <strong> 30. </strong> What does the word 'scaffolding' in the sixth paragraph refer to?
                    </p>
                    <ul>
                        <li className='flex items-center gap-[5px]'>
                            <input value="A" onChange={(e) => updateAnswers(3, e.target.value)} checked={answers[3] === 'A'} type="radio" name="6" id="3" />
                            A) the factors which prevent a student from learning effectively
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value='B' onChange={(e) => updateAnswers(3, e.target.value)} checked={answers[3] === 'B'} type="radio" name="6" id="3" />
                            B) the environment where most of a student's learning takes place
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="C" onChange={(e) => updateAnswers(3, e.target.value)} checked={answers[3] === 'C'} type="radio" name="6" id="3" />
                            C) the assistance given to a student in their initial stages of learning
                        </li>
                        <li className='flex items-center gap-[5px]'>
                            <input value="D" onChange={(e) => updateAnswers(3, e.target.value)} checked={answers[3] === 'D'} type="radio" name="6" id="3" />
                            D) the setting of appropriate learning targets for a student's aptitude
                        </li>
                    </ul>
                </div>

                <strong className='my-[20px] block text-[22px]'>
                    Questions 31-35
                </strong>
                <p className='my-[15px]'>
                    Complete the summary using the list of phrases, A-l, below.
                </p>
                <div className="bg-[#E9E9E9] p-[10px] rounded-[10px]">
                    <h2 className="text-center font-bold">
                        Is streaming effective?
                    </h2>
                    <p className="my-[15px]">
                        According to Professor John Hattie of the Melbourne Education Research Institute, there is very little indication that streaming leads to 32. <select value={answers[4]} onChange={(e) => updateAnswers(4, e.target.value)}>
                            <option defaultValue={''}>option</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                        </select> He points out that, in schools which use streaming, the most significant impact is on those students placed in the 33.<select value={answers[5]} onChange={(e) => updateAnswers(5, e.target.value)}>
                            <option defaultValue={''}>option</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                        </select>. ,especially where a large proportion of them have 33. <select value={answers[6]} onChange={(e) => updateAnswers(6, e.target.value)}>
                            <option defaultValue={''}>option</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                        </select>. Meanwhile, for the 34. <select value={answers[7]} onChange={(e) => updateAnswers(7, e.target.value)}>
                            <option defaultValue={''}>option</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                        </select> there appears to be only minimal advantage. A further issue is that teachers tend to have 35.<select value={answers[8]} onChange={(e) => updateAnswers(8, e.target.value)}>
                            <option defaultValue={''}>option</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                            <option value="G">G</option>
                            <option value="H">H</option>
                            <option value="I">I</option>
                        </select>. of students in streamed groups.
                    </p>

                    <ul className="bg-[#ababab80] p-[10px] rounded-[10px] inline-block">
                        <li className="list-disc list-inside">
                            A) wrong classes
                        </li>
                        <li className="list-disc list-inside">
                            B) lower expectations
                        </li>
                        <li className="list-disc list-inside">
                            C) average learners
                        </li>
                        <li className="list-disc list-inside">
                            D) bottom sets
                        </li>
                        <li className="list-disc list-inside">
                            E) brightest pupils
                        </li>
                        <li className="list-disc list-inside">
                            F) disadvantaged backgrounds
                        </li>
                        <li className="list-disc list-inside">
                            G) weaker students
                        </li>
                        <li className="list-disc list-inside">
                            H) higher achievements
                        </li>
                        <li className="list-disc list-inside">
                            I) positive impressions
                        </li>
                    </ul>
                </div>


                <strong className='my-[20px] block text-[22px]'>
                    Questions 36-40
                </strong>
                <p className='my-[15px]'>
                    Do the following statements agree with the views of the writer in Reading Passage 3?
                </p>

                <ul>
                    <li className="list-disc list-inside">
                        YES if the statement agrees with the claims of the writer
                    </li>
                    <li className="list-disc list-inside">
                        NO if the statement contradicts the claims of the writer
                    </li>
                    <li className="list-disc list-inside">
                        NOT GIVEN if it is impossible to say what the writer thinks about this
                    </li>
                </ul>

                <div className="bg-[#E9E9E9] p-[10px] rounded-[10px] mt-[20px]">
                    <div>
                        36. The Vygotsky model of education supports the concept of a mixed-ability class.
                        <select value={answers[9]} onChange={(e) => updateAnswers(9, e.target.value)}>
                            <option defaultValue="">Option</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                            <option value="NOTGINEV">NOT GIVEN</option>
                        </select>
                    </div>
                    <div>
                        37. Some teachers are uncertain about allowing students to take on MKO roles in the classroom
                        <select value={answers[10]} onChange={(e) => updateAnswers(10, e.target.value)}>
                            <option defaultValue="">Option</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                            <option value="NOTGINEV">NOT GIVEN</option>
                        </select>
                    </div>
                    <div>
                        38. It can be rewarding to teach knowledge which you have only recently acquired.
                        <select value={answers[11]} onChange={(e) => updateAnswers(11, e.target.value)}>
                            <option defaultValue="">Option</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                            <option value="NOTGINEV">NOT GIVEN</option>
                        </select>
                    </div>
                    <div>
                        39. The priority should be to ensure that the highest-achieving students attain their goals.
                        <select value={answers[12]} onChange={(e) => updateAnswers(12, e.target.value)}>
                            <option defaultValue="">Option</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                            <option value="NOTGINEV">NOT GIVEN</option>
                        </select>
                    </div>
                    <div>
                        40. Taking part in collaborative outdoor activities with teachers and classmates can improve student outcomes in the classroom.
                        <select value={answers[13]} onChange={(e) => updateAnswers(13, e.target.value)}>
                            <option defaultValue="">Option</option>
                            <option value="YES">YES</option>
                            <option value="NO">NO</option>
                            <option value="NOTGINEV">NOT GIVEN</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}