import React from 'react';
import { Shield } from 'lucide-react';
import ArticleCard from '../ArticleCard';
import InfoCard from '../InfoCard';

export default function EligibilityArticle() {
  return (
    <ArticleCard
      icon={Shield}
      title="Article 1 : Conditions d'éligibilité"
      iconColor="text-blue-600"
      gradient="bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="space-y-4">
        <InfoCard title="Score de crédit :" titleColor="text-blue-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Score minimal requis de 600 points</li>
            <li>Évaluation basée sur l'historique financier</li>
            <li>Prise en compte des remboursements précédents</li>
          </ul>
        </InfoCard>

        <InfoCard title="Revenus :" titleColor="text-blue-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Revenu hebdomadaire minimum : 2× la mensualité</li>
            <li>Justificatifs des 4 dernières semaines exigés</li>
            <li>Stabilité des revenus évaluée</li>
          </ul>
        </InfoCard>
      </div>
    </ArticleCard>
  );
}