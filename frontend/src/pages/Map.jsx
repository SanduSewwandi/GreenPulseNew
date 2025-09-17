import React from 'react';
import { MapPin, TreePine } from 'lucide-react';

function Map() {
  // Mock tree data
  const mockTrees = [
    { id: 1, lat: 40.7128, lng: -74.0060, type: 'Oak', planter: 'John Doe', date: '2024-03-15' },
    { id: 2, lat: 40.7589, lng: -73.9851, type: 'Maple', planter: 'Jane Smith', date: '2024-03-14' },
    { id: 3, lat: 40.7505, lng: -73.9934, type: 'Pine', planter: 'Bob Johnson', date: '2024-03-13' },
    { id: 4, lat: 40.7282, lng: -74.0776, type: 'Birch', planter: 'Alice Brown', date: '2024-03-12' },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-4">Community Tree Map</h1>
          <p className="text-gray-600">Explore trees planted by our community members around the world</p>
        </div>

        {/* Map Container */}
        <div className="bg-green-100 rounded-lg shadow-lg p-8 mb-8" style={{ height: '500px' }}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Leaflet map integration will be implemented here</p>
              <p className="text-sm text-gray-500 mt-2">
                This would show real GPS locations of planted trees with markers
              </p>
            </div>
          </div>
        </div>

        {/* Tree List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Recent Tree Plantings</h2>
          <div className="grid gap-4">
            {mockTrees.map((tree) => (
              <div key={tree.id} className="border border-green-200 rounded-lg p-4 hover:bg-green-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-2">
                      <TreePine className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">{tree.type} Tree</h3>
                      <p className="text-sm text-gray-600">Planted by {tree.planter}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">
                      {tree.lat.toFixed(4)}, {tree.lng.toFixed(4)}
                    </p>
                    <p className="text-sm text-gray-500">{tree.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button className="block text-green-200 hover:text-white transition-colors">Home</button>
              <button className="block text-green-200 hover:text-white transition-colors">Tree Map</button>
              <button className="block text-green-200 hover:text-white transition-colors">Leaderboard</button>
              <button className="block text-green-200 hover:text-white transition-colors">Plant Tree</button>
            </div>
          </div>

          {/* Community Links */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <a href="#" className="block text-green-200 hover:text-white transition-colors">Join Our Mission</a>
              <a href="#" className="block text-green-200 hover:text-white transition-colors">Environmental Tips</a>
              <a href="#" className="block text-green-200 hover:text-white transition-colors">Success Stories</a>
              <a href="#" className="block text-green-200 hover:text-white transition-colors">Partner With Us</a>
            </div>
          </div>

          {/* Footer Section */}
          <div className="border-t border-green-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-green-200 text-sm">
                © 2024 GreenPulse. All rights reserved. Making the world greener, one tree at a time.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-green-200 hover:text-white transition-colors text-sm">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
