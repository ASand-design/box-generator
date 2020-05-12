import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Box from './components/Box';
import BoxView from './components/BoxView';


function App() {
  const [currentBox, setCurrentBox] = useState('');

    const boomBox = ( newBox ) => {
      setCurrentBox( newBox );
    }
    return(
      <>
        <Box onNewBox = { boomBox } />
        <BoxView bgColor = { currentBox } />
        <BoxView bgColor = 'purple' />
        <BoxView bgColor = 'gold' />
      </>
    );
}
export default App;
