import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import type { PersonalInfo } from '../types/loan';
import PersonalInfoForm from './forms/PersonalInfoForm';
import LoanDetailsForm from './forms/LoanDetailsForm';
import CollateralForm from './forms/CollateralForm';
import DocumentUploadForm from './forms/DocumentUploadForm';

export default function LoanApplication() {
  const [formData, setFormData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      phone: '',
      currentBalance: 0
    } as PersonalInfo,
    amount: 5000,
    term: 2,
    collateralType: 'property',
    collateralValue: 0,
    documents: {} as Record<string, string>
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const handlePersonalInfoChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const handleDocumentUpload = (docType: string, file: File) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docType]: file.name
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div className="glass-effect rounded-lg shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Demande de Prêt</h2>
        <h2 className="text-1xl font-bold text-red-600">Non Disponible pour le Moment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <section>
          <h3 className="text-lg font-semibold mb-4">Informations Personnelles</h3>
          <PersonalInfoForm
            personalInfo={formData.personalInfo}
            onChange={handlePersonalInfoChange}
            errors={errors}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Détails du Prêt</h3>
          <LoanDetailsForm
            amount={formData.amount}
            term={formData.term}
            onChange={handleChange}
            errors={errors}
          />
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Garantie</h3>
          <CollateralForm
            collateralType={formData.collateralType}
            collateralValue={formData.collateralValue}
            onChange={handleChange}
            errors={errors}
          />
        </section>

        <section>
          <DocumentUploadForm
            documents={formData.documents}
            onDocumentUpload={handleDocumentUpload}
          />
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Soumettre la demande
          </button>
        </div>
      </form>
    </div>
  );
}