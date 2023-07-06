import React from 'react';
import { store } from 'mobx-todo-core';

import Todo from './Todo.jsx';

export const AppContext = React.createContext();

const App = ({ count }) => {
  return (
    <AppContext.Provider value={store}>
      <h1>React Todo App</h1>
      {count}
      <Todo />
    </AppContext.Provider>
  );
};

export default App;
