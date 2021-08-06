import { useState } from 'react';
import axios from 'axios';

const projectID = 'bf8b2dff-7dc7-4c12-a1da-a8e208928430';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const askForCredentials = () => {
    
  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Communication Tab</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          <h1>{error}</h1>
          <div align="center">
            <button type="submit" className="button" onClick = {askForCredentials}>
              <span>Get Credentails</span>
            </button>
          </div>
        </form>              
      </div>
    </div>

  );
};

export default Modal;
