import React from 'react'

function Part2({ updateAnswers, answers }) {
    return (
        <div className='overflow-hidden flex gap-[20px] border-t-[2px] pt-[10px]'>
            <div className='overflow-y-scroll h-screen  w-[50%] px-[15px] pb-[150px]'>
                <strong className='my-[15px] block'>
                    Evolution of Currency
                </strong>
                <strong className='my-[15px] block'>
                    A
                </strong>
                <p>
                    Throughout history, the concept of currency has undergone a remarkable evolution, shaped by societal needs and technological advancements. In ancient civilizations, bartering was the primary mode of exchange, with goods and services traded directly between individuals. However, as societies grew more complex and interconnected, the need for a standardized medium of exchange became evident. The introduction of metallic coins marked a significant milestone in the evolution of currency, providing a tangible and universally accepted form of value representation. With the advent of coinage, trade flourished, enabling commerce to transcend local boundaries and facilitating economic growth on a larger scale. Nevertheless, the journey of currency did not halt with coins; it continued to evolve, leading to the emergence of paper money and the cash-based systems prevalent in today's economies.
                </p>
                <strong className='my-[15px] block'>
                    B
                </strong>
                <p>
                    The transition from metallic coins to paper money represented a pivotal development in the history of currency. Paper money, initially introduced as promissory notes by early Chinese merchants during the Tang Dynasty, gradually gained acceptance across different regions and cultures. Advancements in printing technology played a crucial role in the widespread adoption of paper money, allowing for the mass production of banknotes with intricate designs and security features. Centralized issuance by governments and financial institutions provided a level of trust and stability to paper currency, paving the way for the establishment of modern banking systems and monetary policies. Moreover, the convenience and portability of paper money compared to bulky coins accelerated its acceptance, revolutionizing the way individuals conducted financial transactions and reshaping the economic landscapes of nations worldwide.
                </p>
                <strong className='my-[15px] block'>
                    C
                </strong>
                <p>
                    In contemporary society, cash remains a cornerstone of the global economy, coexisting alongside digital forms of payment in a diverse financial ecosystem. Despite the proliferation of electronic transactions facilitated by credit cards, mobile payments, and online banking, cash continues to play a vital role in everyday commerce. Its tangible nature and widespread acceptance make cash transactions accessible and convenient for people across various socio-economic backgrounds. Furthermore, cash offers a level of anonymity and privacy that digital transactions may not provide, appealing to individuals who prioritize financial independence and security. In regions with limited access to banking services or unreliable digital infrastructure, cash serves as a lifeline, ensuring financial integration and resilience in the face of economic uncertainties.
                </p>
                <strong className='my-[15px] block'>
                    D
                </strong>
                <p>
                    The enduring significance of cash in modern economies underscores its resilience and adaptability to changing times. While digital payment methods offer unparalleled convenience and efficiency, cash remains indispensable for segments of the population, including the unbanked and underbanked individuals. For marginalized communities, cash transactions provide a means of participating in the formal economy and accessing essential goods and services. Efforts to promote financial literacy and expand access to banking services must recognize the continued relevance of cash in fostering economic empowerment and social equity. By ensuring the availability and accessibility of cash alongside digital innovations, policymakers and financial institutions can uphold the principles of financial inclusion and diversity in today's rapidly evolving financial landscape.
                </p>
                <strong className='my-[15px] block'>
                    E
                </strong>
                <p>
                    Furthermore, the physical characteristics of cash contribute to its enduring popularity and utility in diverse socio-economic contexts. Unlike digital transactions that rely on electronic infrastructure and connectivity, cash transactions are immune to technical failures and cyber threats, ensuring uninterrupted access to financial resources even in remote or underdeveloped regions. The tactile experience of handling cash also fosters a sense of control and awareness of one's spending habits, promoting responsible financial behavior and budget management. Additionally, cash transactions facilitate informal economies and peer-to-peer exchanges, supporting community resilience and social cohesion in local contexts where trust and familiarity are paramount.
                </p>
                <strong className='my-[15px] block'>
                    F
                </strong>
                <p>
                    Moreover, cash serves as a symbol of sovereignty and national identity, reflecting the cultural heritage and economic policies of a country. The design and imagery featured on banknotes often showcase historical figures, landmarks, and cultural motifs that evoke a sense of pride and unity among citizens. By circulating currency bearing national symbols and insignia, governments reinforce the collective identity of their populace and promote patriotism and civic engagement. Additionally, the issuance of currency by central banks underscores a nation's economic sovereignty and fiscal responsibility, signaling its ability to regulate monetary policies and ensure price stability. As such, cash transcends its function as a medium of exchange to embody broader socio-political values and aspirations within society.
                </p>
                <strong className='my-[15px] block'>
                    G
                </strong>
                <p>
                    The evolution of currency reflects the dynamic interplay between technological innovation, economic development, and societal norms. While digital advancements have transformed the landscape of financial transactions, cash remains an essential and resilient component of the global economy. Its tangible attributes, cultural significance, and role in promoting financial inclusion underscore its enduring relevance in modern society. As we navigate the complexities of the digital age, it is imperative to recognize the multifaceted nature of currency and strive for a balanced approach that preserves the accessibility, security, and cultural significance of cash alongside digital innovations.
                </p>
            </div>
            <div className='overflow-y-scroll h-screen   w-[50%] px-[15px] pb-[150px]'>
                <strong className='my-[20px] block text-[22px]'>
                    Questions 14-20
                </strong>
                <p>
                    Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below. Write the correct number, i-viii, in boxes 14-20 on your answer sheet.
                </p>
                <strong className='my-[20px] block'>
                    List of Headings
                </strong>
                <ul className='list-disc pl-5'>
                    <li>
                        <strong>  i </strong>The Continued Significance of Cash
                    </li>
                    <li>
                        <strong>  ii </strong>The Resilience of Currency
                    </li>
                    <li>
                        <strong>  iii </strong>Transition to Paper Money
                    </li>
                    <li>
                        <strong>  iv </strong> Cash as a Symbol of Sovereignty
                    </li>
                    <li>
                        <strong>  v </strong> The Role of Cash in Modern Society
                    </li>
                    <li>
                        <strong>  vi </strong>  Currency Evolution in Ancient Mythology
                    </li>
                    <li>
                        <strong>  vii </strong>  The Evolution of Currency
                    </li>
                    <li>
                        <strong>  viii </strong>   Physical Characteristics of Cash
                    </li>
                    <li>
                        <strong>  ix </strong>   Physical Characteristics of Cash
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong>14.</strong> Paragraph A
                    <select
                        value={answers[0]}
                        onChange={(e) => updateAnswers(0, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>15.</strong> Paragraph B
                    <select
                        value={answers[1]}
                        onChange={(e) => updateAnswers(1, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>16.</strong> Paragraph C
                    <select
                        value={answers[2]}
                        onChange={(e) => updateAnswers(2, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>17.</strong> Paragraph D
                    <select
                        value={answers[3]}
                        onChange={(e) => updateAnswers(3, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>18.</strong> Paragraph E
                    <select
                        value={answers[4]}
                        onChange={(e) => updateAnswers(4, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>19.</strong> Paragraph F
                    <select
                        value={answers[5]}
                        onChange={(e) => updateAnswers(5, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <p className='my-[15px]'>
                    <strong>20.</strong> Paragraph G
                    <select
                        value={answers[6]}
                        onChange={(e) => updateAnswers(6, e.target.value)}
                        name="" id="" className='border-[2px] rounded-[5px] ml-[5px]'>
                        <option defaultValue>Select</option>
                        <option value="i">i</option>
                        <option value="ii">ii</option>
                        <option value="iv">iv</option>
                        <option value="v">v</option>
                        <option value="vi">vi</option>
                        <option value="vii">vii</option>
                        <option value="viii">viii</option>
                        <option value="ix">ix</option>
                    </select>
                </p>
                <strong className='my-[20px] block'>
                    Questions 21-23
                </strong>
                <span>
                    Choose the correct letter, A, B, C, or D. <br />
                    Write the correct letter in boxes 21-23 on your answer sheet.
                </span>
                <p className='my-[15px]'>
                    <strong> 21.</strong> What significant development in currency history is mentioned in paragraph B?
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value={`A`} onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="1" id="1" />
                        A) Introduction of metallic coins
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={'B'} onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="1" id="1" />
                        B) Adoption of paper money
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={'C'} onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="1" id="1" />
                        C) Emergence of digital payment methods
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={'D'} onChange={(e) => updateAnswers(7, e.target.value)} type="radio" name="1" id="1" />
                        D) Establishment of modern banking systems and monetary policies
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong> 22.</strong> As mentioned in paragraph C, what is the role of cash in modern society?
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value={`A`} onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="2" id="2" />
                        A) It is becoming outdated due to digital transactions.

                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"B"} onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="2" id="2" />
                        B) It is primarily utilized by affluent individuals.

                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"C"} onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="2" id="2" />
                        C) It is crucial for financial inclusion and stability.
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"D"} onChange={(e) => updateAnswers(8, e.target.value)} type="radio" name="2" id="2" />
                        D) It is restricted to regions with limited banking access.
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong> 23.</strong>What does paragraph D highlight about the importance of cash in contemporary economies?
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"A"} onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="3" id="3" />
                        A) Its susceptibility to changes in the financial landscape

                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"B"} onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="3" id="3" />
                        B) Its neglect of marginalized sectors of society

                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"C"} onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="3" id="3" />
                        C) Its dependence on digital financial tools
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input value={"D"} onChange={(e) => updateAnswers(9, e.target.value)} type="radio" name="3" id="3" />
                        D) Its contribution to economic empowerment and fairness
                    </li>
                </ul>
                <strong className='my-[20px] block'>
                    Questions 24-26
                </strong>
                <p className='my-[15px]'>
                    Do the following statements agree with the information given in Reading Passage?
                </p>
                <p className='my-[15px]'>
                    In boxes 24-26 on your answer sheet, write
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
                <p className='my-[15px]'>
                    <strong>24. </strong> Cash is mainly used for its function as a medium of exchange in modern society.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="TRUE"
                            onChange={(e) => updateAnswers(10, e.target.value)}
                            type="radio" name="2" id="2" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="FALSE"
                            onChange={(e) => updateAnswers(10, e.target.value)}
                            type="radio" name="2" id="2" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="NOTGIVEN"
                            onChange={(e) => updateAnswers(10, e.target.value)}
                            type="radio" name="2" id="2" />
                        NOT GIVEN
                    </li>
                </ul>
                <p className='mb-[15px]'>
                    <strong> 25.  </strong> The design and imagery on banknotes have little influence on citizens' sense of pride.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="TRUE"
                            onChange={(e) => updateAnswers(11, e.target.value)}
                            type="radio" name="1" id="1" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="FALSE"
                            onChange={(e) => updateAnswers(11, e.target.value)}
                            type="radio" name="1" id="1" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="NOTGIVEN"
                            onChange={(e) => updateAnswers(11, e.target.value)}
                            type="radio" name="1" id="1" />
                        NOT GIVEN
                    </li>
                </ul>
                <p className='my-[15px]'>
                    <strong> 26. </strong> Cash is becoming obsolete in the global economy due to digital advancements.
                </p>
                <ul>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="TRUE"
                            onChange={(e) => updateAnswers(12, e.target.value)}
                            type="radio" name="3" id="3" />
                        TRUE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="FALSE"
                            onChange={(e) => updateAnswers(12, e.target.value)}
                            type="radio" name="3" id="3" />
                        FALSE
                    </li>
                    <li className='flex items-center gap-[5px]'>
                        <input
                            value="NOTGIVEN"
                            onChange={(e) => updateAnswers(12, e.target.value)}
                            type="radio" name="3" id="3" />
                        NOT GIVEN
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Part2