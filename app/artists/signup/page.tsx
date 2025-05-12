import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ArtistSignupPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-md mx-auto px-4">
          <Card className="bg-black/80 backdrop-blur-sm border border-pink-500/30 shadow-glow-pink">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-pink-400 font-['Orbitron']">
                Create Artist Account
              </CardTitle>
              <CardDescription className="text-center text-blue-200">
                Join the platform and take control of your creative career
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-blue-200">
                  Artist/Band Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your artist or band name"
                  className="bg-black/50 border-blue-500/30 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-black/50 border-blue-500/30 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-200">
                  Password
                </Label>
                <Input id="password" type="password" className="bg-black/50 border-blue-500/30 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre" className="text-blue-200">
                  Primary Genre
                </Label>
                <select
                  id="genre"
                  className="w-full h-10 px-3 py-2 bg-black/50 border border-blue-500/30 rounded-md text-white"
                >
                  <option value="">Select your primary genre</option>
                  <option value="electronic">Electronic</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="rock">Rock</option>
                  <option value="pop">Pop</option>
                  <option value="rnb">R&B</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-blue-500/30 bg-black/50 text-pink-500"
                />
                <label htmlFor="terms" className="text-sm text-blue-200">
                  I agree to the{" "}
                  <Link href="/terms" className="text-pink-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-pink-400 hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white shadow-glow-pink">
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
            <div className="px-8 pb-8 text-center">
              <p className="text-sm text-blue-200">
                Already have an account?{" "}
                <Link href="/artists/login" className="text-pink-400 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
