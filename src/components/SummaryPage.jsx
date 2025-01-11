import React from 'react';
import { useSelector } from 'react-redux';

const SummaryPage = () => {
  const { formData, submissionSuccess } = useSelector((state) => state);

  if (!formData || !submissionSuccess) {
    return (
      <div className="summary">
        <p>No data available or submission is not successful.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Summary Page</h2>
      <div className="summary">
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
};

export default SummaryPage;
