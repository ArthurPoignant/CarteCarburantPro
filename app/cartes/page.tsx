import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Toutes les cartes carburant | Comparateur de Carte Carburant",
  description: "Découvrez et comparez toutes les cartes carburant disponibles pour les professionnels.",
}

// Types pour les cartes carburant
type CarteCarburant = {
  id: string
  nom: string
  logo: string
  description: string
  avantages: string[]
  inconvenients: string[]
  prixCarburant: string
  fraisGestion: string
  fraisAnnuels?: string
  reseauStations: number
  paysCouverts: string[]
  servicesAdditionnels: string[]
  noteGlobale: number
  badge?: string
}

// Données des cartes carburant
const cartesCarburant: CarteCarburant[] = [
  {
    id: "super-u",
    nom: "Carte Carburant Pro U",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Carte carburant économique acceptée dans l'ensemble du réseau Super U en France.",
    avantages: [
      "Prix parmi les plus compétitifs du marché",
      "Facturation détaillée par véhicule",
      "Accès 24/7 aux stations",
      "Paiement différé disponible"
    ],
    inconvenients: [
      "Réseau limité aux stations Super U",
      "Couverture nationale uniquement"
    ],
    prixCarburant: "Prix compétitifs",
    fraisGestion: "Sur devis",
    reseauStations: 1600,
    paysCouverts: ["France"],
    servicesAdditionnels: ["Lavage", "Boutique"],
    noteGlobale: 4.2,
    badge: "Économique"
  },
  {
    id: "leclerc",
    nom: "Carte Carburant E.Leclerc",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Solution économique avec accès à plus de 1000 stations E.Leclerc en France.",
    avantages: [
      "Prix inférieurs à la moyenne nationale",
      "Récupération de TVA simplifiée",
      "Gestion des dépenses simplifiée",
      "Large réseau national"
    ],
    inconvenients: [
      "Réseau limité aux stations E.Leclerc",
      "Disponible uniquement en France"
    ],
    prixCarburant: "Prix attractifs",
    fraisGestion: "Sur devis",
    reseauStations: 1000,
    paysCouverts: ["France"],
    servicesAdditionnels: ["Lavage", "Boutique"],
    noteGlobale: 4.1,
    badge: "Prix Bas"
  },
  {
    id: "auchan",
    nom: "Carte Carburant Auchan",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Carte carburant professionnelle pour les stations Auchan avec programme de fidélité intégré.",
    avantages: [
      "Prix compétitifs sur le carburant",
      "Programme de fidélité inclus",
      "Gestion simplifiée des dépenses",
      "Facturation détaillée"
    ],
    inconvenients: [
      "Réseau limité aux stations Auchan",
      "Couverture géographique restreinte"
    ],
    prixCarburant: "Prix compétitifs",
    fraisGestion: "Sur devis",
    reseauStations: 400,
    paysCouverts: ["France"],
    servicesAdditionnels: ["Lavage", "Boutique"],
    noteGlobale: 4.0
  },
  {
    id: "carrefour",
    nom: "Carte Carburant Carrefour",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Solution de paiement carburant pour professionnels dans le réseau Carrefour avec programme de fidélité.",
    avantages: [
      "Prix attractifs sur le carburant",
      "Points de fidélité cumulables",
      "Suivi en ligne des dépenses",
      "Gestion centralisée"
    ],
    inconvenients: [
      "Réseau limité aux stations Carrefour",
      "Couverture nationale uniquement"
    ],
    prixCarburant: "Prix attractifs",
    fraisGestion: "Sur devis",
    reseauStations: 700,
    paysCouverts: ["France"],
    servicesAdditionnels: ["Lavage", "Boutique"],
    noteGlobale: 4.0
  },
  {
    id: "totalenergies-fleet",
    nom: "TotalEnergies Fleet",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Solution complète pour flottes mixtes avec accès à 3500 stations en France et 150000 points de recharge électrique.",
    avantages: [
      "Large réseau de stations et points de recharge",
      "Gestion simplifiée multi-énergies",
      "Personnalisation des cartes",
      "Couverture européenne"
    ],
    inconvenients: [
      "Frais de gestion variables",
      "Engagement sur durée"
    ],
    prixCarburant: "Sur devis",
    fraisGestion: "Sur devis",
    reseauStations: 18000,
    paysCouverts: ["France", "Europe"],
    servicesAdditionnels: ["Lavage", "Boutique", "Recharge électrique", "Services véhicules"],
    noteGlobale: 4.4,
    badge: "Multi-énergies"
  },
  {
    id: "dkv",
    nom: "DKV",
    logo: "/placeholder.svg?height=60&width=120",
    description: "DKV propose une solution complète avec un vaste réseau de plus de 69 000 stations dans plus de 50 pays européens.",
    avantages: [
      "Réseau de 69 000 stations en Europe",
      "Aucune exigence de volume minimum",
      "Sécurité renforcée avec code PIN",
      "Outils d'analyse et de gestion de flotte"
    ],
    inconvenients: [
      "Couverture plus limitée en France (5 000 stations)",
      "Frais de gestion variables"
    ],
    prixCarburant: "Prix à la pompe",
    fraisGestion: "Sur devis",
    fraisAnnuels: "Sur devis",
    reseauStations: 69000,
    paysCouverts: ["France", "Allemagne", "Espagne", "Italie", "Belgique", "Luxembourg", "Pays-Bas"],
    servicesAdditionnels: ["Péages", "Assistance routière", "Lavage", "Réparations"],
    noteGlobale: 4.6,
    badge: "International"
  },
  {
    id: "total",
    nom: "Total Mobility",
    logo: "/placeholder.svg?height=60&width=120",
    description: "La carte carburant idéale pour les flottes de toutes tailles avec un large réseau en Europe.",
    avantages: [
      "Réseau de 16 000 stations en Europe",
      "Facture unique et détaillée",
      "Suivi en ligne des transactions",
      "Application mobile pour localiser les stations"
    ],
    inconvenients: [
      "Frais de gestion mensuels",
      "Remises moins intéressantes pour les petits volumes"
    ],
    prixCarburant: "-0,04€/L",
    fraisGestion: "2,50€/mois/carte",
    fraisAnnuels: "30€/an/carte",
    reseauStations: 16000,
    paysCouverts: ["France", "Allemagne", "Espagne", "Italie", "Belgique"],
    servicesAdditionnels: ["Lavage", "Boutique", "Péages", "Parking"],
    noteGlobale: 4.5,
    badge: "Populaire"
  },
  {
    id: "shell",
    nom: "Shell Card",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Solution complète pour les entreprises avec une présence internationale.",
    avantages: [
      "Acceptée dans 22 pays",
      "Services additionnels complets",
      "Contrôle des dépenses avancé",
      "Assistance 24/7"
    ],
    inconvenients: [
      "Frais de gestion plus élevés",
      "Moins de stations en France que certains concurrents"
    ],
    prixCarburant: "-0,03€/L",
    fraisGestion: "3€/mois/carte",
    fraisAnnuels: "36€/an/carte",
    reseauStations: 14000,
    paysCouverts: ["France", "Allemagne", "Royaume-Uni", "Espagne", "Italie"],
    servicesAdditionnels: ["Lavage", "Boutique", "Péages", "Parking", "Hôtels"],
    noteGlobale: 4.3
  },
  {
    id: "bp",
    nom: "BP Plus",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Carte professionnelle avec des remises attractives pour les PME.",
    avantages: [
      "Remises progressives",
      "Facture bi-mensuelle",
      "Application mobile",
      "Pas de frais d'adhésion"
    ],
    inconvenients: [
      "Réseau moins dense à l'international",
      "Moins de services additionnels"
    ],
    prixCarburant: "-0,035€/L",
    fraisGestion: "2€/mois/carte",
    fraisAnnuels: "24€/an/carte",
    reseauStations: 8000,
    paysCouverts: ["France", "Royaume-Uni", "Allemagne", "Espagne"],
    servicesAdditionnels: ["Lavage", "Boutique"],
    noteGlobale: 4.2,
    badge: "Économique"
  },
  {
    id: "c2a",
    nom: "C2A",
    logo: "/placeholder.svg?height=60&width=120",
    description: "La carte C2A, associée au réseau Mastercard®, offre une couverture maximale avec des remises dans plus de 5 300 stations partenaires.",
    avantages: [
      "Acceptée dans toutes les stations Mastercard",
      "Jusqu'à 12% d'économies sur le carburant",
      "Aucune caution requise",
      "Outil de géolocalisation des stations"
    ],
    inconvenients: [
      "Remises limitées aux stations partenaires",
      "Réseau partenaire plus restreint"
    ],
    prixCarburant: "Jusqu'à -12%",
    fraisGestion: "Sur devis",
    reseauStations: 5300,
    paysCouverts: ["France"],
    servicesAdditionnels: ["Péages", "Parkings sécurisés", "Services véhicules"],
    noteGlobale: 4.3,
    badge: "Flexible"
  }
]

