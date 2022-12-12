import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

export default function Contact() {
  const {currentUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    const form = document.getElementById('email');
    const formData = new FormData(form);
    const object = {};
    
    e.preventDefault();
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });

    form.reset();
  };

  return (
    <div className="content toggleV">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <form id="email">
          <div>
            <input
              type="hidden"
              name="access_key"
              value="b0b74868-d2e9-4c90-bf4f-3c0adfc3f0ec"
            />
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              value={currentUser?(currentUser.fname?currentUser.fname:'')+' '+(currentUser.lname?currentUser.lname:''):('')}
              required
              />
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={currentUser?.email}
              required
            />
          </div>
          <input id="subject" name="subject" placeholder="Subject" />
          <div>
            <input id="message" name="message" placeholder="Message" required />
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
