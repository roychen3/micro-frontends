import React, { useState, useContext } from 'react';
import { AppContext } from '../App';

const AddBar = () => {
  const store = useContext(AppContext);

  const [value, setvalue] = useState('');

  const handleChange = (event) => {
    setvalue(event.target.value);
  };

  const handleAdd = () => {
    if (value) {
      store.addItem(value);
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
