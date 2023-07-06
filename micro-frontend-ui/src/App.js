import React from 'react';
import { Button } from './components'
import { Button as BuildButton } from '../dist'

const App = () => {
  console.log('Button', Button)
  console.log('BuildButton', BuildButton)
  return (
    <div>
      <h1>Micro frontend UI</h1>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <BuildButton>Normal</BuildButton>
      <BuildButton primary>Primary</BuildButton>
    </div>
  );
};

export default App;
