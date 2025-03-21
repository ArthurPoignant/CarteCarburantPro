import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ChevronRight } from "lucide-react"
import Link from "next/link"

// Types pour les cartes carburant
type CarteCarburant = {
  id: string
  nom: string
  logo: string
  description: string
  avantages: string[]
  note: number
  prixLitre: string
  fraisGestion: string
  badge?: string
}

// Données fictives pour les cartes carburant
const cartesCarburant: CarteCarburant[] = [
  {
    id: "total",
    nom: "Total Mobility",
    logo: "/placeholder.svg?height=60&width=120",
    description: "La carte carburant idéale pour les flottes de toutes tailles avec un large réseau en Europe.",
    avantages: ["Réseau de 16 000 stations en Europe", "Facture unique et détaillée", "Suivi en ligne"],
    note: 4.5,
    prixLitre: "-0,04€/L",
    fraisGestion: "2,50€/mois/carte",
    badge: "Populaire",
  },
  {
    id: "shell",
    nom: "Shell Card",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Solution complète pour les entreprises avec une présence internationale.",
    avantages: ["Acceptée dans 22 pays", "Services additionnels", "Contrôle des dépenses"],
    note: 4.3,
    prixLitre: "-0,03€/L",
    fraisGestion: "3€/mois/carte",
  },
  {
    id: "bp",
    nom: "BP Plus",
    logo: "/placeholder.svg?height=60&width=120",
    description: "Carte professionnelle avec des remises attractives pour les PME.",
    avantages: ["Remises progressives", "Facture bi-mensuelle", "Application mobile"],
    note: 4.2,
    prixLitre: "-0,035€/L",
    fraisGestion: "2€/mois/carte",
    badge: "Économique",
  },
]

export default function FeaturedCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
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
                      i < Math.floor(carte.note)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < carte.note
                          ? "text-yellow-400 fill-yellow-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{carte.note}/5</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Prix carburant:</div>
                <div className="font-medium text-green-600">{carte.prixLitre}</div>

                <div className="text-gray-500">Frais de gestion:</div>
                <div className="font-medium">{carte.fraisGestion}</div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Principaux avantages:</p>
                <ul className="text-sm space-y-1">
                  {carte.avantages.map((avantage, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{avantage}</span>
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
  )
}

