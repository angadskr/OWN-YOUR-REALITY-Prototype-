"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Disc3, Music, ImageIcon, FileText, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { Users, BarChart3 } from "lucide-react"

interface ChartTooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: string
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 rounded-md p-2 text-sm">
        <p className="font-bold">{`${label}`}</p>
        {payload.map((item, index) => (
          <p key={`item-${index}`} className="text-zinc-400">
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    )
  }

  return null
}

interface ChartContainerProps {
  children: React.ReactNode
  config: {
    [key: string]: {
      label: string
      color: string
    }
  }
}

const ChartContainer: React.FC<ChartContainerProps> = ({ children, config }) => {
  return <div>{children}</div>
}

export default function NFTCreator() {
  const [nftType, setNftType] = useState("music")
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10])

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">NFT Creator</h2>
          <p className="text-zinc-400">Tokenize your music and art as NFTs</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Create New NFT
        </Button>
      </div>

      <Tabs defaultValue="create" className="space-y-8">
        <TabsList className="bg-zinc-900">
          <TabsTrigger value="create">Create NFT</TabsTrigger>
          <TabsTrigger value="manage">Manage NFTs</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Create New NFT</CardTitle>
              <CardDescription>Tokenize your work as an NFT to sell directly to fans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nft-type">NFT Type</Label>
                    <Select defaultValue={nftType} onValueChange={setNftType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select NFT type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="music">Music NFT</SelectItem>
                        <SelectItem value="artwork">Artwork NFT</SelectItem>
                        <SelectItem value="fashion">Fashion NFT</SelectItem>
                        <SelectItem value="experience">Experience NFT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nft-title">NFT Title</Label>
                    <Input id="nft-title" placeholder="Enter NFT title" className="bg-zinc-800 border-zinc-700" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nft-description">Description</Label>
                    <Textarea
                      id="nft-description"
                      placeholder="Describe your NFT"
                      className="bg-zinc-800 border-zinc-700 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Royalty Percentage</Label>
                    <div className="pt-4">
                      <Slider defaultValue={royaltyPercentage} max={25} step={1} onValueChange={setRoyaltyPercentage} />
                      <div className="mt-2 text-center text-sm">{royaltyPercentage}% royalty on secondary sales</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nft-price">Price (ETH)</Label>
                    <Input id="nft-price" type="number" placeholder="0.05" className="bg-zinc-800 border-zinc-700" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nft-supply">Supply</Label>
                    <Select defaultValue="1">
                      <SelectTrigger>
                        <SelectValue placeholder="Select supply" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 (Unique)</SelectItem>
                        <SelectItem value="10">10 (Limited)</SelectItem>
                        <SelectItem value="50">50 (Limited)</SelectItem>
                        <SelectItem value="100">100 (Limited)</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Upload {nftType === "music" ? "Audio File" : "Artwork"}</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          {nftType === "music" ? (
                            <Music className="w-10 h-10 mb-3 text-zinc-400" />
                          ) : (
                            <ImageIcon className="w-10 h-10 mb-3 text-zinc-400" />
                          )}
                          <p className="mb-2 text-sm text-zinc-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-zinc-500">
                            {nftType === "music" ? "MP3, WAV (MAX. 50MB)" : "PNG, JPG, GIF (MAX. 10MB)"}
                          </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  {nftType === "music" && (
                    <div className="space-y-2">
                      <Label>Upload Cover Art</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="cover-art-file"
                          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-zinc-800 border-zinc-700 hover:bg-zinc-700"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <ImageIcon className="w-8 h-8 mb-3 text-zinc-400" />
                            <p className="text-xs text-zinc-500">PNG, JPG, GIF (MAX. 10MB)</p>
                          </div>
                          <input id="cover-art-file" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label>Perks & Utilities</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-md">
                        <input type="checkbox" id="perk-1" className="rounded text-primary" />
                        <Label htmlFor="perk-1" className="text-sm">
                          Exclusive content access
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-md">
                        <input type="checkbox" id="perk-2" className="rounded text-primary" />
                        <Label htmlFor="perk-2" className="text-sm">
                          Virtual meet & greet
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-md">
                        <input type="checkbox" id="perk-3" className="rounded text-primary" />
                        <Label htmlFor="perk-3" className="text-sm">
                          Metaverse concert ticket
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 bg-zinc-800 p-2 rounded-md">
                        <input type="checkbox" id="perk-4" className="rounded text-primary" />
                        <Label htmlFor="perk-4" className="text-sm">
                          Physical merchandise discount
                        </Label>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Plus className="h-4 w-4 mr-2" /> Add Custom Perk
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save Draft</Button>
              <Button className="bg-primary hover:bg-primary/90">Create NFT</Button>
            </CardFooter>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>NFT Preview</CardTitle>
              <CardDescription>Preview how your NFT will appear in the marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-square bg-zinc-800 rounded-lg flex items-center justify-center">
                  <Disc3 className="h-16 w-16 text-zinc-700" />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-xl font-bold">Your NFT Title</h3>
                  <p className="text-zinc-400">
                    Your NFT description will appear here. Make it compelling to attract potential buyers.
                  </p>

                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-zinc-500">Price</p>
                      <p className="font-bold">0.05 ETH</p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Supply</p>
                      <p className="font-bold">1</p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Royalty</p>
                      <p className="font-bold">{royaltyPercentage}%</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500 mb-2">Perks & Utilities</p>
                    <ul className="space-y-1">
                      <li className="text-sm flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        Exclusive content access
                      </li>
                      <li className="text-sm flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        Virtual meet & greet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-zinc-900 border-zinc-800">
                <div className="aspect-square relative bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Disc3 className="h-16 w-16 text-zinc-700" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Sonic Dreamscape #{item}</CardTitle>
                  <CardDescription>Limited Edition NFT</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Price</span>
                    <span>0.{Math.floor(Math.random() * 50)} ETH</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Sales</span>
                    <span>
                      {Math.floor(Math.random() * 10)}/{10}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Revenue</span>
                    <span>${Math.floor(Math.random() * 1000)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Manage NFT
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>NFT Performance</CardTitle>
              <CardDescription>Track the performance of your NFT collections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ChartContainer
                  config={{
                    sales: {
                      label: "Sales",
                      color: "hsl(var(--chart-1))",
                    },
                    views: {
                      label: "Views",
                      color: "hsl(var(--chart-2))",
                    },
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { month: "Jan", sales: 5, views: 120, revenue: 250 },
                        { month: "Feb", sales: 8, views: 180, revenue: 400 },
                        { month: "Mar", sales: 12, views: 240, revenue: 600 },
                        { month: "Apr", sales: 10, views: 280, revenue: 500 },
                        { month: "May", sales: 15, views: 320, revenue: 750 },
                        { month: "Jun", sales: 20, views: 400, revenue: 1000 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>NFT Best Practices</CardTitle>
          <CardDescription>Tips to maximize the success of your NFT drops</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="rounded-full bg-primary/20 p-2 w-10 h-10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">Clear Utility</h3>
              <p className="text-sm text-zinc-400">
                Ensure your NFTs offer clear value beyond the digital asset itself, such as exclusive content or
                experiences.
              </p>
            </div>

            <div className="space-y-2">
              <div className="rounded-full bg-primary/20 p-2 w-10 h-10 flex items-center justify-center">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">Community Engagement</h3>
              <p className="text-sm text-zinc-400">
                Build anticipation before your drop by engaging with your community and creating exclusive previews.
              </p>
            </div>

            <div className="space-y-2">
              <div className="rounded-full bg-primary/20 p-2 w-10 h-10 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium">Strategic Pricing</h3>
              <p className="text-sm text-zinc-400">
                Price your NFTs strategically based on rarity, utility, and your target audience's purchasing power.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="px-0 text-primary">
            Read full NFT guide <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
