import React, { useContext } from 'react';

import { AppContext } from '../App';

const TodoItem = ({ data }) => {
  const store = useContext(AppContext);

  const handleToggle = () => {
    store.toggleItem(data.id);
  };

  const handleDelete = () => {
    store.deleteItem(data.id);
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
