import React, { useState, useContext } from 'react';
import './CSS/LoginSignup.css';
import { ShopContext } from './../Context/ShopContext';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const { setCartItems } = useContext(ShopContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const storedUser = users.find(user => user.email === formData.email && user.password === formData.password);

    if (storedUser) {
      localStorage.setItem('auth-token', 'some-auth-token'); 
      alert('Logged in successfully');

      // Przywrócenie koszyka użytkownika z jego profilu
      if (storedUser.cartItems && storedUser.cartItems.length > 0) {
        setCartItems(storedUser.cartItems);
        localStorage.setItem('cartItems', JSON.stringify(storedUser.cartItems)); 
      } else {
        setCartItems([]);
        localStorage.setItem('cartItems', JSON.stringify([])); 
      }

      window.location.replace('/');
    } else {
      alert('Invalid email or password');
    }
  };

  const signup = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === formData.email);
    
    if (!existingUser) {
      // Dodaj nowego użytkownika z pustym koszykiem
      const newUser = { ...formData, cartItems: [] };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User registered successfully');
      setState('Login');
    } else {
      alert('User already exists');
    }
  };

  const logout = () => {
    const authUserEmail = formData.email;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Zapisz aktualny stan koszyka użytkownika przed wylogowaniem
    const updatedUsers = users.map(user =>
      user.email === authUserEmail ? { ...user, cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] } : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem('auth-token');
    alert('Logged out successfully');
    window.location.replace('/login');
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === 'Sign Up' && (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button onClick={() => (state === 'Login' ? login() : signup())}>
          Continue
        </button>
        {state === 'Sign Up' ? (
          <p className="loginsignup-login">
            Already have an account?{' '}
            <span onClick={() => setState('Login')}>Login Here!</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Do you want to create an account?{' '}
            <span onClick={() => setState('Sign Up')}>Register Here!</span>
          </p>
        )}
        {state === 'Sign Up' && (
          <div className="loginsignup-agree">
            <input type="checkbox" name="agree" id="agree" />
            By continuing, I agree to the terms of use & privacy policy.
          </div>
        )}
        {localStorage.getItem('auth-token') && (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
