import React from 'react';

export default function Contact() {
  return (
    <div className="content toggleV">
      <div className="contact">
        <h1>CONTACT ME</h1>
        <form action="send" method="POST" enctype="multipart/form-data">
          <div>
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              required
            />
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required
            />
          </div>
          <input id="subject" name="subject" placeholder="Subject" />
          <div>
            <input id="message" name="message" placeholder="Message" required />
          </div>
          <input id="submit" name="submit" type="submit" />
        </form>
      </div>
      <div className="socials">
        <h2>SOCIALS</h2>
        <a href="https://github.com/lxMZK">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://discordapp.com/users/142806836955971586">
          <i className="fa-brands fa-discord"></i>
        </a>
        <a href='https://linkedin.com'><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  );
}
