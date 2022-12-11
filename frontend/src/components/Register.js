import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', inputs);
      navigate('/auth/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <div className="register">
        <h1>REGISTER</h1>
        <form>
          <input
            id="username"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <input
            id="email"
            name="email"
            placeholder="E-mail"
            type="email"
            required
            onChange={handleChange}
          />
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Register</button>
        </form>
        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
}
