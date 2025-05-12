import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FanNavbar from "@/components/fan-navbar"
import FanSidebar from "@/components/fan-sidebar"
import ArtistDiscovery from "@/components/artist-discovery"
import NFTMarketplace from "@/components/nft-marketplace"
import FashionStore from "@/components/fashion-store"
import InvestmentPortfolio from "@/components/investment-portfolio"

export default function FansPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <FanNavbar />
      <div className="flex flex-1">
        <FanSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Fan Dashboard</h1>
              <p className="text-zinc-400">Discover, support, and invest in your favorite artists.</p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                <Input
                  placeholder="Search for artists, music, NFTs, or fashion..."
                  className="bg-zinc-900 border-zinc-800 pl-10 h-12"
                />
              </div>
            </div>

            <Tabs defaultValue="discover" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1">
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="nfts">NFT Marketplace</TabsTrigger>
                <TabsTrigger value="fashion">Fashion Store</TabsTrigger>
                <TabsTrigger value="investments">My Investments</TabsTrigger>
              </TabsList>

              <TabsContent value="discover" className="space-y-8">
                <ArtistDiscovery />
              </TabsContent>

              <TabsContent value="nfts" className="space-y-8">
                <NFTMarketplace />
              </TabsContent>

              <TabsContent value="fashion" className="space-y-8">
                <FashionStore />
              </TabsContent>

              <TabsContent value="investments" className="space-y-8">
                <InvestmentPortfolio />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
