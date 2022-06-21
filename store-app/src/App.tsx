import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoreList from './components/StoreList';

function App() {
  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StoreList />
    </div>
  );
}

export default App;
