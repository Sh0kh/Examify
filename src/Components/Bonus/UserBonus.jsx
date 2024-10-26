export default function UserBonus({data}) {
    return (
        <div className="UserBonus ">
            <div className="Container">
                    <h1 className="text-center text-[40px] font-bold">
                        Your Bonus
                    </h1>
                <div className="border-[2px] border-MainColor p-[30px] rounded-[10px]">
                    <div>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Foydalanuvchi nomingiz:  <span className="font-normal">{data?.name}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Sizning referal havolangiz:  <span className="font-normal">{data?.refLink}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                             Ro'yxatdan o'tgan vaqtingiz:   <span className="font-normal">{data?.registeredAt}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Siz ishlatib yuborgan bonusingiz soni:  <span className="font-normal">{data?.bonusCount}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Siz taklif qilgan umumiy foydalanuvchilar soni:  <span className="font-normal">{data?.welcomeCount}</span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}