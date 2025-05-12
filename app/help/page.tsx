import Image from "next/image"
import { ArrowRight, Search, HelpCircle, BookOpen, MessageSquare, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function HelpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/help-hero.jpg"
              alt="Help and support"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Help & Support</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Find answers to your questions and learn how to make the most of Own Your Reality
            </p>

            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for help articles..."
                  className="bg-zinc-900/80 border-zinc-800 pl-10 h-12 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How Can We Help?</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Browse our help categories to find the information you need
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-primary/20 p-3 w-16 h-16 flex items-center justify-center">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Learn the basics of using Own Your Reality</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zinc-300">
                    New to the platform? Find guides on setting up your account, navigating the interface, and
                    understanding key features.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="link" className="text-primary">
                    View Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-primary/20 p-3 w-16 h-16 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Artist Resources</CardTitle>
                  <CardDescription>Resources for artists on the platform</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zinc-300">
                    Learn how to upload music, create NFTs, design fashion collections, and launch fan investment
                    campaigns.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="link" className="text-primary">
                    View Resources <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-primary/20 p-3 w-16 h-16 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Fan Support</CardTitle>
                  <CardDescription>Help for fans using the platform</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zinc-300">
                    Find information on discovering artists, purchasing NFTs, buying merchandise, and investing in your
                    favorite creators.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="link" className="text-primary">
                    View Support <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 hover:border-primary/50 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 rounded-full bg-primary/20 p-3 w-16 h-16 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>Technical issues and troubleshooting</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zinc-300">
                    Get help with technical issues, including account access, payment problems, and platform
                    functionality.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="link" className="text-primary">
                    View Support <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Popular Help Articles</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Quick answers to our most frequently asked questions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "How to Create Your First NFT",
                  category: "Artist Resources",
                  excerpt:
                    "A step-by-step guide to creating and minting your first NFT on the Own Your Reality platform.",
                },
                {
                  title: "Setting Up Your Artist Profile",
                  category: "Getting Started",
                  excerpt:
                    "Learn how to set up your artist profile to attract fans and showcase your work effectively.",
                },
                {
                  title: "Understanding Fan Investment",
                  category: "Artist Resources",
                  excerpt:
                    "A comprehensive guide to our fan investment program and how it can help fund your creative projects.",
                },
                {
                  title: "How to Purchase NFTs",
                  category: "Fan Support",
                  excerpt: "A guide for fans on how to purchase and collect NFTs from their favorite artists.",
                },
                {
                  title: "Royalty Tracking and Payments",
                  category: "Artist Resources",
                  excerpt:
                    "Learn how royalties are tracked and distributed on the platform, including payment schedules.",
                },
                {
                  title: "Wallet Setup and Security",
                  category: "Technical Support",
                  excerpt: "How to set up and secure your crypto wallet for transactions on the platform.",
                },
              ].map((article, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{article.title}</CardTitle>
                    </div>
                    <CardDescription>{article.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="px-0 text-primary">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90">View All Help Articles</Button>
            </div>
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Video Tutorials</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">Visual guides to help you navigate the platform</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Platform Overview",
                  duration: "5:32",
                  image: "/images/tutorial-1.jpg",
                },
                {
                  title: "Creating Your First NFT",
                  duration: "8:45",
                  image: "/images/tutorial-2.jpg",
                },
                {
                  title: "Setting Up Fan Investment",
                  duration: "12:18",
                  image: "/images/tutorial-3.jpg",
                },
              ].map((video, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <div className="aspect-video relative">
                    <Image
                      src={video.image || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="bg-primary hover:bg-primary/90">Watch Now</Button>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="text-lg font-bold">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90">View All Tutorials</Button>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Still Need Help?</h2>
                <p className="mb-6 text-zinc-300">
                  If you couldn't find the answer you were looking for, our support team is here to help. Reach out to
                  us and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                    <span>support@ownyourreality.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="mr-3 h-5 w-5 text-primary" />
                    <span>Live chat available 24/7 in the app</span>
                  </div>
                </div>
                <Button className="mt-8 bg-primary hover:bg-primary/90">Contact Support</Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/images/support-team.jpg" alt="Our support team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
