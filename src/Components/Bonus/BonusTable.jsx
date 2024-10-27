import React from 'react';

export default function BonusTable({ data }) {
    const formatDate = (dateString) => {
        const datePart = dateString.split(' ')[0];
        const timePart = dateString.split(' ')[1];

        const formattedString = `${datePart} ${timePart.split('.')[0]}`;

        const date = new Date(formattedString);
        return date.toISOString().slice(0, 19).replace('T', ' ');
    };

    return (
        <div className="BonusTable mt-[50px] mb-[200px]">
            <div className="Container">
                <h1 className="text-center text-[40px] font-bold mb-[30px]">
                    Users Joined via Your Referral Link
                </h1>

                {data && data.length > 0 ? (
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="bg-MainColor text-white text-left">
                            <th className="p-[15px] border-b border-white">#</th>
                            <th className="p-[15px] border-b border-white">Guest Name</th>
                            <th className="p-[15px] border-b border-white">Registered At</th>
                            <th className="p-[15px] border-b border-white">Chat ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((i, index) => {
                            const registeredAt = formatDate(i?.guestRegisteredAt);

                            return (
                                <tr key={index} className='Result__Card border-b border-gray-300 hover:bg-gray-100 transition duration-300'>
                                    <td className='p-[15px] text-center'>{index + 1}</td>
                                    <td className='p-[15px]'>{i?.guestName}</td>
                                    <td className='p-[15px]'>{registeredAt}</td>
                                    <td className='p-[15px] text-center'>{i?.guestChatId}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center h-[400px]">
                        <h1 className='text-[20px] font-bold'>Bonus Yo'q</h1>
                    </div>
                )}
            </div>
        </div>
    );
}
