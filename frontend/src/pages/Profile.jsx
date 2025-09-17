import React, { useState } from 'react';
import { User, TreePine } from 'lucide-react';

const Profile = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-600">Please log in to view profile</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center">
              <User className="h-12 w-12 text-green-600" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-green-800">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mt-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{user.treesPlanted}</p>
                  <p className="text-sm text-gray-600">Trees Planted</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">5</p>
                  <p className="text-sm text-gray-600">Badges Earned</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">12</p>
                  <p className="text-sm text-gray-600">Days Active</p>
                </div>
              </div>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              {['overview', 'trees', 'achievements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-green-600 hover:border-green-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Recent Activity</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">🌳 Planted an Oak tree - 2 days ago</p>
                      <p className="text-sm text-gray-600">🌲 Planted a Pine tree - 5 days ago</p>
                      <p className="text-sm text-gray-600">🌿 Planted a Maple tree - 1 week ago</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Environmental Impact</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">💨 ~300 lbs CO₂ absorbed annually</p>
                      <p className="text-sm text-gray-600">💧 ~2,400 gallons water filtered</p>
                      <p className="text-sm text-gray-600">🏠 Habitat for ~45 wildlife species</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trees Tab */}
            {activeTab === 'trees' && (
              <div>
                <h3 className="font-semibold text-green-800 mb-4">Your Tree Collection</h3>
                <div className="grid gap-4">
                  {[
                    { type: 'Oak', date: '2024-03-15', location: 'Central Park', status: 'Thriving' },
                    { type: 'Maple', date: '2024-03-10', location: 'Riverside Drive', status: 'Growing' },
                    { type: 'Pine', date: '2024-03-05', location: 'Brooklyn Bridge Park', status: 'Healthy' }
                  ].map((tree, index) => (
                    <div key={index} className="border border-green-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <TreePine className="h-8 w-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold text-green-800">{tree.type}</h4>
                            <p className="text-sm text-gray-600">{tree.location}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-green-600">{tree.status}</p>
                          <p className="text-sm text-gray-500">{tree.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h3 className="font-semibold text-green-800 mb-4">Badges & Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'First Tree', icon: '🌱', description: 'Plant your first tree' },
                    { name: 'Green Thumb', icon: '👍', description: 'Plant 10 trees' },
                    { name: 'Forest Builder', icon: '🌲', description: 'Plant 25 trees' },
                    { name: 'Eco Warrior', icon: '⚡', description: 'Plant 50 trees' },
                    { name: 'Location Scout', icon: '📍', description: 'Plant in 5 different locations' }
                  ].map((badge, index) => (
                    <div key={index} className={`p-4 rounded-lg text-center ${index < 3 ? 'bg-green-100' : 'bg-gray-100'}`}>
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <h4 className={`font-semibold ${index < 3 ? 'text-green-800' : 'text-gray-600'}`}>{badge.name}</h4>
                      <p className={`text-xs mt-1 ${index < 3 ? 'text-green-600' : 'text-gray-500'}`}>{badge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
