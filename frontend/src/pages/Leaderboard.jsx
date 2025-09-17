import React, { useState } from 'react';

// Leaderboard Component
const Leaderboard = () => {
  const [timeFrame, setTimeFrame] = useState('all-time');
  
  // Mock leaderboard data
  const mockLeaderboard = [
    { rank: 1, name: 'Sarah Green', trees: 47, avatar: '🌱' },
    { rank: 2, name: 'Mike Forest', trees: 42, avatar: '🌳' },
    { rank: 3, name: 'Lisa Bloom', trees: 38, avatar: '🌿' },
    { rank: 4, name: 'John Doe', trees: 35, avatar: '🍃' },
    { rank: 5, name: 'Emma Woods', trees: 31, avatar: '🌲' },
    { rank: 6, name: 'David Oak', trees: 28, avatar: '🌴' },
    { rank: 7, name: 'Anna Pine', trees: 24, avatar: '🎋' },
    { rank: 8, name: 'Tom Maple', trees: 21, avatar: '🌺' },
  ];

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'text-yellow-600 bg-yellow-100';
      case 2: return 'text-gray-600 bg-gray-100';
      case 3: return 'text-amber-600 bg-amber-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Tree Planting Leaderboard</h1>
          <p className="text-gray-600 mb-6">See who's making the biggest impact on our planet!</p>
          
          {/* Time Frame Selector */}
          <div className="flex space-x-2">
            {['all-time', 'this-month', 'this-week'].map((period) => (
              <button
                key={period}
                onClick={() => setTimeFrame(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  timeFrame === period
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-green-600 border border-green-200 hover:bg-green-50'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Top Planters</h2>
          <div className="flex justify-center items-end space-x-4 mb-8">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-4 w-24 h-32 flex flex-col justify-end items-center">
                <div className="text-3xl mb-2">{mockLeaderboard[1].avatar}</div>
                <div className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <p className="mt-2 font-semibold text-green-800">{mockLeaderboard[1].name}</p>
              <p className="text-green-600">{mockLeaderboard[1].trees} trees</p>
            </div>

            {/* 1st Place */}
            <div className="text-center">
              <div className="bg-yellow-100 rounded-lg p-4 w-24 h-40 flex flex-col justify-end items-center">
                <div className="text-4xl mb-2">{mockLeaderboard[0].avatar}</div>
                <div className="bg-yellow-200 text-yellow-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <p className="mt-2 font-semibold text-green-800">{mockLeaderboard[0].name}</p>
              <p className="text-green-600">{mockLeaderboard[0].trees} trees</p>
            </div>

            {/* 3rd Place */}
            <div className="text-center">
              <div className="bg-amber-100 rounded-lg p-4 w-24 h-28 flex flex-col justify-end items-center">
                <div className="text-3xl mb-2">{mockLeaderboard[2].avatar}</div>
                <div className="bg-amber-200 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <p className="mt-2 font-semibold text-green-800">{mockLeaderboard[2].name}</p>
              <p className="text-green-600">{mockLeaderboard[2].trees} trees</p>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-green-50 border-b border-green-200">
            <h3 className="text-xl font-bold text-green-800">Complete Rankings</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {mockLeaderboard.map((user) => (
              <div key={user.rank} className="px-6 py-4 hover:bg-green-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${getRankColor(user.rank)}`}>
                      {getRankIcon(user.rank)}
                    </div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-green-800">{user.name}</h4>
                      <p className="text-sm text-gray-600">Eco Warrior</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{user.trees}</p>
                    <p className="text-sm text-gray-500">trees planted</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
