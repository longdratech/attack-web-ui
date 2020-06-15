import React from 'react';
import './App.css';
import Item from './components/common/Item.js';

function App() {
  var listItems = [
    "https://i.imgur.com/nyd2sDB.png",
    "https://i.imgur.com/nyd2sDB.png",
    "https://i.imgur.com/nyd2sDB.png"
  ];
  return (
    <div>
      <Item src={listItems.forEach(listItems)} />
    </div>
  );
}

export default App;
