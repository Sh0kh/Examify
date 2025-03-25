import React from "react";

export default function Bonus({ data }) {
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
        <div className="container min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Bonus</h1>
            <div className="mb-6">
                <p className="text-lg">
                    <span className="font-semibold">Your Username:</span> {data?.name}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Your Referral Link:</span> {data?.refLink}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Registration Time:</span> {formatDate(data?.registeredAt)}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Number of Bonuses Used:</span> {data?.bonusCount}
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Total Users Invited:</span> {data?.welcomeCount}
                </p>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Users Joined via Your Referral Link</h2>
            <p className="text-gray-600 mb-6">You don't have a bonus yet</p>

            {/* Bonus banner */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-400 p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-2">Do You Want to Get Bonuses? 🎁</h3>
                <p className="mb-4">Collect more bonuses through our Telegram bot!</p>
                <a
                    href="https://t.me/codevanbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 font-semibold py-2 px-4 rounded flex items-center w-[140px]"
                >
                    Get bonus →
                </a>
            </div>
        </div>
    );
}
