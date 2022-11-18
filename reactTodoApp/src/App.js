import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import Todo from './Todo.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <h1>React App</h1>
      <Todo />
    </Provider>
  );
};

export default App;
