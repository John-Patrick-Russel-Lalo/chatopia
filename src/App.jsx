// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="text-xl font-light text-gray-800">Chatopia</h1>
          </div>
        </div>

        {/* Menu Options */}
        <div className="p-6 space-y-4">
          {/* Go to Chat Button */}
          <button
            onClick={() => {
              console.log('Navigating to chat...');
              // Add navigation logic here
            }}
            className="w-full flex items-center justify-between p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-medium">Go to Chat</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* About Button */}
          <button
            onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-gray-600 p-2 rounded-lg group-hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium">About</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-200 ${activeSection === 'about' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* About Section (Collapsible) */}
        {activeSection === 'about' && (
          <div className="px-6 pb-6 animate-fadeIn">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gray-300 rounded-full p-1">
                  <div className="bg-white rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">ChatApp Team</h3>
                  <p className="text-sm text-gray-600">Version 1.0.0</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-gray-700">
                <p>Simple. Secure. Instant messaging.</p>
                <div className="pt-3 border-t border-gray-200 space-y-2">
                  <p className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>End-to-end encryption</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No ads or tracking</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Open source</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <button className="text-sm text-blue-600 hover:text-blue-800">Privacy Policy</button>
                <button className="text-sm text-blue-600 hover:text-blue-800">Terms of Service</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;