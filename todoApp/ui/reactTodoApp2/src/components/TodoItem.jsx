import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleItem, deleteItem } from 'redux-todo-core/todoSlice';

const TodoItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleItem(data));
  };

  const handleDelete = () => {
    dispatch(deleteItem(data.id));
  };

  return (
    <div className="todo-item">
      <div className="title" onClick={handleToggle}>
        <p className={data.completed ? 'is-completed' : ''}>{data.title}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
