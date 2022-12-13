import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';

export default function Contact() {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { currentUser } = useContext(AuthContext);
  const form = useRef(null)
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    access_key: '',
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();

    if (inputs.email === '' || !regex.test(inputs.email.toLowerCase())) {
      setError('Invalid Email');
      return;
    }

    if (inputs.message === '') {
      setError('Invalid Message');
      return;
    }

    await axios.post('/contact',inputs)

    form.current.reset();
  };

  return (
    <div className="content toggleV">
      <div className="contact">
        <h1>CONTACT ME</h1>
        {error && <p>{error}</p>}
        <form ref={form} id="email">
          <div>
            <input
              type="hidden"
              name="access_key"
            />
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              defaultValue={
                currentUser
                  ? (currentUser.fname ? currentUser.fname : '') +
                    ' ' +
                    (currentUser.lname ? currentUser.lname : '')
                  : ''
              }
              required
            />
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              defaultValue={currentUser ? currentUser.email : ''}
              required
            />
          </div>
          <input id="subject" name="subject" placeholder="Subject" onChange={handleChange} />
          <div>
            <input id="message" name="message" placeholder="Message" onChange={handleChange} required />
          </div>
          <input
            id="submit"
            name="submit"
            type="submit"
            onClick={handleSubmit}
          />
        </form>
      </div>
      <div className="socials">
        <h2>SOCIALS</h2>
        <a className="github" href="https://github.com/lxMZK">
          <div>
            <i className="fa-brands fa-github"></i>
            <h3>/lxMZK</h3>
          </div>
        </a>
        <a
          className="discord"
          href="https://discordapp.com/users/142806836955971586"
        >
          <div>
            <i className="fa-brands fa-discord"></i>
            <h3>@lxMZK#0943</h3>
          </div>
        </a>
        <a className="linkedin" href="https://linkedin.com">
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <h3>
              <em>coming soon...</em>
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
}
