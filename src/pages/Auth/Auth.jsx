import React, { useState } from 'react';
import './Auth.css';
import icon from '../../assets/StackOverflowIcon.png';
import AboutAuth from './AboutAuth';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container'>
        {!isSignup && <img src={icon} alt='Stack Overflow' className='login-logo' />}
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type='text' id='name' name='name' />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && <h4 style={{ color: "#007ac6", fontSize: "13px" }}>Forgot Password?</h4>}
            </div>
            <input type="password" name='password' id='password' />
            {isSignup && <p style={{ color: '#007ac6', fontSize: '13px' }}>Must contain 8+ characters, including at least 1 letter and 1 number</p>}
          </label>
          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' id="check" />
              <p style={{ color: '#007ac6', fontSize: '13px' }}>A strong password can be memorable to you but nearly impossible for someone else to guess.</p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? 'Sign up' : 'Log in'}
          </button>
          {isSignup && (
            <p style={{ color: '#007ac6', fontSize: '13px' }}>
              By checking this "Sign Up", you are agreeing to our <span style={{ color: '#007ac6' }}>terms and conditions</span> and <span style={{ color: '#007ac6' }}>cookie policy</span>.
            </p>
          )}
        </form>
        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button type="button" className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
