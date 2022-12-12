import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';

export default function Chat() {
  const { currentUser } = useContext(AuthContext);
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);

  const send = {
    msg: input,
    id: currentUser? currentUser.id : 0,
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
        setMessages(res.data.rows.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },);

  return (
    <div className="content">
      <div className="chat">
        <h1>CHAT</h1>
        <div className="board">
          {messages?.map((message,i) =>
            currentUser?.id === message.uid ? (
              <div key={i} className="post myMessage">
                <p>{message.msg}</p>
              </div>
            ) : (
              <div key={i} className="post otherMessage">
                <p>@{message.username}</p>
                <p>{message.msg}</p>
              </div>
            )
          )}
        </div>
        <form>
          <input id="input" type="text" onChange={handleChange} />
          <input className="msgSub" type="submit" value='Send' onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}
