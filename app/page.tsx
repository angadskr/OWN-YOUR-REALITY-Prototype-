import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Disc3,
  Palette,
  Coins,
  Users,
  Sparkles,
  Zap,
  Bell,
  CalendarIcon,
  Music,
  ShoppingBag,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RetroGridBackground from "@/components/retro-grid-background"
import AugmentedRealitySection from "@/components/augmented-reality-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-cyber-black">
      <RetroGridBackground />
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        {/* Announcements Feature Highlight */}
        <section className="py-16 relative overflow-hidden bg-cyber-dark">
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute inset-0 scanlines opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-4 glitch-text bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue font-['Orbitron']"
                data-text="Stay Connected"
              >
                Stay Connected
              </h2>
              <p className="text-xl text-pastel-blue max-w-3xl mx-auto font-['Rajdhani']">
                Never miss a beat with our new artist announcements system
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-neon-pink to-neon-blue p-3 rounded-lg">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neon-pink mb-2 font-['Orbitron']">Real-time Updates</h3>
                      <p className="text-pastel-blue font-['Rajdhani']">
                        Get instant notifications about new releases, events, merchandise drops, and livestreams from
                        your favorite artists.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-green p-3 rounded-lg">
                      <CalendarIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neon-blue mb-2 font-['Orbitron']">Never Miss an Event</h3>
                      <p className="text-pastel-blue font-['Rajdhani']">
                        Set reminders for upcoming concerts, virtual events, and exclusive fan experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-neon-green to-neon-yellow p-3 rounded-lg">
                      <Users className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neon-green mb-2 font-['Orbitron']">
                        Direct Artist Connection
                      </h3>
                      <p className="text-pastel-blue font-['Rajdhani']">
                        Receive personal updates directly from artists without algorithmic filtering or third-party
                        interference.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gradient-to-r from-neon-pink to-neon-blue hover:from-neon-pink/90 hover:to-neon-blue/90 text-white border-none neon-glow">
                      Explore Announcements
                    </Button>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-pink to-neon-blue rounded-lg blur opacity-75"></div>
                  <div className="relative bg-cyber-dark rounded-lg overflow-hidden border border-neon-blue/30 retro-card">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Artist Announcements"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyber-black to-transparent p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-neon-pink/30 flex items-center justify-center border-2 border-neon-pink">
                          <Music className="h-5 w-5 text-neon-pink" />
                        </div>
                        <div>
                          <p className="text-neon-blue font-medium">Synthia Wave</p>
                          <p className="text-xs text-pastel-blue/60">Just now</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-pastel-blue mb-2">Neon Dreams Tour Announced!</h3>
                      <p className="text-pastel-blue/80 text-sm">
                        Join me on my biggest tour yet with stops in 15 cities. VIP packages available with exclusive
                        meet & greets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Augmented Reality Section */}
        <AugmentedRealitySection />

        {/* Distribution Channels */}
        <section className="py-20 relative overflow-hidden bg-cyber-dark">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute inset-0 scanlines opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green font-['Orbitron']">
                Distribution Channels
              </h2>
              <p className="text-xl text-pastel-blue max-w-3xl mx-auto font-['Rajdhani']">
                Reach your audience through multiple channels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Physical */}
              <div className="retro-card p-6 rounded-lg border border-neon-pink/30">
                <div className="h-12 w-12 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-neon-pink" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-neon-pink font-['Orbitron']">Physical</h3>
                <p className="text-pastel-blue mb-4 font-['Rajdhani']">
                  Create and distribute physical merchandise, vinyl records, CDs, and limited edition collectibles.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    <span className="text-pastel-blue">Vinyl Records & CDs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    <span className="text-pastel-blue">Merchandise & Apparel</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-pink mr-2"></span>
                    <span className="text-pastel-blue">Limited Edition Collectibles</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-neon-pink text-neon-pink hover:bg-neon-pink/10 neon-border"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Digital */}
              <div className="retro-card p-6 rounded-lg border border-neon-blue/30">
                <div className="h-12 w-12 rounded-full bg-neon-blue/20 flex items-center justify-center mb-4">
                  <Disc3 className="h-6 w-6 text-neon-blue" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-neon-blue font-['Orbitron']">Digital</h3>
                <p className="text-pastel-blue mb-4 font-['Rajdhani']">
                  Distribute your music digitally through streaming platforms, downloads, and exclusive digital content.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    <span className="text-pastel-blue">Digital Downloads</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    <span className="text-pastel-blue">NFT Collectibles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-blue mr-2"></span>
                    <span className="text-pastel-blue">Exclusive Digital Content</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10 neon-blue-border"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Streaming */}
              <div className="retro-card p-6 rounded-lg border border-neon-green/30">
                <div className="h-12 w-12 rounded-full bg-neon-green/20 flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-neon-green font-['Orbitron']">Streaming</h3>
                <p className="text-pastel-blue mb-4 font-['Rajdhani']">
                  Reach global audiences through streaming platforms while maintaining control over your content.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-green mr-2"></span>
                    <span className="text-pastel-blue">Music Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-green mr-2"></span>
                    <span className="text-pastel-blue">Live Streaming</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 rounded-full bg-neon-green mr-2"></span>
                    <span className="text-pastel-blue">Podcast Distribution</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-neon-green text-neon-green hover:bg-neon-green/10 neon-green-border"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="container mx-auto px-4 py-20 bg-cyber-black relative">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute inset-0 scanlines opacity-10"></div>

          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-blue font-['Orbitron']">
                Redefining Artist Empowerment
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-pastel-blue font-['Rajdhani']">
                A revolutionary platform where artists retain 100% ownership of their work while accessing innovative
                monetization models.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-pink/30">
                <CardHeader>
                  <Disc3 className="h-12 w-12 mb-4 text-neon-pink" />
                  <CardTitle className="text-neon-pink font-['Orbitron']">100% Ownership</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Artists keep their masters and intellectual property.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Unlike traditional labels, we believe artists should own their work. Retain full rights to your
                    music, fashion designs, and creative content.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/ownership" className="text-neon-pink flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-blue/30">
                <CardHeader>
                  <Coins className="h-12 w-12 mb-4 text-neon-blue" />
                  <CardTitle className="text-neon-blue font-['Orbitron']">NFT Monetization</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Tokenize your music and sell NFTs for exclusive content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Create unique digital assets that give fans ownership of exclusive content while generating
                    sustainable income for your creative work.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/nft" className="text-neon-blue flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-green/30">
                <CardHeader>
                  <Palette className="h-12 w-12 mb-4 text-neon-green" />
                  <CardTitle className="text-neon-green font-['Orbitron']">Fashion Integration</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Launch your own fashion line inspired by your creative work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Expand your brand beyond music with custom fashion collections. From physical merchandise to virtual
                    outfits for the metaverse.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/fashion" className="text-neon-green flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-yellow/30">
                <CardHeader>
                  <Users className="h-12 w-12 mb-4 text-neon-yellow" />
                  <CardTitle className="text-neon-yellow font-['Orbitron']">Fan Investment</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Let fans invest directly in your success.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Create a decentralized crowdfunding ecosystem where fans can purchase "fan tokens" and invest in
                    your projects while earning rewards.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/fan-investment" className="text-neon-yellow flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-purple/30">
                <CardHeader>
                  <Sparkles className="h-12 w-12 mb-4 text-neon-purple" />
                  <CardTitle className="text-neon-purple font-['Orbitron']">Artist Development</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Access coaching, branding guidance, and mentorship.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Our incubator provides resources to help you grow as an artist, from production workshops to
                    marketing strategies and legal support.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/development" className="text-neon-purple flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>

              <Card className="retro-card bg-cyber-dark/80 backdrop-blur-sm border border-neon-orange/30">
                <CardHeader>
                  <Zap className="h-12 w-12 mb-4 text-neon-orange" />
                  <CardTitle className="text-neon-orange font-['Orbitron']">Creator DAO</CardTitle>
                  <CardDescription className="text-pastel-blue">
                    Vote on platform decisions and shape the future.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-pastel-blue font-['Rajdhani']">
                    Join our Decentralized Autonomous Organization where artists vote on platform decisions, from
                    signing new talent to profit-sharing structures.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/dao" className="text-neon-orange flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-neon-pink to-neon-blue py-20 relative">
          <div className="absolute inset-0 cyber-grid opacity-10"></div>
          <div className="absolute inset-0 scanlines opacity-5"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-white font-['Orbitron'] neon-glow">
              Ready to Own Your Reality?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 font-['Rajdhani']">
              Join our platform today and revolutionize the way you create, share, and monetize your art.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Link href="/for-artists">
                <Button size="lg" className="bg-white text-neon-pink hover:bg-white/90 border-2 border-white">
                  Join as an Artist
                </Button>
              </Link>
              <Link href="/fans">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 neon-glow">
                  Join as a Fan
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
