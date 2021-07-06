import React from 'react';
import AppRouter from './routers/AppRouter';
import AuthState from './context/Auth/AuthState';

function App() {
  return (
    <AuthState>
      <AppRouter />;
    </AuthState>
  );
}

export default App;
