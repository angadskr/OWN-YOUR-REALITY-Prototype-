"use client"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Upload,
} from "recharts"
import { ArrowUpRight, Disc3, Shirt, Users, DollarSign, Calendar, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const revenueData = [
  { month: "Jan", music: 1200, nfts: 900, fashion: 500 },
  { month: "Feb", music: 1900, nfts: 1200, fashion: 700 },
  { month: "Mar", music: 1500, nfts: 1400, fashion: 600 },
  { month: "Apr", music: 2000, nfts: 1800, fashion: 1000 },
  { month: "May", music: 2400, nfts: 2000, fashion: 1200 },
  { month: "Jun", music: 1800, nfts: 2400, fashion: 1500 },
]

const revenueSourceData = [
  { name: "Music Streaming", value: 45 },
  { name: "NFT Sales", value: 30 },
  { name: "Fashion", value: 15 },
  { name: "Fan Investments", value: 10 },
]

const COLORS = ["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"]

export default function ArtistDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,546</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +18.2% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Music Streams</CardTitle>
            <Disc3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45,678</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +12.5% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">NFT Sales</CardTitle>
            <Disc3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +32.1% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fan Community</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 inline-flex items-center">
                +8.3% <ArrowUpRight className="ml-1 h-3 w-3" />
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Charts */}
      <div className="grid gap-4 md:grid-cols-7">
        <Card className="bg-zinc-900 border-zinc-800 md:col-span-5">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Your revenue breakdown across different streams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  music: {
                    label: "Music",
                    color: "hsl(var(--chart-1))",
                  },
                  nfts: {
                    label: "NFTs",
                    color: "hsl(var(--chart-2))",
                  },
                  fashion: {
                    label: "Fashion",
                    color: "hsl(var(--chart-3))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="music" stackId="a" fill="var(--color-music)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="nfts" stackId="a" fill="var(--color-nfts)" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="fashion" stackId="a" fill="var(--color-fashion)" radius={[4, 4, 0, 0]} />
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
                    data={revenueSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-1">
              {revenueSourceData.map((entry, index) => (
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

      {/* Recent Activity & Upcoming */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest transactions and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">NFT Sale: Sonic Dreamscape #42</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="text-sm font-medium">+$450</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Disc3 className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Music Royalty Payment</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
                <div className="text-sm font-medium">+$320</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Shirt className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Fashion Collection Sale</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <div className="text-sm font-medium">+$180</div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Fan Investment Campaign</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
                <div className="text-sm font-medium">+$2,500</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0 text-primary">
              View all activity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled releases and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Calendar className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New Single Release</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 9:00 AM</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Disc3 className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">NFT Collection Launch</p>
                  <p className="text-xs text-muted-foreground">June 15, 2:00 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Shirt className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Summer Fashion Drop</p>
                  <p className="text-xs text-muted-foreground">June 20, 10:00 AM</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-primary/20 p-2">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Virtual Fan Meet & Greet</p>
                  <p className="text-xs text-muted-foreground">June 25, 7:00 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="px-0 text-primary">
              View full calendar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Upload Music</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Upload className="mr-2 h-4 w-4" /> Upload Track
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Create NFT</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Disc3 className="mr-2 h-4 w-4" /> Create NFT
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Design Merch</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Shirt className="mr-2 h-4 w-4" /> Create Design
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Launch Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Users className="mr-2 h-4 w-4" /> Start Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
