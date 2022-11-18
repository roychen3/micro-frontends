import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleItem, deleteItem } from '../redux/todoSlice';

const TodoItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleItem(data.id));
  };

  const handleDelete = () => {
    dispatch(deleteItem(data.id));
  };

  return (
    <div className="todo-item">
      <div className="content" onClick={handleToggle}>
        <p className={data.isDone ? 'is-done' : ''}>{data.content}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
