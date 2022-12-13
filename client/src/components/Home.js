import React, { useContext } from 'react';
import Graphics from './Graphics';
import { AuthContext } from '../context/authContext';

export default function Home() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="content toggleV">
      <div className="home">
        <h1>Hello {currentUser? (currentUser.fname || currentUser.username)+'!' : 'World!'}</h1>
        <h3>
          My name is <b>Alex Mizak</b> and I am a web developer!
        </h3>
        <Graphics />
      </div>
    </div>
  );
}
