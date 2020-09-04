import React from 'react';
import './App.css';
import Header from './layout/Header';
import SendTags from './sendTags/SendTags';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <SendTags />
      </main>
    </div>
  );
}

export default App;
