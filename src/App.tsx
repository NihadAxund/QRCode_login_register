import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <Toaster position="top-right" />
      
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <Stethoscope className="h-12 w-12 text-teal-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Company
          </h1>
          <p className="text-gray-600">
            Your health journey begins here
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 px-6 text-sm font-medium text-center ${
                activeTab === 'login'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-4 px-6 text-sm font-medium text-center ${
                activeTab === 'register'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Register
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {activeTab === 'login' ? <LoginForm /> : <RegistrationForm />}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;