import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPage from './components/FormPage.jsx';
import SummaryPage from './components/SummaryPage.jsx';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  </Router>
);

export default App;
