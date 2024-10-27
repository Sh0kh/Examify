export default function UserBonus({ data }) {
    const formatDate = (dateString) => {
        if (!dateString) return '';

        const date = new Date(dateString);

        if (isNaN(date.getTime())) {
            const match = dateString.match(/(\d{4}-\d{2}-\d{2})\s(\d{2}):(\d{2}):(\d{2})/);
            if (match) {
                const [, datePart, hours, minutes, seconds] = match;
                return `${datePart} ${hours}:${minutes}:${seconds}`;
            }
            return dateString;
        }

        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="UserBonus ">
            <div className="Container">
                <h1 className="text-center text-[40px] font-bold">
                    Your Bonus
                </h1>
                <div className="border-[2px] border-MainColor p-[30px] rounded-[10px]">
                    <div>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Your Username: <span className="font-normal">{data?.name}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Your Referral Link: <span className="font-normal">{data?.refLink}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Registration Time: <span className="font-normal">{formatDate(data?.registeredAt)}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Number of Bonuses Used: <span className="font-normal">{data?.bonusCount}</span>
                        </h2>
                        <h2 className="text-MainColor text-[25px] font-bold">
                            Total Users Invited: <span className="font-normal">{data?.welcomeCount}</span>
                        </h2>
                    </div>

                    {/* Bonus CTA Section */}
                    <div className="mt-8 bg-gradient-to-r from-MainColor to-blue-600 p-6 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Do You Want to Get Bonuses? 🎁</h3>
                                <p className="text-lg opacity-90">
                                    Collect more bonuses through our Telegram bot!
                                </p>
                                <a
                                    href="https://t.me/codevanbot"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center mt-4 bg-white text-MainColor px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300"
                                >
                                    Get Bonus
                                    <span className="ml-2">➜</span>
                                </a>
                            </div>
                            <div className="hidden md:block text-6xl">
                                🎉
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
