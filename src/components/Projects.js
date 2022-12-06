import React from 'react';
import { Link } from 'react-router-dom';
import chat from '../assets/chat.png';
import msa from '../assets/msa.png';
import snake from '../assets/snake.png';

export default function Projects() {
  return (
    <div className="content toggleV">
      <div className="projects">
        <h1>PROJECTS</h1>
        <div>
          <img className="project" src={snake} alt="project" />
          <div>
            <h3>Snake Game</h3>
            <p>A recreation of the classic game known as Snake</p>
            <p>
              Github URL:{' '}
              <a href="https://github.com/lxMZK/Snake">
                https://github.com/lxMZK/Snake
              </a>
            </p>
            <p>
              Deployment URL:{' '}
              <a href="https://lxmzk.github.io/Snake/">
                https://lxmzk.github.io/Snake/
              </a>
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>Book-keeping App</h3>
            <p>
              A full-stack application to track a database of books with
              multiple data points.
            </p>
            <p>
              Github URL:{' '}
              <a href="https://github.com/lxMZK/MSA">
                https://github.com/lxMZK/MSA
              </a>
            </p>
          </div>
          <img className="project" src={msa} alt="project" />
        </div>
        <div>
          <img className="project" src={chat} alt="project" />
          <div>
            <h3>THIS PAGE!</h3>
            <p>Currently I'm working on a functional chat interface baked into this page. Take a look!</p>
            <p>Github URL: <a href='https://github.com/lxMZK/P3FSA'>https://github.com/lxMZK/P3FSA</a></p>
            <p><Link to='/chat'>Take Me to Chat!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
