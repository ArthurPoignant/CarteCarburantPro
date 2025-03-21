import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"

export const metadata = {
  title: "Blog | Comparateur de Carte Carburant",
  description:
    "Actualités, guides et conseils sur les cartes carburant et la gestion de flotte pour les professionnels.",
}

// Types pour les articles
type Article = {
  id: string
  titre: string
  slug: string
  description: string
  image: string
  date: string
  tempsLecture: string
  auteur: string
  categories: string[]
}

// Données fictives pour les articles
const articles: Article[] = [
  {
    id: "1",
    titre: "Comment choisir la meilleure carte carburant pour votre entreprise",
    slug: "choisir-meilleure-carte-carburant-entreprise",
    description: "Guide complet pour sélectionner la carte carburant la plus adaptée à vos besoins professionnels.",
    image: "/placeholder.svg?height=200&width=400",
    date: "15 mars 2023",
    tempsLecture: "8 min",
    auteur: "Sophie Martin",
    categories: ["Guide", "Conseils"],
  },
  {
    id: "2",
    titre: "Les nouvelles réglementations européennes sur les cartes carburant en 2023",
    slug: "nouvelles-reglementations-europeennes-cartes-carburant-2023",
    description: "Découvrez les changements réglementaires qui impactent l'utilisation des cartes carburant en Europe.",
    image: "/placeholder.svg?height=200&width=400",
    date: "28 février 2023",
    tempsLecture: "6 min",
    auteur: "Thomas Dubois",
    categories: ["Législation", "Europe"],
  },
  {
    id: "3",
    titre: "5 astuces pour optimiser vos dépenses de carburant",
    slug: "5-astuces-optimiser-depenses-carburant",
    description: "Conseils pratiques pour réduire vos coûts de carburant et maximiser les avantages de votre carte.",
    image: "/placeholder.svg?height=200&width=400",
    date: "10 février 2023",
    tempsLecture: "5 min",
    auteur: "Émilie Leroy",
    categories: ["Économies", "Conseils"],
  },
  {
    id: "4",
    titre: "Cartes carburant vs remboursement de frais : quelle solution choisir ?",
    slug: "cartes-carburant-vs-remboursement-frais",
    description:
      "Analyse comparative des avantages et inconvénients des différentes méthodes de gestion des frais de carburant.",
    image: "/placeholder.svg?height=200&width=400",
    date: "25 janvier 2023",
    tempsLecture: "7 min",
    auteur: "Sophie Martin",
    categories: ["Comparaison", "Gestion"],
  },
  {
    id: "5",
    titre: "L'impact environnemental des cartes carburant : vers des solutions plus vertes",
    slug: "impact-environnemental-cartes-carburant-solutions-vertes",
    description:
      "Comment les fournisseurs de cartes carburant s'adaptent aux enjeux écologiques et proposent des alternatives durables.",
    image: "/placeholder.svg?height=200&width=400",
    date: "12 janvier 2023",
    tempsLecture: "9 min",
    auteur: "Thomas Dubois",
    categories: ["Environnement", "Innovation"],
  },
  {
    id: "6",
    titre: "Les cartes carburant pour les auto-entrepreneurs : guide pratique",
    slug: "cartes-carburant-auto-entrepreneurs-guide-pratique",
    description:
      "Tout ce que les auto-entrepreneurs doivent savoir pour choisir et utiliser une carte carburant professionnelle.",
    image: "/placeholder.svg?height=200&width=400",
    date: "5 janvier 2023",
    tempsLecture: "6 min",
    auteur: "Émilie Leroy",
    categories: ["Auto-entrepreneurs", "Guide"],
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Actualités, guides et conseils sur les cartes carburant et la gestion de flotte pour les professionnels.
        </p>
      </div>

      {/* Articles en vedette */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {articles.slice(0, 2).map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="relative">
              <img src={article.image || "/placeholder.svg"} alt={article.titre} className="w-full h-48 object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                {article.categories.map((categorie) => (
                  <Badge key={categorie} variant="secondary" className="bg-blue-100 text-blue-800">
                    {categorie}
                  </Badge>
                ))}
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">
                <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                  {article.titre}
                </Link>
              </CardTitle>
              <CardDescription>{article.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.tempsLecture}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Tous les articles */}
      <h2 className="text-2xl font-bold mb-6">Tous les articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(2).map((article) => (
          <Card key={article.id}>
            <div className="relative">
              <img src={article.image || "/placeholder.svg"} alt={article.titre} className="w-full h-40 object-cover" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex gap-2 mb-2">
                {article.categories.map((categorie) => (
                  <Badge key={categorie} variant="secondary" className="bg-blue-100 text-blue-800">
                    {categorie}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-lg">
                <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                  {article.titre}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm line-clamp-2">{article.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.tempsLecture}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter */}
      <div className="bg-blue-50 p-8 rounded-lg mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Restez informé</h2>
          <p className="text-gray-600 mb-6">
            Abonnez-vous à notre newsletter pour recevoir les dernières actualités et conseils sur les cartes carburant.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="px-4 py-2 border border-gray-300 rounded-md flex-grow"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

