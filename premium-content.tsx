"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Play,
  Lock,
  Music,
  Video,
  FileText,
  ImageIcon,
  Filter,
  Search,
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function PremiumContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <Input
            placeholder="Search premium content..."
            className="bg-zinc-900 border-zinc-800 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="artist">Artist Name</SelectItem>
              <SelectItem value="type">Content Type</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            id: 1,
            title: "Acoustic Version - Summer Nights",
            artist: "Maya Johnson",
            artistImage: "/images/artist-1.jpg",
            image: "/images/premium-1.jpg",
            type: "music",
            date: "1 week ago",
            likes: 1245,
            comments: 87,
            shares: 32,
          },
          {
            id: 2,
            title: "Behind the Scenes - Music Video",
            artist: "Maya Johnson",
            artistImage: "/images/artist-1.jpg",
            image: "/images/premium-2.jpg",
            type: "video",
            date: "2 weeks ago",
            likes: 985,
            comments: 64,
            shares: 28,
          },
          {
            id: 3,
            title: "Exclusive Interview",
            artist: "Alex Rivera",
            artistImage: "/images/artist-2.jpg",
            image: "/images/premium-3.jpg",
            type: "video",
            date: "3 weeks ago",
            likes: 1120,
            comments: 76,
            shares: 41,
          },
          {
            id: 4,
            title: "Studio Session Photos",
            artist: "Zara Chen",
            artistImage: "/images/artist-3.jpg",
            image: "/images/premium-4.jpg",
            type: "gallery",
            date: "1 month ago",
            likes: 875,
            comments: 52,
            shares: 24,
          },
          {
            id: 5,
            title: "Unreleased Demo Track",
            artist: "Alex Rivera",
            artistImage: "/images/artist-2.jpg",
            image: "/images/premium-5.jpg",
            type: "music",
            date: "1 month ago",
            likes: 1320,
            comments: 94,
            shares: 47,
          },
          {
            id: 6,
            title: "Songwriting Journal",
            artist: "Zara Chen",
            artistImage: "/images/artist-3.jpg",
            image: "/images/premium-6.jpg",
            type: "article",
            date: "2 months ago",
            likes: 765,
            comments: 43,
            shares: 19,
          },
        ].map((content) => (
          <Card key={content.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
            <div className="relative aspect-video">
              <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-primary hover:bg-primary/90">
                  {content.type === "music" && <Play className="h-5 w-5 mr-2" />}
                  {content.type === "video" && <Play className="h-5 w-5 mr-2" />}
                  {content.type === "gallery" && <ImageIcon className="h-5 w-5 mr-2" />}
                  {content.type === "article" && <FileText className="h-5 w-5 mr-2" />}
                  View Content
                </Button>
              </div>
              <div className="absolute top-2 left-2">
                <Badge
                  className={`
                  ${content.type === "music" ? "bg-blue-500/80 hover:bg-blue-500/90" : ""}
                  ${content.type === "video" ? "bg-red-500/80 hover:bg-red-500/90" : ""}
                  ${content.type === "gallery" ? "bg-amber-500/80 hover:bg-amber-500/90" : ""}
                  ${content.type === "article" ? "bg-green-500/80 hover:bg-green-500/90" : ""}
                `}
                >
                  {content.type === "music" && <Music className="h-3 w-3 mr-1" />}
                  {content.type === "video" && <Video className="h-3 w-3 mr-1" />}
                  {content.type === "gallery" && <ImageIcon className="h-3 w-3 mr-1" />}
                  {content.type === "article" && <FileText className="h-3 w-3 mr-1" />}
                  {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                </Badge>
              </div>
              <div className="absolute top-2 right-2">
                <Badge className="bg-purple-500/80 hover:bg-purple-500/90">
                  <Lock className="h-3 w-3 mr-1" /> Premium
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={content.artistImage} alt={content.artist} />
                  <AvatarFallback>{content.artist.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{content.artist}</span>
              </div>
              <h3 className="font-medium mb-1">{content.title}</h3>
              <p className="text-xs text-zinc-500 mb-3">Published {content.date}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Heart className="h-4 w-4 mr-2" /> {content.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare className="h-4 w-4 mr-2" /> {content.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Share2 className="h-4 w-4 mr-2" /> {content.shares}
                  </Button>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Save for Later</DropdownMenuItem>
                    <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" className="mr-2">
          Load More
        </Button>
      </div>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Premium Content Calendar</CardTitle>
          <CardDescription>Upcoming exclusive content from your favorite artists</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Acoustic Session - New Album Previews",
                artist: "Maya Johnson",
                date: "June 15, 2023",
                type: "music",
              },
              {
                title: "Studio Documentary - Making of 'Electric Dreams'",
                artist: "Alex Rivera",
                date: "June 20, 2023",
                type: "video",
              },
              {
                title: "Fashion Collection Design Process",
                artist: "Zara Chen",
                date: "June 25, 2023",
                type: "gallery",
              },
              {
                title: "Live Q&A Session with Fans",
                artist: "Maya Johnson",
                date: "June 30, 2023",
                type: "video",
              },
            ].map((event, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-zinc-400">{event.artist}</p>
                    <p className="text-xs text-zinc-500">Coming on {event.date}</p>
                  </div>
                  <Badge
                    className={`
                    ${event.type === "music" ? "bg-blue-500/80 hover:bg-blue-500/90" : ""}
                    ${event.type === "video" ? "bg-red-500/80 hover:bg-red-500/90" : ""}
                    ${event.type === "gallery" ? "bg-amber-500/80 hover:bg-amber-500/90" : ""}
                    ${event.type === "article" ? "bg-green-500/80 hover:bg-green-500/90" : ""}
                  `}
                  >
                    {event.type === "music" && <Music className="h-3 w-3 mr-1" />}
                    {event.type === "video" && <Video className="h-3 w-3 mr-1" />}
                    {event.type === "gallery" && <ImageIcon className="h-3 w-3 mr-1" />}
                    {event.type === "article" && <FileText className="h-3 w-3 mr-1" />}
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="px-0 text-primary">
            View Full Calendar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
