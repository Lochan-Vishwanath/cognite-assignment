import React, { useState } from 'react';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import UserList from './Components/UserList/UserList';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [selectedUser]: [...(prevMessages[selectedUser] || []), message],
    }));
  };

  return (
    <>
      <header className='header'>My Chat App</header>
      <main className='app'>
        <UserList onSelectUser={handleSelectUser} />
        <ChatWindow 
          user={selectedUser} 
          messages={messages[selectedUser] || []} 
          onSendMessage={handleSendMessage} 
        />
      </main>
    </>
  );
};

export default App;
