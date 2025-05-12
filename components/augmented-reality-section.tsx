"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Smartphone, CuboidIcon as Cube, Layers, Glasses, Wifi, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AugmentedRealitySection() {
  const [activeTab, setActiveTab] = useState("concerts")

  return (
    <section className="py-20 relative overflow-hidden bg-cyber-black">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 scanlines opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 glitch-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-green font-['Orbitron']"
            data-text="Augmented Reality"
          >
            Augmented Reality
          </h2>
          <p className="text-xl text-pastel-blue max-w-3xl mx-auto font-['Rajdhani']">
            Blend digital and physical worlds for immersive fan experiences
          </p>
        </div>

        <Tabs defaultValue="concerts" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-cyber-dark/50 backdrop-blur-sm border border-neon-blue/20 p-1">
              <TabsTrigger
                value="concerts"
                className="data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink"
              >
                Live Concerts
              </TabsTrigger>
              <TabsTrigger
                value="collectibles"
                className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
              >
                AR Collectibles
              </TabsTrigger>
              <TabsTrigger
                value="fashion"
                className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green"
              >
                Virtual Fashion
              </TabsTrigger>
              <TabsTrigger
                value="experiences"
                className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple"
              >
                Fan Experiences
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="concerts" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-neon-pink font-['Orbitron']">Enhanced Live Performances</h3>
                <p className="mb-6 text-pastel-blue font-['Rajdhani']">
                  Transform your concerts with AR overlays that create immersive visual experiences synchronized with
                  your music. Fans can use their smartphones to see digital elements that enhance your performance in
                  real-time.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-pink/10 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-pink">Mobile AR Activation</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Fans simply point their phones at the stage to unlock AR elements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-pink/10 p-2 rounded-full">
                      <Cube className="h-5 w-5 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-pink">3D Visual Elements</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Custom 3D animations and effects that match your artistic vision
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-pink/10 p-2 rounded-full">
                      <Wifi className="h-5 w-5 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-pink">Synchronized Experience</h4>
                      <p className="text-sm text-pastel-blue/70">
                        All fans see the same AR elements at the same time, creating a shared experience
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-neon-pink hover:bg-neon-pink/90 text-white neon-border">
                  Explore AR Concert Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden ar-marker">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AR Concert Experience"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>

                  {/* AR Elements Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-neon-pink/30 blur-md animate-pulse"></div>
                    <div
                      className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-blue/30 blur-md animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-neon-green/30 blur-md animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-cyber-dark p-4 rounded-lg border border-neon-pink/20 shadow-lg retro-card">
                  <div className="flex items-center gap-3">
                    <Glasses className="h-8 w-8 text-neon-pink" />
                    <div>
                      <p className="text-sm font-medium text-pastel-pink">AR Mode Active</p>
                      <p className="text-xs text-pastel-blue/60">12,458 fans experiencing AR</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="collectibles" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-neon-blue font-['Orbitron']">AR NFT Collectibles</h3>
                <p className="mb-6 text-pastel-blue font-['Rajdhani']">
                  Create NFTs that come to life in the real world through augmented reality. Fans can collect digital
                  art pieces that transform into interactive 3D experiences when viewed through their devices.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-blue/10 p-2 rounded-full">
                      <Cube className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-blue">3D NFT Activation</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Digital collectibles transform into 3D objects in real space
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-blue/10 p-2 rounded-full">
                      <Layers className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-blue">Interactive Elements</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Fans can interact with their collectibles in unique ways
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-blue/10 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-blue">Social Sharing</h4>
                      <p className="text-sm text-pastel-blue/70">Capture and share AR experiences with the community</p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-neon-blue hover:bg-neon-blue/90 text-white neon-blue-border">
                  Create AR Collectibles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden ar-marker">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AR NFT Collectible"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>

                  {/* AR Elements Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-neon-blue/20 blur-sm animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-cyber-dark p-4 rounded-lg border border-neon-blue/20 shadow-lg retro-card">
                  <div className="flex items-center gap-3">
                    <Cube className="h-8 w-8 text-neon-blue" />
                    <div>
                      <p className="text-sm font-medium text-pastel-blue">AR Collectible</p>
                      <p className="text-xs text-pastel-blue/60">Limited Edition: 1 of 100</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="fashion" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-neon-green font-['Orbitron']">Virtual Fashion Try-On</h3>
                <p className="mb-6 text-pastel-blue font-['Rajdhani']">
                  Let fans virtually try on your fashion designs before purchasing. Using AR technology, customers can
                  see how your merchandise looks on them through their smartphone camera.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/10 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-neon-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-green">Virtual Try-On</h4>
                      <p className="text-sm text-pastel-blue/70">See how merchandise looks before purchasing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/10 p-2 rounded-full">
                      <Layers className="h-5 w-5 text-neon-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-green">Digital-Physical Twins</h4>
                      <p className="text-sm text-pastel-blue/70">Each physical item has a digital AR counterpart</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-neon-green/10 p-2 rounded-full">
                      <Glasses className="h-5 w-5 text-neon-green" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-green">Exclusive AR Features</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Digital clothing with effects impossible in physical world
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-neon-green hover:bg-neon-green/90 text-black neon-green-border">
                  Try Virtual Fashion <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden ar-marker">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AR Fashion Try-On"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>

                  {/* AR Elements Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-neon-green/10 blur-sm animate-pulse"></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-cyber-dark p-4 rounded-lg border border-neon-green/20 shadow-lg retro-card">
                  <div className="flex items-center gap-3">
                    <Glasses className="h-8 w-8 text-neon-green" />
                    <div>
                      <p className="text-sm font-medium text-pastel-green">Virtual Try-On</p>
                      <p className="text-xs text-pastel-blue/60">Holographic Jacket</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-neon-purple font-['Orbitron']">
                  Interactive Fan Experiences
                </h3>
                <p className="mb-6 text-pastel-blue font-['Rajdhani']">
                  Create scavenger hunts, interactive album experiences, and location-based AR content that brings fans
                  together in the real world while engaging with your digital content.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 p-2 rounded-full">
                      <Cube className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-purple">AR Scavenger Hunts</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Hidden AR content at specific locations for fans to discover
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 p-2 rounded-full">
                      <Layers className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-purple">Album Experiences</h4>
                      <p className="text-sm text-pastel-blue/70">
                        Point your phone at album art to unlock interactive visuals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gradient-to-r from-neon-pink/20 to-neon-purple/20 p-2 rounded-full">
                      <Wifi className="h-5 w-5 text-neon-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium text-pastel-purple">Community Interactions</h4>
                      <p className="text-sm text-pastel-blue/70">Collaborative AR experiences that connect fans</p>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white neon-border">
                  Discover AR Experiences <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative rounded-lg overflow-hidden ar-marker">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="AR Fan Experience"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/80 via-transparent to-transparent"></div>

                  {/* AR Elements Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-neon-purple/30 blur-sm animate-pulse"></div>
                    <div
                      className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-neon-pink/30 blur-sm animate-pulse"
                      style={{ animationDelay: "0.7s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-neon-blue/30 blur-sm animate-pulse"
                      style={{ animationDelay: "1.2s" }}
                    ></div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-cyber-dark p-4 rounded-lg border border-neon-purple/20 shadow-lg retro-card">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-8 w-8 text-neon-purple" />
                    <div>
                      <p className="text-sm font-medium text-pastel-purple">AR Experience</p>
                      <p className="text-xs text-pastel-blue/60">Cosmic Scavenger Hunt</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
