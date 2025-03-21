import { NextResponse } from "next/server"
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

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Valider les données du formulaire
    const validatedData = contactFormSchema.parse(body)

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

    return NextResponse.json({ success: true, id: submission.id })
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire:", error)
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue lors de la soumission du formulaire." },
      { status: 500 },
    )
  }
}

