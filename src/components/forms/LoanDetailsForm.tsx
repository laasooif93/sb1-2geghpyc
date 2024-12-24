import React from 'react';

interface LoanDetailsFormProps {
  amount: number;
  term: number;
  onChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}

export default function LoanDetailsForm({
  amount,
  term,
  onChange,
  errors
}: LoanDetailsFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          required
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
          required
        />
        {errors.term && (
          <p className="mt-1 text-sm text-red-600">{errors.term}</p>
        )}
      </div>
    </div>
  );
}