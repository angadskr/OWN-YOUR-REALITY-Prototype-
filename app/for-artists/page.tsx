import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Music, Palette, Coins, Users, BarChart3, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ForArtistsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-scanlines opacity-10"></div>

          {/* Animated circles */}
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-['Orbitron']">
                  Artist Portal
                </h1>
                <p className="text-xl text-blue-200 mb-8 font-['Rajdhani']">
                  Take control of your creative career with our revolutionary platform designed for independent artists.
                  Own your work, connect with fans, and monetize your art on your terms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/artists/dashboard">
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white shadow-glow-pink">
                      Enter Artist Dashboard
                    </Button>
                  </Link>
                  <Link href="/artists/signup">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-900/20 shadow-glow-blue"
                    >
                      Create Artist Account
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black rounded-lg overflow-hidden border border-purple-500/30">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Artist Dashboard Preview"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-950/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Orbitron']">
                Artist Tools & Features
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto font-['Rajdhani']">
                Everything you need to create, manage, and monetize your music career in one powerful platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Dashboard */}
              <Card className="bg-black/80 backdrop-blur-sm border border-blue-500/30 shadow-glow-blue">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 mb-4 text-blue-500" />
                  <CardTitle className="text-blue-400 font-['Orbitron']">Artist Dashboard</CardTitle>
                  <CardDescription className="text-blue-200">
                    Track your performance and manage your content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Get real-time analytics on streams, sales, and fan engagement. Monitor your growth and make
                    data-driven decisions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/dashboard">
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-900/20">
                      View Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Music Distribution */}
              <Card className="bg-black/80 backdrop-blur-sm border border-pink-500/30 shadow-glow-pink">
                <CardHeader>
                  <Music className="h-12 w-12 mb-4 text-pink-500" />
                  <CardTitle className="text-pink-400 font-['Orbitron']">Music Distribution</CardTitle>
                  <CardDescription className="text-blue-200">Release your music on your terms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Distribute your music to all major streaming platforms while retaining 100% ownership of your
                    masters and creative control.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/distribution">
                    <Button variant="outline" className="border-pink-500 text-pink-400 hover:bg-pink-900/20">
                      Distribute Music <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* NFT Creation */}
              <Card className="bg-black/80 backdrop-blur-sm border border-purple-500/30 shadow-glow-purple">
                <CardHeader>
                  <Coins className="h-12 w-12 mb-4 text-purple-500" />
                  <CardTitle className="text-purple-400 font-['Orbitron']">NFT Creation</CardTitle>
                  <CardDescription className="text-blue-200">Tokenize your music and digital assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Create and sell NFTs directly to your fans. Offer exclusive content, experiences, and ownership
                    rights through blockchain technology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/nft-creator">
                    <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-900/20">
                      Create NFTs <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Fashion Design */}
              <Card className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 shadow-glow-cyan">
                <CardHeader>
                  <Palette className="h-12 w-12 mb-4 text-cyan-500" />
                  <CardTitle className="text-cyan-400 font-['Orbitron']">Fashion Design</CardTitle>
                  <CardDescription className="text-blue-200">Launch your own fashion line</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Design and sell custom merchandise, apparel, and fashion items. Expand your brand beyond music with
                    physical and digital fashion.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/fashion">
                    <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/20">
                      Design Fashion <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Fan Engagement */}
              <Card className="bg-black/80 backdrop-blur-sm border border-green-500/30 shadow-glow-green">
                <CardHeader>
                  <Users className="h-12 w-12 mb-4 text-green-500" />
                  <CardTitle className="text-green-400 font-['Orbitron']">Fan Engagement</CardTitle>
                  <CardDescription className="text-blue-200">Connect directly with your audience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Build a direct relationship with your fans through announcements, exclusive content, and interactive
                    experiences without platform interference.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/fan-engagement">
                    <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-900/20">
                      Engage Fans <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Event Management */}
              <Card className="bg-black/80 backdrop-blur-sm border border-orange-500/30 shadow-glow-orange">
                <CardHeader>
                  <Calendar className="h-12 w-12 mb-4 text-orange-500" />
                  <CardTitle className="text-orange-400 font-['Orbitron']">Event Management</CardTitle>
                  <CardDescription className="text-blue-200">Schedule and promote your events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 font-['Rajdhani']">
                    Create and manage physical and virtual events. Sell tickets, promote shows, and host livestreams
                    directly through the platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/artists/events">
                    <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-900/20">
                      Manage Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-['Orbitron']">
                Artist Success Stories
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto font-['Rajdhani']">
                Hear from artists who have transformed their careers on our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-50"></div>
                <div className="relative bg-black p-8 rounded-lg border border-purple-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-pink-500">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Artist Portrait"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-400 font-['Orbitron']">Synthia Wave</h3>
                      <p className="text-blue-200">Electronic Music Producer</p>
                    </div>
                  </div>
                  <p className="text-blue-200 mb-6 font-['Rajdhani']">
                    "This platform changed everything for me. I went from struggling to get noticed to building a
                    sustainable career with direct fan support. The NFT tools helped me fund my latest album without
                    giving up any rights."
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-50"></div>
                <div className="relative bg-black p-8 rounded-lg border border-blue-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-500">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Artist Portrait"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 font-['Orbitron']">Neo Verse</h3>
                      <p className="text-blue-200">Hip-Hop Artist & Producer</p>
                    </div>
                  </div>
                  <p className="text-blue-200 mb-6 font-['Rajdhani']">
                    "The fashion integration allowed me to expand my brand beyond music. I launched a streetwear line
                    that now accounts for 40% of my income. The direct fan investment model is revolutionary."
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur opacity-50"></div>
                <div className="relative bg-black p-8 rounded-lg border border-green-500/30">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-green-500">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Artist Portrait"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-400 font-['Orbitron']">Astral Echo</h3>
                      <p className="text-blue-200">Indie Band</p>
                    </div>
                  </div>
                  <p className="text-blue-200 mb-6 font-['Rajdhani']">
                    "We used the platform to fund our world tour through fan investments. The virtual concert tools
                    allowed us to reach fans globally. We've tripled our income while maintaining complete creative
                    control."
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-scanlines opacity-5"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-['Orbitron'] shadow-glow">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-['Rajdhani']">
              Join thousands of independent artists who are taking control of their creative careers and building
              sustainable businesses on their own terms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/artists/signup">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 shadow-glow">
                  Create Artist Account
                </Button>
              </Link>
              <Link href="/artists/demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-glow">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
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
