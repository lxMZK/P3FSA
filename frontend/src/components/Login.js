import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

export default function Login() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const {login} = useContext(AuthContext)

  function show(){
    let hidden = [...document.getElementsByClassName('toggleV'),...document.getElementsByClassName('content')]
    for (let i = 0; i < hidden.length; i++) {
        hidden[i].classList.remove('hide')
        console.log(hidden[i])
    }
  }

  function hide(){
    let shown = document.getElementsByClassName('toggleV')
    for (let i = 0; i < shown.length; i++) {
        shown[i].classList.add('hide')
    }
    setTimeout(show,1000)
  }

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login(inputs)
      hide();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="content">
      <div className="login">
        <h1>LOGIN</h1>
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
          <input type="submit" onClick={handleSubmit} />
        </form>
        <Link to="/auth/register">Need an Account?</Link>
      </div>
    </div>
  );
}
