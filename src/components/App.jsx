import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App() {
  return (
    <div>
      <Header/>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <TicketList />
    </div>
  );
}

export default App;
