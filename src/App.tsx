import React from 'react';
import { SupabaseProvider } from './contexts/SupabaseContext';
import LoanCalculator from './components/LoanCalculator';
import LoanApplication from './components/LoanApplication';
import LoanTerms from './components/LoanTerms';

function App() {
  return (
    <SupabaseProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900">
        <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">New West | Pacific Bank - Formulaire de Prêt</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LoanCalculator />
              <LoanApplication />
            </div>
            <LoanTerms />
          </div>
        </main>
      </div>
    </SupabaseProvider>
  );
}

export default App;