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
        console.log(res.data)
        setMessages(res.data.rows);
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
        <h1>CHAT PAGE</h1>
        <div>
          {messages.map((message) => (
            <p>
              {message.msg} :: {message.username}
            </p>
          ))}
        </div>
        <input type="text" onChange={handleChange} />
        <input type="submit" onClick={handleSubmit} />
      </div>
    </div>
  );
}
