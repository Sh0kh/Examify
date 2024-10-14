import React from 'react'

function Part1({ updateAnswers, answers }) {
    return (
        <div className='overflow-hidden flex gap-[20px] border-t-[2px] pt-[10px]'>
            <div className='overflow-y-scroll h-[550px]  w-[50%] px-[15px] pb-[50px]'>
                <strong className='my-[15px] block'>
                    A
                </strong>
                <p>
                    In today's digital age, the evolution of information technology has revolutionized the way we interact with information, transcending traditional paper-based systems. This passage delves into the diverse developments and innovations that have emerged to take us beyond paper, offering new possibilities for communication, storage, and access to information.
                </p>
                <strong className='my-[15px] block'>
                    B
                </strong>
                <p>
                    The advent of electronic devices, such as computers, smartphones, and tablets, has transformed how we consume and interact with information. These devices provide convenient and portable alternatives to traditional paper-based methods, allowing users, mainly readers, to access vast amounts of data with just a few clicks or taps. Moreover, the proliferation of high-speed internet connectivity has facilitated the seamless exchange and dissemination of information, eliminating the need for physical paper documents.
                </p>
                <strong className='my-[15px] block'>
                    C
                </strong>
                <p>
                    One significant development beyond paper is the emergence of electronic books, or e-books, which offer a digital alternative to traditional printed books. E-books provide readers with the flexibility to access a vast library of titles instantly, without the constraints of physical storage space. Furthermore, features such as adjustable font sizes, built-in dictionaries, and multimedia integration enhance the reading experience, making e-books a popular choice for modern readers. Additionally, the rise of e-reader devices like Amazon Kindle and Barnes & Noble Nook has further popularized e-books, offering users dedicated platforms for accessing digital literature.
                </p>
                <strong className='my-[15px] block'>
                    D
                </strong>
                <p>
                    In terms of education, digital learning platforms and e-learning resources have revolutionized the way students access educational materials and engage with course content. Online courses, interactive tutorials, and virtual classrooms provide flexible learning opportunities that accommodate diverse learning styles and preferences. Furthermore, digital assessments and feedback mechanisms streamline the grading process for educators, enhancing efficiency and accuracy. Moreover, institutions and educators can leverage data analytics and learning management systems to track student progress and personalize learning experiences, leading to better educational outcomes.
                </p>
                <strong className='my-[15px] block'>
                    E
                </strong>
                <p>
                    The shift towards digital documentation and record-keeping has also transformed various industries, including healthcare, finance, and government. Electronic medical records (EMRs), digital banking systems, and online government portals have replaced traditional paper-based workflows, offering improved accessibility, security, and efficiency. Additionally, digital signatures and encryption technologies ensure the authenticity and integrity of electronic documents, eliminating the need for physical paperwork. Furthermore, cloud computing technologies enable organizations to store and manage vast amounts of data securely.
                </p>
                <strong className='my-[15px] block'>
                    F
                </strong>
                <p>
                    Beyond textual information, multimedia content such as images, videos, and audio recordings has become increasingly prevalent in digital formats. Social media platforms, streaming services, and digital archives host vast repositories of multimedia content, enabling users to explore and share diverse media experiences. Moreover, advancements in virtual and augmented reality technologies offer immersive storytelling opportunities, blurring the lines between reality and digital fiction. Additionally, digital art platforms and online galleries provide artists with new avenues for showcasing their work to global audiences.
                </p>
                <strong className='my-[15px] block'>
                    G
                </strong>
                <p>
                    Looking ahead, the ongoing advancements in information technology promise to further expand the boundaries of digital innovation beyond paper. Emerging technologies such as blockchain, artificial intelligence, and the Internet of Things (IoT) hold the potential to revolutionize how we create, store, and interact with information in the future. By embracing these developments, we can harness the power of technology to usher in a new era of connectivity, creativity, and collaboration, leaving behind the limitations of paper-based systems. Moreover, ongoing research and development efforts in areas such as quantum computing and nanotechnology offer promising avenues for pushing the boundaries of digital innovation even further, opening up new possibilities for humanity's interaction with information.
                </p>
                <strong className='my-[15px] block'>
                    H
                </strong>
                <p>
                    Furthermore, the transition to digital alternatives has significant implications for environmental sustainability. By reducing reliance on paper-based systems, organizations can minimize deforestation and reduce carbon emissions associated with paper production and transportation. Additionally, digital technologies enable more efficient resource utilization, such as energy-efficient data centers and cloud computing infrastructure. Moreover, initiatives promoting digital literacy and access to technology can empower individuals and communities, fostering economic development and social inclusion in a digital world.
                </p>
                <strong className='my-[15px] block'>
                    I
                </strong>
                <p>
                    This comprehensive exploration of developments beyond paper underscores the transformative impact of information technology on modern society. By embracing digital alternatives and leveraging emerging technologies, we can navigate towards a more connected, efficient, and sustainable future, transcending the limitations of traditional paper-based systems.
                </p>
            </div>
            <div className='overflow-y-scroll h-[550px] w-[50%]'>
                <strong className='my-[20px] block text-[22px]'>
                    Questions 1-4
                </strong>
                <p>
                    Reading Passage 1 has nine sections, A-I. Which section contains the following information? Write the correct letter, A-I, in boxes 1-4 on your answer sheet.
                </p>
                <ol className='list-decimal pl-10 mt-[10px]'>
                    <li>
                        E-books and e-readers are presenting a versatile substitute for traditional books. <strong>1.</strong> <input value={answers[0]} onChange={(e) => updateAnswers(0, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    </li>
                    <li>
                        Digital records and online banking provide improved accessibility and protection.<strong>2.</strong> <input value={answers[1]} onChange={(e) => updateAnswers(1, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    </li>
                    <li>
                        Developments in virtual and augmented reality have transformed the way digital content is experienced.<strong>3.</strong> <input value={answers[2]} onChange={(e) => updateAnswers(2, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    </li>
                    <li>
                        Innovations offer potential for a more interconnected and eco-friendly tomorrow.
                        <strong>4.</strong> <input value={answers[3]} onChange={(e) => updateAnswers(3, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    </li>
                </ol>
                <strong className='my-[20px] block text-[22px]'>
                    Questions 1-4
                </strong>
                <p>
                    Complete the summary below.
                </p>
                <p>
                    Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.
                </p>
                <p>
                    Write your answers in boxes 5-9 on your answer sheet.
                </p>
                <strong className='my-[20px] block text-[22px]'>
                    Current Digital Age
                </strong>
                <p>

                    Innovations in technology have altered how we access and engage with <strong>5.</strong><input value={answers[4]} onChange={(e) => updateAnswers(4, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    , shifting away from traditional paper-based methods to <strong>6.</strong><input value={answers[5]} onChange={(e) => updateAnswers(5, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    , which offers convenient access to a range of data, while high-speed internet enables <strong>7.</strong><input value={answers[6]} onChange={(e) => updateAnswers(6, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    information exchange. Electronic books, or e-books, provide instant access to a wide range of titles without the need for <strong>8.</strong><input value={answers[7]} onChange={(e) => updateAnswers(7, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    , offering enhanced features and gaining popularity through dedicated e-reader devices. The digital shift has transformed both education and business. Institutions employ e-learning platforms and digital textbooks for <strong>9.</strong><input value={answers[8]} onChange={(e) => updateAnswers(8, e.target.value)} type="text" className="border border-gray-300 px-2 py-1 ml-1" />
                    , while businesses embrace digital documentation and cloud storage for efficiency and collaboration.



                </p>
                <strong className='my-[20px] block text-[22px]'>
                    Questions 10-13
                </strong>
                <p className='my-[15px]'>
                    Do the following statements agree with the information given in Reading Passage?
                </p>
                <p className='my-[15px]'>
                    In boxes 10-13 on your answer sheet, write
                </p>
                <p className='my-[15px]'>
                    <strong>TRUE</strong> - if the statement agrees with the information
                </p>
                <p className='my-[15px]'>
                    <strong>FALSE</strong>  - if the statement contradicts the information
                </p>
                <p className='my-[15px]'>
                    <strong>NOT GIVEN </strong>- if there is no information on this
                </p>

                <p className='mb-[15px]'>
                    <strong> 10. </strong> Newly emerging technologies are expected to have a profound effect on digital advancement beyond traditional paper-based systems.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value='TRUE'
                            onChange={(e) => updateAnswers(9, e.target.value)}
                            type="radio"
                            name="1"
                            id="1"
                            checked={answers[9] === 'TRUE'}
                        />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value='FALSE'
                            onChange={(e) => updateAnswers(9, e.target.value)}
                            type="radio"
                            name="1"
                            id="1"
                            checked={answers[9] === 'FALSE'}
                        />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value='NOTGIVEN'
                            onChange={(e) => updateAnswers(9, e.target.value)}
                            type="radio"
                            name="1"
                            id="1"
                            checked={answers[9] === 'NOTGIVEN'}
                        />
                        NOT GIVEN
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong>11. </strong> Digital options pose negative implications for the environment.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value="TRUE" onChange={(e)=> updateAnswers(10, e.target.value)} checked={answers[10] === 'TRUE'} type="radio" name="2" id="2" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value='FALSE' onChange={(e)=> updateAnswers(10, e.target.value)} checked={answers[10] === 'FALSE'} type="radio" name="2" id="2" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value="NOTGIVEN" onChange={(e)=> updateAnswers(10, e.target.value)} checked={answers[10] === 'NOTGIVEN'} type="radio" name="2" id="2" />
                        NOT GIVEN
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong> 12. </strong> Efforts aimed at enhancing digital literacy have the potential to revive paper-based content in the near future.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value="TRUE" onChange={(e)=> updateAnswers(11, e.target.value)} checked={answers[11] === 'TRUE'} type="radio" name="3" id="3" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value='FALSE' onChange={(e)=> updateAnswers(11, e.target.value)} checked={answers[11] === 'FALSE'} type="radio" name="3" id="3" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value="NOTGIVEN" onChange={(e)=> updateAnswers(11, e.target.value)} checked={answers[11] === 'NOTGIVEN'} type="radio" name="3" id="3" />
                        NOT GIVEN
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong> 13. </strong> Information technology has helped overcome the limitations of traditional paper-based systems.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value="TRUE" onChange={(e)=> updateAnswers(12, e.target.value)} checked={answers[12] === 'TRUE'} type="radio" name="4" id="4" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value='FALSE' onChange={(e)=> updateAnswers(12, e.target.value)} checked={answers[12] === 'FALSE'} type="radio" name="4" id="4" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value="NOTGIVEN" onChange={(e)=> updateAnswers(12, e.target.value)} checked={answers[12] === 'NOTGIVEN'} type="radio" name="4" id="4" />
                        NOT GIVEN
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Part1