// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-light text-gray-800">Personal Hub</h1>
          <p className="text-gray-500 text-sm mt-1">Select an option below</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('message')}
            className={`flex-1 py-4 text-center transition-all duration-200 ${
              activeTab === 'message' 
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            View Message
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex-1 py-4 text-center transition-all duration-200 ${
              activeTab === 'about' 
                ? 'text-blue-600 border-b-2 border-blue-600 font-medium' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            About Me
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 min-h-[200px]">
          {activeTab === 'message' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-medium text-gray-800">New Message</h2>
                  <p className="text-gray-600 mt-1">Thanks for checking out my portfolio! Feel free to reach out with any questions.</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Mark as Read
              </button>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-200 rounded-full p-1">
                  <div className="bg-gray-300 rounded-full p-1">
                    <div className="bg-white rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="text-lg font-medium text-gray-800 mt-4">John Doe</h2>
                <p className="text-gray-600 text-sm">Frontend Developer & UI Designer</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📍 San Francisco, CA</p>
                <p>💼 5+ years in web development</p>
                <p>🎨 Passionate about minimal design</p>
              </div>
              <button className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                View Full Profile
              </button>
            </div>
          )}

          {!activeTab && (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>Select an option to view content</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;