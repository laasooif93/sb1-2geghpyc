import React from 'react';
import { validateCollateral } from '../../utils/validation';

interface CollateralFormProps {
  collateralType: string;
  collateralValue: number;
  onChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}

export default function CollateralForm({
  collateralType,
  collateralValue,
  onChange,
  errors
}: CollateralFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Type de garantie
        </label>
        <select
          value={collateralType}
          onChange={(e) => onChange('collateralType', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="property">Bien immobilier</option>
          <option value="vehicle">Véhicule</option>
          <option value="savings">Épargne</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Valeur de la garantie ($)
        </label>
        <input
          type="number"
          value={collateralValue}
          onChange={(e) => onChange('collateralValue', Number(e.target.value))}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            errors.collateralValue ? 'border-red-300' : ''
          }`}
          required
        />
        {errors.collateralValue && (
          <p className="mt-1 text-sm text-red-600">{errors.collateralValue}</p>
        )}
      </div>
    </div>
  );
}