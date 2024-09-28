import React, { useState, useRef } from 'react'

function Login() {
    const [values, setValues] = useState(Array(6).fill('')); 
    const inputRefs = useRef([]); 

    const handleChange = (e, index) => {
        const inputValue = e.target.value;


        if (inputValue.length <= 1 && /^[0-9]*$/.test(inputValue)) {
            const newValues = [...values];
            newValues[index] = inputValue;
            setValues(newValues);
            if (inputValue && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        } else if (inputValue === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && values[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    return (
        <div className='Login w-full h-screen pt-[200px] flex items-baseline justify-center overflow-hidden'>
            <div className='Login__wrapper text-center'>
                <h1 className='font-bold text-MainColor text-[45px]'>
                    Kodni kiriting
                </h1>
                <p className='text-[30px] text-MainColor'>
                    <a className='link bg-MainColor border-[2px] border-MainColor text-[white] rounded-[8px] px-[10px] py-[5px] ' href="https://t.me/CodevanExamify_bot" target="_blank" rel="noopener noreferrer">Telegram bot</a> yordamida kodingizni oling
                </p>
                
                <form className='flex items-center justify-center gap-[20px] mt-[60px]'>
                    {values.map((value, index) => (
                        <input
                            ref={(el) => (inputRefs.current[index] = el)}
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            type="text" className='py-[10px] text-center text-[25px] border-[2px] border-MainColor px-[10px] w-[50px] rounded-[16px] ' pattern="[0-9]*" maxLength="1" inputMode="numeric" />
                    ))}
                </form>
            </div>
        </div>
    )
}

export default Login