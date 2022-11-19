import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import { AppContext } from '../App';
import TodoItem from './TodoItem.jsx';

const TodoList = () => {
  const store = useContext(AppContext);

  return (
    <>
      {store.list.length > 0 && (
        <div className="todo-list">
          {store.list.map((item) => (
            <TodoItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default observer(TodoList);
