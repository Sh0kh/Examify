import React from 'react';

const QuestionnaireItem = ({ number, text }) => (
  <li className="mb-2">
    {text} <strong>{number}.</strong> <input type="text" className="border border-gray-300 px-2 py-1 ml-1 w-40" />
  </li>
);
function Part4() {
  return (
    <div className="border border-gray-300 w-full p-5 mb-[50px]">
      <h2 className="font-bold text-xl mb-4">Part 4 Questions 31-40</h2>
      <p className="mb-4">
        Write <strong>NO MORE THAN TWO WORDS/OR A NUMBER</strong> for each answer.
      </p>
      <h3 className="font-bold text-lg mb-3">The History of Chocolate</h3>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">The Origins of Chocolate</h4>
        <ul className="list-disc pl-5 space-y-2">
          <QuestionnaireItem number="31" text="Originated in the tropical rainforests of" />
          <QuestionnaireItem number="32" text="Olmecs shared their experience with the" />
          <QuestionnaireItem number="33" text="Became a luxury item in the Aztec empire. They started to purchase cacao with the help of broad" />
          <QuestionnaireItem number="34" text="Spanish were the first people to" />
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Evolution of Chocolate in Europe</h4>
        <ul className="list-disc pl-5 space-y-2">
          <QuestionnaireItem number="35" text="Became popular in the 17th century through chocolate" />
          <QuestionnaireItem number="36" text="Was transformed by the industrial revolution with inventions, leading to more digestible cocoa" />
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Modern Era of Chocolate</h4>
        <ul className="list-disc pl-5 space-y-2">
          <QuestionnaireItem number="37" text="It was used not only as a facilitator of" />
          <QuestionnaireItem number="38" text="Chocolate production is experiencing both environmental and economic issues due to its increasing" />
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Future Considerations</h4>
        <ul className="list-disc pl-5 space-y-2">
          <QuestionnaireItem number="39" text="Raises questions about how chocolate companies" />
          <QuestionnaireItem number="40" text="Concerns about maintaining the" />
        </ul>
      </div>
    </div>
  );
}

export default Part4;