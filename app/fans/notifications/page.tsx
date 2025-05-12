import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import FanNavbar from "@/components/fan-navbar"
import FanSidebar from "@/components/fan-sidebar"
import ArtistNotifications from "@/components/artist-notifications"

export default function FanNotificationsPage() {
  return (
    <main className="min-h-screen retro-grid">
      <div className="scanline"></div>
      <FanNavbar />
      <div className="container mx-auto px-4 py-8 lg:px-8 grid lg:grid-cols-[240px_1fr] gap-8 relative">
        <FanSidebar />
        <div className="space-y-8">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/fans" className="hover:text-primary">
                Fan Portal
              </Link>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>Artist Announcements</span>
            </div>
            <h1 className="text-3xl font-bold retro-glow">Artist Announcements</h1>
            <p className="text-muted-foreground">
              Stay updated with the latest news and announcements from your favorite artists.
            </p>

            <Card className="mt-6 bg-card/50 backdrop-blur-sm border border-primary/30">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-medium">Notification Preferences</h2>
                    <p className="text-sm text-muted-foreground">
                      Customize what types of announcements you want to receive.
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 neon-border">Update Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <ArtistNotifications />
        </div>
      </div>
    </main>
  )
}
