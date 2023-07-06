import React from 'react';
import { store } from 'mobx-todo-core';
import { Button } from 'micro-frontend-ui-test'

import Todo from './Todo.jsx';

export const AppContext = React.createContext();

const App = ({ count }) => {
  return (
    <AppContext.Provider value={store}>
      <h1>React Todo App</h1>
      {count}
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Todo />
    </AppContext.Provider>
  );
};

export default App;
