import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ComparateurForm from "@/components/comparateur-form"
import FeaturedCards from "@/components/featured-cards"
import Testimonials from "@/components/testimonials"
import CalculateurEconomies from "@/components/calculateur-economies"
import Link from "next/link"
import { ArrowRight, BarChart3, Filter, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Trouvez la carte carburant idéale pour votre entreprise
              </h1>
              <p className="text-xl opacity-90">
                Comparez les prix, frais de gestion, avantages et réductions des meilleures cartes carburant du marché.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  <Link href="/comparateur">
                    Obtenir une offre personnalisée
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white bg-blue-700  text-white hover:bg-blue-500">
                  <Link href="/a-propos">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Cartes carburant"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi utiliser notre comparateur ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Comparaison détaillée</h3>
                <p className="text-gray-600">
                  Analysez les prix des carburants, frais de gestion, avantages et réductions de chaque carte.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Filter className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Filtres personnalisés</h3>
                <p className="text-gray-600">
                  Filtrez par type d'entreprise, volume de consommation et pays d'utilisation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Simulation d'économies</h3>
                <p className="text-gray-600">
                  Estimez vos économies potentielles en fonction de votre consommation réelle.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparateur Form */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Comparez les cartes carburant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous pour trouver les meilleures offres adaptées à vos besoins.
            </p>
          </div>
          <ComparateurForm />
        </div>
      </section>

      {/* Featured Cards */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Cartes carburant populaires</h2>
          <Link href="/cartes" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
            Voir toutes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FeaturedCards />
      </section>

      {/* Calculateur d'économies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Calculez vos économies potentielles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimez combien vous pourriez économiser en choisissant la bonne carte carburant.
            </p>
          </div>
          <CalculateurEconomies />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Ce que disent nos utilisateurs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les avis de professionnels qui ont trouvé la carte carburant idéale grâce à notre comparateur.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à optimiser vos dépenses de carburant ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez les milliers d'entreprises qui économisent grâce à notre comparateur de cartes carburant.
          </p>
          <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            Comparer maintenant
          </Button>
        </div>
      </section>
    </div>
  )
}

