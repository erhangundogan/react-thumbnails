import React, { createContext, useContext, useState } from 'react';
import ErrorContainer from '../../components/ErrorContainer/ErrorContainer';

export const ErrorProviderContext = createContext({} as any);
export const useError = () => useContext(ErrorProviderContext);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState();

  const clearError = () => setError(null);

  return (
    <ErrorProviderContext.Provider value={{ error, clearError, setError }}>
      <ErrorContainer error={error} clearError={clearError} />
      {children}
    </ErrorProviderContext.Provider>
  );
};

export default ErrorProvider;
