import React, { useState, useRef, useEffect } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ user, messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
      inputRef.current.focus(); // Focus back on input after sending
    }
  };

  useEffect(() => {
    if (user) {
      inputRef.current.focus(); // Focus on input when component mounts
    }
  }, [user]);

  return (
    <section className='chat-window-wrapper'>
      {user ? (
        <>
          <article className='chat-header'>Chat with {user}</article>
          <article className='messages'>
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </article>
          <form onSubmit={handleSubmit} className='chat-input'>
            <input 
              type="text" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
              placeholder="Type a message..." 
              disabled={!user}
              ref={inputRef} // Attach ref to input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e); // Send message on Enter key press
                }
              }}
            />
            <button className="send-btn" type="submit" disabled={!user}>Send</button>
          </form>
        </>
      ) : (
        <article className='no-contact'>Select a contact to start chatting</article>
      )}
    </section>
  );
};

export default ChatWindow;
