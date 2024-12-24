import React from 'react';
import { Upload } from 'lucide-react';

interface DocumentUploadFormProps {
  documents: Record<string, string>;
  onDocumentUpload: (docType: string, file: File) => void;
}

export default function DocumentUploadForm({
  documents,
  onDocumentUpload
}: DocumentUploadFormProps) {
  const documentTypes = [
    { id: 'idCard', label: 'Pièce d\'identité' },
    { id: 'incomeProof', label: 'Justificatif de revenus' },
    { id: 'collateralProof', label: 'Preuve de garantie' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Documents requis</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documentTypes.map(({ id, label }) => (
          <div key={id} className="flex items-center gap-2 p-4 border rounded-md">
            <Upload className="w-5 h-5 text-gray-400" />
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    onDocumentUpload(id, file);
                  }
                }}
                className="mt-1 block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-50 file:text-blue-700
                         hover:file:bg-blue-100"
                required
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}