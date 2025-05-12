"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ImageIcon,
  Video,
  Music,
  LinkIcon,
  Camera,
  Smile,
  Send,
  Heart,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Clock,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ArtistStories() {
  const [storyText, setStoryText] = useState("")

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Stories & Posts</h2>
          <p className="text-zinc-400">Share updates and connect with your fans</p>
        </div>
      </div>

      <Tabs defaultValue="create" className="space-y-8">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="create">Create Story</TabsTrigger>
          <TabsTrigger value="published">Published Stories</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Create New Story</CardTitle>
              <CardDescription>Share updates, behind-the-scenes content, and more with your fans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/artist-1.jpg" alt="Maya Johnson" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="What's on your mind, Maya?"
                    className="bg-zinc-800 border-zinc-700 min-h-[120px]"
                    value={storyText}
                    onChange={(e) => setStoryText(e.target.value)}
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300">#NewMusic</Badge>
                    <Badge className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300">
                      #BehindTheScenes
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300">
                      #StudioLife
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <ImageIcon className="h-4 w-4 mr-2" /> Photo
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <Video className="h-4 w-4 mr-2" /> Video
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <Music className="h-4 w-4 mr-2" /> Music
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <LinkIcon className="h-4 w-4 mr-2" /> Link
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                  <Camera className="h-4 w-4 mr-2" /> Live
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-300">
                    <Smile className="h-4 w-4 mr-2" /> Add Emoji
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-300">
                        <Users className="h-4 w-4 mr-2" /> Audience
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" /> Public
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" /> Premium Subscribers
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="h-4 w-4 mr-2" /> NFT Holders
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4 mr-2" /> Post Story
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Story Preview</CardTitle>
              <CardDescription>Preview how your story will appear to fans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-zinc-800 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/artist-1.jpg" alt="Maya Johnson" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Maya Johnson</h4>
                        <p className="text-xs text-zinc-500">Just now • Public</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="mt-2">{storyText || "Your story preview will appear here..."}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Heart className="h-4 w-4 mr-2" /> 0
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <MessageSquare className="h-4 w-4 mr-2" /> 0
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Share2 className="h-4 w-4 mr-2" /> 0
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                id: 1,
                content:
                  "Just finished recording a new track! Can't wait to share it with you all. #NewMusic #StudioLife",
                date: "2 hours ago",
                likes: 245,
                comments: 32,
                shares: 18,
                image: "/images/story-1.jpg",
              },
              {
                id: 2,
                content: "Behind the scenes from today's photoshoot for the new album cover. What do you think?",
                date: "Yesterday",
                likes: 512,
                comments: 78,
                shares: 45,
                image: "/images/story-2.jpg",
              },
              {
                id: 3,
                content:
                  "Working on some new merch designs! Premium subscribers can vote on their favorites in the exclusive section.",
                date: "2 days ago",
                likes: 378,
                comments: 56,
                shares: 23,
                image: "/images/story-3.jpg",
              },
              {
                id: 4,
                content:
                  "Thank you all for the amazing response to the NFT drop! Sold out in just 2 hours! More coming soon.",
                date: "3 days ago",
                likes: 623,
                comments: 94,
                shares: 112,
                image: null,
              },
            ].map((story) => (
              <Card key={story.id} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/artist-1.jpg" alt="Maya Johnson" />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Maya Johnson</h4>
                          <p className="text-xs text-zinc-500">{story.date} • Public</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem>Pin to Profile</DropdownMenuItem>
                            <DropdownMenuItem>Boost Post</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                      <p className="mt-2">{story.content}</p>
                      {story.image && (
                        <div className="mt-3 relative aspect-video rounded-lg overflow-hidden">
                          <Image
                            src={story.image || "/placeholder.svg"}
                            alt="Story image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Heart className="h-4 w-4 mr-2" /> {story.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <MessageSquare className="h-4 w-4 mr-2" /> {story.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Share2 className="h-4 w-4 mr-2" /> {story.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Story Performance</CardTitle>
              <CardDescription>Analytics for your recent stories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    title: "Just finished recording a new track!",
                    date: "2 hours ago",
                    reach: "8.2K",
                    engagement: "32%",
                    likes: 245,
                    comments: 32,
                    shares: 18,
                  },
                  {
                    id: 2,
                    title: "Behind the scenes from today's photoshoot",
                    date: "Yesterday",
                    reach: "12.5K",
                    engagement: "41%",
                    likes: 512,
                    comments: 78,
                    shares: 45,
                  },
                  {
                    id: 3,
                    title: "Working on some new merch designs!",
                    date: "2 days ago",
                    reach: "9.8K",
                    engagement: "38%",
                    likes: 378,
                    comments: 56,
                    shares: 23,
                  },
                ].map((story) => (
                  <div key={story.id} className="bg-zinc-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-medium">{story.title}</h4>
                        <p className="text-xs text-zinc-500">{story.date}</p>
                      </div>
                      <Badge className="bg-zinc-700">
                        <Clock className="h-3 w-3 mr-1" /> Recent
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="bg-zinc-900 rounded-md p-3">
                        <p className="text-xs text-zinc-500">Reach</p>
                        <p className="text-lg font-bold">{story.reach}</p>
                      </div>
                      <div className="bg-zinc-900 rounded-md p-3">
                        <p className="text-xs text-zinc-500">Engagement</p>
                        <p className="text-lg font-bold">{story.engagement}</p>
                      </div>
                      <div className="bg-zinc-900 rounded-md p-3">
                        <p className="text-xs text-zinc-500">Likes</p>
                        <p className="text-lg font-bold">{story.likes}</p>
                      </div>
                      <div className="bg-zinc-900 rounded-md p-3">
                        <p className="text-xs text-zinc-500">Comments</p>
                        <p className="text-lg font-bold">{story.comments}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Detailed Analytics
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
