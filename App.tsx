import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import Results from './pages/Results';
import About from './pages/About';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import { AnalysisResult } from './types';

const App: React.FC = () => {
  // Central state to hold the latest analysis result to pass to the result page
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Check for existing login on app start
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const email = localStorage.getItem('userEmail') || '';
    setIsLoggedIn(loggedIn);
    setUserEmail(email);
  }, []);

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900">
        <Navbar isLoggedIn={isLoggedIn} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/check-symptoms"
              element={<SymptomChecker onAnalysisComplete={setAnalysisResult} />}
            />
            <Route
              path="/results"
              element={analysisResult ? <Results result={analysisResult} /> : <Navigate to="/check-symptoms" />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />
            <Route
              path="/logout"
              element={<Logout onLogout={handleLogout} />}
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard user={userEmail} onLogout={handleLogout} /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>

        <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
            <p className="mb-2">© 2026 Prevento AI.</p>
            <p className="text-xs text-slate-400 max-w-2xl mx-auto">
              DISCLAIMER: This system provides educational guidance based on AI analysis.
              It is NOT a substitute for professional medical advice, diagnosis, or treatment.
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;