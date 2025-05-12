import Image from "next/image"
import { ArrowRight, Briefcase, Code, Palette, Users, HeadphonesIcon, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/careers-hero.jpg"
              alt="Creative office space"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Join Our Team</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Help us build the future of artist ownership and fan engagement. We're looking for passionate individuals
              who believe in our mission.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Culture <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Join Own Your Reality</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                We're building something revolutionary, and we need exceptional talent to make it happen
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Meaningful Impact</h3>
                <p className="text-zinc-300">
                  Your work will directly help artists maintain ownership of their creative work and build sustainable
                  careers on their own terms.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Cutting-Edge Tech</h3>
                <p className="text-zinc-300">
                  Work with the latest technologies in blockchain, NFTs, and digital commerce to create innovative
                  solutions for creators and fans.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <HeadphonesIcon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Creative Environment</h3>
                <p className="text-zinc-300">
                  Join a team of music lovers, artists, and technologists who are passionate about creativity and
                  innovation.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Diverse Team</h3>
                <p className="text-zinc-300">
                  Be part of a diverse and inclusive team that values different perspectives, backgrounds, and
                  experiences.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <Palette className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Growth Opportunities</h3>
                <p className="text-zinc-300">
                  Develop your skills and advance your career in a fast-growing startup with plenty of opportunities for
                  professional development.
                </p>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
                <div className="mb-4 rounded-full bg-primary/20 p-3 w-14 h-14 flex items-center justify-center">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Competitive Benefits</h3>
                <p className="text-zinc-300">
                  Enjoy competitive compensation, flexible work arrangements, health benefits, and other perks designed
                  to support your wellbeing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Open Positions</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Join our team and help shape the future of the creative economy
              </p>
            </div>

            <Tabs defaultValue="engineering" className="space-y-8">
              <div className="flex justify-center">
                <TabsList className="bg-zinc-900">
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="product">Product</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="engineering" className="space-y-6">
                {[
                  {
                    title: "Senior Blockchain Engineer",
                    location: "Mumbai / Remote",
                    type: "Full-time",
                    description:
                      "Design and implement smart contracts and blockchain solutions for our NFT marketplace and royalty distribution system.",
                  },
                  {
                    title: "Full Stack Developer",
                    location: "Bangalore / Remote",
                    type: "Full-time",
                    description:
                      "Build and maintain our web application, focusing on both frontend and backend development with React, Next.js, and Node.js.",
                  },
                  {
                    title: "Mobile Developer (React Native)",
                    location: "Remote",
                    type: "Full-time",
                    description: "Develop and maintain our mobile application for iOS and Android using React Native.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0 text-primary">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="product" className="space-y-6">
                {[
                  {
                    title: "Product Manager",
                    location: "Delhi / Remote",
                    type: "Full-time",
                    description:
                      "Lead product development for our NFT marketplace, working closely with engineering, design, and business teams.",
                  },
                  {
                    title: "Product Designer",
                    location: "Bangalore / Remote",
                    type: "Full-time",
                    description: "Design intuitive and engaging user experiences for our web and mobile applications.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0 text-primary">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="design" className="space-y-6">
                {[
                  {
                    title: "UI/UX Designer",
                    location: "Mumbai / Remote",
                    type: "Full-time",
                    description:
                      "Create beautiful, intuitive interfaces for our web and mobile applications, focusing on both aesthetics and usability.",
                  },
                  {
                    title: "Brand Designer",
                    location: "Delhi / Remote",
                    type: "Full-time",
                    description:
                      "Develop and maintain our brand identity across all touchpoints, from digital to physical.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0 text-primary">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="marketing" className="space-y-6">
                {[
                  {
                    title: "Content Marketing Manager",
                    location: "Bangalore / Remote",
                    type: "Full-time",
                    description:
                      "Develop and execute our content strategy across blog, social media, and other channels to engage artists and fans.",
                  },
                  {
                    title: "Growth Marketing Specialist",
                    location: "Mumbai / Remote",
                    type: "Full-time",
                    description:
                      "Drive user acquisition and retention through data-driven marketing campaigns and initiatives.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0 text-primary">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="operations" className="space-y-6">
                {[
                  {
                    title: "Artist Relations Manager",
                    location: "Delhi / Remote",
                    type: "Full-time",
                    description:
                      "Build and maintain relationships with artists, helping them leverage our platform to grow their careers.",
                  },
                  {
                    title: "Community Manager",
                    location: "Mumbai / Remote",
                    type: "Full-time",
                    description:
                      "Engage with our community of artists and fans, moderating discussions and providing support.",
                  },
                ].map((job, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {job.location} • {job.type}
                          </CardDescription>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90">Apply</Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zinc-300">{job.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="px-0 text-primary">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                <Image src="/images/team-culture.jpg" alt="Team working together" fill className="object-cover" />
              </div>
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Culture</h2>
                <p className="mb-6 text-zinc-300">
                  At Own Your Reality, we're building a culture that values creativity, innovation, and collaboration.
                  We believe in empowering our team members to do their best work in an environment that's supportive,
                  inclusive, and fun.
                </p>
                <p className="mb-6 text-zinc-300">
                  We're a remote-first company with team members across India, but we come together regularly for team
                  retreats and events. We believe in flexible work arrangements that allow you to work when and where
                  you're most productive.
                </p>
                <p className="text-zinc-300">
                  Our team is passionate about music, art, and technology, and we're united by our mission to create a
                  more equitable future for artists and creators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Join Our Team?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              We're always looking for talented individuals who are passionate about our mission. If you don't see a
              position that matches your skills, feel free to reach out anyway!
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
