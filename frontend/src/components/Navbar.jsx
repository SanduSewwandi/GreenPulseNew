import { TreePine, User, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout, mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate(); // <-- fix: declare navigate hook

  return (
    <nav className="bg-white shadow-lg border-b-2 border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <TreePine className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-green-800">GreenPulse</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => navigate('/')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Home
              </button>

              <button
                onClick={() => navigate('/map')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Tree Map
              </button>

              <button
                onClick={() => navigate('/leaderboard')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Leaderboard
              </button>
              <button
                onClick={() => navigate('/tree')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Your Plants
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Profile
              </button>

              {isLoggedIn && (
                <button
                  onClick={() => navigate('/tree-register')}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                >
                  Plant Tree
                </button>
              )}
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="text-green-600 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/profile')}
                  className="flex items-center text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </button>
                <button
                  onClick={onLogout}
                  className="flex items-center text-red-600 hover:text-red-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-green-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate('/map');
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Tree Map
            </button>
            <button
              onClick={() => {
                navigate('/leaderboard');
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Leaderboard
            </button>
            {isLoggedIn && (
              <button
                onClick={() => {
                  navigate('/tree-register');
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
              >
                Plant Tree
              </button>
            )}

            <div className="border-t border-green-200 pt-4 mt-4">
              {!isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-600 hover:text-green-800 w-full text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup');
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 text-white hover:bg-green-700 w-full text-left mt-2"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-green-600 w-full text-left"
                  >
                    <User className="h-5 w-5 inline mr-2" />
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 rounded-md text-base font-medium text-red-600 hover:text-red-800 w-full text-left"
                  >
                    <LogOut className="h-5 w-5 inline mr-2" />
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