export default function ToutesLesCartes() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Toutes les cartes carburant</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comparez les meilleures cartes carburant du marché et trouvez celle qui correspond le mieux à vos besoins.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartesCarburant.map((carte) => (
          <Card key={carte.id} className="flex flex-col h-full">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <img src={carte.logo || "/placeholder.svg"} alt={carte.nom} className="h-12" />
                {carte.badge && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {carte.badge}
                  </Badge>
                )}
              </div>
              <CardTitle className="mt-4">{carte.nom}</CardTitle>
              <CardDescription>{carte.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(carte.noteGlobale)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < carte.noteGlobale
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{carte.noteGlobale}/5</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Prix carburant:</div>
                  <div className="font-medium text-green-600">{carte.prixCarburant}</div>

                  <div className="text-gray-500">Frais de gestion:</div>
                  <div className="font-medium">{carte.fraisGestion}</div>

                  <div className="text-gray-500">Réseau:</div>
                  <div className="font-medium">{carte.reseauStations.toLocaleString()} stations</div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Principaux avantages:</p>
                  <ul className="text-sm space-y-1">
                    {carte.avantages.slice(0, 3).map((avantage, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Points d'attention:</p>
                  <ul className="text-sm space-y-1">
                    {carte.inconvenients.slice(0, 2).map((inconvenient, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>{inconvenient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pt-2">
              <Link href={`/cartes/${carte.id}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Voir les détails
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}