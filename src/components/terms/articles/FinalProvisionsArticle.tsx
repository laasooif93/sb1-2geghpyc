import React from 'react';
import { ScrollText } from 'lucide-react';
import ArticleCard from '../ArticleCard';

export default function FinalProvisionsArticle() {
  return (
    <ArticleCard
      icon={ScrollText}
      title="Article 6 : Dispositions finales"
      iconColor="text-blue-600"
      gradient="bg-gradient-to-r from-blue-50 to-cyan-50"
    >
      <div className="space-y-4">
        <p className="text-gray-700">
          La soumission d'une demande de prêt implique l'acceptation pleine et entière du présent règlement.
        </p>
        <p className="text-gray-700">
          Le prêteur se réserve le droit de modifier les conditions du présent règlement. Les modifications seront notifiées aux emprunteurs et applicables aux nouveaux prêts uniquement.
        </p>
      </div>
    </ArticleCard>
  );
}