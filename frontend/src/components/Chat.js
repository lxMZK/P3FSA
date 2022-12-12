import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';

export default function Chat() {
  const { currentUser } = useContext(AuthContext);
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);

  const send = {
    msg: input,
    id: currentUser.id,
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    document.getElementById('input').value = '';
    e.preventDefault();
    try {
      await axios.post('/chat', send);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/chat');
        console.log(res.data);
        setMessages(res.data.rows.reverse());
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  });

  console.log(input);

  return (
    <div className="content">
      <div className="chat">
        <h1>CHAT</h1>
        <div className="board">
          {messages.map((message) => (
            <div
              className={
                currentUser.id === message.uid
                  ? 'post myMessage'
                  : 'post otherMessage'
              }
            >
              <p>{message.username}</p>
              <p>{message.msg}</p>
            </div>
          ))}
        </div>
        <form>
          <input id="input" type="text" onChange={handleChange} />
          <input className='msgSub' type="submit" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
