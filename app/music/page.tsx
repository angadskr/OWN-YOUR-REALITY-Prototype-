import Image from "next/image"
import Link from "next/link"
import { Search, Play, Disc3, Clock, ArrowRight, Heart, MoreHorizontal, Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MusicPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/music-hero.jpg"
              alt="Music Platform"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Discover Music</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Stream and support independent artists who own 100% of their masters
            </p>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for artists, songs, or albums..."
                  className="bg-zinc-900/80 border-zinc-800 pl-10 h-12 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Artists */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Artists</h2>
                <p className="mt-2 text-zinc-400">Discover creators who own their reality</p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All Artists <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Arjun Sharma",
                  genre: "Electronic",
                  image: "/images/artist-1.jpg",
                  followers: "245K",
                },
                {
                  name: "Priya Patel",
                  genre: "R&B / Soul",
                  image: "/images/artist-2.jpg",
                  followers: "189K",
                },
                {
                  name: "Vikram Mehta",
                  genre: "Hip Hop",
                  image: "/images/artist-3.jpg",
                  followers: "312K",
                },
                {
                  name: "Ananya Desai",
                  genre: "Indie Rock",
                  image: "/images/artist-4.jpg",
                  followers: "176K",
                },
              ].map((artist, index) => (
                <Link href={`/artists/${index}`} key={index}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden rounded-full mb-4">
                      <Image
                        src={artist.image || "/placeholder.svg?height=300&width=300"}
                        alt={artist.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold">{artist.name}</h3>
                      <p className="text-zinc-400">{artist.genre}</p>
                      <p className="text-sm text-primary mt-1">{artist.followers} followers</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline">
                View All Artists <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* New Releases */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">New Releases</h2>

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList className="bg-zinc-900 p-1">
                    <TabsTrigger value="all">All Genres</TabsTrigger>
                    <TabsTrigger value="electronic">Electronic</TabsTrigger>
                    <TabsTrigger value="hiphop">Hip Hop</TabsTrigger>
                    <TabsTrigger value="rnb">R&B</TabsTrigger>
                    <TabsTrigger value="rock">Rock</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm">
                    <option>Latest Releases</option>
                    <option>Trending</option>
                    <option>Most Played</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  title: "Digital Dreams",
                  artist: "Arjun Sharma",
                  type: "Album",
                  tracks: 12,
                  image: "/images/album-1.jpg",
                },
                {
                  title: "Midnight Melodies",
                  artist: "Priya Patel",
                  type: "EP",
                  tracks: 6,
                  image: "/images/album-2.jpg",
                },
                {
                  title: "Urban Echoes",
                  artist: "Vikram Mehta",
                  type: "Album",
                  tracks: 10,
                  image: "/images/album-3.jpg",
                },
                {
                  title: "Sonic Revolution",
                  artist: "Ananya Desai",
                  type: "Album",
                  tracks: 14,
                  image: "/images/album-4.jpg",
                },
                {
                  title: "Neon Nights",
                  artist: "Arjun Sharma",
                  type: "Single",
                  tracks: 1,
                  image: "/images/track-1.jpg",
                },
                {
                  title: "Soul Searching",
                  artist: "Priya Patel",
                  type: "EP",
                  tracks: 5,
                  image: "/images/track-2.jpg",
                },
                {
                  title: "Rhythm & Flow",
                  artist: "Vikram Mehta",
                  type: "Single",
                  tracks: 1,
                  image: "/images/track-3.jpg",
                },
                {
                  title: "Electric Vibes",
                  artist: "Ananya Desai",
                  type: "Single",
                  tracks: 1,
                  image: "/images/track-4.jpg",
                },
              ].map((release, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-square group">
                    <Image
                      src={release.image || "/placeholder.svg?height=400&width=400"}
                      alt={release.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-14 w-14">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 hover:bg-primary">{release.type}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{release.title}</CardTitle>
                    <p className="text-sm text-zinc-400">by {release.artist}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-zinc-400">
                        <Disc3 className="h-4 w-4 mr-1" />
                        <span>
                          {release.tracks} {release.tracks === 1 ? "track" : "tracks"}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-zinc-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>
                          {Math.floor(Math.random() * 60) + 10}:
                          {Math.floor(Math.random() * 60)
                            .toString()
                            .padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline">
                      <Headphones className="mr-2 h-4 w-4" /> Listen
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90">Load More</Button>
            </div>
          </div>
        </section>

        {/* Genres */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Explore Genres</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Discover music across different styles and sounds
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Hip Hop",
                  image: "/images/genre-hiphop.jpg",
                  artists: 124,
                },
                {
                  name: "Electronic",
                  image: "/images/genre-electronic.jpg",
                  artists: 98,
                },
                {
                  name: "R&B / Soul",
                  image: "/images/genre-rnb.jpg",
                  artists: 87,
                },
                {
                  name: "Rock",
                  image: "/images/genre-rock.jpg",
                  artists: 112,
                },
              ].map((genre, index) => (
                <Link href={`/music/genre/${genre.name.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                  <div className="relative h-40 rounded-xl overflow-hidden group">
                    <Image
                      src={genre.image || "/placeholder.svg?height=200&width=400"}
                      alt={genre.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold">{genre.name}</h3>
                      <p className="text-sm text-zinc-300">{genre.artists} artists</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ownership Model */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">100% Artist Ownership</h2>
                <p className="mb-6 text-zinc-300">
                  Unlike traditional streaming platforms, Own Your Reality ensures that artists maintain 100% ownership
                  of their masters and intellectual property.
                </p>
                <p className="mb-6 text-zinc-300">
                  When you stream or purchase music on our platform, you're directly supporting artists and helping them
                  build sustainable careers on their own terms.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button className="bg-primary hover:bg-primary/90">Learn More About Our Model</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image src="/images/ownership-model.jpg" alt="Artist Ownership Model" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Discover New Music?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join our platform to stream music from independent artists who own 100% of their work.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Start Listening
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join as an Artist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
