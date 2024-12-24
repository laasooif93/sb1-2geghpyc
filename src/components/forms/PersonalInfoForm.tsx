import React from 'react';
import type { PersonalInfo } from '../../types/loan';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}

export default function PersonalInfoForm({
  personalInfo,
  onChange,
  errors
}: PersonalInfoFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Prénom
        </label>
        <input
          type="text"
          value={personalInfo.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          type="text"
          value={personalInfo.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Numéro de téléphone
        </label>
        <input
          type="tel"
          value={personalInfo.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Solde de compte actuel ($)
        </label>
        <input
          type="number"
          value={personalInfo.currentBalance}
          onChange={(e) => onChange('currentBalance', Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  );
}