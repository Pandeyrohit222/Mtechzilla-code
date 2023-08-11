
import React, { useState } from 'react';
import './App.css'; 

const GitHubCard = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Info</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={fetchUserData}>Fetch</button>
      </div>

      {userData && (
        <div className="card">
          <img src={userData.avatar_url} alt="Avatar" className="avatar" />
          <h2 style={{textTransform:'capitalize'}}>{userData.login}</h2>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
          <p>Public Gists: {userData.public_gists}</p>
          <p>Profile Created: {new Date(userData.created_at).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubCard;
