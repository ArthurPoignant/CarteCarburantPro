import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Conditions Générales de Vente | Comparateur de Carte Carburant",
  description: "Découvrez nos conditions générales de vente sur lescartescarburant.fr",
}

export default function CGVPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente (CGV)</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
            <p className="text-gray-600">
              Les présentes Conditions Générales de Vente (CGV) régissent l'utilisation du site internet lescartescarburant.fr ainsi que les services proposés. Toute utilisation du site implique l'acceptation pleine et entière des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Identité de l'éditeur</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr est édité par la société lescartescarburant.fr<br />
              Contact : contact@lescartescarburant.fr
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Services proposés</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr propose des services de comparaison et d'informations sur les cartes carburant disponibles sur le marché français et européen. Il permet également aux utilisateurs de soumettre des demandes de contact aux fournisseurs partenaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Accès au site et utilisation des services</h2>
            <p className="text-gray-600">
              L'accès au site est libre et gratuit pour tout utilisateur disposant d'un accès à Internet. Les utilisateurs s'engagent à fournir des informations exactes lors de leur utilisation des services proposés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr met tout en œuvre pour garantir l'exactitude des informations publiées mais ne saurait être tenu responsable d'éventuelles erreurs, omissions ou modifications des offres des fournisseurs partenaires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Protection des données personnelles</h2>
            <p className="text-gray-600">
              Les données personnelles collectées sur lescartescarburant.fr sont traitées conformément à la réglementation en vigueur. L'utilisateur peut exercer ses droits d'accès, de rectification et de suppression en envoyant un email à contact@lescartescarburant.fr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Propriété intellectuelle</h2>
            <p className="text-gray-600">
              Tous les éléments du site lescartescarburant.fr (textes, images, logos, etc.) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, totale ou partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Droit applicable et litiges</h2>
            <p className="text-gray-600">
              Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord, les tribunaux compétents seront ceux de Paris.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Modification des CGV</h2>
            <p className="text-gray-600">
              Le site lescartescarburant.fr se réserve le droit de modifier à tout moment les présentes CGV. Les utilisateurs seront informés des modifications via le site ou par email.
            </p>
          </section>

          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="text-gray-600">
                Pour toute question relative aux CGV, vous pouvez nous contacter à{' '}
                <a href="mailto:contact@lescartescarburant.fr" className="text-blue-600 hover:underline">
                  contact@lescartescarburant.fr
                </a>
              </p>
            </CardContent>
          </Card>

          <p className="text-sm text-gray-500 mt-12">
            Dernière mise à jour : 01/03/2025
          </p>
        </div>
      </div>
    </div>
  )
}