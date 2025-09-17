import React from "react";
import { TreePine, Users, Award, MapPin, Camera, Trophy } from "lucide-react";

const Home = ({ isLoggedIn }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plant Trees, Track Progress
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Join the GreenPulse community and help make the world greener, one tree at a time.
              Track your plantings, see community impact, and compete with eco-warriors worldwide!
            </p>
            {!isLoggedIn && (
              <div className="space-x-4">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                  Learn More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-2">1,247</h3>
              <p className="text-gray-600">Trees Planted</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-2">456</h3>
              <p className="text-gray-600">Active Planters</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-2">89</h3>
              <p className="text-gray-600">Locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Why Choose GreenPulse?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Track your environmental impact and connect with a community of eco-conscious individuals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Location Tracking</h3>
              <p className="text-gray-600">GPS-enabled tree registration with precise location mapping</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Camera className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Photo Documentation</h3>
              <p className="text-gray-600">Upload photos to document your tree planting journey</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Trophy className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Gamification</h3>
              <p className="text-gray-600">Compete with others and climb the leaderboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
