import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FanNavbar from "@/components/fan-navbar"
import FanSidebar from "@/components/fan-sidebar"
import PremiumPlans from "@/components/premium-plans"
import PremiumContent from "@/components/premium-content"
import PremiumArtists from "@/components/premium-artists"
import PremiumBenefits from "@/components/premium-benefits"

export default function FanPremiumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <FanNavbar />
      <div className="flex flex-1">
        <FanSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Premium Subscriptions</h1>
              <p className="text-zinc-400">Get exclusive access to your favorite artists' premium content</p>
            </div>

            <Tabs defaultValue="plans" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1">
                <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
                <TabsTrigger value="content">Premium Content</TabsTrigger>
                <TabsTrigger value="artists">Featured Artists</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>

              <TabsContent value="plans" className="space-y-8">
                <PremiumPlans />
              </TabsContent>

              <TabsContent value="content" className="space-y-8">
                <PremiumContent />
              </TabsContent>

              <TabsContent value="artists" className="space-y-8">
                <PremiumArtists />
              </TabsContent>

              <TabsContent value="benefits" className="space-y-8">
                <PremiumBenefits />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
