import React, { useState } from 'react';
import ValidateForm from './ValidateForm';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './App.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    dob: '',
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({});

  const checkValidity = () => {
    const errors = ValidateForm(form);
    if (Object.keys(errors).length === 0) {
      alert('Registration successful');
      navigate('/home');
    } else {
      setError(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidity();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <label>Enter Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={form.name}
        onChange={handleChange}
        required
      />
      {error.name && <p className="error">{error.name}</p>}

      <label>Enter date of birth:</label>
      <input
        type="date"
        name="dob"
        placeholder="Enter your date of birth"
        value={form.dob}
        onChange={handleChange}
        required
      />

      <label>Enter phone number:</label>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Enter your phone number"
        value={form.phoneNumber}
        onChange={handleChange}
        required
      />
      {error.phoneNumber && <p className="error">{error.phoneNumber}</p>}

      <label>Enter email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
        required
      />
      {error.email && <p className="error">{error.email}</p>}

      <div className="password-container">
        <label>Enter password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="icon-style"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {error.password && <p className="error">{error.password}</p>}
      </div>

      <div className="password-container">
        <label>Confirm password:</label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="icon-style"
        >
          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
        {error.confirmPassword && <p className="error">{error.confirmPassword}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;