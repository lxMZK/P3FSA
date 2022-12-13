import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function Login() {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)

  const [error,setError] = useState(null)
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setError(null)
    e.preventDefault();
    if (inputs.username === '') {
      setError('Invalid Username');
      return;
    }
    if (inputs.password === '') {
      setError('Invalid Password');
      return;
    }
    try {
      await login(inputs)
      navigate('/chat');
    } catch (err) {
      setError(err.response.data)
    }
  };

  return (
    <div className="content">
      <div className="login">
        <h2>LOGIN</h2>
        {error&&<p>{error}</p>}
        <form>
          <input
            id="username"
            name="username"
            placeholder="Username"
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
          <input type="submit" value='Log-in' onClick={handleSubmit} />
        </form>
        <Link to="/auth/register">Need an Account?</Link>
      </div>
    </div>
  );
}
