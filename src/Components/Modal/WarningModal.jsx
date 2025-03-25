import { useState } from "react"

export default function WarningModal() {

    const [warningModal, setWarningModal] = useState(true)

    return (
        <div
            onClick={()=>setWarningModal(false)}
            className={`fixed inset-0 bg-[#0000006b] z-[1000000000] flex items-center justify-center transition-opacity duration-500 ${warningModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        >
            <div
                className={`Monual p-[40px] bg-MainColor rounded-[8px] w-[95%] md:w-[50%] lg:w-[40%] py-[30px] transform transition-all duration-500 ${warningModal ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-center text-[white] text-[30px]">Diqqat !</h2>
                <div className="mt-4">
                    <p className="text-white text-center text-[20px]">
                        Platformada texnik ishlar olib borilmoqda, agar xohlasangiz, davom eting
                    </p>
                </div>
            </div>
        </div>
    )
}