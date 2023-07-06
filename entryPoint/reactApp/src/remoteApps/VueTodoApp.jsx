import React from 'react';

import('vueTodoApp/App');

const VueTodoApp = ({ count }) => {
  return (
    <>
      <vue-todo-app count={count} />
    </>
  );
};

export default VueTodoApp;
