import React from 'react';

interface LoanCalculatorResultProps {
  calculation: {
    weeklyPayment: number;
    totalInterest: number;
    totalAmount: number;
    debtRatio: number;
    isEligible: boolean;
    interestRate: number;
    requiredDeposit: number;
    simulationFee: number;
    netLoanAmount: number;
  };
}

export default function LoanCalculatorResult({ calculation }: LoanCalculatorResultProps) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-md">
      <h3 className="font-semibold text-lg mb-3">Résultats</h3>
      <div className="space-y-2">
        <p>Apport minimum requis (15%): ${calculation.requiredDeposit.toFixed(2)}</p>
        <p>Frais de simulation: ${calculation.simulationFee.toFixed(2)}</p>
        <p>Montant net du prêt: ${calculation.netLoanAmount.toFixed(2)}</p>
        <p>Taux d'intérêt: {(calculation.interestRate * 100).toFixed(1)}%</p>
        <p>Paiement hebdomadaire: ${calculation.weeklyPayment.toFixed(2)}</p>
        <p>Intérêts totaux: ${calculation.totalInterest.toFixed(2)}</p>
        <p>Montant total à rembourser: ${calculation.totalAmount.toFixed(2)}</p>
        <p>Ratio d'endettement: {calculation.debtRatio.toFixed(1)}%</p>
        <div className={`mt-4 p-2 rounded ${calculation.isEligible ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {calculation.isEligible ? 'Éligible au prêt' : 'Non éligible au prêt'}
        </div>
      </div>
    </div>
  );
}