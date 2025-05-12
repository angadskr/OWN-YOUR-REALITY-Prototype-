"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Music,
  Disc3,
  Shirt,
  Calendar,
  Settings,
  Bell,
  Camera,
  Users,
  Menu,
  Wallet,
  Ticket,
  MessageSquare,
  ShoppingBag,
  Grid2X2,
  Sparkles,
  Zap,
  Radio,
  BookOpen,
  Lightbulb,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface ArtistSidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ArtistSidebar({ className }: ArtistSidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: Grid2X2,
      href: "/artists/dashboard",
      active: pathname === "/artists/dashboard",
    },
    {
      label: "Announcements",
      icon: Bell,
      href: "/artists/announcements",
      active: pathname === "/artists/announcements",
      badge: "new",
      badgeColor: "bg-primary",
    },
    {
      label: "Content Manager",
      icon: Music,
      href: "/artists/content",
      active: pathname === "/artists/content",
    },
    {
      label: "NFT Creator",
      icon: Disc3,
      href: "/artists/nfts",
      active: pathname === "/artists/nfts",
    },
    {
      label: "Fashion Designer",
      icon: Shirt,
      href: "/artists/fashion",
      active: pathname === "/artists/fashion",
    },
    {
      label: "Virtual Events",
      icon: Radio,
      href: "/artists/virtual-events",
      active: pathname.includes("/artists/virtual-events"),
    },
    {
      label: "Campaign Manager",
      icon: Sparkles,
      href: "/artists/campaigns",
      active: pathname === "/artists/campaigns",
    },
    {
      label: "Stories",
      icon: Camera,
      href: "/artists/stories",
      active: pathname === "/artists/stories",
    },
    {
      label: "Analytics",
      icon: BarChart,
      href: "/artists/analytics",
      active: pathname === "/artists/analytics",
    },
    {
      label: "Royalty Tracker",
      icon: Wallet,
      href: "/artists/royalties",
      active: pathname === "/artists/royalties",
    },
    {
      label: "Creator DAO",
      icon: Users,
      href: "/artists/dao",
      active: pathname === "/artists/dao",
    },
    {
      label: "Fan Messages",
      icon: MessageSquare,
      href: "/artists/messages",
      active: pathname === "/artists/messages",
      badge: 3,
      badgeColor: "bg-secondary",
    },
    {
      label: "Collectibles",
      icon: ShoppingBag,
      href: "/artists/collectibles",
      active: pathname === "/artists/collectibles",
    },
    {
      label: "Learning Hub",
      icon: BookOpen,
      href: "/artists/learning",
      active: pathname === "/artists/learning",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/artists/schedule",
      active: pathname === "/artists/schedule",
    },
    {
      label: "Workshops",
      icon: Lightbulb,
      href: "/artists/workshops",
      active: pathname === "/artists/workshops",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/artists/settings",
      active: pathname === "/artists/settings",
    },
  ]

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon" className="mt-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0 bg-white border-r border-slate-200">
          <div className="space-y-4 py-4">
            <div className="px-4 py-2 flex items-center border-b border-primary/30">
              <Zap className="h-5 w-5 mr-2 text-primary" />
              <h2 className="text-lg font-medium">Artist Portal</h2>
            </div>
            <ScrollArea className="h-[calc(100vh-8rem)] px-2">
              <div className="space-y-1 px-2">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-2 px-3 text-sm font-medium rounded-md hover:bg-muted transition-colors",
                      route.active ? "bg-muted text-foreground" : "text-muted-foreground",
                    )}
                  >
                    <div className="flex items-center">
                      <route.icon
                        className={cn("h-4 w-4 mr-2", route.active ? "text-primary" : "text-muted-foreground")}
                      />
                      <span>{route.label}</span>
                    </div>
                    {route.badge && (
                      <span
                        className={`${route.badgeColor} text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center`}
                      >
                        {route.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </ScrollArea>
            <div className="px-4">
              <Button variant="default" className="w-full bg-primary hover:bg-primary/90 shadow-sm">
                <Ticket className="h-4 w-4 mr-2" />
                Create New Content
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <aside className={cn("hidden lg:flex flex-col h-[calc(100vh-4rem)] sticky top-16", className)}>
        <div className="space-y-4 py-4">
          <div className="px-4 py-2 flex items-center border-b border-primary/30">
            <Zap className="h-5 w-5 mr-2 text-primary" />
            <h2 className="text-lg font-medium">Artist Portal</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-14rem)] px-2">
            <div className="space-y-1 px-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center justify-between py-2 px-3 text-sm font-medium rounded-md hover:bg-muted transition-colors",
                    route.active ? "bg-muted text-foreground" : "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center">
                    <route.icon
                      className={cn("h-4 w-4 mr-2", route.active ? "text-primary" : "text-muted-foreground")}
                    />
                    <span>{route.label}</span>
                  </div>
                  {route.badge && (
                    <span
                      className={`${route.badgeColor} text-xs font-semibold rounded-full px-2 py-0.5 flex items-center justify-center`}
                    >
                      {route.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </ScrollArea>
          <div className="px-4">
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90 shadow-sm">
              <Ticket className="h-4 w-4 mr-2" />
              Create New Content
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
