import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem.jsx';

const TodoList = () => {
  const list = useSelector((state) => state.todo.list);

  return (
    <div className="todo-list">
      {list.map((item) => (
        <TodoItem key={item.id} data={item} />
      ))}

      {list.length === 0 && <p className='none-todo'>none todo</p>}
    </div>
  );
};

export default TodoList;
