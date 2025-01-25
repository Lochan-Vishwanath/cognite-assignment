import React from 'react';
import './UserList.css';

const UserList = ({ onSelectUser }) => {
  const users = [
    { name: 'Lochan', avatar: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6' },
    { name: 'Mom', avatar: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6' },
    { name: 'Batman', avatar: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6' },
];

  return (
    <nav className='user-list-container'>
      {users.map((user) => (
        <button key={user.name} className='user-button' onClick={() => onSelectUser(user.name)}>
          <img src={user.avatar} alt={`${user.name}'s avatar`} className='avatar' />
          <span className='user-name'>{user.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default UserList;
