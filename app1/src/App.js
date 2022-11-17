import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import App2 from './routes/App2.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Hello world!
              <Link to="app2">go to App2</Link>
            </div>
          }
        />
        <Route path="/app2" element={<App2 />} />
      </Routes>
    </Router>
  );
};

export default App;
