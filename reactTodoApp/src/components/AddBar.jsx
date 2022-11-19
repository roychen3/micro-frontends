import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from 'redux-todo-core/todoSlice';

const AddBar = () => {
  const dispatch = useDispatch();

  const [value, setvalue] = useState('');

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const handleAdd = () => {
    if (value) {
      const data = {
        id: new Date().getTime(),
        content: value,
        isDone: false,
      };
      dispatch(addItem(data));
      setvalue('');
    }
  };

  return (
    <div className="add-bar">
      <input
        type="text"
        value={value}
        placeholder="Add Todo..."
        onChange={handleChange}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddBar;
