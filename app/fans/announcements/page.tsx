import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Bell, Filter } from "lucide-react"
import ArtistAnnouncementCard from "@/components/artist-announcement-card"

export default function FanAnnouncementsPage() {
  // Sample data for announcements
  const announcements = [
    {
      id: "1",
      title: "Neon Dreams Tour 2025",
      type: "event" as const,
      date: "Apr 15, 2025",
      image: "/images/concert-1.jpg",
      description: "Join me on my biggest tour yet! VIP packages available with exclusive meet & greets.",
      artistName: "Synthia Wave",
      artistImage: "/images/artist-1.jpg",
      isNew: true,
    },
    {
      id: "2",
      title: "Digital Horizons EP",
      type: "release" as const,
      date: "Mar 30, 2025",
      image: "/images/album-1.jpg",
      description: "My new EP drops next week! Pre-save now to get exclusive bonus tracks.",
      artistName: "Cyber Punk",
      artistImage: "/images/artist-2.jpg",
      isNew: true,
    },
    {
      id: "3",
      title: "Retro Future Collection",
      type: "merch" as const,
      date: "Available Now",
      image: "/images/fashion-1.jpg",
      description: "Limited edition merch featuring holographic prints and glow-in-the-dark designs.",
      artistName: "Neon Lights",
      artistImage: "/images/artist-3.jpg",
      isNew: false,
    },
    {
      id: "4",
      title: "Studio Session Livestream",
      type: "livestream" as const,
      date: "Apr 2, 2025 • 8PM EST",
      image: "/images/livestream-1.jpg",
      description: "Watch me create my next hit live! Interact and influence the creative process.",
      artistName: "Digital Dreams",
      artistImage: "/images/artist-4.jpg",
      isNew: false,
    },
    {
      id: "5",
      title: "Holographic Vinyl Release",
      type: "release" as const,
      date: "May 10, 2025",
      image: "/images/album-2.jpg",
      description: "Special edition vinyl with AR features. Limited to 500 copies worldwide.",
      artistName: "Synthia Wave",
      artistImage: "/images/artist-1.jpg",
      isNew: false,
    },
    {
      id: "6",
      title: "Virtual Reality Concert",
      type: "event" as const,
      date: "Apr 20, 2025",
      image: "/images/concert-2.jpg",
      description: "Experience my music in a fully immersive VR environment with interactive elements.",
      artistName: "Cyber Punk",
      artistImage: "/images/artist-2.jpg",
      isNew: true,
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
              Artist Announcements
            </h1>
            <p className="text-gray-300 max-w-2xl">
              Stay updated with the latest news, events, releases, and more from your favorite artists.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20">
              <Bell className="h-4 w-4 mr-2" />
              Notification Settings
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search announcements..."
              className="pl-10 bg-black/50 border-purple-500/30 focus:border-purple-500 text-white"
            />
          </div>
          <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/20">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="releases">Releases</TabsTrigger>
            <TabsTrigger value="merch">Merchandise</TabsTrigger>
            <TabsTrigger value="livestreams">Livestreams</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-300 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mr-2 animate-pulse"></span>
                New Announcements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements
                  .filter((a) => a.isNew)
                  .map((announcement) => (
                    <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                  ))}
              </div>
            </div>

            <Separator className="my-8 bg-purple-500/30" />

            <div>
              <h2 className="text-xl font-semibold mb-4 text-cyan-300">Previous Announcements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements
                  .filter((a) => !a.isNew)
                  .map((announcement) => (
                    <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements
                .filter((a) => a.type === "event")
                .map((announcement) => (
                  <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="releases">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements
                .filter((a) => a.type === "release")
                .map((announcement) => (
                  <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="merch">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements
                .filter((a) => a.type === "merch")
                .map((announcement) => (
                  <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="livestreams">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements
                .filter((a) => a.type === "livestream")
                .map((announcement) => (
                  <ArtistAnnouncementCard key={announcement.id} {...announcement} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
