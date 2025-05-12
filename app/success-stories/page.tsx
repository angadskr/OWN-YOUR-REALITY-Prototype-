import Image from "next/image"
import { Award, TrendingUp, Users, DollarSign, Disc3, Shirt } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/success-stories-hero.jpg"
              alt="Artist Success Stories"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Artist Journeys</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Success Stories</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Discover how independent artists have built powerful brands and sustainable careers while maintaining 100%
              ownership of their work.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button className="bg-primary hover:bg-primary/90">Browse Stories</Button>
              <Button variant="outline">Share Your Story</Button>
            </div>
          </div>
        </section>

        {/* Featured Success Stories */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Featured Success Stories</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Artists who have redefined success on their own terms
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Vikram Mehta",
                  image: "/images/success-story-4.jpg",
                  genre: "Hip Hop",
                  quote: "I went from recording in my bedroom to selling out venues while owning all my masters.",
                  achievements: [
                    "100M+ streams across platforms",
                    "Sold out 15-city tour",
                    "Built fashion brand worth ₹2.5 crore",
                  ],
                },
                {
                  name: "Zara Chen",
                  image: "/images/success-story-5.jpg",
                  genre: "Electronic",
                  quote: "Own Your Reality helped me turn my music into a multi-faceted brand that resonates globally.",
                  achievements: [
                    "NFT collection sold for ₹85 lakh",
                    "Licensing deals with major brands",
                    "Built community of 250K superfans",
                  ],
                },
                {
                  name: "Arjun Sharma",
                  image: "/images/success-story-6.jpg",
                  genre: "Indie Rock",
                  quote:
                    "I've built a sustainable career without compromising my artistic vision or giving up my rights.",
                  achievements: [
                    "Crowdfunded album raised ₹12 lakh",
                    "Developed subscription model with 5K members",
                    "Launched successful merchandise line",
                  ],
                },
              ].map((story, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={story.image || "/placeholder.svg?height=400&width=400"}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{story.name}</CardTitle>
                    <CardDescription>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">{story.genre}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 italic mb-4">"{story.quote}"</p>
                    <div className="space-y-2">
                      {story.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <Award className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-zinc-400">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">Read Full Story</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Building Strategies */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Brand Building Strategies</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Learn how successful artists built their personal brands
              </p>
            </div>

            <Tabs defaultValue="community" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1 flex flex-wrap justify-center">
                <TabsTrigger value="community">Community Building</TabsTrigger>
                <TabsTrigger value="multimedia">Multimedia Approach</TabsTrigger>
                <TabsTrigger value="direct">Direct-to-Fan Model</TabsTrigger>
                <TabsTrigger value="collaborations">Strategic Collaborations</TabsTrigger>
              </TabsList>

              <TabsContent value="community" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/community-building.jpg"
                      alt="Community Building"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Community Building</h3>
                    <p className="mb-4 text-zinc-300">
                      Successful artists know that building a dedicated community is more valuable than chasing viral
                      moments. Here's how they do it:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Exclusive Access</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "I created a private Discord server where my most dedicated fans get early access to music and
                          direct communication with me." - Zara Chen
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Co-Creation</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "I involve my community in creative decisions, from album artwork to merch designs. It creates
                          incredible loyalty." - Vikram Mehta
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Consistent Engagement</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "Weekly livestreams keep my community engaged even when I'm not releasing new music." - Arjun
                          Sharma
                        </p>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Learn Community Building Strategies</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="multimedia" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Multimedia Approach</h3>
                    <p className="mb-4 text-zinc-300">
                      The most successful artists extend their brand beyond music into multiple creative channels:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Disc3 className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Visual Storytelling</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "I treat every music video as a short film that expands my artistic universe." - Vikram Mehta
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Shirt className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Fashion & Merchandise</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "My clothing line is an extension of my music - it tells the same story in a different
                          medium." - Zara Chen
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Disc3 className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Digital Collectibles</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "NFTs allowed me to create immersive digital experiences that complement my music." - Arjun
                          Sharma
                        </p>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Explore Multimedia Strategies</Button>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/multimedia-approach.jpg"
                      alt="Multimedia Approach"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="direct" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image src="/images/direct-to-fan.jpg" alt="Direct-to-Fan Model" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Direct-to-Fan Model</h3>
                    <p className="mb-4 text-zinc-300">
                      Cutting out middlemen and building direct relationships with fans has transformed these artists'
                      careers:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Subscription Models</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "My subscription tier generates more revenue than streaming ever did, while creating deeper
                          connections." - Arjun Sharma
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Crowdfunding</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "Fans funded my album and became investors in my career - it changed everything." - Vikram
                          Mehta
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Limited Editions</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "Selling limited edition physical products directly to fans creates urgency and higher
                          margins." - Zara Chen
                        </p>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Learn Direct-to-Fan Strategies</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="collaborations" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Strategic Collaborations</h3>
                    <p className="mb-4 text-zinc-300">
                      Smart partnerships have helped these artists expand their reach while maintaining their
                      independence:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Users className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Cross-Genre Collaborations</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "Working with artists in different genres exposed me to entirely new audiences." - Vikram
                          Mehta
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Shirt className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Brand Partnerships</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "I partner with brands that align with my values, creating win-win relationships." - Zara Chen
                        </p>
                      </li>
                      <li className="bg-zinc-900 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                          <h4 className="font-medium">Creator Collaborations</h4>
                        </div>
                        <p className="text-sm text-zinc-400">
                          "Working with digital creators in other mediums helped me reach new audiences authentically."
                          - Arjun Sharma
                        </p>
                      </li>
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Explore Collaboration Strategies</Button>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                      src="/images/strategic-collaborations.jpg"
                      alt="Strategic Collaborations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Success Metrics</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                How our artists measure success beyond traditional metrics
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Financial Independence",
                  icon: <DollarSign className="h-10 w-10 text-primary" />,
                  description: "Artists earning sustainable income while maintaining 100% ownership",
                  stat: "85%",
                  detail: "of our artists are financially independent through their art",
                },
                {
                  title: "Brand Value Growth",
                  icon: <TrendingUp className="h-10 w-10 text-primary" />,
                  description: "Building personal brands that extend beyond music",
                  stat: "3.5x",
                  detail: "average brand value growth in first year",
                },
                {
                  title: "Community Engagement",
                  icon: <Users className="h-10 w-10 text-primary" />,
                  description: "Building dedicated fan communities that provide sustainable support",
                  stat: "12K",
                  detail: "average superfan community size",
                },
                {
                  title: "Creative Freedom",
                  icon: <Award className="h-10 w-10 text-primary" />,
                  description: "Maintaining artistic integrity and creative control",
                  stat: "100%",
                  detail: "creative control retained by our artists",
                },
              ].map((metric, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{metric.icon}</div>
                    <CardTitle>{metric.title}</CardTitle>
                    <CardDescription className="text-zinc-400">{metric.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-1">{metric.stat}</div>
                    <p className="text-sm text-zinc-400">{metric.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Share Your Success Story</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Inspire other artists by sharing how you've built your brand and career on your own terms.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Submit Your Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Read More Stories
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
