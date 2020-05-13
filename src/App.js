import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Box from './components/Box';
import BoxView from './components/BoxView';
// import styled from 'styled-components'


function App() {
  const [currentBox, setCurrentBox] = useState('');

    const boomBox = ( newBox ) => {
      setCurrentBox( newBox );
    }
    return(
      <>
        <BoxView background = { currentBox } />
        <BoxView backgroud = 'purple' />
        <BoxView background = 'gold' />
        <Box onNewBox = { boomBox } />
      </>
    );
}
export default App;
