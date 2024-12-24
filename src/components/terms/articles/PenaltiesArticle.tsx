import React from 'react';
import { AlertCircle } from 'lucide-react';
import ArticleCard from '../ArticleCard';
import InfoCard from '../InfoCard';

export default function PenaltiesArticle() {
  return (
    <ArticleCard
      icon={AlertCircle}
      title="Article 4 : Pénalités et sanctions"
      iconColor="text-red-600"
      gradient="bg-gradient-to-r from-red-50 to-orange-50"
    >
      <div className="space-y-4">
        <InfoCard title="Retards de paiement :" titleColor="text-red-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>7 jours : pénalité de 2% de la mensualité</li>
            <li>30 jours : saisie de la garantie</li>
            <li>Inscription au fichier des incidents</li>
          </ul>
        </InfoCard>

        <InfoCard title="Fraude :" titleColor="text-red-800">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Amende de 20% du montant demandé</li>
            <li>Interdiction de nouveaux prêts (12 mois)</li>
            <li>Poursuites légales possibles</li>
          </ul>
        </InfoCard>
      </div>
    </ArticleCard>
  );
}