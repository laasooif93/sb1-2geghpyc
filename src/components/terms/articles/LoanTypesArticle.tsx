import React from 'react';
import { DollarSign } from 'lucide-react';
import ArticleCard from '../ArticleCard';
import InfoCard from '../InfoCard';

export default function LoanTypesArticle() {
  return (
    <ArticleCard
      icon={DollarSign}
      title="Article 2 : Types de prêts"
      iconColor="text-purple-600"
      gradient="bg-gradient-to-r from-purple-50 to-blue-50"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <InfoCard title="Prêt à faible montant :" titleColor="text-purple-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Maximum : 10 000 $</li>
            <li>Taux : 8 à 10 %</li>
            <li>Durée : 1-3 semaines</li>
          </ul>
        </InfoCard>

        <InfoCard title="Prêt à montant élevé :" titleColor="text-purple-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Minimum : 10 001 $</li>
            <li>Taux : 8 à 10 %</li>
            <li>Durée : 4-7 semaines</li>
          </ul>
        </InfoCard>
      </div>
    </ArticleCard>
  );
}