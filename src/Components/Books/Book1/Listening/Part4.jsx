import React from 'react';

function Part4({updateAnswers, answers}) {


  return (
    <div className="border border-gray-300 w-full p-5 mb-[50px]">
      <h2 className="font-bold text-xl mb-4">Part 4 Questions 31-40</h2>
      <p className="mb-4">
        Write <strong>NO MORE THAN TWO WORDS/OR A NUMBER</strong> for each answer.
      </p>
      <form>
        <h3 className="font-bold text-lg mb-3">The History of Chocolate</h3>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">The Origins of Chocolate</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="mb-2">
              Originated in the tropical rainforests of <strong>31.</strong>
              <input
                type="text"
                value={answers[0]}  
                onChange={(e) => updateAnswers(0, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Olmecs shared their experience with the <strong>32.</strong>
              <input
                type="text"
                value={answers[1]}  
                onChange={(e) => updateAnswers(1, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Became a luxury item in the Aztec empire. They started to purchase cacao with the help of broad <strong>33.</strong>
              <input
                type="text"
                value={answers[2]}  
                onChange={(e) => updateAnswers(2, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Spanish were the first people to <strong>34.</strong>
              <input
                type="text"
                value={answers[3]}  
                onChange={(e) => updateAnswers(3, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Evolution of Chocolate in Europe</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="mb-2">
              Became popular in the 17th century through chocolate <strong>35.</strong>
              <input
                type="text"
                value={answers[4]}  
                onChange={(e) => updateAnswers(4, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Was transformed by the industrial revolution with inventions, leading to more digestible cocoa <strong>36.</strong>
              <input
                type="text"
                value={answers[5]}  
                onChange={(e) => updateAnswers(5, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Modern Era of Chocolate</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="mb-2">
              It was used not only as a facilitator of <strong>37.</strong>
              <input
                type="text"
                value={answers[6]}  
                onChange={(e) => updateAnswers(6, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Chocolate production is experiencing both environmental and economic issues due to its increasing <strong>38.</strong>
              <input
                type="text"
                value={answers[7]}  
                onChange={(e) => updateAnswers(7, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Future Considerations</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li className="mb-2">
              Raises questions about how chocolate companies <strong>39.</strong>
              <input
                type="text"
                value={answers[8]}  
                onChange={(e) => updateAnswers(8, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
            <li className="mb-2">
              Concerns about maintaining the <strong>40.</strong>
              <input
                type="text"
                value={answers[9]}  
                onChange={(e) => updateAnswers(9, e.target.value)}
                className="border border-gray-300 px-2 py-1 ml-1 w-40"
              />
            </li>
          </ul>
        </div>

  
      </form>
    </div>
  );
}

export default Part4;
