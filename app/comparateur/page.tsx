import { Metadata } from "next"
import ComparateurForm from "@/components/comparateur-form"

export const metadata: Metadata = {
  title: "Comparateur de Cartes Carburant | Trouvez la Meilleure Carte pour Votre Entreprise",
  description: "Comparez les meilleures cartes carburant professionnelles. Trouvez la carte adaptée à vos besoins en fonction de vos critères spécifiques.",
}

export default function ComparateurPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Comparateur de Cartes Carburant Professionnelles
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trouvez la carte carburant la plus adaptée à votre entreprise en comparant les offres, les avantages et les réseaux disponibles.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ComparateurForm />
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Comment fonctionne notre comparateur ?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 font-bold text-xl mb-2">1. Renseignez vos besoins</div>
            <p className="text-gray-600">
              Indiquez votre type d'entreprise, votre consommation et vos préférences d'utilisation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 font-bold text-xl mb-2">2. Comparez les offres</div>
            <p className="text-gray-600">
              Recevez une sélection personnalisée des meilleures cartes carburant adaptées à vos critères.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-blue-600 font-bold text-xl mb-2">3. Faites votre choix</div>
            <p className="text-gray-600">
              Analysez les avantages de chaque carte et choisissez celle qui correspond le mieux à vos besoins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}