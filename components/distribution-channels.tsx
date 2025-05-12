import Image from "next/image"
import { Music, Disc3, Shirt, Radio, Smartphone, Globe, Headphones, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DistributionChannels() {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Multi-Channel Distribution
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Reach your audience across physical, digital, and streaming platforms
          </p>
        </div>

        <Tabs defaultValue="physical" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-primary/20 p-1">
              <TabsTrigger value="physical">Physical</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
              <TabsTrigger value="streaming">Streaming</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="physical" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Physical Distribution</h3>
                <p className="mb-6 text-foreground/80">
                  Create tangible products that fans can collect, wear, and display. Our platform helps you design,
                  manufacture, and distribute physical merchandise with integrated digital features.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Disc3 className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle className="text-lg">Vinyl & CDs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Limited edition physical releases with AR-enhanced packaging
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Shirt className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle className="text-lg">Apparel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Custom clothing with embedded NFC tags for digital experiences
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <ShoppingBag className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle className="text-lg">Merchandise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Collectible items that bridge physical and digital worlds
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Headphones className="h-8 w-8 mb-2 text-primary" />
                      <CardTitle className="text-lg">Accessories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Branded accessories with exclusive digital content access
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                  Explore Physical Distribution
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30"></div>
                <div className="relative bg-card rounded-lg overflow-hidden border border-primary/30 retro-card">
                  <Image
                    src="/images/physical-distribution.jpg"
                    alt="Physical Distribution"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Limited Edition Vinyl</h3>
                    <p className="text-foreground/80 text-sm">
                      Each physical release includes digital ownership rights and exclusive content access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="digital" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-30"></div>
                  <div className="relative bg-card rounded-lg overflow-hidden border border-secondary/30 retro-card">
                    <Image
                      src="/images/digital-distribution.jpg"
                      alt="Digital Distribution"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">NFT Music Collection</h3>
                      <p className="text-foreground/80 text-sm">
                        Tokenized music with verifiable ownership and royalty sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Digital Distribution</h3>
                <p className="mb-6 text-foreground/80">
                  Distribute your work as digital assets with built-in monetization and ownership verification. From
                  NFTs to digital downloads, we provide the tools to reach global audiences.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Music className="h-8 w-8 mb-2 text-secondary" />
                      <CardTitle className="text-lg">NFT Music</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Tokenized music with verifiable ownership and royalty sharing
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Globe className="h-8 w-8 mb-2 text-secondary" />
                      <CardTitle className="text-lg">Web3 Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Distribution to decentralized platforms and marketplaces
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Smartphone className="h-8 w-8 mb-2 text-secondary" />
                      <CardTitle className="text-lg">Mobile Apps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Custom mobile experiences for your most dedicated fans
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Disc3 className="h-8 w-8 mb-2 text-secondary" />
                      <CardTitle className="text-lg">Digital Downloads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        High-quality downloads with embedded metadata and artwork
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button className="mt-8 bg-secondary hover:bg-secondary/90 text-white">
                  Explore Digital Distribution
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="streaming" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Streaming Distribution</h3>
                <p className="mb-6 text-foreground/80">
                  Reach millions of listeners through traditional streaming platforms while maintaining control over
                  your data and maximizing your revenue through our enhanced distribution tools.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Music className="h-8 w-8 mb-2 text-accent" />
                      <CardTitle className="text-lg">Music Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Distribution to all major streaming services with enhanced analytics
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Radio className="h-8 w-8 mb-2 text-accent" />
                      <CardTitle className="text-lg">Internet Radio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Placement on curated stations and algorithmic radio services
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Globe className="h-8 w-8 mb-2 text-accent" />
                      <CardTitle className="text-lg">Social Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Optimized content for social media and short-form video platforms
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="retro-card bg-card/80 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <Headphones className="h-8 w-8 mb-2 text-accent" />
                      <CardTitle className="text-lg">Podcast Networks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">
                        Music placement in podcasts and audio content networks
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button className="mt-8 bg-accent hover:bg-accent/90 text-white">Explore Streaming Distribution</Button>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-30"></div>
                <div className="relative bg-card rounded-lg overflow-hidden border border-accent/30 retro-card">
                  <Image
                    src="/images/streaming-distribution.jpg"
                    alt="Streaming Distribution"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Enhanced Streaming</h3>
                    <p className="text-foreground/80 text-sm">
                      Get your music on all major platforms while retaining ownership and maximizing revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
