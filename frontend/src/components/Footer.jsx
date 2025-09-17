import React from 'react';
import { 
  TreePine, 
  Leaf, 
  Sprout, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Heart,
  Shield,
  Users,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-green-800 via-emerald-900 to-teal-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20">
          <TreePine className="w-32 h-32 text-white transform rotate-12" />
        </div>
        <div className="absolute top-32 right-32">
          <Leaf className="w-24 h-24 text-white transform -rotate-45" />
        </div>
        <div className="absolute bottom-20 left-40">
          <Sprout className="w-28 h-28 text-white" />
        </div>
        <div className="absolute bottom-32 right-20">
          <TreePine className="w-36 h-36 text-white transform -rotate-12" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold">EcoPlant</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Join millions of eco-warriors in our mission to reforest the planet. Every tree planted is a step towards a sustainable future for generations to come.
            </p>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-300">127K+</div>
                <div className="text-xs text-green-100">Trees Planted</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-300">45K+</div>
                <div className="text-xs text-green-100">Eco Warriors</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Leaf className="w-5 h-5 text-green-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Plant Trees', icon: TreePine },
                { name: 'Track Impact', icon: Award },
                { name: 'Community', icon: Users },
                { name: 'Challenges', icon: Globe },
                { name: 'My Forest', icon: Sprout }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-green-100 hover:text-green-300 transition-colors duration-300 group"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">{link.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>Support</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Getting Started',
                'Tree Care Guide',
                'Environmental Impact',
                'Safety Guidelines'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-green-100 hover:text-green-300 transition-colors duration-300 text-sm block group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center space-x-2">
              <Mail className="w-5 h-5 text-green-400" />
              <span>Stay Connected</span>
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-green-100 text-sm">
                <div className="bg-green-600/30 p-1.5 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@ecoplant.com</span>
              </div>
              <div className="flex items-center space-x-3 text-green-100 text-sm">
                <div className="bg-green-600/30 p-1.5 rounded-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+1 (555) ECO-TREE</span>
              </div>
              <div className="flex items-center space-x-3 text-green-100 text-sm">
                <div className="bg-green-600/30 p-1.5 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Green Valley, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-green-100 text-sm">Get eco-tips and updates:</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-white/10 border border-green-600/30 rounded-lg text-white placeholder-green-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Media */}
          <div className="flex items-center space-x-4">
            <span className="text-green-200 text-sm">Follow our journey:</span>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, color: 'hover:bg-blue-600' },
                { icon: Twitter, color: 'hover:bg-blue-400' },
                { icon: Instagram, color: 'hover:bg-pink-600' },
                { icon: Linkedin, color: 'hover:bg-blue-700' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-2 bg-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-green-200">
            <div className="flex items-center space-x-1">
              <span>© {currentYear} EcoPlant. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for Earth</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-green-300 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Environmental Message */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
            <Globe className="w-5 h-5 text-green-400" />
            <span className="text-green-100 text-sm">
              Carbon neutral platform • Solar powered servers • 100% renewable energy
            </span>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"></div>
    </footer>
  );
};

export default Footer;
