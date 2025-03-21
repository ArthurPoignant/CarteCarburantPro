import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Contact | Comparateur de Carte Carburant",
  description: "Contactez-nous pour toute question concernant les cartes carburant ou notre service de comparaison.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Vous avez des questions sur les cartes carburant ou notre service de comparaison ? Notre équipe est à votre
          disposition pour vous aider.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Notre adresse</h3>
              <p className="text-gray-600">
                123 Avenue des Champs-Élysées
                <br />
                75008 Paris, France
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Téléphone</h3>
              <p className="text-gray-600">
                +33 (0)1 23 45 67 89
                <br />
                Du lundi au vendredi, 9h-18h
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">
                contact@cartecarburantpro.fr
                <br />
                support@cartecarburantpro.fr
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Envoyez-nous un message</CardTitle>
            <CardDescription>
              Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="md:col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Horaires d'ouverture</CardTitle>
              <CardDescription>Notre équipe est disponible pour vous aider pendant ces horaires.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Lundi - Vendredi</p>
                    <p className="text-gray-600">9h00 - 18h00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Samedi</p>
                    <p className="text-gray-600">10h00 - 16h00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Dimanche</p>
                    <p className="text-gray-600">Fermé</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="font-medium mb-2">Besoin d'une réponse rapide ?</p>
                  <p className="text-gray-600 mb-4">
                    Consultez notre section FAQ pour trouver des réponses aux questions les plus fréquentes.
                  </p>
                  <a href="/faq" className="text-blue-600 hover:text-blue-800 font-medium">
                    Voir la FAQ →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

