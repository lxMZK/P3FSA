import React, { useContext, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import defaultImg from '../assets/default.jpg';
import { AuthContext } from '../context/authContext';

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation().pathname;
  const hamburger = useRef(null);
  const navMenu = useRef(null);

  function mobileMenu() {
    hamburger.current.classList.toggle('active');
    navMenu.current.classList.toggle('active');
  }

  function show() {
    let hidden = [
      ...document.getElementsByClassName('toggleV'),
      ...document.getElementsByClassName('content'),
    ];
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.remove('hide');
    }
  }

  function hide() {
    hamburger.current.classList.remove('active');
    navMenu.current.classList.remove('active');
    navMenu.current.classList.toggle('hide')
    let shown = document.getElementsByClassName('toggleV');
    for (let i = 0; i < shown.length; i++) {
      shown[i].classList.add('hide');
    }
    
    setTimeout(show, 1000);
  }

  function handle1() {
    if (location !== '/') {
      hide();
    }
  }

  function handle2() {
    if (location === '/') {
      hide();
    }
  }

  return (
    <nav className={location === '/' ? 'horizontal' : 'vertical'}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <ul className="container toggleV">
        <ul ref={navMenu} className="toggleV nav-menu">
          <li>
            <Link onClick={handle1} to="/">
              <i class="fa-solid fa-house"></i>
              <br />
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={handle2} to="/about">
              <i class="fa-solid fa-person-circle-question"></i>
              <br />
              ABOUT
            </Link>
          </li>
          <li>
            <Link onClick={handle2} to="/projects">
              <i class="fa-solid fa-code"></i>
              <br />
              PROJECTS
            </Link>
          </li>
          <li>
            <Link onClick={handle2} to="/contact">
              <i class="fa-solid fa-address-card"></i>
              <br />
              CONTACT
            </Link>
          </li>
          <li>
            <Link onClick={handle2} to={currentUser ? '/chat' : '/auth/login'}>
              <i class="fa-solid fa-message"></i>
              <br />
              CHAT
            </Link>
          </li>
        </ul>
        <div ref={hamburger} className="hamburger" onClick={mobileMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <li className="handle">
          <h2>
            <a href="https://github.com/lxMZK">lxMZK</a>
          </h2>
        </li>
        <li className="toggleV auth">
          {currentUser ? (
            <div>
              <p>@{currentUser.username}</p>
              <img className="profile" src={defaultImg} alt="prof" />
              <Link
                to={location === '/chat' ? '/auth/login' : location}
                onClick={logout}
              >
                <i class="fa-solid fa-right-from-bracket"></i>
                <br />
                Log-out
              </Link>
            </div>
          ) : (
            <div>
              <Link onClick={handle2} to="/auth/login">
                <i class="fa-solid fa-right-to-bracket"></i>
                <br />
                Log-in
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
