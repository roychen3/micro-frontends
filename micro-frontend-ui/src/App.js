import React from 'react';
import { Button } from './components'
// import { Button as BuildButton } from '../dist'

const App = () => {
  return (
    <div>
      <h1>Micro frontend UI</h1>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      {/* <BuildButton>Normal</BuildButton>
      <BuildButton primary>Primary</BuildButton> */}
    </div>
  );
};

export default App;
