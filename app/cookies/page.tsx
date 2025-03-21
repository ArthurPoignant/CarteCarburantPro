import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Politique de Cookies | Comparateur de Carte Carburant",
  description: "Découvrez notre politique de cookies et comment nous protégeons vos données sur lescartescarburant.fr",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Politique de Cookies</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr utilise des cookies pour améliorer l'expérience utilisateur et fournir des services adaptés aux besoins des visiteurs. Cette politique explique comment et pourquoi nous utilisons ces technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-gray-600">
              Un cookie est un fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez un site web. Il permet de reconnaître un utilisateur et d'améliorer son expérience de navigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Quels types de cookies utilisons-nous ?</h2>
            <p className="text-gray-600 mb-4">Nous utilisons les catégories suivantes de cookies :</p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Cookies strictement nécessaires</p>
                    <p className="text-gray-600">Indispensables au bon fonctionnement du site.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Cookies de performance</p>
                    <p className="text-gray-600">Permettent d'analyser l'utilisation du site afin d'améliorer son contenu et son ergonomie.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Cookies fonctionnels</p>
                    <p className="text-gray-600">Permettent de mémoriser vos préférences de navigation.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Cookies publicitaires et de suivi</p>
                    <p className="text-gray-600">Utilisés pour proposer des contenus et publicités personnalisés.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Gestion des cookies</h2>
            <p className="text-gray-600 mb-4">
              Lors de votre première visite sur lescartescarburant.fr, un bandeau d'information vous informe de l'utilisation des cookies et vous permet d'accepter ou de refuser leur dépôt. Vous pouvez également modifier vos préférences à tout moment via les paramètres de votre navigateur.
            </p>
            <Card>
              <CardContent className="pt-6">
                <p className="font-semibold mb-4">Paramétrage des cookies dans votre navigateur :</p>
                <ul className="space-y-2 text-blue-600">
                  <li><a href="https://support.google.com/chrome/answer/95647" className="hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" className="hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" className="hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="hover:underline">Microsoft Edge</a></li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Durée de conservation des cookies</h2>
            <p className="text-gray-600">
              Les cookies sont stockés pour une durée maximale de 13 mois, conformément à la réglementation en vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Protection des données personnelles</h2>
            <p className="text-gray-600">
              Les informations collectées via les cookies sont traitées conformément à notre Politique de Confidentialité. Vous pouvez exercer vos droits d'accès, de rectification et de suppression en envoyant un email à contact@lescartescarburant.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
            <p className="text-gray-600">
              Pour toute question relative à notre politique de cookies, vous pouvez nous contacter à contact@lescartescarburant.fr.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            Dernière mise à jour : 01/03/2025
          </p>
        </div>
      </div>
    </div>
  )
}