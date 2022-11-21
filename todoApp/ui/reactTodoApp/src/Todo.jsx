import React from 'react';

import AddBar from './components/AddBar.jsx';
import TodoList from './components/TodoList.jsx';

const Todo = () => {
  return (
    <div>
      <AddBar />
      <TodoList />
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
