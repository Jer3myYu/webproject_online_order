import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <main>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </main>
    </div>
  );
}

export default App;
