export default function BonusTable({ data }) {
  return (
    <div className="BonusTable mt-[50px] mb-[200px]">
      <div className="Container">
        <h1 className="text-center text-[40px] font-bold mb-[30px]">
          Users joined via your referral link
        </h1>
        {data && data.length > 0 ?(
        data?.map((i, index) => (
          <div key={index} className='Result__Card w-full p-[20px] border-[2px] mb-[20px] border-MainColor rounded-[8px] flex items-center justify-between cursor-pointer transition duration-500 hover:shadow-2xl'>
            <div className='flex items-end gap-[5px]'>
              <span className='font-bold text-[15px] bg-MainColor text-[white] px-[8px] py-[3px] rounded-[50%]'>
                {index + 1}
              </span>
              <span className='text-[20px] w-[50px]'>{i?.guestName}</span>
            </div>
            <span className='px-[20px] py-[10px] border-[2px] border-MainColor rounded-[8px] bg-MainColor text-[white] duration-300 hover:bg-transparent hover:text-MainColor'>
              {i?.guestRegisteredAt.split('T')[0]}
            </span>
            <div>
              <span className='text-[20px] font-bold block'>{i?.guestChatId}</span>
            </div>
          </div>
        ))
        ):(
          <div className="text-center h-[400px]">
            <h1>
              Bonus yo'q
            </h1>
          </div>
        )}

      </div>
    </div>
  )
}