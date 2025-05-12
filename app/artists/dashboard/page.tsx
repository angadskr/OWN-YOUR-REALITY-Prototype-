import Image from "next/image"
import { ArrowUpRight, BarChart2, Users, DollarSign, Music, Calendar, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import ArtistNavbar from "@/components/artist-navbar"
import ArtistSidebar from "@/components/artist-sidebar"

export default function ArtistDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <ArtistNavbar />
      <div className="flex-1 flex">
        <ArtistSidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2 font-['Orbitron']">Welcome, Artist</h1>
                <p className="text-blue-200 font-['Rajdhani']">Here's what's happening with your music today</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white shadow-glow-pink">Upload New Track</Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-900/20 shadow-glow-blue"
                >
                  Create Announcement
                </Button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-black/80 backdrop-blur-sm border border-pink-500/30 shadow-glow-pink">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-pink-400 flex items-center">
                    <BarChart2 className="mr-2 h-4 w-4" /> Total Streams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">1.2M</div>
                  <p className="text-xs text-blue-200">
                    <span className="text-green-400">↑ 12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border border-blue-500/30 shadow-glow-blue">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-400 flex items-center">
                    <Users className="mr-2 h-4 w-4" /> Total Fans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">45.8K</div>
                  <p className="text-xs text-blue-200">
                    <span className="text-green-400">↑ 8%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border border-green-500/30 shadow-glow-green">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-400 flex items-center">
                    <DollarSign className="mr-2 h-4 w-4" /> Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$24,350</div>
                  <p className="text-xs text-blue-200">
                    <span className="text-green-400">↑ 18%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border border-purple-500/30 shadow-glow-purple">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-purple-400 flex items-center">
                    <Music className="mr-2 h-4 w-4" /> NFTs Sold
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">342</div>
                  <p className="text-xs text-blue-200">
                    <span className="text-green-400">↑ 24%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity and Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="lg:col-span-2">
                <Card className="bg-black/80 backdrop-blur-sm border border-blue-500/30 shadow-glow-blue h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-400 font-['Orbitron']">
                      Performance Overview
                    </CardTitle>
                    <CardDescription className="text-blue-200">Your music performance across platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full bg-blue-900/20 rounded-lg border border-blue-500/30 flex items-center justify-center">
                      <p className="text-blue-400">Performance Chart Visualization</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/80 backdrop-blur-sm border border-pink-500/30 shadow-glow-pink h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-pink-400 font-['Orbitron']">Recent Activity</CardTitle>
                    <CardDescription className="text-blue-200">Latest updates and interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-pink-500/20 p-2 rounded-full">
                          <Users className="h-4 w-4 text-pink-400" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">New fan subscription</p>
                          <p className="text-xs text-blue-200">5 new fans subscribed to your premium content</p>
                          <p className="text-xs text-blue-200/60">2 hours ago</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500/20 p-2 rounded-full">
                          <Music className="h-4 w-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">Track milestone</p>
                          <p className="text-xs text-blue-200">"Neon Dreams" reached 500K streams</p>
                          <p className="text-xs text-blue-200/60">Yesterday</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-green-500/20 p-2 rounded-full">
                          <DollarSign className="h-4 w-4 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">Royalty payment</p>
                          <p className="text-xs text-blue-200">Received $1,250 in streaming royalties</p>
                          <p className="text-xs text-blue-200/60">2 days ago</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-500/20 p-2 rounded-full">
                          <MessageSquare className="h-4 w-4 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-white font-medium">New comments</p>
                          <p className="text-xs text-blue-200">12 new comments on your latest release</p>
                          <p className="text-xs text-blue-200/60">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-pink-400 hover:text-pink-300 hover:bg-pink-900/20">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Upcoming Events and Top Tracks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-black/80 backdrop-blur-sm border border-purple-500/30 shadow-glow-purple">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-400 font-['Orbitron']">Upcoming Events</CardTitle>
                  <CardDescription className="text-blue-200">Your scheduled performances and releases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                      <div className="bg-purple-500/30 p-3 rounded-full">
                        <Calendar className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Virtual Concert</p>
                        <p className="text-sm text-blue-200">Live performance with Q&A session</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-purple-400 font-medium">Mar 15</p>
                        <p className="text-xs text-blue-200">8:00 PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                      <div className="bg-purple-500/30 p-3 rounded-full">
                        <Music className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">EP Release</p>
                        <p className="text-sm text-blue-200">"Midnight Chronicles" - 5 tracks</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-purple-400 font-medium">Apr 2</p>
                        <p className="text-xs text-blue-200">12:00 AM Global</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                      <div className="bg-purple-500/30 p-3 rounded-full">
                        <Users className="h-5 w-5 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Fan Meet & Greet</p>
                        <p className="text-sm text-blue-200">Exclusive event for premium subscribers</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-purple-400 font-medium">Apr 10</p>
                        <p className="text-xs text-blue-200">7:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-900/20">
                    Manage Events <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 shadow-glow-cyan">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-cyan-400 font-['Orbitron']">
                    Top Performing Tracks
                  </CardTitle>
                  <CardDescription className="text-blue-200">Your most popular music this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border border-cyan-500/30">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Track Artwork"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">Neon Dreams</p>
                        <p className="text-sm text-blue-200">Synthwave EP</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">520K</p>
                        <p className="text-xs text-blue-200">streams</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border border-cyan-500/30">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Track Artwork"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">Digital Horizon</p>
                        <p className="text-sm text-blue-200">Future Bass Single</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">342K</p>
                        <p className="text-xs text-blue-200">streams</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border border-cyan-500/30">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Track Artwork"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">Cybernetic Love</p>
                        <p className="text-sm text-blue-200">Electro Pop Collaboration</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">215K</p>
                        <p className="text-xs text-blue-200">streams</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border border-cyan-500/30">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Track Artwork"
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">Midnight Protocol</p>
                        <p className="text-sm text-blue-200">Ambient Instrumental</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">187K</p>
                        <p className="text-xs text-blue-200">streams</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-900/20">
                    View All Tracks <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
