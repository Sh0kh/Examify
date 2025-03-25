export default function Part1({ updateAnswers, answers }) {
    return (
        <div className='Readin__wrapper overflow-hidden flex gap-[20px] border-t-[2px] pt-[10px]'>
            <div className='overflow-y-scroll h-screen  w-[50%] px-[15px] pb-[150px]'>
                <strong className='my-[15px] block'>
                    A
                </strong>
                <p>
                    Concrete is the second most used substance in the global economy, after water - and one of the world ’s biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modem life for many years.

                </p>
                <strong className='my-[15px] block'>
                    B
                </strong>
                <p>
                    The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. ’Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue. ’

                </p>
                <strong className='my-[15px] block'>
                    C
                </strong>
                <p>
                    Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. ’ Concrete is amazing stuff. Making anything with similar properties is going to be very difficult. ’

                </p>
                <strong className='my-[15px] block'>
                    D
                </strong>
                <p>
                    A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to tum to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.
                </p>
                <strong className='my-[15px] block'>
                    E
                </strong>
                <p>
                    Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.
                </p>
                <strong className='my-[15px] block'>
                    F
                </strong>
                <p>
                    Stora Enso is Europe’s biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.
                </p>
                <strong className='my-[15px] block'>
                    G
                </strong>
                <p>
                    Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal􀀗buming power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas em1ss1ons.

                    But Anna Surgenor, of the UK’s Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. ’It’s possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building - these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.’

                </p>
                <strong className='my-[15px] block'>
                    H
                </strong>
                <p>
                    While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK’s Royal Institute oflnternational Affairs reached the conclusion that, ’Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.’

                </p>
            </div>
            <div className='ReadingLine w-full bg-MainColor h-[5px] my-[10px] hidden'>

            </div>
            <div className='overflow-y-scroll h-screen pb-[150px] w-[50%]'>
                <div className="max-w-3xl mx-auto p-6 bg-white">
                    <section className="mb-8 ">
                        <h2 className="text-lg font-bold mb-4">Questions 1-4</h2>
                        <p className="mb-2">Reading Passage 1 has eight sections, A-H.</p>
                        <p className="mb-2">Which section contains the following information?</p>
                        <p className="italic mb-4">Write the correct letter, A-H, in boxes 1-4 on your answer sheet.</p>

                        <div className="space-y-2 bg-[#E9E9E9] p-[10px] rounded-[10px]">
                            <div className="flex items-center gap-2">

                                <p>  <span className="font-bold">1.</span> an explanation of the industrial processes that create potential raw materials for concrete <select value={answers[0]}  onChange={(e) => updateAnswers(0, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                    <option value={'F'}>F</option>
                                    <option value={'G'}>G</option>
                                    <option value={'H'}>H</option>
                                </select></p>

                            </div>

                            <div className="flex items-center gap-2">

                                <p> <span className="font-bold">2.</span> a reference to the various locations where high-rise wooden buildings can be found  <select value={answers[1]}  onChange={(e) => updateAnswers(1, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                    <option value={'F'}>F</option>
                                    <option value={'G'}>G</option>
                                    <option value={'H'}>H</option>
                                </select></p>

                            </div>

                            <div className="flex items-center gap-2">

                                <p><span className="font-bold">3.</span> an indication of how widely available the raw materials of concrete are  <select value={answers[2]}  onChange={(e) => updateAnswers(2, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                    <option value={'F'}>F</option>
                                    <option value={'G'}>G</option>
                                    <option value={'H'}>H</option>
                                </select></p>

                            </div>

                            <div className="flex items-center gap-2">

                                <p> <span className="font-bold">4.</span> the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material <select value={answers[3]}  onChange={(e) => updateAnswers(3, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                    <option value={'E'}>E</option>
                                    <option value={'F'}>F</option>
                                    <option value={'G'}>G</option>
                                    <option value={'H'}>H</option>
                                </select></p>

                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-lg font-bold mb-4">Questions 5-8</h2>
                        <p className="italic mb-4">Choose ONE WORD ONLY from the passage for each answer.</p>

                        <h3 className="text-center font-bold mb-4">Making buildings with wood</h3>

                        <div className="space-y-4 bg-[#E9E9E9] p-[10px] rounded-[10px]">
                            <p>
                                Wood is a traditional building material, but current environmental concerns are encouraging
                                <input value={answers[4]} onChange={(e)=>updateAnswers(4, e.target.value)} type="text" className="border-b px-[5px] w-24 mx-2" placeholder="5" /> to use wood in modern construction projects.
                                Using wood, however, has its challenges. For example, as
                                <input value={answers[5]} onChange={(e)=>updateAnswers(5, e.target.value)} type="text" className="border-b px-[5px] w-24 mx-2" placeholder="6" /> in the atmosphere enters wood, it increases in size.
                            </p>

                            <p>
                                In addition, wood is prone to pests and the risk of fire is greater. However, wood can be turned into a better
                                construction material if it is treated and combined with other materials. In one process,
                                <input value={answers[6]} onChange={(e)=>updateAnswers(6, e.target.value)}  type="text" className="border-b w-24 mx-2" placeholder="7" /> of solid wood are glued together to create building blocks.
                            </p>

                            <p>
                                These blocks are lighter than concrete and steel but equal them in strength. Experts say that wooden buildings are
                                an improvement on those made of concrete and steel in terms of the
                                <input value={answers[7]} onChange={(e)=>updateAnswers(7, e.target.value)} type="text" className="border-b px-[5px] w-24 mx-2" placeholder="8" /> with which they can be constructed and how much
                                noise is generated by the process.
                            </p>
                        </div>
                    </section>
                </div>


                <div className="max-w-3xl mx-auto p-6 bg-white ">
                    <h2 className="text-lg font-bold mb-4">Questions 9-13</h2>

                    <div className="mb-4 space-y-2">
                        <p className="italic">Look at the following statements (Questions 9-13) and the list of people below</p>
                        <p>Match each statement with the correct person, A, B, C or D.</p>
                        <p className="italic">NB You may use any letter more than once.</p>
                    </div>

                    <div className="space-y-2 mb-6 bg-[#E9E9E9] p-[10px] rounded-[10px]">
                        <div className="flex items-center gap-2">
                            <p> <span className="font-bold">9.</span> The environmental advantage of cement alternatives may not be as great as initially assumed. <select value={answers[8]}  onChange={(e) => updateAnswers(8, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                </select></p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p><span className="font-bold">10.</span> It would be hard to create a construction alternative to concrete that offers so many comparable benefits.  <select value={answers[9]}  onChange={(e) => updateAnswers(9, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                </select></p>
                        </div>

                        <div className="flex items-center gap-2">

                            <p><span className="font-bold">11.</span> Worries about the environment have led to increased interest in wood as a construction material.  <select value={answers[10]}  onChange={(e) => updateAnswers(10, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                </select></p>

                        </div>

                        <div className="flex items-center gap-2">
                            <p><span className="font-bold">12.</span> Expense has been a factor in the negative response to the development of new cements.  <select value={answers[11]}  onChange={(e) => updateAnswers(11, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                </select></p>
                        </div>

                        <div className="flex items-center gap-2">
                            <p> <span className="font-bold">13.</span> The environmental damage caused by concrete is due to it being produced in large quantities. <select value={answers[12]}  onChange={(e) => updateAnswers(12, e.target.value)} className="border rounded px-2 py-1">
                                    <option defaultValue={''}>Option</option>
                                    <option value={`A`}>A</option>
                                    <option value={'B'}>B</option>
                                    <option value={'С'}>С</option>
                                    <option value={'D'}>D</option>
                                </select></p>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-4 bg-[#E9E9E9] p-[10px] rounded-[10px]">
                        <ul className="space-y-2">
                            <li>A) Chris Cheeseman</li>
                            <li>B) Markus Mannstrbm</li>
                            <li>C) Anna Surgenor</li>
                            <li>D) Felix Preston and Johanna Lehne</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}