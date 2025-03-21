import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

// Types pour les témoignages
type Testimonial = {
  id: number
  name: string
  company: string
  position: string
  avatar: string
  rating: number
  text: string
}

// Données fictives pour les témoignages
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophie Martin",
    company: "Transport Express",
    position: "Directrice Logistique",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "Grâce au comparateur, nous avons trouvé une carte carburant qui nous fait économiser plus de 2000€ par mois sur notre flotte de 35 véhicules. Le processus était simple et les recommandations parfaitement adaptées à nos besoins.",
  },
  {
    id: 2,
    name: "Thomas Dubois",
    company: "Artisan Plombier",
    position: "Auto-entrepreneur",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    text: "En tant qu'artisan, je cherchais une solution simple pour gérer mes dépenses de carburant. Le comparateur m'a permis de trouver une carte sans frais mensuels avec des remises intéressantes, même pour un petit volume.",
  },
  {
    id: 3,
    name: "Émilie Leroy",
    company: "Groupe Logistique Nationale",
    position: "Responsable Flotte",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    text: "La gestion de notre flotte de 120 véhicules est devenue beaucoup plus simple depuis que nous avons changé de carte carburant. Le comparateur nous a aidés à identifier la solution la plus adaptée à notre réseau national.",
  },
]

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="h-full">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              <Avatar className="h-10 w-10 mr-4">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>

            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

