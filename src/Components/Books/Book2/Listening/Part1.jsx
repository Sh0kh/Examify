
export default function Part1({ updateAnswers, answers }) {


    return (
        <div className=" mx-auto p-4 border-[1px] part1">
            <h1 className="text-2xl font-bold mb-4">Test 7 LISTENING</h1>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2">PART 1 Questions 1-10</h2>
                <p className="mb-4">Write ONE WORD AND/OR A NUMBER for each answer.</p>

                <div className="bg-white rounded-lg shadow-lg p-6 mb-8 bg-[#0000001c] part1__table">
                    <h3 className="text-center text-xl font-bold mb-6">
                        Wayside Camera Club membership form
                    </h3>

                    <div className="space-y-">
                        <div className="grid grid-cols-2">
                            <div className="font-medium border-[1px] p-[5px] border-[#00000063]">Name</div>
                            <div className="border-[1px] border-[#00000063] p-[5px]" >Dan Green</div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="font-medium border-[1px] border-[#00000063] p-[5px]">Email address</div>
                            <div className="border-[1px] border-[#00000063] p-[5px]">dan1068@market.com</div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="font-medium border-[1px] border-[#00000063] p-[5px]">Home address</div>
                            <div className="border-[1px] border-[#00000063] p-[5px]"> 52 <input placeholder="1" onChange={(e) => updateAnswers(0, e.target.value)}
                                value={answers[0]} className="w-24 border-b-2 px-[10px] border-gray-300 focus:outline-none" /> Street, Peacetown</div>
                        </div>

                        <div className="grid grid-cols-2 ">
                            <div className="font-medium border-[1px] border-[#00000063] p-[5px]">Heard about us</div>
                            <div className="border-[1px] border-[#00000063] p-[5px]">from a <input
                                placeholder="2"
                                onChange={(e) => updateAnswers(1, e.target.value)}
                                value={answers[1]}
                                className="w-24 border-b-2 border-gray-300 focus:outline-none px-[10px]" /></div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="font-medium border-[1px] border-[#00000063] p-[5px]">Reasons for joining</div>
                            <div className="space-y-2 border-[1px] border-[#00000063] p-[5px]">
                                <div>to enter competitions</div>
                                <div>to <input onChange={(e) => updateAnswers(2, e.target.value)}
                                    value={answers[2]} placeholder="3" className="px-[10px] w-24 border-b-2 border-gray-300 focus:outline-none" /></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 ">
                            <div className="font-medium border-[1px] border-[#00000063] p-[5px]">Type of membership</div>
                            <div className="border-[1px] border-[#00000063] p-[5px]">
                                <input 
                                 onChange={(e) => updateAnswers(3, e.target.value)}
                                 value={answers[3]} 
                                className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" placeholder="4"/> membership (£30)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Questions 5-10</h2>
                    <p className="mb-4">Write NO MORE THAN TWO WORDS for each answer.</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 bg-[#0000001c] part1__table">
                    <h3 className="text-center text-xl font-bold mb-6">
                        Photography competitions
                    </h3>

                    <table className="w-full">
                        <thead>
                            <tr className="border-b ">
                                <th className="py-2 px-4 text-left border-[1px] border-[#00000063] p-[5px]">Title of competition</th>
                                <th className="py-2 px-4 text-left border-[1px] border-[#00000063] p-[5px]">Instructions</th>
                                <th className="py-2 px-4 text-left border-[1px] border-[#00000063] p-[5px]">Feedback to Dan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    '<input
                                     onChange={(e) => updateAnswers(4, e.target.value)}
                                     value={answers[4]} 
                                     placeholder="5"
                                    className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" />'
                                </td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">A scene in the home</td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">The picture's composition was not good.</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">'Beautiful Sunsets'</td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    Scene must show some <input
                                     onChange={(e) => updateAnswers(5, e.target.value)}
                                     value={answers[5]} 
                                     placeholder="6"
                                    className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" />
                                </td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    The <input
                                     onChange={(e) => updateAnswers(6, e.target.value)}
                                     value={answers[6]} 
                                     placeholder="7"
                                    className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" /> was wrong.
                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    '<input
                                     onChange={(e) => updateAnswers(7, e.target.value)}
                                     value={answers[7]} 
                                     placeholder="8"
                                    className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" />'
                                </td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    Scene must show <input 
                                     onChange={(e) => updateAnswers(8, e.target.value)}
                                     value={answers[8]} 
                                     placeholder="9"
                                    className="w-24 px-[10px] border-b-2 border-gray-300 focus:outline-none" />
                                </td>
                                <td className="py-2 px-4 border-[1px] border-[#00000063] p-[5px]">
                                    The photograph was too <input
                                     onChange={(e) => updateAnswers(9, e.target.value)}
                                     value={answers[9]} 
                                     placeholder="10"
                                    className="w-24 border-b-2 px-[10px] border-gray-300 focus:outline-none" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}