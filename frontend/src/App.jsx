// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Import } from 'lucide-react';
import Map from './pages/Map';
import Navbar from './components/Navbar';  
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Footer from './components/Footer';
import TreeRegister from './pages/TreeRegister';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';


function App() {
  return (
    <Router>
      {/* Navbar will always show */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/tree" element={<TreeRegister/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/profile" element={<Profile/>} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
