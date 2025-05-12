import Image from "next/image"
import {
  Calendar,
  Users,
  Mail,
  Gift,
  Ticket,
  Video,
  Headphones,
  Heart,
  MessageSquare,
  Bell,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function FanEngagementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/fan-engagement-hero.jpg"
              alt="Fan Engagement"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Fan Experience</Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                  Connect With Your Favorite Artists
                </h1>
                <p className="mb-8 text-lg text-zinc-300 md:text-xl">
                  Exclusive experiences, content, and direct connections with the artists you love.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button className="bg-primary hover:bg-primary/90">Explore Experiences</Button>
                  <Button variant="outline">Browse Artists</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Ticket className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Virtual Concerts</h3>
                      <p className="text-zinc-400">Immersive live performances from anywhere in the world</p>
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Users className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Meet & Greets</h3>
                      <p className="text-zinc-400">Personal interactions with your favorite artists</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Mail className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Artist Letters</h3>
                      <p className="text-zinc-400">Personal messages and updates directly from artists</p>
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Gift className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
                      <p className="text-zinc-400">Behind-the-scenes footage, unreleased tracks, and more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Concerts */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Virtual Concerts</h2>
                <p className="mt-2 text-zinc-400">Immersive live performances from anywhere in the world</p>
              </div>
              <Button variant="outline">
                View All Concerts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Neon Dreams Tour",
                  artist: "Arjun Sharma",
                  date: "June 15, 2023 • 8:00 PM IST",
                  image: "/images/concert-1.jpg",
                  status: "Upcoming",
                  price: "₹499",
                  features: ["VR Compatible", "Chat with Artist", "Downloadable Recording"],
                },
                {
                  title: "Acoustic Sessions",
                  artist: "Priya Patel",
                  date: "June 20, 2023 • 7:30 PM IST",
                  image: "/images/concert-2.jpg",
                  status: "Upcoming",
                  price: "₹399",
                  features: ["Interactive Q&A", "Exclusive Merch Access", "Behind-the-Scenes"],
                },
                {
                  title: "Urban Beats Live",
                  artist: "Vikram Mehta",
                  date: "June 25, 2023 • 9:00 PM IST",
                  image: "/images/concert-3.jpg",
                  status: "Upcoming",
                  price: "₹599",
                  features: ["Multi-Camera Views", "Digital Collectible", "Afterparty Access"],
                },
              ].map((concert, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={concert.image || "/placeholder.svg?height=200&width=400"}
                      alt={concert.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 hover:bg-primary">{concert.status}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={`/images/artist-${index + 1}.jpg`} alt={concert.artist} />
                        <AvatarFallback>{concert.artist.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{concert.artist}</span>
                    </div>
                    <CardTitle>{concert.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-zinc-400 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {concert.date}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {concert.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-zinc-800 text-zinc-300">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{concert.price}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Ticket className="mr-2 h-4 w-4" /> Get Tickets
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet & Greets */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Meet & Greets</h2>
                <p className="mt-2 text-zinc-400">Personal interactions with your favorite artists</p>
              </div>
              <Button variant="outline">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Virtual Fan Meet",
                  artist: "Zara Chen",
                  date: "June 18, 2023 • 6:00 PM IST",
                  image: "/images/meet-greet-1.jpg",
                  spots: "15 spots left",
                  price: "₹1,499",
                  perks: ["15-minute private video call", "Signed digital photo", "Ask questions directly"],
                },
                {
                  title: "Album Listening Party",
                  artist: "Arjun Sharma",
                  date: "June 22, 2023 • 7:00 PM IST",
                  image: "/images/meet-greet-2.jpg",
                  spots: "8 spots left",
                  price: "₹1,999",
                  perks: ["Pre-release album preview", "Group Q&A session", "Exclusive merch package"],
                },
                {
                  title: "Backstage Pass",
                  artist: "Vikram Mehta",
                  date: "June 27, 2023 • 8:30 PM IST",
                  image: "/images/meet-greet-3.jpg",
                  spots: "5 spots left",
                  price: "₹2,499",
                  perks: ["Virtual backstage tour", "One-on-one conversation", "Personalized video message"],
                },
              ].map((event, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image || "/placeholder.svg?height=200&width=400"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-500/90 hover:bg-red-500">{event.spots}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={`/images/artist-${index + 3}.jpg`} alt={event.artist} />
                        <AvatarFallback>{event.artist.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{event.artist}</span>
                    </div>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-zinc-400 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {event.perks.map((perk, i) => (
                        <li key={i} className="flex items-start text-sm text-zinc-300">
                          <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">{event.price}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Users className="mr-2 h-4 w-4" /> Reserve Your Spot
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Artist Letters */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image src="/images/artist-letters.jpg" alt="Artist Letters" fill className="object-cover" />
              </div>
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Direct Connection</Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Artist Letters</h2>
                <p className="mb-6 text-zinc-300">
                  Receive personal messages, updates, and insights directly from your favorite artists. Build a deeper
                  connection through authentic communication.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/images/artist-1.jpg" alt="Arjun Sharma" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">Arjun Sharma</h4>
                          <Badge className="ml-2 bg-zinc-800 text-zinc-300">Premium</Badge>
                        </div>
                        <p className="text-sm text-zinc-400 mt-1">Sent 3 days ago</p>
                        <div className="mt-3 text-zinc-300">
                          <p className="mb-2">Dear fans,</p>
                          <p className="mb-2">
                            I'm excited to share that I've just finished recording my new album. You'll be the first to
                            hear the singles before they're released...
                          </p>
                          <p className="text-primary cursor-pointer">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/images/artist-2.jpg" alt="Priya Patel" />
                        <AvatarFallback>PP</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">Priya Patel</h4>
                          <Badge className="ml-2 bg-zinc-800 text-zinc-300">Premium</Badge>
                        </div>
                        <p className="text-sm text-zinc-400 mt-1">Sent 1 week ago</p>
                        <div className="mt-3 text-zinc-300">
                          <p className="mb-2">Hey everyone,</p>
                          <p className="mb-2">
                            I wanted to share some behind-the-scenes photos from my latest music video shoot. The
                            creative process was challenging but...
                          </p>
                          <p className="text-primary cursor-pointer">Read more</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" /> Subscribe to Artist Letters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Content */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Exclusive Content</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Get access to premium content that's not available anywhere else
              </p>
            </div>

            <Tabs defaultValue="music" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1 flex flex-wrap justify-center">
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="photos">Photos & Art</TabsTrigger>
                <TabsTrigger value="stories">Stories</TabsTrigger>
              </TabsList>

              <TabsContent value="music" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      title: "Acoustic Version - Summer Nights",
                      artist: "Arjun Sharma",
                      image: "/images/exclusive-1.jpg",
                      type: "Unreleased Track",
                      duration: "4:32",
                    },
                    {
                      title: "Demo Recording - Midnight Dreams",
                      artist: "Priya Patel",
                      image: "/images/exclusive-2.jpg",
                      type: "Demo",
                      duration: "3:45",
                    },
                    {
                      title: "Remix Collaboration - Urban Flow",
                      artist: "Vikram Mehta ft. DJ Krish",
                      image: "/images/exclusive-3.jpg",
                      type: "Remix",
                      duration: "5:18",
                    },
                    {
                      title: "Live Recording - Unplugged Session",
                      artist: "Zara Chen",
                      image: "/images/exclusive-4.jpg",
                      type: "Live Recording",
                      duration: "6:24",
                    },
                  ].map((track, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                      <div className="relative aspect-square group">
                        <Image
                          src={track.image || "/placeholder.svg?height=300&width=300"}
                          alt={track.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-12 w-12">
                            <Headphones className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary/90 hover:bg-primary">Premium</Badge>
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center space-x-2 mb-1">
                          <Avatar className="h-5 w-5">
                            <AvatarImage src={`/images/artist-${index + 1}.jpg`} alt={track.artist} />
                            <AvatarFallback>{track.artist.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs font-medium">{track.artist}</span>
                        </div>
                        <CardTitle className="text-sm">{track.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="flex justify-between items-center text-xs text-zinc-400">
                          <span>{track.type}</span>
                          <span>{track.duration}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Behind the Scenes - Music Video",
                      artist: "Arjun Sharma",
                      image: "/images/exclusive-video-1.jpg",
                      type: "Behind the Scenes",
                      duration: "12:45",
                    },
                    {
                      title: "Studio Session - Making of 'Electric Dreams'",
                      artist: "Priya Patel",
                      image: "/images/exclusive-video-2.jpg",
                      type: "Studio Session",
                      duration: "18:32",
                    },
                    {
                      title: "Exclusive Interview - Creative Process",
                      artist: "Vikram Mehta",
                      image: "/images/exclusive-video-3.jpg",
                      type: "Interview",
                      duration: "24:18",
                    },
                  ].map((video, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                      <div className="relative aspect-video group">
                        <Image
                          src={video.image || "/placeholder.svg?height=200&width=400"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 h-12 w-12">
                            <Video className="h-6 w-6" />
                          </Button>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary/90 hover:bg-primary">Premium</Badge>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-1">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={`/images/artist-${index + 1}.jpg`} alt={video.artist} />
                            <AvatarFallback>{video.artist.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{video.artist}</span>
                        </div>
                        <CardTitle>{video.title}</CardTitle>
                        <CardDescription>{video.type}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          <Video className="mr-2 h-4 w-4" /> Watch Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="photos" className="space-y-8">
                {/* Photos & Art content */}
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="relative aspect-square group rounded-lg overflow-hidden">
                      <Image
                        src={`/images/exclusive-photo-${index + 1}.jpg`}
                        alt={`Exclusive Photo ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 p-3">
                          <Badge className="bg-primary/90 hover:bg-primary mb-2">Premium</Badge>
                          <h4 className="text-sm font-medium">Exclusive Photo Set</h4>
                          <p className="text-xs text-zinc-300">Artist Photoshoot</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button variant="outline">
                    View All Photos & Art <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="stories" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Tour Diary - European Shows",
                      artist: "Arjun Sharma",
                      image: "/images/exclusive-story-1.jpg",
                      excerpt:
                        "Day 1 of the European tour was incredible. The energy in Berlin was unlike anything I've experienced before...",
                      date: "Posted 2 days ago",
                    },
                    {
                      title: "Creating My New Album - The Process",
                      artist: "Priya Patel",
                      image: "/images/exclusive-story-2.jpg",
                      excerpt:
                        "I wanted to share the creative journey behind my new album. It started with a simple melody that came to me while hiking in the mountains...",
                      date: "Posted 1 week ago",
                    },
                    {
                      title: "Collaborating with My Heroes",
                      artist: "Vikram Mehta",
                      image: "/images/exclusive-story-3.jpg",
                      excerpt:
                        "Working with the artists who inspired me to start making music was a surreal experience. Here's how it happened...",
                      date: "Posted 2 weeks ago",
                    },
                    {
                      title: "Fashion Collection Design Process",
                      artist: "Zara Chen",
                      image: "/images/exclusive-story-4.jpg",
                      excerpt:
                        "My new fashion line is deeply connected to my music. Each piece tells a story that complements the album...",
                      date: "Posted 3 weeks ago",
                    },
                  ].map((story, index) => (
                    <Card key={index} className="bg-zinc-900 border-zinc-800">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/3 aspect-square md:aspect-auto">
                          <Image
                            src={story.image || "/placeholder.svg?height=200&width=200"}
                            alt={story.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={`/images/artist-${index + 1}.jpg`} alt={story.artist} />
                              <AvatarFallback>{story.artist.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">{story.artist}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                          <Badge className="bg-primary/90 hover:bg-primary mb-3">Premium</Badge>
                          <p className="text-zinc-300 mb-3">{story.excerpt}</p>
                          <p className="text-xs text-zinc-500 mb-4">{story.date}</p>
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Heart className="h-4 w-4 mr-2" /> 245
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <MessageSquare className="h-4 w-4 mr-2" /> 32
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Notifications */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Stay Updated</h2>
                <p className="mt-2 text-zinc-400">Never miss important announcements from your favorite artists</p>
              </div>
              <Button variant="outline">
                Manage Notifications <Bell className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Album Launch Party",
                  artist: "Arjun Sharma",
                  image: "/images/notification-1.jpg",
                  date: "June 30, 2023 • 8:00 PM IST",
                  type: "Event",
                  description:
                    "Join the virtual album launch party for 'Electric Dreams' with exclusive performances and Q&A.",
                },
                {
                  title: "New Single Release",
                  artist: "Priya Patel",
                  image: "/images/notification-2.jpg",
                  date: "June 15, 2023",
                  type: "Release",
                  description:
                    "Priya's new single 'Midnight Whispers' drops next week. Pre-save now for exclusive content.",
                },
                {
                  title: "Limited Edition Merch",
                  artist: "Vikram Mehta",
                  image: "/images/notification-3.jpg",
                  date: "Available until June 20, 2023",
                  type: "Merchandise",
                  description: "Limited edition signed vinyl and apparel collection available for one week only.",
                },
                {
                  title: "Surprise Livestream",
                  artist: "Zara Chen",
                  image: "/images/notification-4.jpg",
                  date: "Tomorrow • 7:00 PM IST",
                  type: "Livestream",
                  description: "Zara will be doing a surprise acoustic set and sharing news about upcoming projects.",
                },
                {
                  title: "Collaboration Announcement",
                  artist: "Arjun Sharma & DJ Krish",
                  image: "/images/notification-5.jpg",
                  date: "Just Announced",
                  type: "Announcement",
                  description: "Exciting new collaboration project coming next month. Sign up for early access.",
                },
                {
                  title: "Fan Contest",
                  artist: "Priya Patel",
                  image: "/images/notification-6.jpg",
                  date: "Entries close June 25, 2023",
                  type: "Contest",
                  description: "Submit your remix for a chance to be featured on the official release and win prizes.",
                },
              ].map((notification, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={notification.image || "/placeholder.svg?height=160&width=400"}
                      alt={notification.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <Badge
                        className={`
                        ${notification.type === "Event" ? "bg-blue-500/90 hover:bg-blue-500" : ""}
                        ${notification.type === "Release" ? "bg-green-500/90 hover:bg-green-500" : ""}
                        ${notification.type === "Merchandise" ? "bg-amber-500/90 hover:bg-amber-500" : ""}
                        ${notification.type === "Livestream" ? "bg-purple-500/90 hover:bg-purple-500" : ""}
                        ${notification.type === "Announcement" ? "bg-pink-500/90 hover:bg-pink-500" : ""}
                        ${notification.type === "Contest" ? "bg-red-500/90 hover:bg-red-500" : ""}
                      `}
                      >
                        {notification.type}
                      </Badge>
                      <h3 className="text-lg font-bold mt-1">{notification.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={`/images/artist-${(index % 4) + 1}.jpg`} alt={notification.artist} />
                        <AvatarFallback>{notification.artist.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{notification.artist}</span>
                    </div>
                    <p className="text-sm text-zinc-300 mb-2">{notification.description}</p>
                    <p className="text-xs text-zinc-500">{notification.date}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      {notification.type === "Event" && "RSVP"}
                      {notification.type === "Release" && "Pre-save"}
                      {notification.type === "Merchandise" && "Shop Now"}
                      {notification.type === "Livestream" && "Set Reminder"}
                      {notification.type === "Announcement" && "Learn More"}
                      {notification.type === "Contest" && "Enter Now"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready for Exclusive Experiences?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join our premium membership to get access to all exclusive content and experiences.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Join Premium
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
