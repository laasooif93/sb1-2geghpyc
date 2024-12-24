import React from 'react';
import { BorrowerType } from '../../types/loan';

interface LoanCalculatorFormProps {
  amount: number;
  term: number;
  weeklyIncome: number;
  borrowerType: BorrowerType;
  onChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}

export default function LoanCalculatorForm({
  amount,
  term,
  weeklyIncome,
  borrowerType,
  onChange,
  errors
}: LoanCalculatorFormProps) {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 p-3 rounded-md mb-4">
        <p className="text-sm text-blue-700">
          💡 Les calculs sont mis à jour automatiquement lorsque vous renseignez les informations
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Type d'emprunteur
        </label>
        <select
          value={borrowerType}
          onChange={(e) => onChange('borrowerType', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="citizen">Citoyen</option>
          <option value="public_service">Agent de service public</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Montant du prêt ($)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => onChange('amount', Number(e.target.value))}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.amount ? 'border-red-300' : ''
          }`}
        />
        {errors.amount && (
          <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Durée (semaines)
        </label>
        <input
          type="number"
          value={term}
          onChange={(e) => onChange('term', Number(e.target.value))}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.term ? 'border-red-300' : ''
          }`}
        />
        {errors.term && (
          <p className="mt-1 text-sm text-red-600">{errors.term}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Revenu hebdomadaire ($)
        </label>
        <input
          type="number"
          value={weeklyIncome}
          onChange={(e) => onChange('weeklyIncome', Number(e.target.value))}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.weeklyIncome ? 'border-red-300' : ''
          }`}
        />
        {errors.weeklyIncome && (
          <p className="mt-1 text-sm text-red-600">{errors.weeklyIncome}</p>
        )}
      </div>
    </div>
  );
}