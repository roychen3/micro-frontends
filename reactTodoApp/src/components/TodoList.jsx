import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTodoList } from 'redux-todo-core/todoSlice';

import TodoItem from './TodoItem.jsx';

const TodoList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.list);
  const loading = useSelector((state) => state.todo.loading);

  useEffect(() => {
    console.log('fetch')
    dispatch(fetchTodoList('test'));
  }, []);

  return (
    <>
      {loading && 'loading..'}
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
