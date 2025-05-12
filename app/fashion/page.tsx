import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ArrowRight, ShoppingCart, Heart, Shirt, Package, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FashionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fashion-hero.jpg"
              alt="Fashion Store"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Artist Fashion</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Exclusive fashion collections designed by your favorite artists
            </p>
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for clothing, accessories, or artists..."
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
                <p className="mt-2 text-zinc-400">Signature fashion lines from top artists</p>
              </div>
              <Button variant="outline" className="hidden md:flex">
                View All Collections <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Urban Beats Collection",
                  artist: "Arjun Sharma",
                  items: 24,
                  image: "/images/collection-1.jpg",
                },
                {
                  title: "Neon Dreams Apparel",
                  artist: "Priya Patel",
                  items: 18,
                  image: "/images/collection-2.jpg",
                },
                {
                  title: "Melodic Streetwear",
                  artist: "Vikram Mehta",
                  items: 32,
                  image: "/images/fashion-collection-3.jpg",
                },
              ].map((collection, index) => (
                <Link href={`/fashion/collection/${index}`} key={index}>
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
                      <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                        Shop Now
                      </Button>
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

        {/* Fashion Store */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">Shop Fashion</h2>

              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <Tabs defaultValue="all" className="w-full md:w-auto">
                  <TabsList className="bg-zinc-900 p-1">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
                    <TabsTrigger value="hoodies">Hoodies</TabsTrigger>
                    <TabsTrigger value="accessories">Accessories</TabsTrigger>
                    <TabsTrigger value="digital">Digital Wearables</TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <select className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-sm">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[
                {
                  title: "Sonic Wave T-Shirt",
                  artist: "Arjun Sharma",
                  price: "₹1,999",
                  image: "/images/fashion-1.jpg",
                  type: "Physical",
                },
                {
                  title: "Beat Maker Hoodie",
                  artist: "Priya Patel",
                  price: "₹3,499",
                  image: "/images/fashion-2.jpg",
                  type: "Physical",
                },
                {
                  title: "Rhythm Cap",
                  artist: "Vikram Mehta",
                  price: "₹999",
                  image: "/images/fashion-3.jpg",
                  type: "Physical",
                },
                {
                  title: "Digital Jacket",
                  artist: "Ananya Desai",
                  price: "₹2,500",
                  image: "/images/fashion-4.jpg",
                  type: "Digital",
                },
                {
                  title: "Melody Maker Tee",
                  artist: "Arjun Sharma",
                  price: "₹1,799",
                  image: "/images/fashion-5.jpg",
                  type: "Physical",
                },
                {
                  title: "Virtual Concert Outfit",
                  artist: "Priya Patel",
                  price: "₹4,200",
                  image: "/images/fashion-6.jpg",
                  type: "Digital",
                },
                {
                  title: "Sound Wave Joggers",
                  artist: "Vikram Mehta",
                  price: "₹2,799",
                  image: "/images/fashion-1.jpg",
                  type: "Physical",
                },
                {
                  title: "Digital Sneakers",
                  artist: "Ananya Desai",
                  price: "₹1,500",
                  image: "/images/fashion-2.jpg",
                  type: "Digital",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image || "/placeholder.svg?height=400&width=400"}
                      alt={item.title}
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
                    <div className="absolute top-2 left-2">
                      <Badge className={item.type === "Digital" ? "bg-purple-600" : "bg-blue-600"}>
                        {item.type === "Digital" ? (
                          <Sparkles className="h-3 w-3 mr-1" />
                        ) : (
                          <Package className="h-3 w-3 mr-1" />
                        )}
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <p className="text-sm text-zinc-400">by {item.artist}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold">{item.price}</p>
                      <div className="flex items-center text-sm text-zinc-400">
                        <Shirt className="h-4 w-4 mr-1" />
                        <span>S, M, L, XL</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
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

        {/* Physical vs Digital */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Physical & Digital Fashion</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                From real-world merchandise to metaverse wearables
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image src="/images/physical-fashion.jpg" alt="Physical Fashion" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Physical Merchandise</h3>
                  <p className="text-zinc-300 mb-6">
                    High-quality physical clothing and accessories designed by artists. Each item features unique
                    artwork and designs that connect you to your favorite creators.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">Shop Physical Items</Button>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="relative h-64">
                  <Image src="/images/digital-fashion.jpg" alt="Digital Fashion" fill className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Digital Wearables</h3>
                  <p className="text-zinc-300 mb-6">
                    Virtual clothing for your digital identity. Wear these items in virtual concerts, metaverse spaces,
                    and social platforms to express your style in the digital world.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90">Explore Digital Fashion</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artist Collaborations */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Artist Collaborations</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Limited edition collections created through unique artist partnerships
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Arjun x Priya",
                  description: "A fusion of electronic beats and classical Indian influences in fashion form.",
                  image: "/images/collab-1.jpg",
                },
                {
                  title: "Vikram x Ananya",
                  description: "Where rock meets hip-hop in this boundary-pushing streetwear collection.",
                  image: "/images/collab-2.jpg",
                },
                {
                  title: "Indie Collective",
                  description: "Five independent artists unite to create a diverse range of expressive apparel.",
                  image: "/images/collab-3.jpg",
                },
              ].map((collab, index) => (
                <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={collab.image || "/placeholder.svg?height=300&width=400"}
                      alt={collab.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{collab.title}</h3>
                    <p className="text-zinc-300 mb-4">{collab.description}</p>
                    <Button variant="outline">Explore Collection</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Wear Your Favorite Artists</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Express yourself through fashion designed by the artists who inspire you. From physical merchandise to
              digital wearables.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Create Your Own
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
