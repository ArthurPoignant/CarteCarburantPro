import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Politique de Confidentialité | Comparateur de Carte Carburant",
  description: "Découvrez comment nous protégeons vos données personnelles sur lescartescarburant.fr",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr attache une grande importance à la protection des données personnelles de ses utilisateurs. Cette politique vise à vous informer sur la manière dont nous collectons, utilisons et protégeons vos données conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Responsable du traitement des données</h2>
            <p className="text-gray-600">
              Le responsable du traitement des données personnelles est lescartescarburant.fr. Pour toute question relative à la protection de vos données, vous pouvez nous contacter à contact@lescartescarburant.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Données collectées</h2>
            <p className="text-gray-600 mb-4">Nous collectons différentes catégories de données :</p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Données d'identification</p>
                    <p className="text-gray-600">Nom, prénom, email, téléphone.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Données de navigation</p>
                    <p className="text-gray-600">Adresse IP, cookies, préférences utilisateur.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Données professionnelles</p>
                    <p className="text-gray-600">Entreprise, secteur d'activité.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Finalités du traitement</h2>
            <p className="text-gray-600 mb-4">Les données collectées sont utilisées pour :</p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2 list-disc pl-4">
                  <li>Fournir et améliorer nos services de comparaison de cartes carburant.</li>
                  <li>Répondre aux demandes d'information et de contact.</li>
                  <li>Améliorer l'expérience utilisateur sur notre site.</li>
                  <li>Respecter nos obligations légales et réglementaires.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Partage des données</h2>
            <p className="text-gray-600">
              Vos données peuvent être transmises à nos partenaires fournisseurs de cartes carburant dans le cadre de votre demande de comparaison. Nous ne vendons ni ne louons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Sécurité des données</h2>
            <p className="text-gray-600">
              Nous mettons en place des mesures techniques et organisationnelles afin d'assurer la protection de vos données contre tout accès non autorisé, perte ou altération.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Durée de conservation</h2>
            <p className="text-gray-600 mb-4">Les données personnelles sont conservées pour une durée conforme à la réglementation en vigueur :</p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Données de contact</p>
                    <p className="text-gray-600">3 ans après le dernier échange.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Données de navigation</p>
                    <p className="text-gray-600">13 mois.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
            <p className="text-gray-600 mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Droit d'accès</p>
                    <p className="text-gray-600">Consulter les données personnelles vous concernant.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Droit de rectification</p>
                    <p className="text-gray-600">Modifier ou mettre à jour vos données.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Droit à l'effacement</p>
                    <p className="text-gray-600">Demander la suppression de vos données.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Droit d'opposition</p>
                    <p className="text-gray-600">Refuser l'utilisation de vos données pour certaines finalités.</p>
                  </li>
                  <li>
                    <p className="font-semibold">Droit à la portabilité</p>
                    <p className="text-gray-600">Recevoir vos données sous un format réutilisable.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <p className="text-gray-600 mt-4">
              Pour exercer vos droits, contactez-nous à contact@lescartescarburant.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cookies et traceurs</h2>
            <p className="text-gray-600">
              Pour plus d'informations sur l'utilisation des cookies, consultez notre Politique de Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Modifications de la politique de confidentialité</h2>
            <p className="text-gray-600">
              Nous nous réservons le droit de modifier cette politique afin de garantir sa conformité avec la législation en vigueur. Toute modification sera publiée sur cette page.
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