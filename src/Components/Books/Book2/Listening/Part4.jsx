export default function Part4({ updateAnswers, answers }) {


    return (
        <div className="border-[1px]  mx-auto p-6 rounded-lg">
            <div className="mb-6">
                <h1 className="text-xl font-bold mb-2">PART 4 Questions 31-40</h1>
                <p className="text-sm text-gray-600">Write ONE WORD ONLY for each answer.</p>
            </div>

            <div className="space-y-6 bg-[#E9E9E9] p-[10px] rounded-[10px]">
                <h2 className="text-lg font-semibold text-center">Space Traffic Management</h2>

                <section>
                    <h3 className="font-medium mb-3">A Space Traffic Management system</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>is a concept similar to Air Traffic Control, but for satellites rather than planes.</li>
                        <li>would aim to set up legal and <input value={answers[0]} onChange={(e) => updateAnswers(0, e.target.value)} className="px-[10px] w-auto border-b-[2px] border-b-[black]" placeholder="31" type="text" /> ways of improving safety.</li>
                        <li>does not actually exist at present.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-medium mb-3">Problems in developing effective Space Traffic Management</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Satellites are now quite<input value={answers[1]} onChange={(e) => updateAnswers(1, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="32" type="text" /> and therefore more widespread (e.g. there are constellations made up of <input value={answers[2]} onChange={(e) => updateAnswers(2, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="33" type="text" /> of satellites).</li>
                        <li>At present, satellites are not required to transmit information to help with their <input value={answers[3]} onChange={(e) => updateAnswers(3, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="34" type="text" />.</li>
                        <li>There are few systems for <input value={answers[4]} onChange={(e) => updateAnswers(4, e.target.value)}  className="px-[10px] border-b-[2px] border-b-[black]" placeholder="35" type="text" /> satellites.</li>
                        <li>Small pieces of debris may be difficult to identify.</li>
                        <li>Operators may be unwilling to share details of satellites used for <input value={answers[5]} onChange={(e) => updateAnswers(5, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="36" type="text" /> or commercial reasons.</li>
                        <li>It may be hard to collect details of the object's <input value={answers[6]} onChange={(e) => updateAnswers(6, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="37" type="text" /> at a given time.</li>
                        <li>Scientists can only make a <input value={answers[7]} onChange={(e) => updateAnswers(7, e.target.value)}  className="px-[10px] border-b-[2px] border-b-[black]" placeholder="38" type="text" /> about where the satellite will go.</li>
                    </ul>
                </section>

                <section>
                    <h3 className="font-medium mb-3">Solutions</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Common standards should be agreed on for the presentation of information.</li>
                        <li>The information should be combined in one <input value={answers[8]} onChange={(e) => updateAnswers(8, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="39" type="text" />.</li>
                        <li>A coordinated system must be designed to create <input value={answers[9]} onChange={(e) => updateAnswers(9, e.target.value)} className="px-[10px] border-b-[2px] border-b-[black]" placeholder="40" type="text" /> in its users.</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}