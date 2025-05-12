"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Wallet, ArrowRight, FileText, Users, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const royaltyData = [
  { month: "Jan", streaming: 1200, licensing: 500, nfts: 300 },
  { month: "Feb", streaming: 1400, licensing: 600, nfts: 450 },
  { month: "Mar", streaming: 1100, licensing: 800, nfts: 600 },
  { month: "Apr", streaming: 1600, licensing: 700, nfts: 550 },
  { month: "May", streaming: 1800, licensing: 900, nfts: 700 },
  { month: "Jun", streaming: 2000, licensing: 1100, nfts: 850 },
]

const royaltySourceData = [
  { name: "Streaming", value: 55 },
  { name: "Licensing", value: 25 },
  { name: "NFT Royalties", value: 15 },
  { name: "Other", value: 5 },
]

const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"]

export default function RoyaltyTracker() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Royalty Tracker</h2>
          <p className="text-zinc-400">Track and manage your royalty income</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Wallet className="mr-2 h-4 w-4" /> Withdraw Earnings
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Royalties</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,546</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">+22.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Streaming Royalties</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,700</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">+11.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Licensing Royalties</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,140</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">+22.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NFT Royalties</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,706</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">+41.3%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="streaming">Streaming</TabsTrigger>
          <TabsTrigger value="licensing">Licensing</TabsTrigger>
          <TabsTrigger value="nfts">NFT Royalties</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="bg-zinc-900 border-zinc-800 md:col-span-5">
              <CardHeader>
                <CardTitle>Royalty Overview</CardTitle>
                <CardDescription>Your royalty income across different streams</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ChartContainer
                    config={{
                      streaming: {
                        label: "Streaming",
                        color: "hsl(var(--chart-1))",
                      },
                      licensing: {
                        label: "Licensing",
                        color: "hsl(var(--chart-2))",
                      },
                      nfts: {
                        label: "NFTs",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={royaltyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#888" />
                        <YAxis stroke="#888" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="streaming" stackId="a" fill="var(--color-streaming)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="licensing" stackId="a" fill="var(--color-licensing)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="nfts" stackId="a" fill="var(--color-nfts)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 md:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
                <CardDescription>Distribution by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={royaltySourceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {royaltySourceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 space-y-1">
                  {royaltySourceData.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center text-sm">
                      <div
                        className="mr-2 h-3 w-3 rounded-full"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      />
                      <span>
                        {entry.name}: {entry.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Recent Royalty Payments</CardTitle>
              <CardDescription>Your latest royalty payments across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Spotify Royalty Payment</p>
                    <p className="text-xs text-muted-foreground">June 1, 2023</p>
                  </div>
                  <div className="text-sm font-medium">+$1,245.32</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Apple Music Royalty Payment</p>
                    <p className="text-xs text-muted-foreground">June 1, 2023</p>
                  </div>
                  <div className="text-sm font-medium">+$876.45</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">TV Commercial Licensing</p>
                    <p className="text-xs text-muted-foreground">May 28, 2023</p>
                  </div>
                  <div className="text-sm font-medium">+$2,500.00</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">NFT Secondary Sale Royalties</p>
                    <p className="text-xs text-muted-foreground">May 25, 2023</p>
                  </div>
                  <div className="text-sm font-medium">+$450.00</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="px-0 text-primary">
                View all transactions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="streaming" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Streaming Royalties</CardTitle>
              <CardDescription>Track your streaming royalties across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Streaming platforms would be listed here */}
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Spotify</p>
                    <div className="h-2 w-full rounded-full bg-zinc-700 mt-1">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div className="text-sm font-medium">$2,245.32</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Apple Music</p>
                    <div className="h-2 w-full rounded-full bg-zinc-700 mt-1">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "30%" }} />
                    </div>
                  </div>
                  <div className="text-sm font-medium">$1,476.45</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">YouTube Music</p>
                    <div className="h-2 w-full rounded-full bg-zinc-700 mt-1">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "15%" }} />
                    </div>
                  </div>
                  <div className="text-sm font-medium">$732.18</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Other Platforms</p>
                    <div className="h-2 w-full rounded-full bg-zinc-700 mt-1">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "10%" }} />
                    </div>
                  </div>
                  <div className="text-sm font-medium">$246.05</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="licensing" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Licensing Royalties</CardTitle>
              <CardDescription>Track your licensing deals and royalties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Licensing deals would be listed here */}
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">TV Commercial - Brand X</p>
                    <p className="text-xs text-muted-foreground">1-year license</p>
                  </div>
                  <div className="text-sm font-medium">$2,500.00</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Film Soundtrack</p>
                    <p className="text-xs text-muted-foreground">Perpetual license</p>
                  </div>
                  <div className="text-sm font-medium">$1,800.00</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Video Game Soundtrack</p>
                    <p className="text-xs text-muted-foreground">Perpetual license</p>
                  </div>
                  <div className="text-sm font-medium">$3,200.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nfts" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>NFT Royalties</CardTitle>
              <CardDescription>Track your NFT secondary sale royalties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* NFT royalties would be listed here */}
                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Sonic Dreamscape #42</p>
                    <p className="text-xs text-muted-foreground">10% royalty on secondary sales</p>
                  </div>
                  <div className="text-sm font-medium">$450.00</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Digital Fashion Piece #08</p>
                    <p className="text-xs text-muted-foreground">15% royalty on secondary sales</p>
                  </div>
                  <div className="text-sm font-medium">$320.00</div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 rounded-full bg-primary/20 p-2">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Beat Collection Vol. 3</p>
                    <p className="text-xs text-muted-foreground">10% royalty on secondary sales</p>
                  </div>
                  <div className="text-sm font-medium">$280.00</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Royalty Settings</CardTitle>
              <CardDescription>Configure your royalty distribution and payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Royalty Splits</h3>
                  <p className="text-sm text-zinc-400">Configure how royalties are split between collaborators</p>
                  <Button className="mt-2">
                    <Settings className="mr-2 h-4 w-4" /> Configure Splits
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Payment Methods</h3>
                  <p className="text-sm text-zinc-400">Set up your preferred payment methods for royalty withdrawals</p>
                  <Button className="mt-2">
                    <Wallet className="mr-2 h-4 w-4" /> Manage Payment Methods
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Automatic Withdrawals</h3>
                  <p className="text-sm text-zinc-400">
                    Configure automatic withdrawals when your balance reaches a certain threshold
                  </p>
                  <Button className="mt-2">
                    <Settings className="mr-2 h-4 w-4" /> Configure Withdrawals
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Royalty Distribution</CardTitle>
          <CardDescription>Manage royalty splits with collaborators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium mb-4">Collaborator Splits</h3>
              <p className="text-zinc-400 mb-4">
                Configure how royalties are split between songwriters, producers, and other collaborators. Our
                blockchain-based system ensures transparent and automatic payments.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-4 w-4" /> Manage Collaborators
              </Button>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6">
              <h4 className="font-medium mb-4">Example Split: "Summer Nights"</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-700 mr-2"></div>
                    <span>You (Primary Artist)</span>
                  </div>
                  <span>60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-700 mr-2"></div>
                    <span>Alex R. (Producer)</span>
                  </div>
                  <span>25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-zinc-700 mr-2"></div>
                    <span>Zara C. (Co-writer)</span>
                  </div>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
