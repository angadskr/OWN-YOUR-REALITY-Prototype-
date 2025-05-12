import Image from "next/image"
import { Calendar, Users, BookOpen, Award, ArrowRight, CheckCircle, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function IncubationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/incubation-hero.jpg"
              alt="Artist Incubation"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">Artist Development</Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Artist Incubation Centers</h1>
                <p className="mb-8 text-lg text-zinc-300 md:text-xl">
                  Empowering independent artists with the knowledge, resources, and community to build sustainable
                  careers on their own terms.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button className="bg-primary hover:bg-primary/90">Apply for Incubation</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Users className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Rights Advocacy</h3>
                      <p className="text-zinc-400">
                        Learn to protect your intellectual property and negotiate fair deals
                      </p>
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <BookOpen className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Training Programs</h3>
                      <p className="text-zinc-400">
                        Comprehensive courses on music business, marketing, and production
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Calendar className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Bootcamps</h3>
                      <p className="text-zinc-400">Intensive workshops to accelerate your career development</p>
                    </div>
                    <div className="rounded-lg bg-zinc-900 p-6 border border-zinc-800">
                      <Award className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">Mentorship</h3>
                      <p className="text-zinc-400">One-on-one guidance from industry veterans and successful artists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Incubation Programs</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Comprehensive support systems designed to nurture talent and build sustainable careers
              </p>
            </div>

            <Tabs defaultValue="rights" className="space-y-8">
              <TabsList className="bg-zinc-900 p-1 flex flex-wrap justify-center">
                <TabsTrigger value="rights">Rights Advocacy</TabsTrigger>
                <TabsTrigger value="training">Training Programs</TabsTrigger>
                <TabsTrigger value="bootcamps">Bootcamps</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              </TabsList>

              <TabsContent value="rights" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image src="/images/rights-advocacy.jpg" alt="Rights Advocacy" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Know Your Rights</h3>
                    <p className="mb-4 text-zinc-300">
                      Our rights advocacy program empowers artists with the knowledge and resources to protect their
                      intellectual property and negotiate fair deals in the music industry.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Copyright protection and registration",
                        "Contract negotiation and review",
                        "Royalty collection and management",
                        "Digital rights management",
                        "Legal consultation with entertainment attorneys",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Join Rights Advocacy Program</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="training" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Comprehensive Training</h3>
                    <p className="mb-4 text-zinc-300">
                      Our training programs cover all aspects of the music business, from production and marketing to
                      financial management and brand building.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Music production and engineering",
                        "Digital marketing and social media",
                        "Financial literacy for artists",
                        "Brand development and storytelling",
                        "Distribution and streaming strategies",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Explore Training Programs</Button>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image src="/images/training-programs.jpg" alt="Training Programs" fill className="object-cover" />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="bootcamps" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image src="/images/bootcamps.jpg" alt="Bootcamps" fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Intensive Bootcamps</h3>
                    <p className="mb-4 text-zinc-300">
                      Our bootcamps are intensive, immersive experiences designed to rapidly accelerate your career
                      development through hands-on learning and collaboration.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "2-week intensive programs",
                        "Collaborative projects with other artists",
                        "Industry showcases and networking events",
                        "One-on-one feedback sessions",
                        "Portfolio and release preparation",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Apply for Next Bootcamp</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mentorship" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Personalized Mentorship</h3>
                    <p className="mb-4 text-zinc-300">
                      Our mentorship program pairs emerging artists with established industry professionals for
                      personalized guidance and career development.
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Monthly one-on-one sessions with industry mentors",
                        "Personalized career development plans",
                        "Feedback on your music and brand",
                        "Industry introductions and networking",
                        "Ongoing support and accountability",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary hover:bg-primary/90">Find Your Mentor</Button>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image src="/images/mentorship.jpg" alt="Mentorship" fill className="object-cover" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Upcoming Events</h2>
                <p className="mt-2 text-zinc-400">Join our workshops, bootcamps, and networking events</p>
              </div>
              <Button variant="outline">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Music Business Bootcamp",
                  date: "June 15-28, 2023",
                  location: "Mumbai, India",
                  image: "/images/event-bootcamp.jpg",
                  type: "Bootcamp",
                  spots: "5 spots left",
                },
                {
                  title: "Rights & Royalties Workshop",
                  date: "July 5, 2023",
                  location: "Virtual Event",
                  image: "/images/event-rights.jpg",
                  type: "Workshop",
                  spots: "12 spots left",
                },
                {
                  title: "Producer Networking Mixer",
                  date: "July 12, 2023",
                  location: "Bangalore, India",
                  image: "/images/event-networking.jpg",
                  type: "Networking",
                  spots: "8 spots left",
                },
              ].map((event, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={event.image || "/placeholder.svg?height=200&width=400"}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 hover:bg-primary">{event.type}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center text-zinc-400 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-zinc-400 mt-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-primary border-primary">
                        {event.spots}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary/90">Register Now</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Success Stories</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Artists who transformed their careers through our incubation programs
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Priya Sharma",
                  image: "/images/success-story-1.jpg",
                  program: "Rights Advocacy + Bootcamp",
                  quote:
                    "Before joining the incubation program, I was giving away my rights without even knowing it. Now I've built a sustainable career on my own terms.",
                  achievement: "Negotiated a publishing deal while retaining 100% ownership of masters",
                },
                {
                  name: "Rahul Kapoor",
                  image: "/images/success-story-2.jpg",
                  program: "Mentorship + Training",
                  quote:
                    "The mentorship program connected me with industry veterans who helped me refine my sound and build a marketing strategy that actually works.",
                  achievement: "Grew streaming revenue by 400% in 6 months",
                },
                {
                  name: "Ananya Desai",
                  image: "/images/success-story-3.jpg",
                  program: "Bootcamp + Rights Advocacy",
                  quote:
                    "The bootcamp was intense but transformative. I learned more in two weeks than I had in two years of trying to figure things out on my own.",
                  achievement: "Launched fashion line that sold out in 48 hours",
                },
              ].map((story, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={story.image || "/placeholder.svg?height=400&width=400"}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{story.name}</CardTitle>
                    <CardDescription>
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">{story.program}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300 italic mb-4">"{story.quote}"</p>
                    <div className="flex items-start">
                      <Award className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-zinc-400">{story.achievement}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Transform Your Career?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Apply for our incubation programs and take control of your artistic future.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
