"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Share2, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NFTShowcase() {
  const [activeTab, setActiveTab] = useState("trending")

  const nfts = [
    {
      id: 1,
      title: "Cosmic Harmony #42",
      artist: "Ethereal Echo",
      price: "0.45 ETH",
      image: "/images/nft-1.jpg",
      likes: 128,
      category: "trending",
    },
    {
      id: 2,
      title: "Digital Dreams #07",
      artist: "Neon Nomad",
      price: "0.32 ETH",
      image: "/images/nft-2.jpg",
      likes: 95,
      category: "trending",
    },
    {
      id: 3,
      title: "Quantum Realm #13",
      artist: "Byte Bender",
      price: "0.28 ETH",
      image: "/images/nft-3.jpg",
      likes: 76,
      category: "new",
    },
    {
      id: 4,
      title: "Cyber Serenity #21",
      artist: "Digital Diva",
      price: "0.51 ETH",
      image: "/images/nft-4.jpg",
      likes: 142,
      category: "trending",
    },
    {
      id: 5,
      title: "Neon Nightscape #09",
      artist: "Pixel Prophet",
      price: "0.38 ETH",
      image: "/images/nft-5.jpg",
      likes: 89,
      category: "new",
    },
    {
      id: 6,
      title: "Virtual Vortex #17",
      artist: "Crypto Creator",
      price: "0.42 ETH",
      image: "/images/nft-6.jpg",
      likes: 104,
      category: "new",
    },
  ]

  const filteredNFTs = activeTab === "all" ? nfts : nfts.filter((nft) => nft.category === activeTab)

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
              NFT Marketplace
            </h2>
            <p className="text-zinc-400 max-w-2xl">
              Discover unique digital collectibles from your favorite artists. Own a piece of their creative journey.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-2 bg-zinc-900/50 p-1 rounded-lg">
            <Button
              variant={activeTab === "trending" ? "default" : "ghost"}
              onClick={() => setActiveTab("trending")}
              className={activeTab === "trending" ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-zinc-800"}
            >
              Trending
            </Button>
            <Button
              variant={activeTab === "new" ? "default" : "ghost"}
              onClick={() => setActiveTab("new")}
              className={activeTab === "new" ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-zinc-800"}
            >
              New Drops
            </Button>
            <Button
              variant={activeTab === "all" ? "default" : "ghost"}
              onClick={() => setActiveTab("all")}
              className={activeTab === "all" ? "bg-emerald-500 hover:bg-emerald-600" : "hover:bg-zinc-800"}
            >
              All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNFTs.map((nft) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={nft.image || "/placeholder.svg"}
                    alt={nft.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/70 hover:bg-black text-white border-0 backdrop-blur-sm">
                      {nft.price}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-white">{nft.title}</h3>
                      <p className="text-sm text-zinc-400">by {nft.artist}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-zinc-400">
                      <Heart className="h-4 w-4 text-red-500" />
                      <span className="text-xs">{nft.likes}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/marketplace">
            <Button variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
              Explore Marketplace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
