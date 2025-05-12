import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ArrowRight, ShoppingCart, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image src="/images/nft-hero.jpg" alt="NFT Marketplace" fill className="object-cover opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">NFT Marketplace</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Discover, collect, and sell unique digital assets from your favorite artists
            </p>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for NFTs, collections, or artists..."
                  className="bg-zinc-900/80 border-zinc-800 pl-10 h-12 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Collections</h2>
                <p className="mt-2 text-zinc-400">Curated collections from top artists</p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All Collections <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Sonic Dreamscapes",
                  artist: "Ananya Desai",
                  items: 12,
                  image: "/images/nft-collection-1.jpg",
                  price: "₹45,000",
                },
                {
                  title: "Digital Harmonies",
                  artist: "Vikram Mehta",
                  items: 8,
                  image: "/images/nft-collection-2.jpg",
                  price: "₹32,500",
                },
                {
                  title: "Rhythm & Pixels",
                  artist: "Arjun Sharma",
                  items: 15,
                  image: "/images/nft-collection-3.jpg",
                  price: "₹58,000",
                },
              ].map((collection, index) => (
                <Link href={`/marketplace/collection/${index}`} key={index}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                      <Image
                        src={collection.image || "/placeholder.svg?height=300&width=400"}
                        alt={collection.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-primary/90 hover:bg-primary text-white">{collection.items} items</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{collection.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-zinc-400">by {collection.artist}</p>
                      <p className="font-medium">Floor: {collection.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline">
                View All Collections <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* NFT Marketplace */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Explore NFTs</h2>

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList className="bg-zinc-900 p-1">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="art">Art</TabsTrigger>
                    <TabsTrigger value="music">Music</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                    <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm">
                    <option>Recently Listed</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  title: "Ethereal Melodies #42",
                  artist: "Priya Patel",
                  price: "₹12,500",
                  image: "/images/nft-1.jpg",
                },
                {
                  title: "Digital Soundwave",
                  artist: "Vikram Mehta",
                  price: "₹8,750",
                  image: "/images/nft-2.jpg",
                },
                {
                  title: "Cosmic Rhythm",
                  artist: "Ananya Desai",
                  price: "₹15,000",
                  image: "/images/nft-3.jpg",
                },
                {
                  title: "Neon Beats",
                  artist: "Arjun Sharma",
                  price: "₹9,200",
                  image: "/images/nft-4.jpg",
                },
                {
                  title: "Harmonic Pixels",
                  artist: "Priya Patel",
                  price: "₹11,800",
                  image: "/images/nft-5.jpg",
                },
                {
                  title: "Sonic Artifacts",
                  artist: "Vikram Mehta",
                  price: "₹7,500",
                  image: "/images/nft-6.jpg",
                },
                {
                  title: "Melodic Dimensions",
                  artist: "Ananya Desai",
                  price: "₹14,200",
                  image: "/images/nft-1.jpg",
                },
                {
                  title: "Rhythmic Fragments",
                  artist: "Arjun Sharma",
                  price: "₹10,500",
                  image: "/images/nft-2.jpg",
                },
              ].map((nft, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={nft.image || "/placeholder.svg?height=400&width=400"}
                      alt={nft.title}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>
                  <CardHeader>
                    <CardTitle>{nft.title}</CardTitle>
                    <p className="text-sm text-zinc-400">by {nft.artist}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-zinc-400">Current Price</p>
                        <p className="text-lg font-bold">{nft.price}</p>
                      </div>
                      <Badge className="bg-zinc-800 text-zinc-300">{Math.floor(Math.random() * 24) + 1}h left</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      View
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

        {/* How It Works */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                New to NFTs? Here's how to get started on our marketplace
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Set Up Your Wallet",
                  description: "Connect your wallet to our platform to start buying and selling NFTs.",
                },
                {
                  step: "2",
                  title: "Create or Collect",
                  description: "Create your own NFTs or browse the marketplace to collect from artists.",
                },
                {
                  step: "3",
                  title: "Buy & Sell NFTs",
                  description: "Purchase NFTs directly or list your creations for sale on the marketplace.",
                },
                {
                  step: "4",
                  title: "Grow Your Collection",
                  description: "Build your digital collection and watch your investments grow in value.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                  <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Start Your NFT Journey?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join our marketplace today and discover the world of digital ownership and creativity.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Create an NFT
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Marketplace
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
