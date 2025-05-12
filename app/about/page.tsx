import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Zap, Shield, Globe, Award, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          <div className="absolute inset-0 bg-scanlines opacity-10"></div>

          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-['Orbitron']">
              About Own Your Reality
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 font-['Rajdhani']">
              We're revolutionizing the music industry by putting artists first and creating a sustainable ecosystem
              where creativity thrives without compromise.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/for-artists">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white shadow-glow-pink">
                  Join as an Artist
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-900/20 shadow-glow-blue"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-950/10 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Orbitron']">
                  Our Mission
                </h2>
                <p className="text-lg text-blue-200 mb-6 font-['Rajdhani']">
                  We believe that artists should own their work, control their careers, and benefit directly from their
                  success. Our platform is built on three core principles:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-full">
                      <Shield className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-pink-400 mb-2 font-['Orbitron']">100% Ownership</h3>
                      <p className="text-blue-200 font-['Rajdhani']">
                        Artists retain complete ownership of their masters, intellectual property, and creative work.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                      <Zap className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-400 mb-2 font-['Orbitron']">Direct Monetization</h3>
                      <p className="text-blue-200 font-['Rajdhani']">
                        Innovative tools for artists to monetize their work directly through fans, without middlemen
                        taking the majority of profits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                      <Users className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2 font-['Orbitron']">Community Governance</h3>
                      <p className="text-blue-200 font-['Rajdhani']">
                        A platform where artists and fans collectively shape the future through our Creator DAO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-75"></div>
                <div className="relative bg-black rounded-lg overflow-hidden border border-blue-500/30">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Mission"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 font-['Orbitron']">
                Meet Our Team
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto font-['Rajdhani']">
                A diverse group of music industry veterans, tech innovators, and passionate creators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-lg border border-pink-500/30">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-pink-500">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-pink-400 mb-1 font-['Orbitron']">Alex Rivera</h3>
                  <p className="text-center text-blue-200 mb-3">Founder & CEO</p>
                  <p className="text-blue-200 text-center font-['Rajdhani']">
                    Former music executive with 15+ years experience. Passionate about artist empowerment and blockchain
                    technology.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-lg border border-blue-500/30">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-blue-400 mb-1 font-['Orbitron']">Maya Chen</h3>
                  <p className="text-center text-blue-200 mb-3">CTO</p>
                  <p className="text-blue-200 text-center font-['Rajdhani']">
                    Blockchain developer and former Spotify engineer. Leading our technical innovation and platform
                    development.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-black p-6 rounded-lg border border-purple-500/30">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-purple-500">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Team Member"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center text-purple-400 mb-1 font-['Orbitron']">
                    Jordan Taylor
                  </h3>
                  <p className="text-center text-blue-200 mb-3">Head of Artist Relations</p>
                  <p className="text-blue-200 text-center font-['Rajdhani']">
                    Grammy-winning producer and artist advocate. Ensuring our platform meets the real needs of creators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-black via-blue-950/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 font-['Orbitron']">
                Our Values
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto font-['Rajdhani']">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/80 backdrop-blur-sm border border-pink-500/30 p-6 rounded-lg shadow-glow-pink">
                <div className="bg-pink-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-pink-400 mb-3 font-['Orbitron']">Integrity</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We operate with complete transparency in all aspects of our business, from revenue sharing to platform
                  governance.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-blue-500/30 p-6 rounded-lg shadow-glow-blue">
                <div className="bg-blue-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 font-['Orbitron']">Inclusivity</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We're building a platform that welcomes artists from all backgrounds, genres, and career stages.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-purple-500/30 p-6 rounded-lg shadow-glow-purple">
                <div className="bg-purple-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3 font-['Orbitron']">Innovation</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We constantly push the boundaries of what's possible in music, technology, and creative expression.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 p-6 rounded-lg shadow-glow-green">
                <div className="bg-green-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-3 font-['Orbitron']">Community</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We believe in the power of collective creativity and collaboration between artists and fans.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-lg shadow-glow-cyan">
                <div className="bg-cyan-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3 font-['Orbitron']">Empowerment</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We provide the tools and resources artists need to take control of their creative careers.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-orange-500/30 p-6 rounded-lg shadow-glow-orange">
                <div className="bg-orange-500/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-3 font-['Orbitron']">Excellence</h3>
                <p className="text-blue-200 font-['Rajdhani']">
                  We strive for the highest quality in everything we do, from platform development to artist support.
                </p>
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
              Join the Revolution
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-['Rajdhani']">
              Be part of the movement that's changing the music industry forever. Whether you're an artist or a fan,
              there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/for-artists">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 shadow-glow">
                  Join as an Artist
                </Button>
              </Link>
              <Link href="/fans">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-glow">
                  Join as a Fan <ArrowRight className="ml-2 h-4 w-4" />
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
