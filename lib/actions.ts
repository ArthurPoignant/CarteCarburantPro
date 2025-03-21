"use server"

import { z } from "zod"
import { prisma } from "@/lib/db"
import { Resend } from "resend"

// Schéma de validation pour le formulaire de contact
const contactFormSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  entreprise: z.string().optional(),
  telephone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})

// Type pour les données du formulaire de contact
type ContactFormData = z.infer<typeof contactFormSchema>

// Action pour soumettre le formulaire de contact
export async function submitContactForm(formData: ContactFormData) {
  try {
    // Valider les données du formulaire
    const validatedData = contactFormSchema.parse(formData)

    // Enregistrer dans la base de données
    const submission = await prisma.contactSubmission.create({
      data: {
        nom: validatedData.nom,
        email: validatedData.email,
        entreprise: validatedData.entreprise || "",
        telephone: validatedData.telephone || "",
        message: validatedData.message,
      },
    })

    // Envoyer un email de confirmation
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "noreply@cartecarburantpro.fr",
        to: validatedData.email,
        subject: "Confirmation de votre demande - CarteCarburantPro",
        html: `
          <h1>Merci pour votre message, ${validatedData.nom} !</h1>
          <p>Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>
          <p>Votre message :</p>
          <blockquote>${validatedData.message}</blockquote>
          <p>L'équipe CarteCarburantPro</p>
        `,
      })
    }

    return { success: true, id: submission.id }
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire:", error)
    return { success: false, error: "Une erreur est survenue lors de la soumission du formulaire." }
  }
}

// Schéma de validation pour le comparateur
const comparateurSchema = z.object({
  typeEntreprise: z.string(),
  nombreVehicules: z.string(),
  consommationMensuelle: z.string(),
  paysUtilisation: z.string(),
  typeCarburant: z.string(),
  avantages: z.array(z.string()).optional(),
  email: z.string().email().optional(),
})

// Type pour les données du comparateur
type ComparateurData = z.infer<typeof comparateurSchema>

// Action pour soumettre le formulaire du comparateur
export async function submitComparateurForm(formData: ComparateurData) {
  try {
    // Valider les données du formulaire
    const validatedData = comparateurSchema.parse(formData)

    // Enregistrer dans la base de données
    const submission = await prisma.comparateurSubmission.create({
      data: {
        typeEntreprise: validatedData.typeEntreprise,
        nombreVehicules: validatedData.nombreVehicules,
        consommationMensuelle: validatedData.consommationMensuelle,
        paysUtilisation: validatedData.paysUtilisation,
        typeCarburant: validatedData.typeCarburant,
        avantages: validatedData.avantages || [],
        email: validatedData.email || "",
      },
    })

    // Envoyer un email de confirmation si l'email est fourni
    if (validatedData.email && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: "noreply@cartecarburantpro.fr",
        to: validatedData.email,
        subject: "Résultats de votre comparaison - CarteCarburantPro",
        html: `
          <h1>Voici les résultats de votre comparaison</h1>
          <p>Merci d'avoir utilisé notre comparateur de cartes carburant.</p>
          <p>Vous pouvez consulter les résultats détaillés en cliquant sur le lien ci-dessous :</p>
          <p><a href="https://cartecarburantpro.fr/resultats/${submission.id}">Voir mes résultats</a></p>
          <p>L'équipe CarteCarburantPro</p>
        `,
      })
    }

    return { success: true, id: submission.id }
  } catch (error) {
    console.error("Erreur lors de la soumission du comparateur:", error)
    return { success: false, error: "Une erreur est survenue lors de la soumission du formulaire." }
  }
}

