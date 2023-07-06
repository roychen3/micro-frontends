import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux-todo-core';

import Todo from './Todo.jsx';

export const AppContext = React.createContext();

const App = ({ count }) => {
  return (
    <Provider store={store}>
      <h1>React Todo App</h1>
      {count}
      <Todo />
    </Provider>
  );
};

export default App;
