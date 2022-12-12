import React from 'react';
import Graphics from './Graphics';

export default function Home() {
  return (
    <div className="content toggleV">
      <div className="home">
        <h1>Hello World!</h1>
        <h3>
          My name is <b>Alex Mizak</b> and I am a web developer!
        </h3>
        <Graphics />
      </div>
    </div>
  );
}
