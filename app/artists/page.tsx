import { Upload, Disc3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ArtistDashboard from "@/components/artist-dashboard"
import ArtistNavbar from "@/components/artist-navbar"
import ArtistSidebar from "@/components/artist-sidebar"
import RoyaltyTracker from "@/components/royalty-tracker"
import NFTCreator from "@/components/nft-creator"
import FashionDesigner from "@/components/fashion-designer"
import CampaignManager from "@/components/campaign-manager"
import CreatorDAO from "@/components/creator-dao"

export default function ArtistsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <ArtistNavbar />
      <div className="flex flex-1">
        <ArtistSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Artist Dashboard</h1>
              <p className="text-zinc-400">Manage your content, track revenue, and grow your brand.</p>
            </div>

            <Tabs defaultValue="dashboard" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="nfts">NFTs</TabsTrigger>
                <TabsTrigger value="fashion">Fashion</TabsTrigger>
                <TabsTrigger value="campaigns">Fan Campaigns</TabsTrigger>
                <TabsTrigger value="royalties">Royalties</TabsTrigger>
                <TabsTrigger value="dao">Creator DAO</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-8">
                <ArtistDashboard />
              </TabsContent>

              <TabsContent value="music" className="space-y-8">
                <div className="grid gap-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Your Music</h2>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Upload className="mr-2 h-4 w-4" /> Upload New Track
                    </Button>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                      <Card key={item} className="bg-zinc-900 border-zinc-800">
                        <div className="aspect-square relative bg-zinc-800">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Disc3 className="h-16 w-16 text-zinc-700" />
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>Track Title #{item}</CardTitle>
                          <CardDescription>Album: Your Latest Album</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-zinc-400">Streams</span>
                            <span>{Math.floor(Math.random() * 10000)}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-zinc-400">Revenue</span>
                            <span>${Math.floor(Math.random() * 1000)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Ownership</span>
                            <span className="text-primary">100%</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Manage Track
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Music Distribution</h3>
                    <p className="text-zinc-400 mb-4">
                      Distribute your music to all major streaming platforms while retaining 100% ownership of your
                      masters.
                    </p>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                          <CardTitle className="text-lg">Standard Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>All major streaming platforms</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>100% royalty retention</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Basic analytics</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Select
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-zinc-800 border-zinc-700 border-primary/50">
                        <CardHeader>
                          <CardTitle className="text-lg">Premium Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>All standard features</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Priority playlist placement</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Advanced analytics</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Marketing support</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full bg-primary hover:bg-primary/90">Select</Button>
                        </CardFooter>
                      </Card>

                      <Card className="bg-zinc-800 border-zinc-700">
                        <CardHeader>
                          <CardTitle className="text-lg">Pro Distribution</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>All premium features</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Dedicated account manager</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>PR and media support</span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                              <span>Cross-platform promotion</span>
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Select
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="nfts" className="space-y-8">
                <NFTCreator />
              </TabsContent>

              <TabsContent value="fashion" className="space-y-8">
                <FashionDesigner />
              </TabsContent>

              <TabsContent value="campaigns" className="space-y-8">
                <CampaignManager />
              </TabsContent>

              <TabsContent value="royalties" className="space-y-8">
                <RoyaltyTracker />
              </TabsContent>

              <TabsContent value="dao" className="space-y-8">
                <CreatorDAO />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
