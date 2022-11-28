import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.scss';
import Layout from './Layout.jsx';
const ReactTodoApp = React.lazy(() => import('./remoteApps/ReactTodoApp.jsx'));
const VueTodoApp = React.lazy(() => import('./remoteApps/VueTodoApp.jsx'));

const App = () => {
  const [count, setCount] = React.useState(121);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <Router>
      <Layout>
        <button onClick={handleAdd}>Add</button>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/react-todo-app"
            element={
              <Suspense fallback={'loading...'}>
                <ReactTodoApp count={count} />
              </Suspense>
            }
          />
          <Route
            path="/vue-todo-app"
            element={
              <Suspense fallback={'loading...'}>
                <VueTodoApp count={count} />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
