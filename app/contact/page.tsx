import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <Image src="/images/contact-hero.jpg" alt="Contact us" fill className="object-cover opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Get in Touch</h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-xl">
              Have questions about Own Your Reality? We're here to help. Reach out to our team and we'll get back to you
              as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h2>
                <p className="mb-8 text-zinc-300">
                  Whether you're an artist looking to join our platform, a fan with questions, or a potential partner,
                  we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Email</h3>
                      <p className="text-zinc-300">info@ownyourreality.com</p>
                      <p className="text-zinc-300">support@ownyourreality.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Phone</h3>
                      <p className="text-zinc-300">+91 98765 43210</p>
                      <p className="text-zinc-300">+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Office</h3>
                      <p className="text-zinc-300">
                        123 Creative Hub, Bandra West
                        <br />
                        Mumbai, Maharashtra 400050
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 rounded-full bg-primary/20 p-3">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Social Media</h3>
                      <div className="mt-2 flex space-x-4">
                        <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                          Twitter
                        </Link>
                        <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                          Instagram
                        </Link>
                        <Link href="#" className="text-zinc-400 hover:text-primary transition-colors">
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" className="bg-zinc-800 border-zinc-700" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" className="bg-zinc-800 border-zinc-700" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" className="bg-zinc-800 border-zinc-700" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" className="bg-zinc-800 border-zinc-700" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" className="bg-zinc-800 border-zinc-700 min-h-[150px]" />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Visit Our Office</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                We're located in the heart of Mumbai's creative district
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/map.jpg" alt="Office location map" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-3xl text-lg text-zinc-300">
                Find answers to common questions about Own Your Reality
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "How do I join as an artist?",
                  answer:
                    "To join as an artist, click on the 'Join as an Artist' button on our homepage and follow the application process. We'll review your submission and get back to you within 48 hours.",
                },
                {
                  question: "How do royalties work on the platform?",
                  answer:
                    "Artists retain 100% ownership of their masters and receive 85% of all streaming revenue. For NFT sales, artists receive 90% of primary sales and 10% of all secondary sales in perpetuity.",
                },
                {
                  question: "Can fans really invest in artists?",
                  answer:
                    "Yes! Our fan investment program allows fans to directly invest in artists they believe in. Artists can launch funding campaigns for specific projects, and fans can purchase 'fan tokens' that entitle them to a share of future revenue.",
                },
                {
                  question: "How does the fashion integration work?",
                  answer:
                    "Artists can design and sell both physical merchandise and digital fashion items through our platform. We handle production, fulfillment, and shipping for physical items, and provide tools for creating digital wearables for the metaverse.",
                },
                {
                  question: "What blockchain technology do you use?",
                  answer:
                    "We use a combination of Ethereum and Polygon for our NFT marketplace and royalty distribution system, offering artists and fans the benefits of blockchain technology with lower gas fees and environmental impact.",
                },
                {
                  question: "How do I get support if I have issues?",
                  answer:
                    "You can reach our support team via email at support@ownyourreality.com or through the chat function in our app. We aim to respond to all inquiries within 24 hours.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Ready to Own Your Reality?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Join our platform today and revolutionize the way you create, share, and monetize your art.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Join as an Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Join as a Fan
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
