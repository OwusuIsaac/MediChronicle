import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import home from './screens/home';
import consultation from './screens/consultation';
import medication from './screens/medication';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={home} exact />
        <Route path="/consultation" component={consultation} />
        <Route path="/medication" component={medication} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
