"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Menu,
  X,
  Zap,
  Radio,
  Music,
  ShoppingBag,
  Palette,
  Users,
  BookOpen,
  Headphones,
  TrendingUp,
  Award,
  Info,
  MessageSquare,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 animate-glow">
                OYR
              </span>
              <span className="ml-2 text-lg font-medium hidden sm:inline-block font-medium text-white">
                Own Your Reality
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="group relative">
              <Link
                href="/for-artists"
                className="text-sm font-medium text-white hover:text-purple-400 transition-colors flex items-center px-3 py-2"
              >
                <Zap className="mr-1 h-4 w-4 text-purple-500" />
                <span>For Artists</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/artists/dashboard" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Dashboard
                  </Link>
                  <Link href="/artists/announcements" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Announcements
                  </Link>
                  <Link href="/artists/virtual-events" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Virtual Events
                  </Link>
                  <Link href="/artists/signup" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Sign Up as Artist
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/fans"
                className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center px-3 py-2"
              >
                <Radio className="mr-1 h-4 w-4 text-blue-500" />
                <span>For Fans</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/fans/announcements" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Announcements
                  </Link>
                  <Link href="/fans/premium" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Premium
                  </Link>
                  <Link href="/fans/notifications" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Notifications
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/marketplace"
                className="text-sm font-medium text-white hover:text-emerald-400 transition-colors flex items-center px-3 py-2"
              >
                <ShoppingBag className="mr-1 h-4 w-4 text-emerald-500" />
                <span>NFT Marketplace</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/marketplace/collections"
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-800"
                  >
                    Collections
                  </Link>
                  <Link href="/marketplace/trending" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Trending
                  </Link>
                  <Link href="/marketplace/create" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Create NFT
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/fashion"
                className="text-sm font-medium text-white hover:text-amber-400 transition-colors flex items-center px-3 py-2"
              >
                <Palette className="mr-1 h-4 w-4 text-amber-500" />
                <span>Fashion</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/fashion/digital" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Digital Fashion
                  </Link>
                  <Link href="/fashion/physical" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Physical Merch
                  </Link>
                  <Link href="/fashion/designers" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Designers
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/music"
                className="text-sm font-medium text-white hover:text-purple-400 transition-colors flex items-center px-3 py-2"
              >
                <Music className="mr-1 h-4 w-4 text-purple-500" />
                <span>Music</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/music/releases" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    New Releases
                  </Link>
                  <Link href="/music/genres" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Genres
                  </Link>
                  <Link href="/music/playlists" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Playlists
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/workshops"
                className="text-sm font-medium text-white hover:text-orange-400 transition-colors flex items-center px-3 py-2"
              >
                <Users className="mr-1 h-4 w-4 text-orange-500" />
                <span>Workshops</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/workshops/upcoming" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Upcoming
                  </Link>
                  <Link href="/workshops/archive" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Archive
                  </Link>
                  <Link href="/workshops/host" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Host a Workshop
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <Link
                href="/about"
                className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center px-3 py-2"
              >
                <Info className="mr-1 h-4 w-4 text-blue-500" />
                <span>About</span>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-black/90 backdrop-blur-md border border-zinc-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/about/mission" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Our Mission
                  </Link>
                  <Link href="/about/team" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Team
                  </Link>
                  <Link href="/about/careers" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Careers
                  </Link>
                  <Link href="/contact" className="block px-4 py-2 text-sm text-white hover:bg-zinc-800">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10 hover:text-white"
            >
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-md">
              Sign Up
            </Button>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <Link href="/search" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-50 bg-black/95 backdrop-blur-lg lg:hidden transition-transform duration-300 ease-in-out overflow-y-auto pb-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col p-4 space-y-4">
          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Zap className="mr-2 h-5 w-5 text-purple-500" />
              For Artists
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/artists/dashboard"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="mr-2 h-4 w-4 text-purple-500" />
                Dashboard
              </Link>
              <Link
                href="/artists/announcements"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Radio className="mr-2 h-4 w-4 text-purple-500" />
                Announcements
              </Link>
              <Link
                href="/artists/virtual-events"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Headphones className="mr-2 h-4 w-4 text-purple-500" />
                Virtual Events
              </Link>
              <Link
                href="/artists/signup"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="mr-2 h-4 w-4 text-purple-500" />
                Sign Up as Artist
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Radio className="mr-2 h-5 w-5 text-blue-500" />
              For Fans
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/fans/announcements"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Radio className="mr-2 h-4 w-4 text-blue-500" />
                Announcements
              </Link>
              <Link
                href="/fans/premium"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="mr-2 h-4 w-4 text-blue-500" />
                Premium
              </Link>
              <Link
                href="/fans/notifications"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
                Notifications
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5 text-emerald-500" />
              NFT Marketplace
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/marketplace/collections"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="mr-2 h-4 w-4 text-emerald-500" />
                Collections
              </Link>
              <Link
                href="/marketplace/trending"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="mr-2 h-4 w-4 text-emerald-500" />
                Trending
              </Link>
              <Link
                href="/marketplace/create"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Palette className="mr-2 h-4 w-4 text-emerald-500" />
                Create NFT
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Palette className="mr-2 h-5 w-5 text-amber-500" />
              Fashion
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/fashion/digital"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Palette className="mr-2 h-4 w-4 text-amber-500" />
                Digital Fashion
              </Link>
              <Link
                href="/fashion/physical"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="mr-2 h-4 w-4 text-amber-500" />
                Physical Merch
              </Link>
              <Link
                href="/fashion/designers"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="mr-2 h-4 w-4 text-amber-500" />
                Designers
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Music className="mr-2 h-5 w-5 text-purple-500" />
              Music
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/music/releases"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Music className="mr-2 h-4 w-4 text-purple-500" />
                New Releases
              </Link>
              <Link
                href="/music/genres"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Radio className="mr-2 h-4 w-4 text-purple-500" />
                Genres
              </Link>
              <Link
                href="/music/playlists"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Headphones className="mr-2 h-4 w-4 text-purple-500" />
                Playlists
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5 text-orange-500" />
              Workshops
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/workshops/upcoming"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <TrendingUp className="mr-2 h-4 w-4 text-orange-500" />
                Upcoming
              </Link>
              <Link
                href="/workshops/archive"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="mr-2 h-4 w-4 text-orange-500" />
                Archive
              </Link>
              <Link
                href="/workshops/host"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="mr-2 h-4 w-4 text-orange-500" />
                Host a Workshop
              </Link>
            </div>
          </div>

          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-500" />
              About
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/about/mission"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info className="mr-2 h-4 w-4 text-blue-500" />
                Our Mission
              </Link>
              <Link
                href="/about/team"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="mr-2 h-4 w-4 text-blue-500" />
                Team
              </Link>
              <Link
                href="/about/careers"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <Award className="mr-2 h-4 w-4 text-blue-500" />
                Careers
              </Link>
              <Link
                href="/contact"
                className="p-2 text-sm font-medium hover:bg-zinc-800 rounded-md flex items-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageSquare className="mr-2 h-4 w-4 text-blue-500" />
                Contact
              </Link>
            </div>
          </div>

          <div className="pt-4 flex flex-col space-y-4">
            <Button
              variant="outline"
              className="w-full border-purple-500 text-purple-500 hover:bg-purple-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
