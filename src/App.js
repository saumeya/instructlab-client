// src/App.js
import React from 'react';
import Chatbot from './Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot</h1>
        <Chatbot />
      </header>
    </div>
  );
}

export default App;



// // src/App.js

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState([]);
  
//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//     console.log("q2", question);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       console.log("quest", question);
//       const res = await axios.post('http://localhost:5000/get_response', { question });
//       setResponse(res.data.response);

//     } catch (error) {
//       console.error('Error fetching response:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Chatbot Application</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Ask me something:
//           <input type="text" value={question} onChange={handleQuestionChange} />
//         </label>
//         <button type="submit">Ask</button>
//       </form>
//       {response && (
//         <div>
//           <h3>Response:</h3>
//           <p>{response}</p>
//         </div>
//       )}
//        {/* <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={message}
//           onChange={handleQuestionChange}
//           placeholder="Type your message"
//         />
//         <button type="submit">Send</button>
//       </form>
//       {conversations.map((conv, index) => (
//         <div key={index}>
//           <div><strong>Message:</strong> {conv.message}</div>
//           <div><strong>Response:</strong> {conv.response}</div>
//         </div>
//       ))}
//     </div> */}
//     </div>
//   );
// }

// export default App;
