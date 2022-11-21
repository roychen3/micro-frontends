import React, { useContext } from 'react';

import { AppContext } from '../App';

const TodoItem = ({ data }) => {
  const store = useContext(AppContext);

  const handleToggle = () => {
    store.toggleItem(data);
  };

  const handleDelete = () => {
    store.deleteItem(data.id);
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
