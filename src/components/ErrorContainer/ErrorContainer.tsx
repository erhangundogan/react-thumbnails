import React, { useEffect } from 'react';

const ErrorContainer = ({ error, clearError }) => {
  useEffect(() => {
    let timeout;

    if (error && clearError) {
      timeout = setTimeout(() => {
        clearError();
      }, 3000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [error, clearError]);

  return error ? (
    <div className="error-container">
      <div className="error">{error}</div>
    </div>
  ) : null;
};

export default ErrorContainer;
