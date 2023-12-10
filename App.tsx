/**
 * @format
 */

import React from 'react';
import Routes from './src/Routes';
import FlashMessage from 'react-native-flash-message';
function App(): React.JSX.Element {
  return (
    <>
      <Routes />
      <FlashMessage position="top" />
    </>
  );
}

export default App;
