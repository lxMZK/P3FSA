import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    fname: '',
    lname: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    setError(null);
    e.preventDefault();
    if (inputs.username === '') {
      setError('Invalid Username');
      return;
    }
    if (inputs.email === '' || !regex.test(inputs.email.toLowerCase())) {
      setError('Invalid Email');
      return;
    }
    if (inputs.password === '') {
      setError('Invalid Password');
      return;
    } 
    try {
      axios.post('/auth/register', inputs);
      navigate('/auth/login');
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="content">
      <div className="register">
        <h1>REGISTER</h1>
        {error && <p>{error}</p>}
        <form>
          <input
            id="fname"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
          />
          <input
            id="lname"
            name="lname"
            placeholder="Last Name"
            onChange={handleChange}
          />
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
          <input type="submit" value="Register" onClick={handleSubmit} />
        </form>
        <Link to="/auth/login">Already have an account?</Link>
      </div>
    </div>
  );
}
