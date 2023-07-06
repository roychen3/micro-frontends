import React from 'react';
import { Button } from './components'

const App = () => {
  return (
    <div>
      <h1>Micro frontend UI</h1>
      <Button>Normal</Button>
      <Button $primary>Primary</Button>
    </div>
  );
};

export default App;
