import { notFound } from "next/navigation"
import { prisma } from "@/lib/db"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Download, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Résultats de votre comparaison | Comparateur de Carte Carburant",
  description: "Découvrez les cartes carburant les mieux adaptées à vos besoins professionnels.",
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
  compatibilite: number
}

async function getSubmission(id: string) {
  try {
    const submission = await prisma.comparateurSubmission.findUnique({
      where: { id },
    })

    return submission
  } catch (error) {
    console.error("Erreur lors de la récupération de la soumission:", error)
    return null
  }
}

// Fonction pour récupérer les cartes carburant recommandées
async function getRecommendedCards(submission: any): Promise<CarteCarburant[]> {
  // Dans un cas réel, nous interrogerions la base de données
  // et filtrerions en fonction des critères de l'utilisateur

  // Pour l'exemple, nous utilisons des données fictives
  const cartesRecommandees: CarteCarburant[] = [
    {
      id: "total",
      nom: "Total Mobility",
      logo: "/placeholder.svg?height=60&width=120",
      description: "La carte carburant idéale pour les flottes de toutes tailles avec un large réseau en Europe.",
      avantages: [
        "Réseau de 16 000 stations en Europe",
        "Facture unique et détaillée",
        "Suivi en ligne des transactions",
        "Application mobile pour localiser les stations",
        "Remises progressives selon le volume",
      ],
      inconvenients: ["Frais de gestion mensuels", "Remises moins intéressantes pour les petits volumes"],
      prixCarburant: "-0,04€/L",
      fraisGestion: "2,50€/mois/carte",
      fraisAnnuels: "30€/an/carte",
      reseauStations: 16000,
      paysCouverts: ["France", "Allemagne", "Espagne", "Italie", "Belgique", "Luxembourg", "Pays-Bas"],
      servicesAdditionnels: ["Lavage", "Boutique", "Péages", "Parking"],
      noteGlobale: 4.5,
      compatibilite: 95,
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
        "Assistance 24/7",
        "Sécurité renforcée",
      ],
      inconvenients: ["Frais de gestion plus élevés", "Moins de stations en France que certains concurrents"],
      prixCarburant: "-0,03€/L",
      fraisGestion: "3€/mois/carte",
      fraisAnnuels: "36€/an/carte",
      reseauStations: 14000,
      paysCouverts: ["France", "Allemagne", "Royaume-Uni", "Espagne", "Italie", "Belgique", "Pays-Bas", "Pologne"],
      servicesAdditionnels: ["Lavage", "Boutique", "Péages", "Parking", "Hôtels", "Entretien véhicule"],
      noteGlobale: 4.3,
      compatibilite: 88,
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
        "Pas de frais d'adhésion",
        "Gestion simplifiée",
      ],
      inconvenients: ["Réseau moins dense à l'international", "Moins de services additionnels"],
      prixCarburant: "-0,035€/L",
      fraisGestion: "2€/mois/carte",
      fraisAnnuels: "24€/an/carte",
      reseauStations: 8000,
      paysCouverts: ["France", "Royaume-Uni", "Allemagne", "Espagne"],
      servicesAdditionnels: ["Lavage", "Boutique"],
      noteGlobale: 4.2,
      compatibilite: 82,
    },
  ]

  // Trier par compatibilité
  return cartesRecommandees.sort((a, b) => b.compatibilite - a.compatibilite)
}

export default async function ResultatsPage({ params }: { params: { id: string } }) {
  const submission = await getSubmission(params.id)

  if (!submission) {
    notFound()
  }

  const cartesRecommandees = await getRecommendedCards(submission)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Résultats de votre comparaison</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Voici les cartes carburant les mieux adaptées à vos besoins, classées par ordre de compatibilité.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        {cartesRecommandees.map((carte, index) => (
          <Card key={carte.id} className={index === 0 ? "border-blue-600 shadow-lg" : ""}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* En-tête avec logo et compatibilité */}
                <div className="md:w-1/4 flex flex-col items-center text-center">
                  <img src={carte.logo || "/placeholder.svg"} alt={carte.nom} className="h-16 mb-4" />
                  <h2 className="text-2xl font-bold mb-2">{carte.nom}</h2>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(carte.noteGlobale)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < carte.noteGlobale
                              ? "text-yellow-400 fill-yellow-400 opacity-50"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm">{carte.noteGlobale}/5</span>
                  </div>
                  <div className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-full mb-4">
                    Compatibilité: {carte.compatibilite}%
                  </div>
                  {index === 0 && <Badge className="bg-green-100 text-green-800 mb-4">Meilleure option</Badge>}
                  <Link href={`/cartes/${carte.id}`} className="w-full">
                    <Button className="w-full">Voir les détails</Button>
                  </Link>
                </div>

                {/* Informations principales */}
                <div className="md:w-3/4">
                  <p className="text-gray-700 mb-4">{carte.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Prix carburant</p>
                      <p className="font-semibold text-green-600">{carte.prixCarburant}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Frais de gestion</p>
                      <p className="font-semibold">{carte.fraisGestion}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm text-gray-500">Réseau</p>
                      <p className="font-semibold">{carte.reseauStations.toLocaleString()} stations</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Avantages</h3>
                      <ul className="space-y-1">
                        {carte.avantages.map((avantage, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-green-600 mr-2">✓</span>
                            <span>{avantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Inconvénients</h3>
                      <ul className="space-y-1">
                        {carte.inconvenients.map((inconvenient, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>{inconvenient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
        <p className="mb-6">
          Nos experts peuvent vous aider à sélectionner la carte carburant la plus adaptée à vos besoins spécifiques.
          Contactez-nous pour obtenir des conseils personnalisés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Nous appeler
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Demander un rappel
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Télécharger le comparatif
          </Button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé ce que vous cherchiez ?</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Essayez de modifier vos critères de recherche ou consultez notre catalogue complet de cartes carburant.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/comparateur">
            <Button variant="outline">Nouvelle recherche</Button>
          </Link>
          <Link href="/cartes">
            <Button>Voir toutes les cartes</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

