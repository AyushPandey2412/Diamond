import React, { useState } from 'react';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Header from "./Header"

const Profile = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login', 'signup', 'forgot'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission based on activeForm
    console.log(`${activeForm} form submitted:`, formData);
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: ''
    });
  };

  const switchForm = (formType) => {
    setActiveForm(formType);
    resetForm();
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f0' }}>
      <Header></Header>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          .font-typo-grotesk {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 500;
          }
          
          .font-yorkten {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-museo-sans {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .font-gibson {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            font-weight: 300;
          }
          
          .color-primary {
            color: #52583c;
          }
          
          .color-primary-medium {
            color: #6b7149;
          }
          
          .color-primary-light {
            color: #a8b085;
          }
          
          .bg-primary {
            background-color: #52583c;
          }
          
          .bg-primary-medium {
            background-color: #6b7149;
          }
          
          .bg-primary-light {
            background-color: #a8b085;
          }
          
          .border-primary {
            border-color: #52583c;
          }
          
          .border-primary-medium {
            border-color: #6b7149;
          }
          
          .border-primary-light {
            border-color: #a8b085;
          }
          
          .hover\\:bg-primary:hover {
            background-color: #52583c;
          }
          
          .hover\\:bg-primary-light:hover {
            background-color: #a8b085;
          }
          
          .hover\\:border-primary:hover {
            border-color: #52583c;
          }
          
          .focus\\:ring-primary-light:focus {
            --tw-ring-color: #a8b085;
          }
          
          .focus\\:border-primary-medium:focus {
            border-color: #6b7149;
          }
        `}
      </style>
      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm font-yorkten color-primary-medium">
          <span>
             <a 
            href="/" 
            className="hover:opacity-80 transition-opacity cursor-pointer hover:underline"
          >
            Home
          </a>
          </span>
          <span className="mx-2">/</span>
          <span>Account</span>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-sm border border-primary-light p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-typo-grotesk color-primary mb-2 tracking-wide">
              {activeForm === 'login' && 'SIGN IN'}
              {activeForm === 'signup' && 'CREATE ACCOUNT'}
              {activeForm === 'forgot' && 'RESET PASSWORD'}
            </h1>
            <p className="color-primary-medium font-yorkten text-sm">
              {activeForm === 'login' && 'Welcome back to your account'}
              {activeForm === 'signup' && 'Join our exclusive jewelry collection'}
              {activeForm === 'forgot' && 'Enter your email to reset your password'}
            </p>
          </div>

          {/* Login Form */}
          {activeForm === 'login' && (
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center color-primary-medium hover:color-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-primary-light text-primary focus:ring-primary-light"
                  />
                  <span className="ml-2 color-primary-medium font-yorkten">Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => switchForm('forgot')}
                  className="color-primary-medium hover:color-primary transition-colors font-yorkten underline"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary-medium text-white py-3 px-4 rounded-sm transition-colors font-typo-grotesk tracking-wide"
              >
                SIGN IN
              </button>

              <div className="text-center">
                <span className="color-primary-medium font-yorkten text-sm">Don't have an account? </span>
                <button
                  type="button"
                  onClick={() => switchForm('signup')}
                  className="color-primary hover:color-primary-medium transition-colors font-yorkten text-sm underline"
                >
                  Create one here
                </button>
              </div>
            </div>
          )}

          {/* Signup Form */}
          {activeForm === 'signup' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center color-primary-medium hover:color-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 pr-12 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center color-primary-medium hover:color-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 rounded border-primary-light text-primary focus:ring-primary-light"
                />
                <label htmlFor="terms" className="ml-2 text-sm color-primary-medium font-yorkten">
                  I agree to the <span className="color-primary underline cursor-pointer">Terms of Service</span> and <span className="color-primary underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary-medium text-white py-3 px-4 rounded-sm transition-colors font-typo-grotesk tracking-wide"
              >
                CREATE ACCOUNT
              </button>

              <div className="text-center">
                <span className="color-primary-medium font-yorkten text-sm">Already have an account? </span>
                <button
                  type="button"
                  onClick={() => switchForm('login')}
                  className="color-primary hover:color-primary-medium transition-colors font-yorkten text-sm underline"
                >
                  Sign in here
                </button>
              </div>
            </div>
          )}

          {/* Forgot Password Form */}
          {activeForm === 'forgot' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <p className="color-primary-medium font-yorkten text-sm">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium color-primary mb-2 font-museo-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-primary-medium transition-colors font-gibson"
                  placeholder="Enter your email"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary-medium text-white py-3 px-4 rounded-sm transition-colors font-typo-grotesk tracking-wide"
              >
                SEND RESET LINK
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => switchForm('login')}
                  className="flex items-center justify-center gap-2 color-primary-medium hover:color-primary transition-colors font-yorkten text-sm mx-auto"
                >
                  <ArrowLeft size={16} />
                  Back to sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;