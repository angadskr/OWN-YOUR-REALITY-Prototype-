import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ArtistNavbar from "@/components/artist-navbar"
import ArtistSidebar from "@/components/artist-sidebar"
import VirtualConcerts from "@/components/virtual-concerts"
import LivestreamManager from "@/components/livestream-manager"
import SignedCollectibles from "@/components/signed-collectibles"

export default function VirtualEventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ArtistNavbar />
      <div className="flex flex-1">
        <ArtistSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Virtual Events & Collectibles</h1>
              <p className="text-zinc-400">Manage your virtual concerts, livestreams, and signed memorabilia</p>
            </div>

            <Tabs defaultValue="concerts" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1">
                <TabsTrigger value="concerts">Virtual Concerts</TabsTrigger>
                <TabsTrigger value="livestreams">Livestreams</TabsTrigger>
                <TabsTrigger value="collectibles">Signed Collectibles</TabsTrigger>
              </TabsList>

              <TabsContent value="concerts" className="space-y-8">
                <VirtualConcerts />
              </TabsContent>

              <TabsContent value="livestreams" className="space-y-8">
                <LivestreamManager />
              </TabsContent>

              <TabsContent value="collectibles" className="space-y-8">
                <SignedCollectibles />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
