"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { submitComparateurForm } from "@/lib/actions"

const formSchema = z.object({
  typeEntreprise: z.string().min(1, "Veuillez sélectionner un type d'entreprise"),
  nombreVehicules: z.string().min(1, "Veuillez indiquer le nombre de véhicules"),
  consommationMensuelle: z.string().min(1, "Veuillez indiquer votre consommation mensuelle"),
  paysUtilisation: z.string().min(1, "Veuillez sélectionner un pays d'utilisation"),
  typeCarburant: z.string().min(1, "Veuillez sélectionner un type de carburant"),
  avantages: z.array(z.string()).optional(),
  email: z.string().email("Veuillez entrer une adresse email valide").optional(),
})

export default function ComparateurForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeEntreprise: "",
      nombreVehicules: "",
      consommationMensuelle: "",
      paysUtilisation: "",
      typeCarburant: "",
      avantages: [],
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const result = await submitComparateurForm(values)

      if (result.success) {
        // Rediriger vers la page des résultats
        router.push(`/resultats/${result.id}`)
      } else {
        setErrorMessage(result.error || "Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      setErrorMessage("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.")
      console.error("Erreur lors de la soumission du formulaire:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="typeEntreprise"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type d'entreprise</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre type d'entreprise" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="tpe">TPE (1-10 salariés)</SelectItem>
                        <SelectItem value="pme">PME (11-250 salariés)</SelectItem>
                        <SelectItem value="eti">ETI (251-5000 salariés)</SelectItem>
                        <SelectItem value="ge">Grande Entreprise (5000+ salariés)</SelectItem>
                        <SelectItem value="autoentrepreneur">Auto-entrepreneur</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nombreVehicules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre de véhicules</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le nombre de véhicules" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-5">1 à 5</SelectItem>
                        <SelectItem value="6-20">6 à 20</SelectItem>
                        <SelectItem value="21-50">21 à 50</SelectItem>
                        <SelectItem value="51-100">51 à 100</SelectItem>
                        <SelectItem value="100+">Plus de 100</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consommationMensuelle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Consommation mensuelle (litres)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez votre consommation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-500">0 à 500 L</SelectItem>
                        <SelectItem value="501-2000">501 à 2000 L</SelectItem>
                        <SelectItem value="2001-5000">2001 à 5000 L</SelectItem>
                        <SelectItem value="5001-10000">5001 à 10000 L</SelectItem>
                        <SelectItem value="10000+">Plus de 10000 L</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paysUtilisation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pays d'utilisation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le pays d'utilisation" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="france">France uniquement</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="international">International</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="typeCarburant"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type de carburant</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type de carburant" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="essence">Essence</SelectItem>
                        <SelectItem value="mixte">Mixte (Diesel et Essence)</SelectItem>
                        <SelectItem value="electrique">Électrique</SelectItem>
                        <SelectItem value="hybride">Hybride</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (optionnel)</FormLabel>
                    <FormControl>
                      <Input placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormLabel>Avantages recherchés</FormLabel>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: "remises", label: "Remises sur le carburant" },
                  { id: "reseau", label: "Large réseau de stations" },
                  { id: "frais", label: "Pas de frais de gestion" },
                  { id: "facture", label: "Facture unique" },
                  { id: "suivi", label: "Suivi des dépenses en ligne" },
                  { id: "services", label: "Services additionnels (lavage, boutique)" },
                ].map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="avantages"
                    render={({ field }) => {
                      return (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                const currentValues = field.value || []
                                return checked
                                  ? field.onChange([...currentValues, item.id])
                                  : field.onChange(currentValues.filter((value) => value !== item.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer">{item.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
            </div>

            {errorMessage && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{errorMessage}</div>}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Recherche en cours...
                </>
              ) : (
                "Comparer les cartes carburant"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

