import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth'; // Firebase config is set up
import auth from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent successfully! Check your inbox.');
    } catch (err) {
      setError('Failed to send password reset email. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-700 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Enter your email address, and we'll send you a link to reset your
          password.
        </p>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handlePasswordReset} className="space-y-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-lg font-semibold"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to={'/signIn'} className="text-blue-500 hover:underline">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
