import React from 'react';
import { FileCheck } from 'lucide-react';
import ArticleCard from '../ArticleCard';
import InfoCard from '../InfoCard';

export default function GuaranteesArticle() {
  return (
    <ArticleCard
      icon={FileCheck}
      title="Article 3 : Garanties requises"
      iconColor="text-green-600"
      gradient="bg-gradient-to-r from-green-50 to-blue-50"
    >
      <p className="text-gray-700 mb-4">
        La valeur de la garantie doit représenter au minimum 50% du montant emprunté.
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <InfoCard title="Bien immobilier" titleColor="text-green-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Titre de propriété</li>
            <li>Évaluation récente</li>
          </ul>
        </InfoCard>

        <InfoCard title="Véhicule" titleColor="text-green-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Carte grise</li>
            <li>Contrôle technique</li>
          </ul>
        </InfoCard>

        <InfoCard title="Épargne" titleColor="text-green-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Relevé bancaire</li>
            <li>Blocage des fonds</li>
          </ul>
        </InfoCard>
      </div>
    </ArticleCard>
  );
}