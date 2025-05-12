import Image from "next/image"
import { ArrowRight, Calendar, Users, Clock, Lightbulb, BookOpen, Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import RetroGridBackground from "@/components/retro-grid-background"

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <RetroGridBackground />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
          <div className="absolute inset-0 retro-grid opacity-30"></div>
          <div className="absolute inset-0 scanlines opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-text" data-text="Artist Workshops">
                Artist Workshops
              </h1>
              <p className="text-xl mb-8 text-foreground/80">
                Elevate your skills with hands-on workshops led by industry experts and successful artists.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white neon-glow">
                  Browse Workshops
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Suggest a Workshop <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Workshop Categories
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Explore our diverse range of workshops designed to help you grow in every aspect of your creative
                career.
              </p>
            </div>

            <Tabs defaultValue="music" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-background/50 backdrop-blur-sm border border-primary/20 p-1">
                  <TabsTrigger value="music">Music Production</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="creative">Creative</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="music" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Workshop 1 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Music Production Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Advanced Beat Making</h3>
                      <p className="text-foreground/80 mb-4">
                        Learn advanced techniques for creating professional beats from award-winning producers.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">April 15, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">24 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">3 hours</span>
                        </div>
                        <span className="font-bold">$149</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Workshop 2 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Mixing Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Mixing & Mastering Essentials</h3>
                      <p className="text-foreground/80 mb-4">
                        Master the art of mixing and mastering to achieve professional sound quality.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">April 22, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">18 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">4 hours</span>
                        </div>
                        <span className="font-bold">$199</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Workshop 3 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Songwriting Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Songwriting Masterclass</h3>
                      <p className="text-foreground/80 mb-4">
                        Develop your songwriting skills with techniques from chart-topping songwriters.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">May 5, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">12 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">3 hours</span>
                        </div>
                        <span className="font-bold">$179</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="business" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Business Workshop 1 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Music Business Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Music Business 101</h3>
                      <p className="text-foreground/80 mb-4">
                        Learn the fundamentals of the music business, contracts, and royalties.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">April 18, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">15 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">2 hours</span>
                        </div>
                        <span className="font-bold">$129</span>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Business Workshop 2 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Royalties Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-secondary/80 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Maximizing Royalties</h3>
                      <p className="text-foreground/80 mb-4">
                        Strategies to ensure you're collecting all the royalties you're entitled to.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">April 25, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">8 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">3 hours</span>
                        </div>
                        <span className="font-bold">$199</span>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Business Workshop 3 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="NFT Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">NFTs for Musicians</h3>
                      <p className="text-foreground/80 mb-4">
                        Learn how to create, market, and sell NFTs to generate new revenue streams.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">May 10, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">20 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-secondary mr-1" />
                          <span className="text-sm">4 hours</span>
                        </div>
                        <span className="font-bold">$249</span>
                      </div>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Register Now</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Marketing Workshop 1 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Social Media Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Social Media Strategy</h3>
                      <p className="text-foreground/80 mb-4">
                        Build an effective social media strategy to grow your audience and engagement.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">April 20, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">16 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">3 hours</span>
                        </div>
                        <span className="font-bold">$149</span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Marketing Workshop 2 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Content Strategy Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-accent/80 text-white text-xs px-2 py-1 rounded-full">New</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Content Strategy for Artists</h3>
                      <p className="text-foreground/80 mb-4">
                        Create a sustainable content plan that builds your brand and engages fans.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">May 2, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">22 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">2 hours</span>
                        </div>
                        <span className="font-bold">$129</span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Marketing Workshop 3 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Email Marketing Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Email Marketing for Musicians</h3>
                      <p className="text-foreground/80 mb-4">
                        Build and nurture your fan base with effective email marketing strategies.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">May 15, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">18 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-accent mr-1" />
                          <span className="text-sm">2.5 hours</span>
                        </div>
                        <span className="font-bold">$139</span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-white">Register Now</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="creative" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Creative Workshop 1 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Visual Branding Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Visual Branding for Artists</h3>
                      <p className="text-foreground/80 mb-4">
                        Create a cohesive visual identity that represents your music and resonates with fans.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">April 28, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">14 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">3 hours</span>
                        </div>
                        <span className="font-bold">$169</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Creative Workshop 2 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Music Video Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">DIY Music Videos</h3>
                      <p className="text-foreground/80 mb-4">
                        Learn how to create professional-looking music videos on a budget.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">May 8, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">10 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">4 hours</span>
                        </div>
                        <span className="font-bold">$199</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>

                  {/* Creative Workshop 3 */}
                  <div className="retro-card rounded-lg overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Stage Performance Workshop"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full">Limited</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Stage Performance Mastery</h3>
                      <p className="text-foreground/80 mb-4">
                        Enhance your stage presence and performance skills to captivate live audiences.
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">May 20, 2025</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">6 spots left</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-1" />
                          <span className="text-sm">5 hours</span>
                        </div>
                        <span className="font-bold">$249</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register Now</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Workshop Benefits */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Why Join Our Workshops?
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Our workshops are designed to provide practical skills and knowledge that you can immediately apply to
                your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="retro-card p-6 rounded-lg text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-foreground/80">
                  Learn from industry professionals with proven success and extensive experience.
                </p>
              </div>

              <div className="retro-card p-6 rounded-lg text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Networking</h3>
                <p className="text-foreground/80">
                  Connect with like-minded artists and industry professionals to expand your network.
                </p>
              </div>

              <div className="retro-card p-6 rounded-lg text-center">
                <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Practical Skills</h3>
                <p className="text-foreground/80">
                  Gain hands-on experience and actionable techniques you can apply immediately.
                </p>
              </div>

              <div className="retro-card p-6 rounded-lg text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-foreground/80">
                  Access to recordings, resources, and community support after the workshop ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Become an Instructor */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg retro-card">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Become a Workshop Instructor</h2>
                  <p className="text-foreground/80 mb-6">
                    Share your expertise with our community of artists. If you have valuable knowledge and experience to
                    share, we'd love to hear from you.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Earn income sharing your expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Build your reputation in the industry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Access our platform and marketing resources</span>
                    </li>
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90 text-white">Apply to Teach</Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Become an instructor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 glitch-text" data-text="Ready to Level Up?">
                Ready to Level Up?
              </h2>
              <p className="text-xl mb-8 text-foreground/80">
                Join our workshops and take your music career to the next level with expert guidance and practical
                skills.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white neon-glow">
                  Browse All Workshops
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Request Custom Workshop
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
