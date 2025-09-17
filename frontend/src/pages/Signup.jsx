import React, { useState } from 'react';
import { Mail, Lock, Leaf, User, TreePine, Sprout } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: 'alex@email.com',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleSignup = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulated API call for demo
      setTimeout(() => {
        console.log('Signup attempt:', formData);
        setLoading(false);
        // Handle success/error here
      }, 2000);
    } catch (error) {
      console.error('Signup error:', error);
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating leaves animation */}
        <div className="absolute top-20 left-10 text-green-200 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <Leaf className="w-8 h-8 transform rotate-45" />
        </div>
        <div className="absolute top-40 right-20 text-emerald-200 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <Leaf className="w-6 h-6 transform -rotate-12" />
        </div>
        <div className="absolute bottom-32 left-16 text-green-300 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
          <Sprout className="w-10 h-10" />
        </div>
        
        {/* Gradient overlay circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-green-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-emerald-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full mx-auto border-2 border-green-200/50">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            
            {/* Left Side - Signup Form */}
            <div className="p-12 flex flex-col justify-center bg-white/95 backdrop-blur-sm">
              <div className="max-w-md mx-auto w-full">
                {/* Logo and Title */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-3 rounded-full">
                      <TreePine className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                      EcoPlant
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">Join our mission to green the planet</p>
                  <p className="text-sm text-green-600 mt-1">Plant trees, track impact, grow communities</p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Username Field */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Choose Your Green Username
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-16 py-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-700 transition-all duration-300 group-hover:border-green-300"
                      placeholder="TreePlanter123"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Your Email Address
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-16 py-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-700 transition-all duration-300 group-hover:border-green-300"
                      placeholder="your@email.com"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-8">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Create Secure Password
                  </label>
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-16 py-4 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-gray-700 transition-all duration-300 group-hover:border-green-300"
                      placeholder="At least 6 characters"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 p-2.5 rounded-xl cursor-pointer group-hover:scale-110 transition-transform duration-300" 
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Signup Button */}
                <button
                  onClick={handleSignup}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold py-4 rounded-xl transition-all duration-300 mb-6 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Planting Your Account...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Sprout className="w-5 h-5 mr-2" />
                      Start Planting Trees
                    </span>
                  )}
                </button>

                {/* OR Divider */}
                <div className="text-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-green-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Already have an account?</span>
                    </div>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  onClick={() => console.log("Navigate to login")}
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <TreePine className="w-5 h-5 mr-2" />
                    Login to Your Forest
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side - Nature Illustration */}
            <div className="bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 p-12 flex items-center justify-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10">
                  <TreePine className="w-16 h-16 text-white" />
                </div>
                <div className="absolute top-32 right-16">
                  <Leaf className="w-12 h-12 text-white transform rotate-45" />
                </div>
                <div className="absolute bottom-20 left-16">
                  <Sprout className="w-14 h-14 text-white" />
                </div>
                <div className="absolute bottom-32 right-10">
                  <TreePine className="w-20 h-20 text-white" />
                </div>
              </div>

              {/* Main Illustration Content */}
              <div className="relative z-10 text-center text-white">
                <div className="mb-8">
                  <div className="inline-flex p-6 bg-white/20 rounded-full backdrop-blur-sm mb-6">
                    <TreePine className="w-24 h-24 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">Join the Forest Revolution</h2>
                  <p className="text-xl text-green-100 mb-6">
                    Every tree planted is a step towards a greener tomorrow
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="space-y-4 text-left max-w-sm mx-auto">
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <TreePine className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-100">Track your planted trees</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-100">Monitor environmental impact</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Sprout className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-green-100">Connect with eco-warriors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;