import { CardFooter } from "@/components/ui/card"
;('"use client')

import { Check, Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PremiumBenefits() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Unlock Exclusive Benefits</h2>
        <p className="text-zinc-400">Enjoy a range of perks and exclusive content as a premium subscriber</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            id: 1,
            title: "Exclusive Content",
            description: "Access unreleased tracks, behind-the-scenes footage, and more.",
            icon: <Star className="h-6 w-6 text-primary" />,
          },
          {
            id: 2,
            title: "Early Access",
            description: "Get new releases and announcements before anyone else.",
            icon: <Check className="h-6 w-6 text-primary" />,
          },
          {
            id: 3,
            title: "Virtual Meet & Greets",
            description: "Interact with your favorite artists in live virtual events.",
            icon: <Users className="h-6 w-6 text-primary" />,
          },
          {
            id: 4,
            title: "Merchandise Discounts",
            description: "Enjoy exclusive discounts on merchandise and collectibles.",
            icon: <ShoppingBag className="h-6 w-6 text-primary" />,
          },
          {
            id: 5,
            title: "Ad-Free Experience",
            description: "Listen to music and watch videos without any interruptions.",
            icon: <Music className="h-6 w-6 text-primary" />,
          },
          {
            id: 6,
            title: "Community Access",
            description: "Join a private community of dedicated fans.",
            icon: <Users className="h-6 w-6 text-primary" />,
          },
        ].map((benefit) => (
          <Card key={benefit.id} className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <div className="mb-4">{benefit.icon}</div>
              <CardTitle>{benefit.title}</CardTitle>
              <CardDescription>{benefit.description}</CardDescription>
            </CardHeader>
            <CardContent>{/* Additional content can be added here if needed */}</CardContent>
            <CardFooter>{/* Additional actions can be added here if needed */}</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
\
"
