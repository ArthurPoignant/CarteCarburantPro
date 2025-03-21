"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalculateurEconomies() {
  const [vehicules, setVehicules] = useState("10")
  const [kmMensuel, setKmMensuel] = useState("2000")
  const [consommation, setConsommation] = useState("7")
  const [prixCarburant, setPrixCarburant] = useState("1.85")
  const [typeCarburant, setTypeCarburant] = useState("diesel")
  const [showResults, setShowResults] = useState(false)

  // Calcul des économies
  const calculerEconomies = () => {
    // Conversion des valeurs en nombres
    const nbVehicules = Number.parseInt(vehicules)
    const kmParMois = Number.parseInt(kmMensuel)
    const consoAux100 = Number.parseFloat(consommation)
    const prixLitre = Number.parseFloat(prixCarburant)

    // Calcul de la consommation mensuelle totale en litres
    const consommationMensuelle = ((kmParMois * consoAux100) / 100) * nbVehicules

    // Calcul des dépenses mensuelles actuelles
    const depensesActuelles = consommationMensuelle * prixLitre

    // Calcul des économies avec différentes remises
    const economiesBasic = depensesActuelles * 0.02 // 2% d'économie
    const economiesPremium = depensesActuelles * 0.04 // 4% d'économie
    const economiesElite = depensesActuelles * 0.06 // 6% d'économie

    return {
      consommationMensuelle: Math.round(consommationMensuelle),
      depensesActuelles: Math.round(depensesActuelles),
      economiesBasic: Math.round(economiesBasic),
      economiesPremium: Math.round(economiesPremium),
      economiesElite: Math.round(economiesElite),
      economiesAnnuellesBasic: Math.round(economiesBasic * 12),
      economiesAnnuellesPremium: Math.round(economiesPremium * 12),
      economiesAnnuellesElite: Math.round(economiesElite * 12),
    }
  }

  const resultats = calculerEconomies()

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <Tabs defaultValue="simple" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simple">Calcul simplifié</TabsTrigger>
            <TabsTrigger value="avance">Calcul avancé</TabsTrigger>
          </TabsList>

          <TabsContent value="simple" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="vehicules">Nombre de véhicules</Label>
                <Input
                  id="vehicules"
                  type="number"
                  value={vehicules}
                  onChange={(e) => setVehicules(e.target.value)}
                  min="1"
                />
              </div>

              <div>
                <Label htmlFor="typeCarburant">Type de carburant</Label>
                <Select value={typeCarburant} onValueChange={setTypeCarburant}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez le type de carburant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="essence">Essence</SelectItem>
                    <SelectItem value="mixte">Mixte</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="kmMensuel">Kilométrage mensuel par véhicule</Label>
                <Input
                  id="kmMensuel"
                  type="number"
                  value={kmMensuel}
                  onChange={(e) => setKmMensuel(e.target.value)}
                  min="1"
                />
              </div>

              <div>
                <Label htmlFor="consommation">Consommation moyenne (L/100km)</Label>
                <Input
                  id="consommation"
                  type="number"
                  value={consommation}
                  onChange={(e) => setConsommation(e.target.value)}
                  min="0.1"
                  step="0.1"
                />
              </div>
            </div>

            <Button className="w-full" onClick={() => setShowResults(true)}>
              Calculer mes économies
            </Button>

            {showResults && (
              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Consommation mensuelle estimée</p>
                  <p className="text-2xl font-bold">{resultats.consommationMensuelle} litres</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Dépenses mensuelles actuelles</p>
                  <p className="text-2xl font-bold">{resultats.depensesActuelles} €</p>
                </div>

                <h3 className="text-xl font-bold mt-6">Économies potentielles</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">Carte Basic</h4>
                      <p className="text-3xl font-bold text-green-600">{resultats.economiesBasic} €</p>
                      <p className="text-sm text-gray-500">d'économies par mois</p>
                      <p className="mt-2 font-medium">{resultats.economiesAnnuellesBasic} € / an</p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-600">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2 text-blue-600">Carte Premium</h4>
                      <p className="text-3xl font-bold text-green-600">{resultats.economiesPremium} €</p>
                      <p className="text-sm text-gray-500">d'économies par mois</p>
                      <p className="mt-2 font-medium">{resultats.economiesAnnuellesPremium} € / an</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-lg mb-2">Carte Elite</h4>
                      <p className="text-3xl font-bold text-green-600">{resultats.economiesElite} €</p>
                      <p className="text-sm text-gray-500">d'économies par mois</p>
                      <p className="mt-2 font-medium">{resultats.economiesAnnuellesElite} € / an</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-6">
                  <Button>Comparer les cartes adaptées à mon profil</Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="avance">
            <div className="p-8 text-center">
              <p className="text-gray-500">Le calculateur avancé sera bientôt disponible.</p>
              <p className="text-gray-500">
                Il vous permettra de personnaliser davantage vos paramètres et d'obtenir une estimation plus précise.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

