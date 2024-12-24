import React from 'react';
import { ScrollText } from 'lucide-react';
import EligibilityArticle from './terms/articles/EligibilityArticle';
import LoanTypesArticle from './terms/articles/LoanTypesArticle';
import GuaranteesArticle from './terms/articles/GuaranteesArticle';
import PenaltiesArticle from './terms/articles/PenaltiesArticle';
import SpecialClausesArticle from './terms/articles/SpecialClausesArticle';
import FinalProvisionsArticle from './terms/articles/FinalProvisionsArticle';

export default function LoanTerms() {
  return (
    <div className="glass-effect rounded-lg shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-6">
        <ScrollText className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Règlement et Conditions</h2>
      </div>

      <div className="space-y-8">
        <EligibilityArticle />
        <LoanTypesArticle />
        <GuaranteesArticle />
        <PenaltiesArticle />
        <SpecialClausesArticle />
        <FinalProvisionsArticle />
      </div>
    </div>
  );
}