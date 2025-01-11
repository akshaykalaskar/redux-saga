import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage';
import SummaryPage from './components/SummaryPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  </Router>
);

export default App;
