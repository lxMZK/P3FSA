import React from 'react';
import me from '../assets/me.png';

export default function About() {
  function getAge() {
    let today = new Date();
    let birthday = new Date('Mon Aug 19 1996');
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="content toggleV">
      <div className="about">
        <h1>ABOUT ME</h1>
        <p>
          Hey there! My name is Alex Mizak and I am a {getAge()} year old web
          developer. Working with computers has always been my passion and I
          have been expanding my knowledge in order to pursue this passion.
        </p>
        <p>I have experience in working with the following:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS/SCSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Node</li>
            <li>Python</li>
            <li>Java</li>
            <li>Visual Basic</li>
            <li>SQL</li>
        </ul>
        <p>Currently I work in DevOps at NetApp</p>
      </div>
      <img className="me" src={me} alt="profile" />
    </div>
  );
}
