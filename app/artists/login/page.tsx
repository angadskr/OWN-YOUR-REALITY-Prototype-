import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ArtistLoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container max-w-md mx-auto px-4">
          <Card className="bg-black/80 backdrop-blur-sm border border-blue-500/30 shadow-glow-blue">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center text-blue-400 font-['Orbitron']">
                Artist Login
              </CardTitle>
              <CardDescription className="text-center text-blue-200">
                Access your artist dashboard and tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
              <div className="flex justify-end">
                <Link href="/artists/reset-password" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-glow-blue">
                Sign In <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-blue-500/30"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-blue-200">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-blue-500/30 text-blue-200 hover:bg-blue-900/20">
                  Google
                </Button>
                <Button variant="outline" className="border-blue-500/30 text-blue-200 hover:bg-blue-900/20">
                  Apple
                </Button>
              </div>
            </CardFooter>
            <div className="px-8 pb-8 text-center">
              <p className="text-sm text-blue-200">
                Don't have an account?{" "}
                <Link href="/artists/signup" className="text-blue-400 hover:underline">
                  Sign up
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
