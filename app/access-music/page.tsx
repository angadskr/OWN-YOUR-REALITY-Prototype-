import Image from "next/image"
import {
  Music,
  Disc3,
  Download,
  ShoppingBag,
  Headphones,
  Play,
  Heart,
  Share2,
  MoreHorizontal,
  Filter,
  Search,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AccessMusicPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/access-music-hero.jpg"
              alt="Access Music"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Music Marketplace</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Access Music Your Way</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Physical copies, digital downloads, and streaming options that put artists first.
            </p>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for artists, albums, or tracks..."
                  className="bg-zinc-900/80 border-zinc-800 pl-10 h-12 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Access Options */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Choose Your Format</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Multiple ways to own and experience music from independent artists
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/images/physical-copies.jpg" alt="Physical Copies" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Disc3 className="h-5 w-5 mr-2 text-primary" />
                    Physical Copies
                  </CardTitle>
                  <CardDescription>Vinyl, CDs, and limited edition collectibles</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Premium vinyl pressings with artist-designed artwork</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Limited edition box sets with exclusive merchandise</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Signed copies and personalized options available</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Shop Physical Copies
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/images/digital-downloads.jpg" alt="Digital Downloads" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Download className="h-5 w-5 mr-2 text-primary" />
                    Digital Downloads
                  </CardTitle>
                  <CardDescription>High-quality audio files in multiple formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Lossless FLAC and high-bitrate MP3 options</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Exclusive bonus tracks and alternate versions</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Digital booklets and artwork included</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Download className="mr-2 h-4 w-4" /> Browse Digital Albums
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
                <div className="relative aspect-video">
                  <Image src="/images/streaming-options.jpg" alt="Streaming Options" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="h-5 w-5 mr-2 text-primary" />
                    Streaming Options
                  </CardTitle>
                  <CardDescription>Artist-friendly streaming with fair compensation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Higher royalty rates than traditional platforms</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>Direct support options for your favorite artists</span>
                    </li>
                    <li className="flex items-start text-sm text-zinc-300">
                      <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span>High-quality audio streaming up to 24-bit/96kHz</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Headphones className="mr-2 h-4 w-4" /> Start Streaming
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Releases */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Releases</h2>
                <p className="mt-2 text-zinc-400">New and notable music from independent artists</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="hidden md:flex">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
                <Button variant="outline">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1 flex flex-wrap justify-center">
                <TabsTrigger value="all">All Formats</TabsTrigger>
                <TabsTrigger value="vinyl">Vinyl</TabsTrigger>
                <TabsTrigger value="cd">CDs</TabsTrigger>
                <TabsTrigger value="digital">Digital</TabsTrigger>
                <TabsTrigger value="limited">Limited Editions</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Electric Dreams",
                      artist: "Arjun Sharma",
                      image: "/images/album-1.jpg",
                      formats: ["Vinyl", "Digital", "CD"],
                      price: "₹1,499 - ₹2,999",
                    },
                    {
                      title: "Midnight Whispers",
                      artist: "Priya Patel",
                      image: "/images/album-2.jpg",
                      formats: ["Digital", "Limited Edition Vinyl"],
                      price: "₹499 - ₹3,499",
                    },
                    {
                      title: "Urban Flow",
                      artist: "Vikram Mehta",
                      image: "/images/album-3.jpg",
                      formats: ["CD", "Digital", "Cassette"],
                      price: "₹699 - ₹1,299",
                    },
                    {
                      title: "Neon Nights",
                      artist: "Zara Chen",
                      image: "/images/album-4.jpg",
                      formats: ["Vinyl Box Set", "Digital"],
                      price: "₹899 - ₹4,999",
                    },
                  ].map((album, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                      <div className="relative aspect-square group">
                        <Image
                          src={album.image || "/placeholder.svg?height=300&width=300"}
                          alt={album.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-12 w-12">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/images/artist-${index + 1}.jpg`} alt={album.artist} />
                            <AvatarFallback>{album.artist.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{album.artist}</span>
                        </div>
                        <CardTitle>{album.title}</CardTitle>
                        <CardDescription>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {album.formats.map((format, i) => (
                              <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300">
                                {format}
                              </Badge>
                            ))}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{album.price}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">
                          <ShoppingBag className="mr-2 h-4 w-4" /> Shop Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="vinyl" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Electric Dreams",
                      artist: "Arjun Sharma",
                      image: "/images/album-1.jpg",
                      formats: ["180g Vinyl", "Colored Vinyl"],
                      price: "₹1,999 - ₹2,999",
                    },
                    {
                      title: "Midnight Whispers",
                      artist: "Priya Patel",
                      image: "/images/album-2.jpg",
                      formats: ["Limited Edition Vinyl", "Signed"],
                      price: "₹2,499 - ₹3,499",
                    },
                    {
                      title: "Neon Nights",
                      artist: "Zara Chen",
                      image: "/images/album-4.jpg",
                      formats: ["Vinyl Box Set", "Gatefold"],
                      price: "₹3,499 - ₹4,999",
                    },
                    {
                      title: "Soul Searching",
                      artist: "Priya Patel",
                      image: "/images/album-5.jpg",
                      formats: ["Standard Vinyl", "Picture Disc"],
                      price: "₹1,799 - ₹2,299",
                    },
                  ].map((album, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                      <div className="relative aspect-square group">
                        <Image
                          src={album.image || "/placeholder.svg?height=300&width=300"}
                          alt={album.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-12 w-12">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/images/artist-${(index % 4) + 1}.jpg`} alt={album.artist} />
                            <AvatarFallback>{album.artist.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{album.artist}</span>
                        </div>
                        <CardTitle>{album.title}</CardTitle>
                        <CardDescription>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {album.formats.map((format, i) => (
                              <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300">
                                {format}
                              </Badge>
                            ))}
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="font-bold">{album.price}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-5 w-5" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-5 w-5" />
                          </Button>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">
                          <ShoppingBag className="mr-2 h-4 w-4" /> Shop Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would follow the same pattern */}
            </Tabs>
          </div>
        </section>

        {/* Collaborators Section */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Meet the Collaborators</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Discover the songwriters, producers, and creative minds behind the music
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Raj Kumar",
                  role: "Producer",
                  image: "/images/collaborator-1.jpg",
                  bio: "Award-winning producer known for innovative electronic soundscapes and genre-bending production techniques.",
                  credits: ["Electric Dreams", "Urban Flow", "Neon Nights"],
                },
                {
                  name: "Neha Sharma",
                  role: "Songwriter",
                  image: "/images/collaborator-2.jpg",
                  bio: "Lyricist and songwriter with a gift for emotional storytelling and memorable hooks.",
                  credits: ["Midnight Whispers", "Soul Searching", "Electric Dreams"],
                },
                {
                  name: "Karan Patel",
                  role: "Sound Engineer",
                  image: "/images/collaborator-3.jpg",
                  bio: "Mixing and mastering engineer who brings clarity and depth to every project.",
                  credits: ["Urban Flow", "Neon Nights", "Rhythm & Flow"],
                },
                {
                  name: "Aisha Khan",
                  role: "Session Musician",
                  image: "/images/collaborator-4.jpg",
                  bio: "Versatile multi-instrumentalist specializing in strings and traditional Indian instruments.",
                  credits: ["Midnight Whispers", "Soul Searching", "Acoustic Sessions"],
                },
                {
                  name: "Dev Mehta",
                  role: "Beat Producer",
                  image: "/images/collaborator-5.jpg",
                  bio: "Rhythm specialist creating innovative beats that bridge electronic and organic sounds.",
                  credits: ["Urban Flow", "Electric Dreams", "Digital Dreams"],
                },
                {
                  name: "Priyanka Joshi",
                  role: "Vocal Arranger",
                  image: "/images/collaborator-6.jpg",
                  bio: "Vocal producer and arranger known for creating lush harmonies and vocal landscapes.",
                  credits: ["Midnight Whispers", "Neon Nights", "Soul Searching"],
                },
              ].map((collaborator, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
                      <Image
                        src={collaborator.image || "/placeholder.svg?height=200&width=200"}
                        alt={collaborator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-1">{collaborator.name}</h3>
                      <Badge className="mb-3 bg-primary/20 text-primary hover:bg-primary/30">{collaborator.role}</Badge>
                      <p className="text-sm text-zinc-300 mb-3">{collaborator.bio}</p>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Recent Credits:</h4>
                        <div className="flex flex-wrap gap-2">
                          {collaborator.credits.map((credit, i) => (
                            <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300">
                              {credit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artist-First Model */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/images/artist-first-model.jpg" alt="Artist-First Model" fill className="object-cover" />
              </div>
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Fair Compensation</Badge>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Artist-First Model</h2>
                <p className="mb-6 text-zinc-300">
                  Our platform ensures that artists receive fair compensation for their work, with transparent revenue
                  sharing and direct support options.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-2">
                      <Music className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">80% Revenue to Artists</h3>
                      <p className="text-sm text-zinc-400">
                        Artists receive 80% of all sales revenue, significantly higher than industry standards.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-2">
                      <Disc3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">100% Ownership</h3>
                      <p className="text-sm text-zinc-400">
                        Artists maintain complete ownership of their masters and intellectual property.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-2">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Direct Support Options</h3>
                      <p className="text-sm text-zinc-400">
                        Fans can directly support artists through tips, subscriptions, and exclusive purchases.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-primary/90">Learn More About Our Model</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Access Music Your Way?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join our platform to discover, purchase, and stream music that supports artists directly.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
