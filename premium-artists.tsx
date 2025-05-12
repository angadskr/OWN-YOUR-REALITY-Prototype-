"use client"

import Image from "next/image"
import { Music, Video, ImageIcon, FileText, Star, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PremiumArtists() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Featured Premium Artists</h2>
        <p className="text-zinc-400">
          Discover artists offering exclusive premium content for their subscribers
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            id: 1,
            name: "Maya Johnson",
            genre: "R&B / Soul",
            image: "/images/artist-1.jpg",
            subscribers: "12.5K",
            contentCount: 48,
            rating: 4.9,
            featured: true,
            contentTypes: ["music", "video", "gallery"]
          },
          {
            id: 2,
            name: "Alex Rivera",
            genre: "Electronic / Pop",
            image: "/images/artist-2.jpg",
            subscribers: "8.2K",
            contentCount: 36,
            rating: 4.7,
            featured: false,
            contentTypes: ["music", "video", "article"]
          },
          {
            id: 3,
            name: "Zara Chen",
            genre: "Alternative / Indie",
            image: "/images/artist-3.jpg",
            subscribers: "9.8K",
            contentCount: 42,
            rating: 4.8,
            featured: true,
            contentTypes: ["music", "gallery", "article"]
          },
          {
            id: 4,
            name: "Marcus Lee",
            genre: "Hip Hop",
            image: "/images/artist-4.jpg",
            subscribers: "15.3K",
            contentCount: 54,
            rating: 4.9,
            featured: false,
            contentTypes: ["music", "video", "gallery"]
          },
          {
            id: 5,
            name: "Priya Sharma",
            genre: "Pop / R&B",
            image: "/images/artist-5.jpg",
            subscribers: "7.6K",
            contentCount: 32,
            rating: 4.6,
            featured: false,
            contentTypes: ["music", "video", "article"]
          },
          {
            id: 6,
            name: "Raj Patel",
            genre: "Indie / Folk",
            image: "/images/artist-6.jpg",
            subscribers: "6.9K",
            contentCount: 28,
            rating: 4.7,
            featured: false,
            contentTypes: ["music", "gallery"]
          }
        ].map((artist) => (
          <Card key={artist.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="relative aspect-square">
              <Image src={artist.image || "/placeholder.svg"} alt={artist.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {artist.featured && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary">
                    <Star className="h-3 w-3 mr-1" /> Featured
                  </Badge>
                </div>
              )}
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-sm text-zinc-300">{artist.genre}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Subscribers</p>
                  <p className="font-bold">{artist.subscribers}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Content</p>
                  <p className="font-bold">{artist.contentCount}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Rating</p>
                  <p className="font-bold flex items-center justify-center">
                    {artist.rating} <Star className="h-3 w-3 ml-1 text-yellow-500" />
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-zinc-400">Content Types</p>
                <div className="flex flex-wrap gap-2">
                  {artist.contentTypes.includes('music') && (
                    <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                      <Music className="h-3 w-3 mr-1" /> Music
                    </Badge>
                  )}
                  {artist.contentTypes.includes('video') && (
                    <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30">
                      <Video className="h-3 w-3 mr-1" /> Video
                    </Badge>
                  )}
                  {artist.contentTypes.includes('gallery') && (
                    <Badge className="bg-amber-500/20 text-amber-400 hover:bg-amber-500/30">
                      <ImageIcon className="h-3 w-3 mr-1" /> Gallery
                    </Badge>
                  )}
                  {artist.contentTypes.includes('article') && (
                    <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                      <FileText className="h-3 w-3 mr-1" /> Articles
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Lock className="h-4 w-\

\
