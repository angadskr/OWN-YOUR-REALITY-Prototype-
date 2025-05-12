import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, ImageIcon, Plus, Send, Users, Eye, Edit, Trash2, Calendar } from "lucide-react"
import Image from "next/image"

export default function ArtistAnnouncementsPage() {
  // Sample data for draft and published announcements
  const draftAnnouncements = [
    {
      id: "draft1",
      title: "Upcoming Collaboration Reveal",
      type: "release",
      date: "Not scheduled",
      image: "/images/album-3.jpg",
      description:
        "Teaser for my upcoming collaboration with a mystery artist. Need to finalize details before announcing.",
      status: "draft",
    },
    {
      id: "draft2",
      title: "Limited Edition Vinyl",
      type: "merch",
      date: "Not scheduled",
      image: "/images/album-4.jpg",
      description: "Special edition vinyl with glow-in-the-dark features. Need to confirm production timeline.",
      status: "draft",
    },
  ]

  const publishedAnnouncements = [
    {
      id: "pub1",
      title: "Neon Dreams Tour 2025",
      type: "event",
      date: "Published on Mar 15, 2025",
      scheduledFor: "Apr 15, 2025",
      image: "/images/concert-1.jpg",
      description: "Join me on my biggest tour yet! VIP packages available with exclusive meet & greets.",
      status: "published",
      engagement: {
        views: 12453,
        interactions: 3241,
        shares: 876,
      },
    },
    {
      id: "pub2",
      title: "Digital Horizons EP",
      type: "release",
      date: "Published on Mar 10, 2025",
      scheduledFor: "Mar 30, 2025",
      image: "/images/album-1.jpg",
      description: "My new EP drops next week! Pre-save now to get exclusive bonus tracks.",
      status: "published",
      engagement: {
        views: 8762,
        interactions: 2198,
        shares: 543,
      },
    },
    {
      id: "pub3",
      title: "Studio Session Livestream",
      type: "livestream",
      date: "Published on Mar 20, 2025",
      scheduledFor: "Apr 2, 2025",
      image: "/images/livestream-1.jpg",
      description: "Watch me create my next hit live! Interact and influence the creative process.",
      status: "published",
      engagement: {
        views: 5321,
        interactions: 1876,
        shares: 321,
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 relative min-h-screen">
      {/* Retro grid background */}
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(149, 0, 255, 0.1) 1px, transparent 1px), 
                               linear-gradient(to bottom, rgba(149, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
        }}
      >
        {/* Scanlines effect */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{
            background: `repeating-linear-gradient(
                 to bottom,
                 transparent,
                 transparent 2px,
                 rgba(255, 255, 255, 0.5) 2px,
                 rgba(255, 255, 255, 0.5) 4px
               )`,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-300 drop-shadow-[0_0_10px_rgba(219,39,119,0.5)]">
              Announcement Manager
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Create and manage announcements for your fans. Keep them updated about your events, releases, merchandise,
              and livestreams.
            </p>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
            <Plus className="h-4 w-4 mr-2" />
            Create Announcement
          </Button>
        </div>

        <Tabs defaultValue="create" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="space-y-6">
            <Card className="border border-purple-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(149,0,255,0.3)]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-300">Create New Announcement</CardTitle>
                <CardDescription>Share updates, events, releases, and more with your fans</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-300">
                    Announcement Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="Enter a catchy title..."
                    className="bg-black/50 border-purple-500/30 focus:border-purple-500 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-gray-300">
                      Announcement Type
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-black/50 border-purple-500/30 focus:border-purple-500 text-white">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-purple-500/30">
                        <SelectItem value="event">Event</SelectItem>
                        <SelectItem value="release">Release</SelectItem>
                        <SelectItem value="merch">Merchandise</SelectItem>
                        <SelectItem value="livestream">Livestream</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-300">
                      Event/Release Date
                    </Label>
                    <div className="relative">
                      <Input
                        id="date"
                        type="date"
                        className="bg-black/50 border-purple-500/30 focus:border-purple-500 text-white pl-10"
                      />
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-300">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your announcement..."
                    className="min-h-[120px] bg-black/50 border-purple-500/30 focus:border-purple-500 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Cover Image</Label>
                  <div className="border-2 border-dashed border-purple-500/30 rounded-md p-6 text-center hover:border-purple-500/60 transition-colors cursor-pointer">
                    <ImageIcon className="h-10 w-10 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-400">Drag and drop an image, or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">Recommended size: 1200 x 630px</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="publish" className="text-gray-300">
                      Publishing Options
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-black/50 border-purple-500/30 focus:border-purple-500 text-white">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-purple-500/30">
                        <SelectItem value="now">Publish Now</SelectItem>
                        <SelectItem value="schedule">Schedule</SelectItem>
                        <SelectItem value="draft">Save as Draft</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="schedule" className="text-gray-300">
                      Schedule Date (if applicable)
                    </Label>
                    <div className="relative">
                      <Input
                        id="schedule"
                        type="datetime-local"
                        className="bg-black/50 border-purple-500/30 focus:border-purple-500 text-white pl-10"
                      />
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-end space-x-4">
                <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20">
                  Save as Draft
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none">
                  <Send className="h-4 w-4 mr-2" />
                  Publish Announcement
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="drafts">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-cyan-300">Draft Announcements</h2>

              {draftAnnouncements.length === 0 ? (
                <Card className="border border-purple-500/30 bg-black/80 backdrop-blur-sm p-8 text-center">
                  <p className="text-gray-400">You don't have any draft announcements yet.</p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {draftAnnouncements.map((announcement) => (
                    <Card
                      key={announcement.id}
                      className="border border-purple-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(149,0,255,0.3)] overflow-hidden"
                    >
                      <div className="relative h-40">
                        <Image
                          src={announcement.image || "/placeholder.svg"}
                          alt={announcement.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                        <div className="absolute top-2 right-2">
                          <span className="bg-yellow-500/80 text-white text-xs px-2 py-1 rounded-md">DRAFT</span>
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-300">
                          {announcement.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 flex items-center gap-1">
                          <Clock className="h-4 w-4 text-yellow-500" />
                          {announcement.date}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        <p className="text-gray-300 text-sm line-clamp-2">{announcement.description}</p>
                      </CardContent>

                      <CardFooter className="flex justify-between pt-0">
                        <Button
                          variant="outline"
                          className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" className="border-red-500/50 text-red-300 hover:bg-red-900/20">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="published">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-cyan-300">Published Announcements</h2>

              {publishedAnnouncements.length === 0 ? (
                <Card className="border border-purple-500/30 bg-black/80 backdrop-blur-sm p-8 text-center">
                  <p className="text-gray-400">You haven't published any announcements yet.</p>
                </Card>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {publishedAnnouncements.map((announcement) => (
                    <Card
                      key={announcement.id}
                      className="border border-purple-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(149,0,255,0.3)] overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-1/3">
                          <Image
                            src={announcement.image || "/placeholder.svg"}
                            alt={announcement.title}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2">
                            <span className="bg-green-500/80 text-white text-xs px-2 py-1 rounded-md">LIVE</span>
                          </div>
                        </div>

                        <div className="md:w-2/3 p-4">
                          <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-300 mb-1">
                            {announcement.title}
                          </h3>

                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                              {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
                            </span>
                            <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {announcement.scheduledFor}
                            </span>
                          </div>

                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">{announcement.description}</p>

                          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                            <div className="flex items-center">
                              <Eye className="h-3 w-3 mr-1 text-cyan-400" />
                              {announcement.engagement.views.toLocaleString()} views
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-1 text-pink-400" />
                              {announcement.engagement.interactions.toLocaleString()} interactions
                            </div>
                            <div className="flex items-center">
                              <Send className="h-3 w-3 mr-1 text-purple-400" />
                              {announcement.engagement.shares.toLocaleString()} shares
                            </div>
                          </div>

                          <div className="flex gap-2 mt-3">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20"
                            >
                              <Edit className="h-3 w-3 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/20"
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View Stats
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="border border-purple-500/30 bg-black/80 backdrop-blur-sm shadow-[0_0_15px_rgba(149,0,255,0.3)]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cyan-300">Announcement Analytics</CardTitle>
                <CardDescription>Track the performance of your announcements</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="border border-purple-500/30 bg-black/90 p-4">
                    <div className="text-3xl font-bold text-pink-500 mb-1">
                      {publishedAnnouncements.reduce((sum, a) => sum + a.engagement.views, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Total Views</div>
                  </Card>

                  <Card className="border border-purple-500/30 bg-black/90 p-4">
                    <div className="text-3xl font-bold text-cyan-500 mb-1">
                      {publishedAnnouncements.reduce((sum, a) => sum + a.engagement.interactions, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Total Interactions</div>
                  </Card>

                  <Card className="border border-purple-500/30 bg-black/90 p-4">
                    <div className="text-3xl font-bold text-purple-500 mb-1">
                      {publishedAnnouncements.reduce((sum, a) => sum + a.engagement.shares, 0).toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Total Shares</div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-4">Performance by Announcement</h3>

                  {publishedAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="border border-purple-500/20 rounded-lg p-4 bg-black/50">
                      <div className="flex items-center gap-3 mb-3">
                        <Image
                          src={announcement.image || "/placeholder.svg"}
                          alt={announcement.title}
                          width={60}
                          height={60}
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div>
                          <h4 className="font-medium text-white">{announcement.title}</h4>
                          <p className="text-xs text-gray-400">{announcement.date}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-pink-400">
                            {announcement.engagement.views.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">Views</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-cyan-400">
                            {announcement.engagement.interactions.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">Interactions</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-semibold text-purple-400">
                            {announcement.engagement.shares.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">Shares</div>
                        </div>
                      </div>

                      <div className="w-full bg-gray-800 rounded-full h-1.5 mb-1">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full"
                          style={{
                            width: `${((announcement.engagement.interactions / announcement.engagement.views) * 100).toFixed(1)}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400 text-right">
                        {((announcement.engagement.interactions / announcement.engagement.views) * 100).toFixed(1)}%
                        engagement rate
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
