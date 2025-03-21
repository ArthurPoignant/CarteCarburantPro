import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "À propos | Comparateur de Carte Carburant",
  description: "Découvrez tout ce que vous devez savoir sur les cartes carburant et leur utilisation pour les professionnels.",
}

export default function AProposPage() {
  const faqs = [
    {
      question: "Qu'est-ce qu'une carte carburant ?",
      answer: "Une carte carburant est un moyen de paiement dédié aux achats de carburant et autres services (lavage, péage, stationnement) pour les professionnels. Elle permet une gestion simplifiée des dépenses et une facturation centralisée.",
    },
    {
      question: "Qui peut utiliser une carte carburant ?",
      answer: "Les cartes carburant sont destinées aux entreprises, aux indépendants et aux gestionnaires de flotte souhaitant optimiser leurs coûts et simplifier la gestion administrative liée au carburant.",
    },
    {
      question: "Quels sont les avantages d'une carte carburant ?",
      answer: "Les principaux avantages sont :\n- Paiement facilité : Évite l'avance de frais pour les employés.\n- Facturation centralisée : Fin des notes de frais, récupération simplifiée de la TVA.\n- Contrôle des dépenses : Gestion des plafonds, restrictions sur certains achats.\n- Accès à un large réseau : Certaines cartes sont multi-réseaux, d'autres sont limitées à une marque.",
    },
    {
      question: "Comment fonctionne la facturation avec une carte carburant ?",
      answer: "Toutes les transactions sont regroupées sur une facture unique (hebdomadaire ou mensuelle), ce qui facilite la comptabilité et permet une récupération rapide de la TVA.",
    },
    {
      question: "Quelle est la différence entre une carte pétrolière et une carte multi-enseignes ?",
      answer: "- Carte pétrolière : Utilisable uniquement dans les stations d'une marque spécifique (TotalEnergies, Shell, Esso…).\n- Carte multi-enseignes : Acceptée dans plusieurs réseaux (Edenred, Mooncard, Wex…).",
    },
    {
      question: "Peut-on utiliser une carte carburant pour d'autres dépenses ?",
      answer: "Oui, selon les cartes, il est possible de payer d'autres services comme les péages, le lavage, les parkings et même la recharge électrique.",
    },
    {
      question: "Comment choisir la meilleure carte carburant ?",
      answer: "Les critères à considérer :\n- Le réseau de stations disponibles\n- Les services inclus (péage, lavage, recharge électrique)\n- Les frais de gestion et remises sur le carburant\n- La compatibilité avec la comptabilité de votre entreprise",
    },
    {
      question: "Comment gérer et sécuriser l'utilisation d'une carte carburant ?",
      answer: "- Paramétrer des restrictions sur les types d'achat.\n- Suivre les transactions en temps réel via un tableau de bord.\n- Bloquer la carte en cas de perte ou de vol.",
    },
    {
      question: "Comment récupérer la TVA sur le carburant ?",
      answer: "Grâce à la facturation centralisée, les entreprises peuvent récupérer la TVA sans devoir collecter les tickets de caisse.",
    },
    {
      question: "Les cartes carburant sont-elles compatibles avec les véhicules électriques ?",
      answer: "Oui, certaines cartes (TotalEnergies, Shell, Edenred) permettent de payer la recharge dans des bornes partenaires.",
    },
    {
      question: "Est-il possible d'avoir plusieurs cartes pour une même entreprise ?",
      answer: "Oui, il est possible d'attribuer une carte par véhicule ou par employé selon les besoins de gestion.",
    },
    {
      question: "Y a-t-il des frais d'utilisation ?",
      answer: "Certains fournisseurs appliquent des frais de gestion mensuels ou des commissions sur les transactions. Il est important de comparer les offres.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">FAQ – Cartes Carburant</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Retrouvez toutes les réponses à vos questions sur les cartes carburant et leur utilisation.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 text-left hover:no-underline">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}