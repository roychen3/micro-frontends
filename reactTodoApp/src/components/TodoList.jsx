import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem.jsx';

const TodoList = () => {
  const list = useSelector((state) => state.todo.list);

  return (
    <>
      {list.length > 0 && (
        <div className="todo-list">
          {list.map((item) => (
            <TodoItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default TodoList;
