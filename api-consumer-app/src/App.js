// App.js
import React from 'react';
import './App.css'; // You can create this CSS file for styling
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>API Consumer App</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
}

export default App;
