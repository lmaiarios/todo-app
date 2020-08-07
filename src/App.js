import React from 'react';
import ToDos from './components/ToDos';
import Draggable from 'react-draggable';

function App() {
  return (
    <div className="App">
      <Draggable>
        <div><ToDos /></div>
      </Draggable>
    </div>
  );
}

export default App;
