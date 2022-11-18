import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App2 = React.lazy(() => import('./remoteApps/App2.jsx'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="app2">go to App2</Link>
            </div>
          }
        />
        <Route
          path="/app2"
          element={
            <Suspense fallback={'loading...'}>
              <App2 />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
