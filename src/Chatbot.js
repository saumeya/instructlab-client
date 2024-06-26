// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/get_response', { message});
      setConversations([...conversations, { message: message, response: res.data.response }]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
      {conversations.map((conv, index) => (
        <div key={index}>
          <span><strong>Message:</strong> {conv.message}</span>
          <br />
          <span><strong>Response:</strong> {conv.response}</span>
        </div>
      ))}
    </div>
  );
};

export default Chatbot;
