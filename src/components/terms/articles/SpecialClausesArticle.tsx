import React from 'react';
import { BookOpen } from 'lucide-react';
import ArticleCard from '../ArticleCard';
import InfoCard from '../InfoCard';

export default function SpecialClausesArticle() {
  return (
    <ArticleCard
      icon={BookOpen}
      title="Article 5 : Clauses particulières"
      iconColor="text-indigo-600"
      gradient="bg-gradient-to-r from-indigo-50 to-purple-50"
    >
      <div className="grid gap-4">
        <InfoCard title="Remboursement anticipé :" titleColor="text-indigo-800">
          <p className="text-gray-700">Possible sans pénalité après la première semaine</p>
        </InfoCard>

        <InfoCard title="Modification du contrat :" titleColor="text-indigo-800">
          <p className="text-gray-700">Possible sous conditions, frais de dossier applicables</p>
        </InfoCard>

        <InfoCard title="Assurance :" titleColor="text-indigo-800">
          <p className="text-gray-700">Obligatoire pour les prêts supérieurs à 50 000 $</p>
        </InfoCard>
      </div>
    </ArticleCard>
  );
}