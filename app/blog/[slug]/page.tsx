import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarIcon, Clock, ArrowLeft, Share2, Bookmark, Facebook, Twitter, Linkedin } from "lucide-react"

export const metadata = {
  title: "Article | Comparateur de Carte Carburant",
  description: "Lisez nos articles sur les cartes carburant et la gestion de flotte pour les professionnels.",
}

// Types pour les articles
type Article = {
  id: string
  titre: string
  slug: string
  description: string
  image: string
  contenu: string
  date: string
  tempsLecture: string
  auteur: {
    nom: string
    role: string
    avatar: string
  }
  categories: string[]
}

// Fonction pour récupérer un article par son slug
async function getArticleBySlug(slug: string): Promise<Article | null> {
  // Dans un cas réel, nous interrogerions la base de données
  // Pour l'exemple, nous utilisons des données fictives

  const articles: Article[] = [
    {
      id: "1",
      titre: "Comment choisir la meilleure carte carburant pour votre entreprise",
      slug: "choisir-meilleure-carte-carburant-entreprise",
      description: "Guide complet pour sélectionner la carte carburant la plus adaptée à vos besoins professionnels.",
      image: "/placeholder.svg?height=400&width=800",
      contenu: `
        <h2>Introduction</h2>
        <p>Choisir la bonne carte carburant pour votre entreprise peut sembler complexe face à la multitude d'offres disponibles sur le marché. Pourtant, cette décision peut avoir un impact significatif sur vos finances et l'efficacité de la gestion de votre flotte.</p>
        
        <p>Dans cet article, nous allons vous guider à travers les critères essentiels à prendre en compte pour faire le meilleur choix possible.</p>
        
        <h2>Comprendre vos besoins</h2>
        <p>Avant de comparer les différentes offres, il est crucial d'analyser précisément vos besoins :</p>
        <ul>
          <li><strong>Taille de votre flotte</strong> : Le nombre de véhicules influencera le type de carte et les avantages associés.</li>
          <li><strong>Zone géographique</strong> : Vos véhicules circulent-ils principalement en France, en Europe ou à l'international ?</li>
          <li><strong>Volume de carburant</strong> : Votre consommation mensuelle déterminera les remises potentielles.</li>
          <li><strong>Type de carburant</strong> : Diesel, essence, électrique ou mixte ?</li>
          <li><strong>Services additionnels</strong> : Avez-vous besoin de services comme le lavage, les péages ou l'entretien ?</li>
        </ul>
        
        <h2>Les critères de comparaison</h2>
        <h3>1. Le réseau de stations</h3>
        <p>Assurez-vous que le réseau de stations acceptant la carte correspond aux zones où circulent vos véhicules. Certaines cartes sont acceptées dans des milliers de stations à travers l'Europe, tandis que d'autres sont limitées à un réseau spécifique.</p>
        
        <h3>2. Les frais et coûts</h3>
        <p>Examinez attentivement :</p>
        <ul>
          <li>Les frais d'adhésion</li>
          <li>Les frais mensuels par carte</li>
          <li>Les frais de transaction éventuels</li>
          <li>Les remises sur le prix du carburant</li>
        </ul>
        
        <h3>3. La facturation et le reporting</h3>
        <p>Une bonne carte carburant doit offrir :</p>
        <ul>
          <li>Une facturation claire et détaillée</li>
          <li>Des outils de reporting pour analyser vos dépenses</li>
          <li>Une interface en ligne pour gérer vos cartes</li>
          <li>La possibilité d'exporter les données pour votre comptabilité</li>
        </ul>
        
        <h3>4. La sécurité</h3>
        <p>Vérifiez les fonctionnalités de sécurité comme :</p>
        <ul>
          <li>La protection par code PIN</li>
          <li>Les restrictions d'utilisation (jours, heures, montants)</li>
          <li>Les alertes en cas d'utilisation suspecte</li>
          <li>La possibilité de bloquer une carte instantanément</li>
        </ul>
        
        <h2>Les principales offres du marché</h2>
        <p>Voici un aperçu des principales cartes carburant disponibles en France :</p>
        <ul>
          <li><strong>Total Mobility</strong> : Idéale pour les flottes de toutes tailles avec un large réseau en Europe.</li>
          <li><strong>Shell Card</strong> : Solution complète pour les entreprises avec une présence internationale.</li>
          <li><strong>BP Plus</strong> : Carte professionnelle avec des remises attractives pour les PME.</li>
          <li><strong>DKV Card</strong> : Spécialisée pour les transporteurs avec une couverture européenne étendue.</li>
          <li><strong>Esso Card</strong> : Solution flexible avec un bon maillage en France.</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Le choix d'une carte carburant doit être basé sur une analyse approfondie de vos besoins spécifiques et une comparaison minutieuse des offres disponibles. N'hésitez pas à utiliser notre comparateur pour trouver la solution la plus adaptée à votre entreprise.</p>
        
        <p>Rappelez-vous qu'une carte carburant n'est pas seulement un moyen de paiement, mais un véritable outil de gestion qui peut vous aider à optimiser vos dépenses et à simplifier vos processus administratifs.</p>
      `,
      date: "15 mars 2023",
      tempsLecture: "8 min",
      auteur: {
        nom: "Sophie Martin",
        role: "Experte en gestion de flotte",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      categories: ["Guide", "Conseils"],
    },
  ]

  const article = articles.find((article) => article.slug === slug)
  return article || null
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8">
          <Link href="/blog" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
        </div>

        {/* Article header */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {article.categories.map((categorie) => (
              <Badge key={categorie} variant="secondary" className="bg-blue-100 text-blue-800">
                {categorie}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.titre}</h1>

          <p className="text-xl text-gray-600 mb-6">{article.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={article.auteur.avatar || "/placeholder.svg"}
                alt={article.auteur.nom}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{article.auteur.nom}</p>
                <p className="text-sm text-gray-500">{article.auteur.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarIcon className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.tempsLecture}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8">
          <img src={article.image || "/placeholder.svg"} alt={article.titre} className="w-full h-auto rounded-lg" />
        </div>

        {/* Article content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.contenu }} />

        {/* Share buttons */}
        <div className="border-t border-b border-gray-200 py-6 my-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-medium">Partagez cet article</p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <img
                  src="/placeholder.svg?height=80&width=120"
                  alt="Article similaire"
                  className="w-24 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium mb-1 line-clamp-2">
                    <Link href="#" className="hover:text-blue-600">
                      Titre de l'article similaire {i}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">12 février 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Prêt à trouver la carte carburant idéale ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Utilisez notre comparateur pour découvrir les offres les mieux adaptées à vos besoins spécifiques.
            </p>
            <Link href="/comparateur">
              <Button size="lg">Comparer les cartes carburant</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

